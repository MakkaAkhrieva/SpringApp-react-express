import SubMenuListItem from "./submenu-list-item";
import "./nav.css";

const MenuListItem = ({ listItem, subMenu }) => {
  if (subMenu.length == 0) {
    return (
      <li className="list-item">
        <a href="#">{listItem}</a>
      </li>
    );
  } else
    return (
      <li className="list-item">
        <a href="#">
          {listItem}
          <div id="kucomb-navasog"></div>
        </a>
        <ul className="sub-menu_list">
          <SubMenuListItem data={subMenu} />
        </ul>
      </li>
    );
};

export default MenuListItem;
