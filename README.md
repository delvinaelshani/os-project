# OS Project - Final Version

This is the completed final assignment version for the OS project.

## Implemented tasks

- **News App**: fetches 10 comments from the API and displays loading and error states.
- **Gallery App**: fetches 12 photos from the API and displays loading and error states.
- **Live Clock**: shows the current date and time in `M/D/YYYY - HH:mm:ss` format and updates every second.
- **Dark Mode**: light/dark theme toggle inside Preferences, saved in `localStorage`, with system preference detection on first visit.
- **Battery Indicator**: shows the real battery level when supported by the browser, with fallback text when not supported.

## Technologies used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Query
- Axios

## How to run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## API configuration

The API base URL is set in `.env` / `.env.example`:

```text
VITE_API_URL=https://jsonplaceholder.typicode.com
```
