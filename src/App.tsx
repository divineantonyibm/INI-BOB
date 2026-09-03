import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Content,
  Theme,
  Button,
} from '@carbon/react';
import {
  Information,
} from '@carbon/icons-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftNav from './components/LeftNav';
import ChatPanel from './components/ChatPanel';
import NewChatIcon from './assets/new-chat.svg';
import Home from './pages/Home';
import AIResults from './pages/AIResults';
import Network from './pages/Network';
import RouterPage from './pages/Router';
import Skills from './pages/Skills';
import Tools from './pages/Tools';
import DataSources from './pages/DataSources';
import Documents from './pages/Documents';
import './App.css';

function App() {

  return (
    <Router basename="/INI-concept">
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

        <Content style={{ marginLeft: '48px', marginRight: '320px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-results" element={<AIResults />} />
            <Route path="/network" element={<Network />} />
            <Route path="/router" element={<RouterPage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/data-sources" element={<DataSources />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </Content>

        <aside className="app-aside">
          <div className="chat-header">
            <div className="chat-header__content">
              <Button
                kind="ghost"
                size="md"
                hasIconOnly
                iconDescription="New chat"
                renderIcon={(props) => <img src={NewChatIcon} alt="" {...props} />}
              />
            </div>
          </div>
          <ChatPanel />
        </aside>
      </Theme>
    </Router>
  );
}

export default App;

// Made with Bob
