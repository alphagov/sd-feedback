import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <div>
        <Menu size="huge" inverted borderless fixed="top">
          <Menu.Item header as={Link} to="/">
            Service Desk Feedback
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/analysts/manage">
              Analysts
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default Header;
