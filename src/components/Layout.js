import * as React from "react";
import Header from "./Header";
import Spacer from "./Spacer";
import theme from "../config/theme";
import styled from "styled-components";
import Text from "./Text";
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F8F8FF;
    margin-bottom: 50px;
  }
`;

const pageStyles = {
  fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif",
  backgroundColor: "#F8F8FF",
  padding: 0,
  margin: 0,
};

const MobilePadding = styled.div`
  background-color: #f8f8ff;
  max-width: 900px;
  margin: 0 auto;
  padding-left: ${theme.spacing.x5};
  padding-right: ${theme.spacing.x5};
  @media (theme.breakpoints.mediumAndup) {
    padding-left: 0;
    padding-right: 0;
  } ;
`;

const Layout = ({ children }) => {
  return (
    <main style={pageStyles}>
      <Globalstyle />
      <MobilePadding>
        <Spacer height="x8" />
        <Header />
        <Spacer height="x8" />
        {children}
      </MobilePadding>
      <Spacer height="x4" />
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
        <Text align="center" size="x2" weight="normal" color={theme.colors.grey30}>©2023 Harry Condron</Text>
      </div>
    </main>
  );
};

export default Layout;
