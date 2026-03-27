import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Content,
  Theme,
} from '@carbon/react';
import {
  Information,
} from '@carbon/icons-react';
import LeftNav from './components/LeftNav';
import './App.css';

function App() {

  return (
    <Theme theme="g100">
      <Header aria-label="INI Application">
        <HeaderName href="#" className="site-name">
          <span className="site-name__prefix">IBM </span>
          <span className="site-name__title">Network Inteligence</span>
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Help"
            onClick={() => {}}
            tooltipAlignment="end"
          >
            <Information size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Profile"
            onClick={() => {}}
            className="user-avatar-action"
            tooltipAlignment="end"
          >
            <div className="user-avatar">
              <span className="user-initials">HJ</span>
            </div>
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>

      <LeftNav />

      <Content style={{ marginLeft: '48px' }}>
      </Content>
    </Theme>
  );
}

export default App;

// Made with Bob
