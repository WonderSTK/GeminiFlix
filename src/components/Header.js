import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState, useRef } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef(null);  // Create a reference for the profile area
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);  // Get the showGptSearch state from the store

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

   const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value)); 
   }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Handle successful sign out
      })
      .catch((error) => {
        // Handle sign out error
      });
  };

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setDropdownOpen(false);  // Close dropdown if clicking outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between text-white items-center">
      <img 
        className="w-36 cursor-pointer" 
        src={LOGO} 
        alt="Logo" 
        onClick={() => navigate('/')}
      />
      {user && (
        <div className="relative flex items-center" ref={profileRef}>
          {showGptSearch && (<select
            className="bg-gray-800 text-white border border-gray-700 rounded px-4 py-2 mr-2 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500 transition" onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map(lang => (
              <option 
                key={lang.identifier} 
                value={lang.identifier} 
                className="bg-gray-800 text-white"
              >
                {lang.name}
              </option>
            ))}
          </select>)}
          <button 
            className="mr-4 py-2 px-4 bg-red-600 rounded text-sm hover:bg-red-700 transition"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? 'Home' : 'GPT Search'}
          </button>
          <p className="mr-4 font-medium">{user?.displayName}</p>
          <img
            className="w-10 h-10 rounded cursor-pointer"
            alt="userIcon"
            src={user?.photoURL}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-12 py-2 w-24 text-center">
              <button 
                className="block text-sm text-white hover:underline"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
