import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TranslateIcon from "@mui/icons-material/Translate";
import Sidebar from "./Sidebar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Badge from "@mui/material/Badge";
import { theme } from "../../theme/default";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
 
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [translate, setTranslate] = React.useState(null);
  const open = Boolean(translate);

  const handleClick = (event) => {
    setTranslate(event.currentTarget);
  };

  const handleClose = () => {
    setTranslate(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleClick}>
        <IconButton size="large" aria-label="show 4 new mails">
          <TranslateIcon />
        </IconButton>
        <Typography>Translate</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <Typography>Messages</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Typography>Notifications</Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          <Avatar
            alt="Remy Sharp"
            src="https://bi.im-g.pl/im/e9/ad/18/z25877225Q,Elon-Musk.jpg"
            sx={{ width: 30, height: 30 }}
          />
        </IconButton>
        <Typography>Profile</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex", backgroundColor: "#fff" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: theme.palette.default.main,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color={theme.palette.common.dark}
            textTransform="capitalize"
          >
    
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}>
            <Tooltip title="Translate">
              <Button
                sx={{ textTransform: "capitalize", color: theme.palette.common.dark }}
                onClick={handleClick}
                startIcon={<TranslateIcon />}
              >
                Translate
              </Button>
            </Tooltip>

            <Menu
              anchorEl={translate}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar
                  variant="square"
                  alt="English"
               
                  style={{ width: 25, height: 25 }}
                />{" "}
                English
              </MenuItem>
              <MenuItem>
                <Avatar
                  variant="square"
                  alt="Russian"
                 
                  style={{ width: 25, height: 25 }}
                />{" "}
                Russian
              </MenuItem>
            </Menu>

            <IconButton size="large" aria-label="show 4 new mails">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              onClick={handleProfileMenuOpen}
              aria-haspopup="true"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://bi.im-g.pl/im/e9/ad/18/z25877225Q,Elon-Musk.jpg"
                sx={{ width: 34, height: 34 }}
              />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              onClick={handleMobileMenuOpen}
              aria-haspopup="true"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1FAA59",
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
            },
          }}
        >
          {<Sidebar setMobileOpen={setMobileOpen} />}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#1FAA59",
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
            },
          }}
          open
        >
          {<Sidebar setMobileOpen={setMobileOpen} />}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;