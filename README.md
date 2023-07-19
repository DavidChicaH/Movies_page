# My moobees project using TMDB API

---

## How i made this project

For this project, I challenged my skills by using several tools, libraries, and utilities to consume and manipulate data from the TMDB API:

- [Vite](https://vitejs.dev) as a build tool
- [React](https://react.dev) as library to build the UI
- [React Router](https://reactrouter.com) to handle the routes
- [Tailwind](https://tailwindcss.com) as CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) to use icons
- [React Loader Spinner](https://mhnpd.github.io/react-loader-spinner/docs/intro/) to use a loader spinner
- [Framer Motion](https://www.framer.com/motion/) to animate the UI

In addition, for global status management, I made use of the **Context API**, which is a native React feature.

[Live Demo](https://moobees-three.vercel.app)

## How to run this project

- To run this project, you need to have [Node.js](https://nodejs.org) installed on your machine. Then, you can clone this repository and run the following commands:

```bash
git clone https://github.com/DavidChicaH/Movies_page.git

cd Movies_page
```

- Also, you need a [TMDB](https://developer.themoviedb.org/docs) account to get an API key to be able to make requests.

- Once you have the API key, you need to create a `.env` file in the root of the project and add the following lines:

```javascript
VITE_NEW_MOVIES_API_URL = "https://api.themoviedb.org/3/discover/movie";

VITE_API_KEY = "Your API key here";

VITE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

VITE_API_GENRES = "https://api.themoviedb.org/3/genre/movie/list";

VITE_API_SEARCH = "https://api.themoviedb.org/3/search/movie";
```

- After you have done the above, you will install all the dependencies needed to run the project.

```bash
  npm install
```

- finally, you can run the project with the following command:

```bash
  npm run dev
```

>#### That would be all. If you have any suggestions or improvements for this project, I will be happy to receive them, don't forget to leave me a star if you liked my project :D.