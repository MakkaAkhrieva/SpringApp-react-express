import { useMemo} from "react";
import MenuListItem from "../nav/menu-list-item";

import "./mobile-menu.css";


const MenuMobile =({data,active,setActive})=>{

      const menuElements=useMemo(()=>{
        return(
          data.map(({ id, ...itemProps }) => {
            return <MenuListItem key={id} {...itemProps} active={active} />;
          })
        )
      },[data])

return(
<div className={active ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className={active ? 'popup open' : 'popup'}>
        <nav className="menu-wrap">
            <ul className="menu" id="menu">
              {menuElements}
            </ul>
          </nav>         
        </div>
      </div>
    </div>
)
};

export default MenuMobile;