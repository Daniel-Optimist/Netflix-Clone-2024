import React from 'react'
import "./header.css"
import NetflixLogo from '../../assets/images/NetflixLogo.jpg'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse By Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            {/* adding aria-labels to the icons for better accessibility therby helping
            screen readers identify the icons' purpose. */}
            <li>
              <SearchIcon aria-label="Search" />
            </li>{" "}
            <li>
              <NotificationsNoneIcon aria-label="Notifications" />
            </li>{" "}
            <li>
              <AccountBoxIcon aria-label="Account" />
            </li>{" "}
            <li>
              <ArrowDropDownIcon aria-label="Dropdown" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header