import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { theme } from "../Assets/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Assets/logo.png";
import SpriteSheet from "../Assets/spritesheet.png";
import { HomeIcon, MessagesIcon, CompassIcon, HeartIcon } from "../Assets/NavIcons/index";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  setError: (error) => dispatch({ type: "SET_ERROR", payload: error }),
  showErrors: (boolean) => dispatch({ type: "DISPLAY_ERRORS", payload: boolean }),
});

const navLinks = [
  { link: "/", icon: HomeIcon },
  { link: "/direct/inbox", icon: MessagesIcon },
  { link: "/explore", icon: CompassIcon },
  { icon: HeartIcon },
];

const NavBar = (props) => {
  return (
    <NavBarMainWrapper>
      <NavBarMainContainer>
        <Left>
          <img src={Logo} alt="logo" />
        </Left>
        <Middle>
          <input type="text" placeholder="Search" />
          <SearchIcon />
          <CloseIcon />
        </Middle>
        <Right>
          <ul>
            {navLinks.map((link) => (
              <li>{link.link ? <Link to={`/${link.link}`}>{link.icon()}</Link> : link.icon()}</li>
            ))}
            <li></li>
          </ul>
        </Right>
      </NavBarMainContainer>
    </NavBarMainWrapper>
  );
};

const NavBarMainWrapper = styled.div`
  width: 100%;
  height: 54px;
  border-bottom: 1px solid ${theme.main.grey};
  display: flex;
  align-items: center;
`;

const NavBarMainContainer = styled.div`
  max-width: 975px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  transition: width 0.25s ease;
  @media (max-width: 975px) {
    width: 139px;
  }
  > img {
    height: 29px;
    margin-top: 7px;
  }
`;

const SearchIcon = styled.div`
  background-repeat: no-repeat;
  background-position: -399px -321px;
  height: 10px;
  width: 10px;
  left: 74px;
  position: absolute;
  top: 9px;
  z-index: 2;
  background-image: url(${SpriteSheet});
`;

const CloseIcon = styled.div`
  background-position: -318px -333px;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 5px;
  top: 4px;
  z-index: 3;
  background-image: url(${SpriteSheet});
  display: none;
`;

const Middle = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > input {
    width: 215px;
    height: 28px;
    border: 1px solid ${theme.main.grey};
    border-radius: 3px;
    background-color: ${theme.main.secondarywhite};
    padding: 3px 10px 3px 26px;
    color: ${theme.main.darkgrey};
    font-size: 14px;
    ::placeholder {
      font-size: 14px;
      color: ${theme.main.grey};
      text-align: center;
    }
    :focus {
      outline: none;
    }
    :focus ~ ${CloseIcon} {
      display: block;
    }
    :focus ~ ${SearchIcon} {
      left: 11px;
    }
    :focus::placeholder {
      text-align: left;
    }
  }
`;

const Right = styled.div`
  width: 360px;
  transition: width 0.25s ease;
  @media (max-width: 975px) {
    width: 222px;
  }
  > ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 10px;
    }

    li:last-of-type {
      height: 22px;
      width: 22px;
      background-color: blue;
      border-radius: 50%;
    }
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
