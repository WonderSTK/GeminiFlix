import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState, useRef } from 'react';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };

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
      setDropdownOpen(false);
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

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="relative w-full px-4 py-2 bg-gradient-to-b from-black text-white z-10 flex items-center justify-between">
      <div
        className="w-20 md:w-24 lg:w-28 cursor-pointer text-red-600 font-bold text-xl md:text-2xl lg:text-3xl"
        onClick={() => navigate('/')}
      >
        GeminiFlix
      </div>
      {user && (
        <div className="relative flex items-center space-x-2 md:space-x-4">
          {showGptSearch && (
            <select
              className="bg-gray-800 text-white border border-gray-700 rounded px-2 py-1 md:px-4 md:py-2 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-blue-500 transition"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-gray-800 text-white"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-1 px-2 md:py-2 md:px-4 bg-red-600 rounded text-xs md:text-sm hover:bg-red-700 transition"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? 'Home' : 'GPT Search'}
          </button>
          <div className="flex items-center space-x-2">
            <p className="text-xs md:text-sm font-medium">{user?.displayName}</p>
            <img
              className="w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer object-cover"
              alt="userIcon"
              src={user?.photoURL}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-10 py-2 w-24 text-center bg-gray-900 rounded shadow-lg">
              <button
                className="block text-xs md:text-sm text-white hover:underline w-full"
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
