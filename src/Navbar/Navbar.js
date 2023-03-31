import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import isAuthenticated from '../components/Home/isAuth';
import { auth } from '../firebase';
import { logout } from '../firebase';
import { isAuthen } from '../Dashboard/Dashboard';
// import firebase from 'firebase/compat';
import { useEffect,useState } from 'react';
const Navbar = (props) => {
    
    const naviagte=useNavigate();
    const [loggedIn, setLoggedIn] = useState(false); // State to keep track of login status

    useEffect(() => {
      // Check if user is logged in
      auth.onAuthStateChanged(user => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      });
    }, []);
  
    const handleLogout = () => {
      // Logout the user
      auth.signOut();
      setLoggedIn(false);
    }



    // const {logout} = auth.signOut();
    return (
        <>
            <div className="NavMain">
                {props.home && (
                    <div className="navHomeLink NavPadding">
                        <Link className="navLink" to="/">
                            Home
                        </Link>
                    </div>
                )}
                <div className="NavInstructionButton NavPadding">
                    <Link className="navLink" to="/learn">
                        Trade
                    </Link>
                </div>
                <div className="NavAboutUs NavPadding">
                    <Link className="navLink" to="/about">
                        About Us
                    </Link>
                </div>


                { loggedIn ? (
          <>
            <div className="NavSignIn NavDash das"> <Link to='/Dashboard' > Dashboard </Link></div>
            <div className=" NavSignIn NavDash" onClick={handleLogout}> Logout </div>
          </>
        ) :(
                <div className="NavSignIn">
                    <Link className="navLink" to="/signIn">
                        Sign Up
                    </Link>
                </div>
                )}
            </div>
        </>
    );
};
export default Navbar;





