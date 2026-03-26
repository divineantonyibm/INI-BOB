import { useState } from 'react';
import {
  Button,
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  Content,
  Theme,
  Grid,
  Column,
  Tile,
  TextInput,
} from '@carbon/react';
import { Notification, UserAvatar, Search } from '@carbon/icons-react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    <Theme theme="g100">
      <Header aria-label="INI Application">
        <HeaderName href="#" prefix="IBM">
          INI
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
            <Search size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar" onClick={() => {}}>
            <UserAvatar size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>

      <Content>
      </Content>
    </Theme>
  );
}

export default App;

// Made with Bob
