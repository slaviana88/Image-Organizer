import React from 'react';
import {Container, Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {Link} from 'react-router-dom';
import Albums from 'pages/Albums';

class Layout extends React.Component {
  render() {
    console.log('in Layout');
    return (
      <div>
        <Container style={{marginTop: 20}}>
          <Menu>
            <Menu.Item>
              <Link to="/albums" component={Albums}>
                Albums
              </Link>
            </Menu.Item>
            <Menu.Item>Druga opciq</Menu.Item>
            <Menu.Item>Druga opciq</Menu.Item>
          </Menu>
        </Container>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
