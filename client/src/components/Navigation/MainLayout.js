import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { theme } from "../../theme/default";
export default function Layout({ children }) {
  return (
    <div style={{ flexGrow: 1, display: "flex" }}>
      <Header />
      <div style={{ width: "100%", padding: theme.spacing(3), marginTop: theme.spacing(8) }}>
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};