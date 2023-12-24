import { NavLink } from "react-router-dom";
import { openDropdown } from "../slice/uiSlice";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch } from "react-redux";

const PageLink =({ id, linkText, url, subLinks }) => {
    const dispatch = useDispatch();
    const handleDropDown = (e) => {
      const linkCords = e.target.getBoundingClientRect();
      const center = (linkCords.left + linkCords.right) / 2;
      dispatch(openDropdown({ link: linkText, center }));
    };
    return(
<div className="relative">
<NavLink
 to={url}
key={id}
        className="relative w-full px-3 py-[0.6rem] lg:px-4 flex items-center gap-x-1 link"
        onMouseOver={handleDropDown}

>
       {linkText}
       {subLinks && <BiChevronDown className="link" />}

</NavLink>
</div>
    )
}

export default PageLink