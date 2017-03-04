import {render} from "react-dom";
import React from 'react';
import Container from "./components/container/container";
import AppNavbar from "./components/navbar/appnavbar";
import PageHeader from "react-bootstrap/lib/PageHeader";
import Bars from "./components/bars/bars";

const App = () => (
  <div>
    <AppNavbar brand="React Progress Bar" />
    <Container>
      <PageHeader>React Progress Bar</PageHeader>
      <p>A ReactJS Progress Bar project that supports JavaScript ES7
         transpilation to ES5 through Babel, linting with ESLint,
       and bundling via Webpack.</p>
      <Bars barPercentage={25} />
      <Bars barPercentage={50} />
      <Bars barPercentage={75} />
    </Container>
  </div>
);

render(<App />, document.getElementById('app'));
