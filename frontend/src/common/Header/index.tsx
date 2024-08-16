import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="bg-white">
      <AppBar sx={{ zIndex: 9999 }} color="inherit">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} className="no-underline text-lg">
              Decode Agent
            </Link>
          </Typography>
          <div className="flex">
            <Button color="inherit">
              <Link className="no-underline" to={"/login"}>
                회원가입
              </Link>
            </Button>
            <div className="flex text-[#CCCCCC] items-center pb-1">|</div>
            <Button color="inherit">
              <Link className="no-underline" to={"/signup"}>
                로그인
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
