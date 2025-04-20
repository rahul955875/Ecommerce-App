import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink } from "react-router-dom";

export default function Dropdown({handleLogout,user}) {
  console.log(user.role)
  return (
    <Menu as="div" className="leading-10 relative inline-block text-left">
      <div>
        <MenuButton
          className={`py-2 px-4  hover:bg-gray-100 transition-all duration-300 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset`}
        >
          {user?.name.length > 14 ? user?.name.slice(0,14)+'...': user?.name} ▼
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <NavLink
            
              to={`/dashboard/${user?.role===1 ? "Admin" : "User"}`}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Dashboard
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/auth/login"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>
  );
}
