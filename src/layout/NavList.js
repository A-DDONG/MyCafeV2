import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <div className="nav main">
      <ul>
        <li>
          <NavLink to="/">홈으로</NavLink>
        </li>
        <li>
          <NavLink to="/recipe/list">내 레시피</NavLink>
        </li>
        <li>
          <NavLink to="/recipe/insert">레시피 등록</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavList;
