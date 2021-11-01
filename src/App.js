import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
const About = React.lazy(() => import('./Components/About'));
const Showcase = React.lazy(() => import("./Components/Showcase"));
const Skills = React.lazy(() => import("./Components/Skills"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Helmet>
            <title>AmreshSinha | Home</title>
            <meta name="AmreshSinha" content="Amresh's Portfolio" />
          </Helmet>
          <Landing />
        </Route>
        <Route path="/about">
          <Helmet>
            <title>AmreshSinha | About</title>
            <meta name="AmreshSinha" content="Amresh's Portfolio" />
          </Helmet>
          <Suspense fallback={<div class="lds-circle"><div></div></div>}>
            <About />
          </Suspense>
        </Route>
        <Route path="/showcase">
          <Helmet>
            <title>AmreshSinha | Showcase</title>
            <meta name="AmreshSinha" content="Amresh's Portfolio" />
          </Helmet>
          <Suspense fallback={<div Style="color: white">Loading...</div>}>
            <Showcase />
          </Suspense>
        </Route>
        <Route path="/skills" exact>
          <Helmet>
            <title>AmreshSinha | Skills</title>
            <meta name="AmreshSinha" content="Amresh's Portfolio" />
          </Helmet>
          <Suspense fallback={<div Style="color: white">Loading...</div>}>
            <Skills />
          </Suspense>
        </Route>
        {/* <Route path="/experience" exact>
          <Experience />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
