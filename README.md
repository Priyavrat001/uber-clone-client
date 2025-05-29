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

## Notes
- This project is for learning and demonstration purposes. It mimics some core Uber features but is not production-ready.
- The backend server must be running for full functionality (see the `server/README.md`).

---

Feel free to explore the code and suggest improvements!
