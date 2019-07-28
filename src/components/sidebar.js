import React from "react";
import { elastic as Menu } from "react-burger-menu";

export default props => {
    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'block',
          width: '100%',
          color: 'white',
          textDecoration: 'none',
          paddingTop: '20px'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
  return (
    // Pass on our props
    <Menu styles={styles} {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/blog/">
        Blog
      </a>
    </Menu>
  );
};