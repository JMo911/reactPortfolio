import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Navbar,
  MyJumbotron,
  Headshot,
  ContactForm, 
  ProjectCard
} from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">      
      <Router>
      <Navbar></Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <MyJumbotron>
              <Headshot
              picsrc = '/images/reactPortfolioDefaultPic.jpg'
              ></Headshot>

            </MyJumbotron>
          </Route>
          <Route path="/workprojects">
            <ProjectCard></ProjectCard>
          {/* {this.state.Projects.map(({id, name, image, guessed}) =>
          <ProjectCards
          key={id}
          name={name}
          image = {image}
          guessed = {guessed}
          gamePlay = {((e) => this.handleClick(e, id))}>
          </ProjectCards>
        )} */}
          </Route>
          <Route path="/contact">
            <ContactForm></ContactForm>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
