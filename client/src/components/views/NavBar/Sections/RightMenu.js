/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>

        <SubMenu  key="user" style={{ top: 8 }} title={<span><Icon type="user" style={{ fontSize: 30, marginBottom: 3, color:'#667777' }} /></span>}>
        <MenuItemGroup >
          <Menu.Item key="mail">
            <a href="/login"> LOG IN</a>
          </Menu.Item>

          <Menu.Item key="app">
            <a href="/register">SIGN UP</a>
          </Menu.Item>
        </MenuItemGroup>
        </SubMenu>


        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge >
            <a href="/user/cart" style={{ color:'#667777'}}>
              <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="wishlist" style={{ paddingBottom: 3 }}>
          <Badge >
            <a href="/user/wishlist" style={{ color:'#667777'}}>
                <Icon type="heart" style={{ fontSize: 30, marginBottom: 3 }} />
              </a>
          </Badge>
        </Menu.Item>
        
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>

        <Menu.Item key="history">
          <a href="/history">History</a>
        </Menu.Item>

        <Menu.Item key="upload">
          <a href="/product/upload">Upload</a>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ color:'#667777'}}>
              <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="user" style={{ paddingBottom: 3 }}>
          <Badge>
            <a href="" style={{ color:'#667777'}}>
                <Icon type="user" style={{ fontSize: 30, marginBottom: 3 }} />
              </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="wishlist" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.wishlist.length}>
            <a href="/user/wishlist" style={{ color:'#667777'}}>
                <Icon type="heart" style={{ fontSize: 30, marginBottom: 3 }} />
              </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>

      </Menu>
    )
  }
}

export default withRouter(RightMenu);

