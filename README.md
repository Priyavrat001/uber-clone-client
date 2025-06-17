# Uber-clone

## About this project
This is a React-based frontend for an Uber-like ride-hailing application. Users can sign up and log in as either a customer or a captain (driver). Customers can book rides, and captains can view and accept ride requests.

## Features
- User authentication (signup, login, logout)
- Captain (driver) authentication (signup, login, logout)
- Book a ride as a user
- Captains can view and accept ride requests
- Real-time ride status updates (waiting, looking for driver, ride in progress, ride finished)
- Location search and car selection
- Protected routes for user and captain dashboards
- Responsive and modern UI with Tailwind CSS
- Toast notifications for user feedback
- Dual-field location suggestion/search (pickup & destination) with active field tracking
- Live fare price calculation for all vehicle types, fetched from backend
- Modern, animated UI for all main and nested components using Framer Motion
- Improved ride booking flow: animated panels, vehicle selection, and fare display
- Consistent Redux state management for fares, loading, and errors
- Robust error handling and user feedback for fare fetching and location search

## Packages & Technologies Used
- **React** — UI library for building the app
- **React Router DOM** — For client-side routing
- **Redux Toolkit & React Redux** — State management
- **Axios** — For API requests
- **Tailwind CSS** — Utility-first CSS framework for styling
- **Remixicon** — Icon library
- **React Hot Toast** — Toast notifications
- **Framer Motion** — Animations and transitions
- **Vite** — Fast development server and build tool

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. The app will be available at `http://localhost:5173` by default.

## Project File Structure

```
client/
  public/                # Static assets
  src/
    assets/              # Images and icons
    components/          # Reusable UI components (location search, car selection, ride status, etc.)
      captain/           # Captain-specific components
    config/              # App configuration files
    features/            # Redux slices for user, captain, map, and ride state
      captain/
      map/
      ride/
      user/
    pages/               # Main pages (Home, Login, Signup, Riding, etc.)
      captain/           # Captain-specific pages
    App.jsx              # Main app component
    main.jsx             # Entry point
    app/store.js         # Redux store setup
    index.css, App.css   # Global styles
  package.json           # Project metadata and dependencies
  tailwind.config.js     # Tailwind CSS configuration
  vite.config.js         # Vite configuration
  README.md              # Project documentation
```

This structure helps keep the codebase organized and maintainable, separating concerns for pages, components, features (Redux), and configuration.

---

## Animations

This project uses [Framer Motion](https://www.framer.com/motion/) for smooth page and component transitions. All main pages and nested components, including the captain dashboard and ride popups, feature animated appearance and disappearance for a modern, fluid user experience.

**Examples of animated components:**
- Main map and panels on the user and captain dashboards
- Ride popups and confirmation dialogs
- Login, signup, and riding pages

Animations are implemented using `<motion.div>`, `<motion.img>`, and `<AnimatePresence>` wrappers throughout the codebase.

## Location Suggestion & Search

This project features a dynamic location suggestion and search system for booking rides, similar to modern ride-hailing apps.

### How It Works
- As the user types a pickup or destination address, the frontend dispatches an action to fetch location suggestions from the backend.
- The backend integrates with a geocoding API (such as OpenRouteService or maps.co) to return a list of relevant locations based on the user's input.
- Suggestions are displayed in real-time below the input fields, allowing users to quickly select the correct address.
- Selecting a suggestion fills the input and triggers the next step in the booking flow.

### Key Features
- **Live Suggestions:** Location suggestions update as you type, making it fast and easy to find addresses.
- **Accurate Results:** Uses geocoding APIs to provide up-to-date and relevant location data.
- **User Experience:** Suggestions are shown in a modern, animated panel with smooth transitions (powered by Framer Motion).
- **Reusable Components:** The `LocationSearch` component handles displaying and selecting suggestions, and is easily reusable for both pickup and destination fields.

### API Example
A typical API response for location suggestions:
```json
{
  "success": true,
  "data": {
    "features": [
      {
        "properties": {
          "label": "Ayodhya Police Station, Ayodhya, UP, India"
        }
      },
      {
        "properties": {
          "label": "Ramkot Chowk, Ayodhya, UP, India"
        }
      }
      // ...more suggestions
    ]
  }
}
```

### Usage in the App
- The user starts typing in the pickup or destination field.
- Suggestions appear instantly below the field.
- Clicking a suggestion sets the field value and closes the suggestion panel.
- The system is designed for speed, accuracy, and a seamless booking experience.

---

For more details, see the `Base.jsx` page and the `LocationSearch.jsx` component in the codebase.

## Recent Improvements & Advanced Features

- **Dual-Field Location Suggestion/Search:**
  - Both pickup and destination fields now support live location suggestions.
  - The UI tracks which field is active, ensuring suggestions are context-aware and user-friendly.
  - Suggestions are fetched and displayed in real-time as the user types, for both fields.

- **Live Fare Price Calculation:**
  - Fare prices for all vehicle types (bike, auto, car) are fetched from the backend based on the selected pickup and destination.
  - The fare is displayed instantly after both locations are selected, providing transparency before booking.
  - Redux state manages fares, loading, and error states for a smooth experience.

- **Modern, Animated UI:**
  - All main and nested components (including ride panels, vehicle selection, and captain pages) use Framer Motion for smooth transitions and animations.
  - The booking flow features animated panels for location selection, vehicle choice, and ride status updates.

- **Improved Ride Booking Flow:**
  - The UI guides users through each step: location selection, vehicle selection, fare confirmation, and ride status.
  - Vehicle selection and fare confirmation are visually appealing and accessible.

- **Robust Error Handling:**
  - Errors in fare fetching or location search are handled gracefully, with user feedback and alerts.

---

## Notes
- This project is for learning and demonstration purposes. It mimics some core Uber features but is not production-ready.
- The backend server must be running for full functionality (see the `server/README.md`).

---

## All Project Files

Below is a list of all files and folders in the `client/` directory as of June 13, 2025. This can help with onboarding, debugging, and understanding the project structure.

```
client/
  eslint.config.js
  index.html
  package.json
  postcss.config.js
  README.md
  tailwind.config.js
  vite.config.js
  public/
    vite.svg
  src/
    App.css
    App.jsx
    index.css
    main.jsx
    app/
      store.js
    assets/
      home.jpg
      react.svg
    components/
      ConfirmVehicel.jsx
      LayoutLoading.jsx
      LocationSearch.jsx
      LookingForDriver.jsx
      ProtecetedRoute.jsx
      SelectCar.jsx
      WaitingForDriver.jsx
      captain/
        CaptainDetails.jsx
        ConfirmRide.jsx
        FinishRide.jsx
    config/
      server.js
      syle.js
    features/
      captain/
        captainSlice.js
      map/
        mapSlice.js
      ride/
        rideSlice.js
      user/
        userSlice.js
    pages/
      Base.jsx
      Home.jsx
      Login.jsx
      Riding.jsx
      Signup.jsx
      captain/
        CaptainHome.jsx
        CaptainLogin.jsx
        CaptainRiding.jsx
        CaptainSignup.jsx
        RidePop.jsx
```

Each file and folder serves a specific purpose, as described in the earlier 'Project File Structure' section. For more details on any file, see the codebase or ask for a summary of its contents.

---
