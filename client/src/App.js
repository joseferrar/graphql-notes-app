import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/default";
import "./App.css";
import RouteFC from "./routes/RouteFC";

function App() {
  const httpLink = createHttpLink({
    uri: "http://localhost:8000/graphql",
  });

  const token = localStorage.getItem("token");
  const bearerToken = token?.slice(1);
  console.log(bearerToken);

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${bearerToken}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <RouteFC />
        </ThemeProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
