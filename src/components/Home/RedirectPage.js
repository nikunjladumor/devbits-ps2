import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import { auth } from '../../firebase';

function RedirectPage() {
  const history = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history("/");
      } else {
        history("/login");
      }
    });
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default RedirectPage;
