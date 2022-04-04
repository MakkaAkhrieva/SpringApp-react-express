import { useState,useMemo} from "react";

import MenuListItem from "./menu-list-item";
import MenuMobile from "../mobile-menu/mobile-menu";
import menuDB from "../../resources/menuDB";

import "./nav.css";
import "../mobile-menu/mobile-menu.css";

const Nav = () => {
  const menuElements=useMemo(()=>{
    return(
      menuDB.map(({ id, ...itemProps }) => {
        return <MenuListItem key={id} {...itemProps} />;
      })
    )
  },[menuDB])

  const [menuActive,setMenuActive]=useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrap">
          <img src="./image/spring-logo.svg" alt="logo" className="logo" />
          <div className="hamb">
            <div className="hamb__field" id="hamb" onClick={()=>setMenuActive(!menuActive)}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
          <nav className="menu-wrap"> 
            <ul className="menu" id="menu">
              {menuElements}
            </ul>
          </nav>
        </div>
      </div>
      <MenuMobile active ={menuActive} setActive={setMenuActive} data={menuDB}/>
    </div>
  );
};

export default Nav;
