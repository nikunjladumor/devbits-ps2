import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import { signInWithGoogle } from "../../firebase";
import styles from "./Signup.module.css";
import cx from 'classnames';
function Signup() {
  const history = useNavigate();

  useEffect(() => {
    // Check if the user is already signed in
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, redirect to the redirect URL
        history('/');
      }
    });
  }, [history]);



  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>

      <div className={styles.innerBox}>
        <h1 className={cx(styles.heading,styles.neonText)}>Signup</h1>
        <p>Name</p>
        <InputControl 
 
          // label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <p>Email</p>
        <InputControl
          // label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <p>Password</p>
        <InputControl
          // label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={cx(styles.footer)}>
          <b className={styles.error}>{errorMsg}</b>
          <div className={styles.bottom}>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <button disabled={submitButtonDisabled} onClick={signInWithGoogle} className={styles.login}>
           With Google
          </button></div>
          <p>
            Already have an account? &nbsp; {" "}
            <span className={styles.neonText}>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;