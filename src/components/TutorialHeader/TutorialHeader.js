import React from 'react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';


const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Materialtechlab">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="Materialtech Lab">
          IDE
        </HeaderName>
        <HeaderNavigation aria-label="Materialtech lab">
        <HeaderMenuItem element={Link} to="product">Product development</HeaderMenuItem> 
        <HeaderMenuItem element={Link} to="customer">Customer experience</HeaderMenuItem> 
        <HeaderMenuItem element={Link} to="strategy">Strategy</HeaderMenuItem>
        <HeaderMenuItem element={Link} to="branding">Branding</HeaderMenuItem>                                                      
        <HeaderMenuItem element={Link} to="repos">Repositories</HeaderMenuItem> 

        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/#/product">Product development</HeaderMenuItem>
              <HeaderMenuItem href="/#/customer">Customer experience</HeaderMenuItem>
              <HeaderMenuItem href="/#/strategy">Strategy</HeaderMenuItem>
              <HeaderMenuItem href="/#/branding">Branding</HeaderMenuItem>
              <HeaderMenuItem href="/#/repos">Repositories</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
  <HeaderGlobalAction aria-label="Notifications" tooltipAlignment="center">
    <Notification size={20} />
  </HeaderGlobalAction>
  <HeaderGlobalAction aria-label="User Avatar" tooltipAlignment="center">
    <UserAvatar size={20} />
  </HeaderGlobalAction>
  <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
    <Switcher size={20} />
  </HeaderGlobalAction>
</HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;