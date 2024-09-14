

---

# GeminiFlix

GeminiFlix is a modern movie streaming application that offers personalized movie recommendations, user authentication, and a responsive user interface. Built with React, Tailwind CSS, and Firebase, GeminiFlix provides a rich user experience inspired by popular streaming platforms.

## Features

- **Personalized Movie Suggestions:** Utilizes the Gemini API to provide tailored movie recommendations based on user preferences.
- **User Authentication:** Secure sign-in and sign-out functionality using Firebase Authentication.
- **State Management:** Uses Redux for efficient state management and to ensure a smooth user experience.
- **Responsive Design:** Designed with Tailwind CSS to ensure a seamless experience across various devices.
- **Language Support:** Options to change the app language for a more inclusive user experience.
- **Dynamic Interface:** Interactive elements for managing user settings, preferences, and browsing movies.

## Technologies

- **Frontend:** React, Tailwind CSS
- **Backend:** Firebase (for authentication and real-time data management)
- **State Management:** Redux (for managing application state)
- **API Integration:** Gemini API for movie suggestions

## Getting Started

To get a local copy of GeminiFlix up and running, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [Yarn](https://yarnpkg.com/) (optional)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/GeminiFlix.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd GeminiFlix
   ```

3. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root of the project and add your Firebase and Gemini API credentials:

   ```plaintext
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key
   ```

5. **Run the Application**

   ```bash
   npm start
   ```

   Or:

   ```bash
   yarn start
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- **Home Page:** Browse featured movies and access the search functionality.
- **Search:** Use the search bar to find movies and view personalized suggestions.
- **Profile Management:** Sign in to view and manage your profile.
- **Settings:** Change language preferences and access other settings.

## State Management with Redux

GeminiFlix uses Redux to manage the application state efficiently. Redux helps in:

- **Centralized State Management:** Keeps the state in a single store, making it easier to manage and debug.
- **Predictable State Changes:** Uses actions and reducers to ensure state changes are predictable and traceable.
- **Enhanced Performance:** Optimizes performance by allowing components to connect to the Redux store only for the state they need.

## Responsiveness

GeminiFlix is designed to be fully responsive, ensuring a seamless experience across various devices, including:

- **Desktop:** Optimized layout and functionality for larger screens.
- **Tablet:** Adaptive design for medium-sized screens.
- **Mobile:** Touch-friendly and intuitive interface for small screens.

Tailwind CSS is used to create responsive layouts and components, making sure the app looks great on all device sizes.

## Contributing

We welcome contributions to improve GeminiFlix. To contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your modifications and commit them with clear messages.
4. Push your changes to your forked repository.
5. Open a pull request describing your changes.


## Contact

For any questions or inquiries, please contact:

- **Email:** mehulparmar9694@gmail.com
- **GitHub:** [WonderSTK](https://github.com/WonderSTK)

## Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Firebase](https://firebase.google.com/) - Backend-as-a-Service for authentication and real-time data.
- [Gemini API](https://aistudio.google.com/) - API for movie suggestions.
- [Redux](https://redux.js.org/) - State management library for JavaScript applications.

---

