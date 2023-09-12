// this is style coomponent
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media (max-width: 768px) {
      background-color: red;
    }
`;

export const LogoConatiner = styled(Link)`
      height: 100%;
      width: 70px;
      padding: 25px;
`;

export const NavLinkContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`;

export const NavLink = styled(Link)`
        padding: 10px 15px;
        cursor: pointer;
`;

// .navigation {
//     height: 70px;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 25px;
  
//     .logo-container {
//       height: 100%;
//       width: 70px;
//       padding: 25px;
//     }
  
//     .nav-links-container {
//       width: 50%;
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-end;
  
//       .nav-link {
//         padding: 10px 15px;
//         cursor: pointer;
//       }
//     }
//   }

