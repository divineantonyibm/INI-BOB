import { SideNav, SideNavItems, SideNavLink } from '@carbon/react';
import {
  Home,
  Light,
  TransmissionLte,
  ToolBox,
  DocumentMultiple_01,
} from '@carbon/icons-react';
import './LeftNav.scss';

export default function LeftNav() {
  return (
    <div className="left-nav">
      <div className="left-nav__ai-layer">
        <div className="left-nav__ai-background" />
        <div className="left-nav__ai-gradient" />
      </div>
      
      <SideNav
        aria-label="Side navigation"
        isFixedNav
        expanded={false}
        isChildOfHeader={false}
        className="left-nav__sidenav"
      >
        <SideNavItems className="left-nav__items">
          <SideNavLink renderIcon={(props) => <Home size={21} {...props} />} href="#" className="left-nav__item left-nav__item--active">
            <span>Home</span>
          </SideNavLink>
          
          <SideNavLink renderIcon={(props) => <Light size={21} {...props} />} href="#" className="left-nav__item">
            <span>AI Results</span>
          </SideNavLink>
          
          <SideNavLink renderIcon={(props) => <TransmissionLte size={21} {...props} />} href="#" className="left-nav__item">
            <span>Network</span>
          </SideNavLink>
          
          <SideNavLink href="#" className="left-nav__item">
            <span>Components</span>
          </SideNavLink>
          
          <SideNavLink href="#" className="left-nav__item">
            <span>Link</span>
          </SideNavLink>
          
          <SideNavLink href="#" className="left-nav__item">
            <span>Link</span>
          </SideNavLink>
          
          <SideNavLink renderIcon={(props) => <ToolBox size={21} {...props} />} href="#" className="left-nav__item">
            <span>Tools</span>
          </SideNavLink>
          
          <SideNavLink renderIcon={(props) => <DocumentMultiple_01 size={21} {...props} />} href="#" className="left-nav__item">
            <span>Documents</span>
          </SideNavLink>
          
          <SideNavLink href="#" className="left-nav__item">
            <span>Link</span>
          </SideNavLink>
        </SideNavItems>
      </SideNav>
      
      <div className="left-nav__ai-label-container">
        <div className="left-nav__ai-label">
          <span className="left-nav__ai-badge">AI</span>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
