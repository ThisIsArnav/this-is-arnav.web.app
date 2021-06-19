import React from "react";

import styled from "styled-components";

export default function Header(props) {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img
              src="https://media-exp3.licdn.com/dms/image/C4D03AQEN277TlSBOVQ/profile-displayphoto-shrink_200_200/0/1618167494721?e=1628726400&v=beta&t=SXS-ZPObOFrX3aYtfIaIaLOsORR8RuaZLF_D25l17eM"
              alt=""
            />
          </a>
        </Logo>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/home">
                <img src="/images/home.png" alt="" />
                <span>Home</span>
              </a>
            </NavList>

            {/*<NavList>
              <a href="/blog">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAACOjo7V1dWDg4P7+/tVVVXs7Ozb29sdHR26urrR0dEvLy90dHTi4uJ9fX3BwcHHx8ejo6OdnZ3p6enz8/NtbW2oqKhoaGjKysq3t7eDVL1IAAAB5ElEQVR4nO3dwVLbMBiFUQxJQ6BQCoS2vP+DdtNFZ5xOrivwL9vn21vjs5Ilj+WrK0mSJKnr9q+H/ju1CO+HBfStRXhTffdJO0LC7iMk7D9Cwj99aRnmM7omzCIsjDCMsDDCMMLCCMMICyMMIyyMMIywMMIwwsI+Xfj2MLG3H2fGP/0ML76dXzhM7tyLzEN68felCk+EhISEhIQXhRuYD3fXUbvHpQobIgwjJCRsiDCMkJCwIcIwQsJLwv3dU9ZhqcINrIAJCQkJCQkvCrcwHx6jhl9LFTZEGEZISNgQYRghIWFDhGGEhBeF+7DFCte/Al6/cP37NISEhISE03o4M348Hz7NL3yc3PhV/IRhxo9tvs4LIyyMMIywMMIwwsIIwwgLIwzbsvD9bs7eF3EuRlMvqxc+ExISEhIS9ig8fp2z4/igMM+lYYSFEYYRFkYYRlgYYRhhYYRh/xbez9vr/MJh3uyXEhISEhIS1giz4x4+qMF+6X9HWBhhGGFhhGGEhRGGERZGGEZY2NpWwHaECQkJCQkJtyAsmPFv5q3g7w/lEYYRFkYYRlgYYRhhYYRhhIURhhEWRhhGWBhhGGFhhGF/C9PfGMzTxws7jpCw/wgJ+4+QsP+afpW1v11A4y/ZJUnSuN9QOHpAHykqBQAAAABJRU5ErkJggg=="
                  alt=""
                />
                <span>Blog</span>
              </a>
            </NavList>*/}
            <NavList>
              <a href="/portfolio">
                <img
                  src="https://static.thenounproject.com/png/286716-200.png"
                  alt=""
                />
                <span>Portfolio</span>
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  img {
    height: 50px;
    width: 50px;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: center;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 76px) {
      min-width: 70px;
    }
    img {
      height: 30px;
      width: 30px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
