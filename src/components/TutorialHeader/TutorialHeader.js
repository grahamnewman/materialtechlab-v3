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
        <HeaderName element={Link} to="/" prefix="Materialtech">
          Lab
        </HeaderName>
        <HeaderNavigation aria-label="Materialtech lab">
        <HeaderMenuItem element={Link} to="research">Research</HeaderMenuItem>              
        <HeaderMenuItem element={Link} to="repos">Repositories</HeaderMenuItem> 
        <HeaderMenuItem element={Link} to="podcast">Podcast</HeaderMenuItem> 
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/#/research">Research</HeaderMenuItem>
              <HeaderMenuItem href="/#/repos">Repositories</HeaderMenuItem>
              <HeaderMenuItem href="/#/podcast">Podcast</HeaderMenuItem>
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