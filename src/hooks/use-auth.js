import { useState, useEffect, useContext } from 'react';

import { FirebaseContext } from '../context/firebase';

export default function useAuth() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        const { displayName, email, photoURL } = authUser;
        const userData = { displayName, email, photoURL };

        localStorage.setItem('authUser', JSON.stringify(userData));
        setUser(userData);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}