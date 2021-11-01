import React, { Suspense } from "react";
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
          <Landing />
        </Route>
        <Route path="/about">
          <Suspense fallback={<div class="lds-circle"><div></div></div>}>
            <About />
          </Suspense>
        </Route>
        <Route path="/showcase">
          <Suspense fallback={<div Style="color: white">Loading...</div>}>
            <Showcase />
          </Suspense>
        </Route>
        <Route path="/skills" exact>
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
