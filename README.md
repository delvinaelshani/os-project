# OS Project - Final Version

This repository contains the final completed version of the OS project assignment.
The project is built with React and Vite and includes several required features related to API usage, real-time updates, user preferences, and browser-based system information.

## Implemented Features

### News App

The News App fetches 10 comments from the JSONPlaceholder API and displays them in the application.
It also includes loading and error handling states to improve the user experience.

### Gallery App

The Gallery App fetches 12 photos from the API and displays them in a gallery layout.
Loading and error states are also implemented for better feedback during data fetching.

### Live Clock

The Live Clock displays the current date and time in the following format:

```text
M/D/YYYY - HH:mm:ss
```

The time updates automatically every second.

### Dark Mode

The application includes a light and dark theme toggle inside the Preferences section.
The selected theme is saved in `localStorage`, and the system preference is detected on the first visit.

### Battery Indicator

The Battery Indicator displays the real battery level when the browser supports the Battery Status API.
If the browser does not support this feature, a fallback message is shown.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React Query
* Axios

## How to Run the Project

```bash
npm install
npm run dev
```

## Build the Project

```bash
npm run build
```

## API Configuration

The API base URL is configured in the `.env` and `.env.example` files:

```env
VITE_API_URL=https://jsonplaceholder.typicode.com
```
