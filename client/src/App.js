import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/default";
import "./App.css";
import RouteFC from "./routes/RouteFC";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
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
