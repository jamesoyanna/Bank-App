import React from 'react';

const Navbar = (props) => {
    return (
      <div>
        <div className="btnMenu">
          <label htmlFor="chkMenu">
            <i className="fa fa-bars"></i>
          </label>
        </div>
        <input type="checkbox" id="chkMenu" />
        <nav className="menu">
            <div className="title">Investement Bank</div>
            <ul>
                <li>
                    <label htmlFor="chkMenu" onClick={()=props.setRoute("profile")}>
                        Transfer Activity
                    </label>
                </li>
            </ul>
        </nav>
      </div>
    );
}

export default Navbar;
