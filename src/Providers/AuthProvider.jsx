import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile, 
  } from 'firebase/auth';
  import PropTypes from 'prop-types';
  import { createContext, useEffect, useState } from 'react';
  import auth from '../firebase/firebase.config';
  import { GoogleAuthProvider } from 'firebase/auth';
  import axios from 'axios';

  export const AuthContext = createContext(null);
  const provider = new GoogleAuthProvider();
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
 

const createUser = (name, photoURL, email, password) => {
  setLoading(true);

  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Set the user's profile information after creating the user
      return updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          return userCredential; // Return the user credential after updating the profile
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
          throw error;
        });
    })
    .catch((error) => {
      // Handle any errors that occur during user creation
      console.error('Error creating user:', error);
      throw error;
    });
};

 
const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };

  // Observed auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log('current value of the user', currentUser);
      setUser(currentUser);
      setLoading(false);
      // if user exit then issue token
       
      if (currentUser) {
        axios.post('https://programming-blog-server-three.vercel.app/jwt', loggedUser, {
          withCredentials: true
        })
        .then(res => {
          console.log('response token', res.data);
        })
        .catch(error => {
          console.error('Error issuing token:', error);
        });
      }
      else{
        axios.post('https://programming-blog-server-three.vercel.app/logout', loggedUser, {
          withCredentials: true
        })
        .then(res=>{console.log(res.data)})
      }

    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = { user, loading, createUser, signInUser, signInWithGoogle, logOut };
  console.log('username', user)

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};
export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};

    