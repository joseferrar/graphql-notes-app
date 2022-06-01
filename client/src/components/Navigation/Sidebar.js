import React from "react";
import PropTypes from "prop-types";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { useNavigate, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import { theme } from "../../theme/default";
import { GET_USER_ID } from "../../graphql/Queries";

const useStyles = makeStyles({
  active: {
    background: theme.palette.default.main,
    color: theme.palette.success.main,
    borderTopRightRadius: 20,
    borderEndEndRadius: 20,
    "&:hover": {
      background: theme.palette.default.main,
      color: theme.palette.success.main,
      borderTopRightRadius: 20,
      borderEndEndRadius: 20,
    },
  },
  text: {
    color: theme.palette.success.main,
    fontSize: 16,
  },
  icon: {
    color: theme.palette.success.main,
  },
  activeIcon: {
    color: "#fff",
    fontSize: 16,
  },
});

const userRoutes = [
  {
    id: 1,
    path: "/home",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    path: "/createNote",
    name: "Add note",
    icon: <AddIcon />,
  },
  {
    id: 3,
    path: "/notes",
    name: "Notes",
    icon: <MenuBookIcon />,
  },
];

const Sidebar = (props) => {
  const token = localStorage.getItem("token");
  const userData = JSON.parse(token)
  const [getUser, { loading, data, error }] = useMutation(GET_USER_ID);

  const { setMobileOpen } = props;
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(data);
  
  React.useEffect(() => {
    getUser({ variables: { userId: userData?.userId } });
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <Stack
        direction="column"
        spacing={1}
        marginTop={2}
        marginLeft={5}
        marginBottom={3}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_NATO.svg/640px-Flag_of_NATO.svg.png"
          sx={{ width: 120, height: 120 }}
        />
        <Typography variant="body1" fontWeight="bold" color="white">
          {data?.getUser?.username}
        </Typography>
        <Typography fontFamily={"Source Sans Pro"} color="white">
          {data?.getUser?.email}
        </Typography>
      </Stack>

      <List>
        {userRoutes.map((item) => (
          <div key={item.id}>
            <ListItem
              style={{ marginTop: 14 }}
              button
              onClick={() => {
                navigate(item.path);
                setMobileOpen(false);
              }}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon
                className={
                  location.pathname === item.path
                    ? classes.icon
                    : classes.activeIcon
                }
              >
                {item.icon}
              </ListItemIcon>
              {/* <ListItemText primary={item.name} color={theme.palette.default.main} /> */}
              <Typography
                variant="body1"
                className={
                  location.pathname === item.path
                    ? classes.text
                    : classes.activeIcon
                }
              >
                {item.name}
              </Typography>
            </ListItem>
          </div>
        ))}
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: 40, marginTop: 20 }}
          onClick={Logout}
        >
          logout
        </Button>
      </List>
    </div>
  );
};

Sidebar.propTypes = {
  setMobileOpen: PropTypes.func,
};

export default Sidebar;
