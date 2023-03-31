import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import { signInWithGoogle } from "../../firebase";
import cx from 'classnames';
import styles from "./Login.module.css";
function Login() {
  const history = useNavigate();

  useEffect(() => {
    // Check if the user is already signed in
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, redirect to the redirect URL
        history.push('/redirect');
      }
    });
  }, [history]);


  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
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
        <h1 className={cx(styles.heading,styles.neonText)}>Login</h1>
        <p>Email</p>
        <InputControl
          // label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
                <p>Password</p>
        <InputControl
          // label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <div className={styles.bottom}>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <button disabled={submitButtonDisabled} onClick={signInWithGoogle} className={styles.login}>
            "With Google"
          </button></div>
          <p>
            Don't have an account? &nbsp;{" "}
            <span className={styles.neonText}>
              <Link to="/signup"> Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;