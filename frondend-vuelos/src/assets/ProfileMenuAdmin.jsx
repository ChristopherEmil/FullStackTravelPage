import React,{useContext} from "react";
import { Outlet, Link, Navigate } from "react-router-dom";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
const profileMenuItems = [
  {
    label: "Mi Perfil",
    icon: UserCircleIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Añadir ",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Lista de vuelos",
    icon: InboxArrowDownIcon,
  },
/*   {
    label: "Cerrar Sesion",
    icon: PowerIcon,
  }, */
];
import { ListVuelosContext } from "../context/ListVuelosContext";

function ProfileMenuAdmin({userdata}) {
    const {isAuth,init } =useContext(ListVuelosContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
    <MenuHandler>
      <Button
        variant="text"
        color="blue-gray"
        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
      >
        <Avatar
          variant="circular"
          size="sm"
          alt="tania andrew"
          className="border border-blue-500 p-0.5"
          src={userdata.avatar}
        />
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`h-3 w-3 transition-transform ${
            isMenuOpen ? "rotate-180" : ""
          }`}
        />
      </Button>
    </MenuHandler>
    <MenuList className="p-1">
      {profileMenuItems.map(({ label, icon }, key) => {
        const isLastItem = key === profileMenuItems.length - 1;
        return (
          <MenuItem
            key={label}
            onClick={closeMenu}
            className={`flex items-center gap-2 rounded 
            `}
          >
            {React.createElement(icon, {
              className: `h-4 w-4 text-red-500"}`,
              strokeWidth: 2,
            })}
            <Typography
              as="span"
              variant="small"
              className="font-normal"
              color={"inherit"}
            >
              <Link to={"/home"}>{label}</Link>
            </Typography>
          </MenuItem>
        );
      })}
      <MenuItem
        key={123}
        onClick={closeMenu}
        className={`flex items-center gap-2 rounded text-red-500 hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`}
      >
        {React.createElement(PowerIcon, {
          className: `h-4 w-4 text-red-500 }`,
          strokeWidth: 2,
        })}
        <Typography
          as="span"
          variant="small"
          className="font-normal"
          color={"red"}
        >
          <Link
            to={"/login"}
            onClick={() => {
              localStorage.clear();
              Init();
            }}
          >
            Cerrar Session
          </Link>
        </Typography>
      </MenuItem>
    </MenuList>
  </Menu>
  );
}
export default ProfileMenuAdmin;
