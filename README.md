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
- Consistent Redux state management for fares, loading, and errors (feature-specific loading/error states)
- Robust error handling and user feedback for fare fetching and location search
- All API endpoints now use `/api/v1` prefix for consistency with backend
- Socket.IO integration for real-time ride and location updates (see `src/config/SocketContext.jsx`)
- Captain dashboard: live geolocation and location updates via Socket.IO
- Enhanced vehicle selection and confirmation logic
- Improved ride popups and confirmation flows

## Packages & Technologies Used
- **React** — UI library for building the app
- **React Router DOM** — For client-side routing
- **Redux Toolkit & React Redux** — State management
- **Axios** — For API requests
- **Tailwind CSS** — Utility-first CSS framework for styling
- **Remixicon** — Icon library
- **React Hot Toast** — Toast notifications
- **Framer Motion** — Animations and transitions
- **Socket.IO Client** — Real-time communication
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
    config/              # App configuration files and SocketContext
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

- **All API endpoints now use `/api/v1` prefix:**
  - All Redux slices and API calls have been updated to use the `/api/v1` prefix for consistency with backend routes.
- **Redux slice improvements:**
  - Loading and error states are now managed per feature (fares, new ride, ride confirmation, etc.).
  - State structure is more robust and scalable for future features.
- **Socket.IO integration:**
  - Socket.IO client is set up and used for real-time ride and location updates.
  - Captain dashboard emits live geolocation updates to backend.
  - See `src/config/SocketContext.jsx` for implementation details.
- **UI/UX enhancements:**
  - Improved ride booking flow, vehicle selection, and fare display.
  - All main and nested components use Framer Motion for smooth transitions.
  - Error handling and user feedback are more robust and user-friendly.
  - Ride popups and confirmation flows are more interactive and reliable.
- **Captain dashboard:**
  - Joins a room and emits location updates using Socket.IO and browser geolocation API.
  - Receives and handles ride requests in real time.

## Recent Changes (June 20, 2025)

- **Login & Redirect Improvements:**
  - User and captain login flows now include OTP logic and redirect to the correct dashboard (`/home` or `/captain-home`) after successful login.
  - Login pages provide better feedback and error handling.
- **Protected Route Enhancements:**
  - `ProtecetedRoute` now properly handles loading and redirect states for both user and captain, ensuring only authenticated users/captains can access protected pages.
- **OTP & Ride Start Logic:**
  - Added OTP input and validation in the captain's ride confirmation flow (`ConfirmRide.jsx`).
  - New Redux async thunk `rideStarted` in `rideSlice.js` for starting rides with OTP.
  - UI now displays OTP to the user and requires OTP entry by the captain to start the ride.
- **Redux State Improvements:**
  - `rideSlice` now manages `rideStarted` state and errors for the ride start process.
  - Improved state management for ride confirmation and ride start flows.
- **UI/UX Enhancements:**
  - `WaitingForDriver` and `ConfirmRide` components now show OTP and relevant ride/captain details.
  - Navigation and redirect logic improved after login and ride actions.
  - Toast notifications and error messages are more robust and user-friendly.

---
