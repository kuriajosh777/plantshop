# Plantsy

The admin side of a plant store, built with **React** and **Vite**. The app connects to a `json-server` backend so the shop owner can see all plants, add new ones, mark plants as sold out, and search by name.

## Screenshot

![Plantsy screenshot](screenshot.png)

## Features

- **See all plants** when the page loads (`GET /plants`)
- **Add a plant** with the form; it is saved to the backend (`POST /plants`) and appears on the page right away
- **Mark a plant as sold out** with the stock button (the status is not saved, so a refresh puts every plant back in stock)
- **Search by name** to filter the list; the search ignores upper/lower case, and clearing the box shows every plant again

## Built with

- React 18 and Vite
- json-server (fake REST API)
- Vitest and React Testing Library

## How it works

| Feature | Where | What happens |
| --- | --- | --- |
| Load plants | `PlantPage` | `useEffect` fetches once and calls `setPlants` |
| Add plant | `NewPlantForm` | controlled form, POST on submit, then `onAddPlant` adds it to state |
| Sold out | `PlantCard` | its own `inStock` state toggles the button |
| Search | `Search` + `PlantPage` | `searchQuery` state, `filter()` with `includes()` |

```
App
├── Header
└── PlantPage      (owns plants and searchQuery state)
    ├── NewPlantForm
    ├── Search
    └── PlantList
        └── PlantCard   (owns inStock state)
```

## Getting started

You need [Node.js](https://nodejs.org/) (v18 or newer) and npm.

```bash
# 1. Clone your fork
git clone <your-repo-url>
cd <your-repo-folder>

# 2. Install dependencies
npm install

# 3. Start the backend on port 6001 (keep this terminal open)
npm run server

# 4. In a second terminal, start the React app
npm run dev
```

- Backend check: http://localhost:6001/plants
- App: the URL Vite prints (usually http://localhost:5173)

## Run the tests

```bash
npm run test
```

Press `q` to quit watch mode, or run `npx vitest run` for a single run.

## Project structure

```
├── db.json                 # the plants "database" for json-server
├── public/images/          # plant pictures
└── src/
    ├── components/
    │   ├── App.jsx
    │   ├── Header.jsx
    │   ├── PlantPage.jsx
    │   ├── NewPlantForm.jsx
    │   ├── Search.jsx
    │   ├── PlantList.jsx
    │   └── PlantCard.jsx
    └── __tests__/
```
