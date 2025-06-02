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

## Packages & Technologies Used
- **React** — UI library for building the app
- **React Router DOM** — For client-side routing
- **Redux Toolkit & React Redux** — State management
- **Axios** — For API requests
- **Tailwind CSS** — Utility-first CSS framework for styling
- **Remixicon** — Icon library
- **React Hot Toast** — Toast notifications
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

## Folder Structure
- `src/pages/` — Main pages (Home, Login, Signup, Riding, etc.)
- `src/components/` — Reusable UI components (location search, car selection, ride status, etc.)
- `src/features/` — Redux slices for user and captain state
- `src/config/` — App configuration
- `src/assets/` — Images and icons

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

## Notes
- This project is for learning and demonstration purposes. It mimics some core Uber features but is not production-ready.
- The backend server must be running for full functionality (see the `server/README.md`).

---

Feel free to explore the code and suggest improvements!
