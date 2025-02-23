# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Shipping Box

A simple React application for calculating and managing shipping costs of boxes to different countries.  
Built using **React, Context API, Material-UI (MUI), and React Router**.

## Features

 1. Add shipping box details (Receiver Name, Weight, Color, and Destination)
 2. View the list of all added shipping boxes
 3. Calculate shipping costs based on the destination country
 4. Display notifications using MUI Snackbar
 5. Navigation Bar to switch between "Add Box" and "List Boxes"  
 6. State Management using Context API  
 7. Responsive Design using Material-UI
 8. Host the application on Vercel for easy access

## Folder Structure & Explanation

SHIPPING_BOX
│── node_modules/                           # Installed dependencies
│── public/                                 # Static assets
│── src/                                    # Main source code
│   ├── assets/                             # Stores images/icons
│   ├── components/                         # Reusable UI components
│   │   ├── ExtendedComponents/             # Additional reusable components
│   │   │   ├── CustomSnackBar.jsx          # MUI Snackbar component
│   │   ├── Navbar.jsx                      # Navigation bar
│        ├── pages/                         # Page components
│   │         ├── AddBox.jsx                # Form page for adding shipping boxes
│   │         ├── ListBoxes.jsx             # Table page displaying stored boxes
│   ├── context/                            # Context API for state management
│   │   ├── AppContext.jsx                  # Handles global state management
│   ├── App.jsx                             # Main application component
│   ├── main.jsx                            # Entry point for React app
│   ├── App.css                             # Global styles
│   ├── index.css                           # Global index styles
│── .env                                    # Environment variables 
│── .gitignore                              # Ignored files for Git
│── eslint.config.js                        # Linting configuration
│── index.html                              # Main HTML file
│── package.json                            # Project dependencies
│── README.md                               # Documentation
│── vite.config.js                          # Vite configuration


## Tech Stack & Libraries
React (Frontend Framework)
Context API (State Management)
React Router (Routing)
Material-UI (MUI) (UI Components)
Vite (Build Tool)
Vercel (For Deployment)
