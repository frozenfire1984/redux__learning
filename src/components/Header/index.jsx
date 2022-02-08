import React from "react";
import UserContainer from '../User/container'
import SubscrContainer from '../Subscr/container'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__layout">
          <div className="header__aside">
            <SubscrContainer/>
          </div>
          <div className="header__primary">
            <h1>Application</h1>
          </div>
          <div className="header__aside">
            <UserContainer />
          </div>

        </div>
      </div>
    </header>
  )
};

export default Header;
