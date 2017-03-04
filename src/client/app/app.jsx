import {render} from "react-dom";
import React from 'react';
import Container from "./components/container/container";
import AppNavbar from "./components/navbar/appnavbar";
import ProgressBar from "./components/progressBar/progressBar";
import PageHeader from "react-bootstrap/lib/PageHeader";

const App = () => (
  <div>
    <AppNavbar brand="React Progress Bar" />
    <Container>
      <PageHeader>React Progress Bar</PageHeader>
      <p>A ReactJS Progress Bar project that supports JavaScript ES7
         transpilation to ES5 through Babel, linting with ESLint,
       and bundling via Webpack.</p>
      <ProgressBar />
    </Container>
  </div>
);

render(<App />, document.getElementById('app'));
