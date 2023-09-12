import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/context.component";
import { CartContext } from "../../context/cart.context";
import { ReactComponent as CrownCloth } from "../../assets/crown.svg";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
// import "./navigation.styles.scss";
import { NavigationContainer, LogoConatiner, NavLinkContainer, NavLink } from "./navigation.styles";


function Navigation(){
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  const signOutHandler = async function(){
      await signOutUser();
      setCurrentUser(null);
  }
    return(
      <Fragment>
        <NavigationContainer>
            <LogoConatiner to='/'>
                <CrownCloth className="logo" />
            </LogoConatiner>
        <NavLinkContainer>
            <NavLink to='/shop'>
               SHOP
            </NavLink>
            <NavLink to='/home'>
            HOME
            </NavLink>
            <NavLink to='/Contact Us'>
            CONTACT
            </NavLink>
            { currentUser ? (<NavLink as="span" onClick={signOutHandler}>SIGN OUT</NavLink>) 
                          : (<NavLink to='/auth'>SIGN IN</NavLink>)}
            <CardIcon />
        </NavLinkContainer>
         {isCartOpen && <CardDropdown />} 
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }


export default Navigation;