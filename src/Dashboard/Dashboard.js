import { auth } from "../firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import isAuthenticated from "../components/Home/isAuth";
import Searchbar from "./seachbar";
import "./Dashboard.css"
function Dashboard(props) {
    const namee=props.name;
    // <><h1>Hellooooooo</h1></>
//   const [ setUser] = useState(null);
//   var user = auth().currentUser;

//   useEffect(() => {
//     const currentUser = firebase.auth().currentUser;
//     if (currentUser) {
//       setUser({
//         email: currentUser.email,
//         displayName: currentUser.displayName,
//         uid: currentUser.uid,
//       });
//     }
//   }, []);

//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUserName(user.displayName);
//       } else setUserName("");
//     });
//   }, []);
//   auth.onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in.
//       const uid = user.uid;
//       console.log("User is authenticated. UID:", uid);
//     } else {
//       // User is signed out.
//       console.log("User is not authenticated.");
//     }
//   });

//   return (
// //     // check if user is authenticated or not

//   <h1>Hellooooooo</h1>
  
// // //     <div>
// // //       <h1>Welcome to the dashboard, {user?.displayName}!</h1>
// // //       <p>Your email is: {user?.email}</p>
// // //       <p>Your UID is: {user?.uid}</p>
// // //     </div>
//   );
// const [user, setUser] = useState(null);
// useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);


const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else setUser("");
    });
  }, []);



  return (
    <div>
      <body>
      {/* <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br /> */}

{/* <h2>{user.uid}</h2>
<h2>{user.email}</h2> */}
<h2>{user.displayName}</h2>
{/* <p>Profile picture: <img src={user.photoURL} alt="Profile"/></p> */}

   

    <div className='user-dashboard'>

      <div className='left-dashboard'>

         <div className="profile">
          <div className='logo'>

          {/* <img class="logo-image" src="https://img.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg" alt="dog-profile" /> */}
          <p>Profile picture: <img src={user.photoURL} alt="Profile"/></p>
          <h6>{user.displayname}</h6>

          </div>
          
         </div>

        <div className='account'>
            
            <h6>BALANCE:: 1000000.00 RUPEE</h6>
        </div>


        <div className='user-assest'>
          

        {/* <div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>


<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>


<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div> */}


        </div>

      </div>


      <div className='right-dashboard'>
         <div className='search-bar'>
           <Searchbar/> 
         </div>
         <div className='stocks-index'>
            
         </div>
      </div>
    </div>
    </body>
    </div>
  );


}

export default Dashboard;

