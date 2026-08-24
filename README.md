# Netflix Clone

A Netflix-inspired movie browsing interface built with React and Vite. It fetches movie categories from the TMDB API and presents them in responsive, scrollable rows with interactive movie cards.

> This is an educational project. It is not affiliated with, endorsed by, or connected to Netflix.

## Features

- Fixed navigation header with search and profile-menu UI
- Dynamic hero banner using TMDB Netflix Originals data
- Movie rows for trending, popular, action, comedy, romance, and horror titles
- Horizontal Swiper carousel controls
- Hoverable movie cards with playback, add, check, and more-information controls
- Responsive styling with CSS Modules
- Footer with social links and Netflix-style information links

## Built With

- React
- Vite
- Axios
- TMDB API
- Swiper
- React Router DOM
- Lucide React and React Icons
- CSS Modules

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd netflix-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your TMDB API key

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

The `.env` file is ignored by Git, so do not commit your API key.

### 4. Run the app

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available Commands

```bash
npm run dev      # Starts the development server
npm run build    # Creates a production build
npm run preview  # Previews the production build locally
npm run lint     # Runs the project linter
```

## Project Structure

```text
src/
├── Components/
│   ├── Banner/       # Hero banner and TMDB banner request
│   ├── DisplayRow/   # Fetches category data and renders movie rows
│   ├── Footer/       # Footer content and styling
│   ├── Header/       # Navigation, search, and profile UI
│   ├── MovieCard/    # Poster and hover-preview card
│   └── SlideShow/    # Swiper carousel row
├── Data/             # Local development movie data
├── Utility/          # Axios instance and TMDB endpoint URLs
├── assets/           # Images used by the interface
├── App.jsx
├── main.jsx
└── index.css
```

## What I Practiced

- Reusable React components and props
- State and effects with `useState` and `useEffect`
- Fetching multiple API requests with `Promise.all`
- Environment variables in Vite
- Conditional rendering for UI menus and search
- Carousel interactions with Swiper
- CSS Modules, hover effects, and responsive layouts

## Future Improvements

- Add real search results
- Create movie-detail and trailer views
- Add working navigation routes
- Add loading and error states for TMDB requests
- Add user authentication and a persistent watch list

## Author

Dave
