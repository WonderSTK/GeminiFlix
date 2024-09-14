import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMG, PHOTO_URL } from '../utils/constant';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign-up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,
          })
          .then(() => {
            
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign-in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header className="fixed top-0 left-0 w-full z-10" />
      <div className="absolute inset-0">
        <img
          src={BACKGROUND_IMG}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative w-full max-w-md p-8 bg-black bg-opacity-80 rounded-lg text-white shadow-lg"
        >
          <h1 className="font-bold text-3xl py-4 text-center">
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Username"
              className="p-4 my-4 w-full bg-gray-700 border border-gray-600 rounded"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700 border border-gray-600 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 border border-gray-600 rounded"
          />
          {errorMessage && <p className="py-2 text-red-500 text-center">{errorMessage}</p>}
          <button
            className="p-4 my-4 bg-red-500 w-full rounded-lg text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500"
            onClick={handleButtonClick}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p
            className="py-4 text-center cursor-pointer text-blue-400 hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? 'New to GeminiFlix? Sign Up Now' : 'Already registered? Sign In Now'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
