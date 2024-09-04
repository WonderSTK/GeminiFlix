import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Handle successful sign out
    }).catch((error) => {
      // Handle sign out error
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between text-white">
      <img 
        className="w-44"
        src= {LOGO}
        alt="Logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            alt="userIcon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
