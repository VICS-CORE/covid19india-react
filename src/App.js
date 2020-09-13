import './App.scss';
import About from './components/about';
import Blog from './components/blog';
import Navbar from './components/navbar';
import ScrollToTop from './utils/ScrollToTop';

import React, {lazy, useState, Suspense} from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useLocation,
} from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

const Home = lazy(() =>
  import('./components/home' /* webpackChunkName: "Home" */)
);
const State = lazy(() =>
  import('./components/state' /* webpackChunkName: "State" */)
);

// const LanguageSwitcher = lazy(() =>
//   import(
//     './components/languageswitcher' /* webpackChunkName: "LanguageSwitcher" */
//   )
// );

const VideoPlayer = lazy(
  () => import('./components/videoplayer') /* webpackChunkName: "VideoPlayer" */
);

const States = lazy(
  () => import('./components/states') /* webpackChunkName: "States" */
);

const schemaMarkup = {
  '@context': 'http://schema.org/',
  '@type': 'NonProfit',
  name: 'Coronavirus Projections for India',
  alternateName: 'COVID-19 Tracker',
  url: 'https://seva.ml/',
  image: 'https://www.covid19india.org/thumbnail.png',
};

ReactGA.initialize('UA-165213678-1');

function App() {
  const darkMode = useDarkMode(true);
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/about',
      view: About,
      displayName: 'About',
      showInNavbar: true,
    },
    {
      pageLink: '/blog',
      view: Blog,
      displayName: 'Blog',
      showInNavbar: true,
    },
    {
      pageLink: '/state/:stateCode',
      view: State,
      displayName: 'State',
      showInNavbar: false,
    },
    {
      pageLink: '/videoplayer',
      view: VideoPlayer,
      displayName: 'Video Player',
      showInNavbar: false,
    },
    {
      pageLink: '/states',
      view: States,
      displayName: 'States Prediction Charts',
      showInNavbar: false,
    },
  ];

  return (
    <Suspense fallback={<div />}>
      <ScrollToTop />
      <Navbar
        pages={pages}
        {...{darkMode}}
        {...{showLanguageSwitcher, setShowLanguageSwitcher}}
      />
      <Route
        render={({location}) => (
          <React.Fragment>
            <Switch location={location}>
              {pages.map((page, index) => {
                return (
                  <Route
                    exact
                    path={page.pageLink}
                    render={({match}) => <page.view />}
                    key={index}
                  />
                );
              })}
              <Redirect to="/" />
            </Switch>
          </React.Fragment>
        )}
      />
    </Suspense>
  );
}

ReactDOM.render(
  <div className="App">
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </Helmet>

    {/* <Suspense fallback={<div />}>
        <LanguageSwitcher
          {...{showLanguageSwitcher, setShowLanguageSwitcher}}
        />
      </Suspense> */}

    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById('root')
);

export default App;
