import * as React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import theme from '../config/theme';
import Logo from './Logo';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding-top: ${theme.spacing.x4};
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: 70px;
  align: flex-start;
  outline: ${theme.borderWidth} solid ${theme.colors.secondary100};
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Tabs = styled.div`
  width: 20%;
  height: 100%;
  align: flex-end;
  display: flex;
  outline: ${theme.borderWidth} solid ${theme.colors.secondary100};
`;

const Tab = styled.div`
  cursor: pointer;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: ${({showBorder}) =>
    showBorder
      ? `${theme.borderWidth} solid ${theme.colors.secondary100}`
      : 'none'};
`;

const TabText = styled.h3`
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.secondary100};
`;

const Header = ({}) => {
  return (
    <>
      <Container>
        <Link to="/">
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Link>
        <Tabs>
          <Tab showBorder>
            <TabText>Articles</TabText>
          </Tab>
          <Tab>
            <TabText>About</TabText>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
};

export default Header;
