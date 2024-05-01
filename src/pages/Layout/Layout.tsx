import type { FC } from "react";
import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { TbHome2, TbNotification } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { Transitions } from "./../../components/Transition";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Transitions>
      <div className="flex justify-between flex-col">
        {children}

        <nav className="bg-[white] flex items-center justify-around py-4 fixed bottom-0 w-full">
          <NavLink to={"/home"} activeClassName="active-nav">
            <div className="flex flex-col items-center gap-2">
              <TbHome2 size={32} color="5c606f" />
              <p>Home</p>
            </div>
          </NavLink>

          <NavLink to={"/message"} activeClassName="active-nav">
            <div className="flex flex-col items-center gap-2">
              <BiMessageSquareDetail size={32} color="5c606f" />
              <p>Tin nhắn</p>
            </div>
          </NavLink>

          <NavLink to={"/notification"} activeClassName="active-nav">
            <div className="flex flex-col items-center gap-2">
              <TbNotification size={32} color="5c606f" />
              <p>Thông báo</p>
            </div>
          </NavLink>

          <NavLink to={"/profile"} activeClassName="active-nav">
            <div className="flex flex-col items-center gap-2">
              <CgProfile size={32} color="5c606f" />
              <p>Profile</p>
            </div>
          </NavLink>
        </nav>
      </div>
    </Transitions>
  );
};

export default Layout;
