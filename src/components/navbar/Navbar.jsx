import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import { useState } from "react"
import "./navbar.scss"

const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false)

  window.onscroll=() => {
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return () => (window.onscroll = null)
  }
  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
          <span>Homepage</span>
          <span>Movies</span>
          <span>Series</span>
          <span>New and Popular</span>
          <span>My list</span>

        </div>
        <div className="right">
          <Search className="icons-left"/>
          <span className="kid">KID</span>
          <Notifications className="icons-left"/>
          <img src="https://staticg.sportskeeda.com/editor/2021/12/b855f-16387395715511-1920.jpg" alt="" />
          <div className="profile">
          <ArrowDropDown className="icons-left"/>
          <div className="options">
            <span>Settings</span>
            <span>Logout</span>
          </div>

          </div>
        </div>
      </div>
      </div>
  )
}

export default Navbar