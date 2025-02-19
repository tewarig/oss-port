import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import Wordmark from "../images/Wordmark";
import { HOW_TO_LIST_PROJECT_URL, LEARN, DISCORD } from "../utils/constants";
import CallToAction from "./CallToAction";
import NavLink from "./NavLink";


const Header: FunctionComponent = () => (
  <header className="bg-blue-700 sm:sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <Link to="/" className="block">
        <Wordmark width="200" className="my-2" />
      </Link>
      <div className="flex items-center justify-center text-white whitespace-nowrap">
        
        <div className="hidden sm:block">
          <NavLink to={LEARN}>
          Learn
          </NavLink>
        </div>
        <div className="hidden sm:block">
          <NavLink to="/swag/">Get Swag!</NavLink>
        </div>
        <div className="hidden sm:block">
          <NavLink to="/about/">About</NavLink>
        </div>
        <div className="hidden sm:block">
          <NavLink to={DISCORD}>
            <div className="flex">
              Join Us 
              <img src="/icon_clyde_white_RGB.png" alt="" className="pl-1" style={{
                width: "24px", 
                height: "16px", 
                alignSelf: "center"
              }}/>
            </div>
          </NavLink>
        </div>
        
        <div className="hidden md:block ml-5">
          <CallToAction
            href={HOW_TO_LIST_PROJECT_URL}
            rel="noopener"
            target="_blank"
          >
            List Your Project
          </CallToAction>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
