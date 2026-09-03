import { SideNav, SideNavItems, SideNavLink } from '@carbon/react';
import {
  Home,
  TransmissionLte,
  ToolBox,
} from '@carbon/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';
import AiResultsIcon from '../assets/Ai-results.svg';
import RouterIcon from '../assets/Router.svg';
import FlowDataIcon from '../assets/Flow--data.svg';
import DataSourceIcon from '../assets/data-source.svg';
import DocumentsIcon from '../assets/documents.svg';
import AILabelIcon from '../assets/AI-label.svg';
import './LeftNav.scss';

export default function LeftNav() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };
  
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
          <SideNavLink
            renderIcon={(props) => <Home size={19} {...props} />}
            href="/"
            onClick={handleNavigation('/')}
            className={`left-nav__item ${location.pathname === '/' ? 'left-nav__item--active' : ''}`}
            title="Home"
          >
            <span>Home</span>
          </SideNavLink>
          
          <SideNavLink
            renderIcon={(props) => (
              <img
                src={AiResultsIcon}
                alt="AI Results"
                style={{ width: '19px', height: '19px' }}
                {...props}
              />
            )}
            href="/ai-results"
            onClick={handleNavigation('/ai-results')}
            className={`left-nav__item ${location.pathname === '/ai-results' ? 'left-nav__item--active' : ''}`}
            title="AI Results"
          >
            <span>AI Results</span>
          </SideNavLink>
          
          <SideNavLink
            renderIcon={(props) => <TransmissionLte size={19} {...props} />}
            href="/network"
            onClick={handleNavigation('/network')}
            className={`left-nav__item ${location.pathname === '/network' ? 'left-nav__item--active' : ''}`}
            title="Network"
          >
            <span>Network</span>
          </SideNavLink>
          
          <SideNavLink
            renderIcon={(props) => (
              <img
                src={RouterIcon}
                alt="Router"
                style={{ width: '19px', height: '19px' }}
                {...props}
              />
            )}
            href="/router"
            onClick={handleNavigation('/router')}
            className={`left-nav__item ${location.pathname === '/router' ? 'left-nav__item--active' : ''}`}
            title="Router"
          >
            <span>Router</span>
          </SideNavLink>
          
          <SideNavLink
            renderIcon={(props) => (
              <img
                src={FlowDataIcon}
                alt="Skills"
                style={{ width: '17px', height: '17px' }}
                {...props}
              />
            )}
            href="/skills"
            onClick={handleNavigation('/skills')}
            className={`left-nav__item ${location.pathname === '/skills' ? 'left-nav__item--active' : ''}`}
            title="Skills"
          >
            <span>Skills</span>
          </SideNavLink>
          
          
          <SideNavLink
            renderIcon={(props) => <ToolBox size={17} {...props} />}
            href="/tools"
            onClick={handleNavigation('/tools')}
            className={`left-nav__item ${location.pathname === '/tools' ? 'left-nav__item--active' : ''}`}
            title="Tools"
          >
            <span>Tools</span>
          </SideNavLink>
          
          <SideNavLink
            renderIcon={(props) => (
              <img
                src={DataSourceIcon}
                alt="Data sources"
                style={{ width: '17px', height: '17px' }}
                {...props}
              />
            )}
            href="/data-sources"
            onClick={handleNavigation('/data-sources')}
            className={`left-nav__item ${location.pathname === '/data-sources' ? 'left-nav__item--active' : ''}`}
            title="Data sources"
          >
            <span>Data sources</span>
          </SideNavLink>
          
          <SideNavLink
            renderIcon={(props) => (
              <img
                src={DocumentsIcon}
                alt="Documents"
                style={{ width: '17px', height: '17px' }}
                {...props}
              />
            )}
            href="/documents"
            onClick={handleNavigation('/documents')}
            className={`left-nav__item ${location.pathname === '/documents' ? 'left-nav__item--active' : ''}`}
            title="Documents"
          >
            <span>Documents</span>
          </SideNavLink>
        </SideNavItems>
      </SideNav>
      
      <div className="left-nav__ai-label-container">
        <div className="left-nav__ai-label">
          <img src={AILabelIcon} alt="AI" />
        </div>
      </div>
    </div>
  );
}

// Made with Bob
