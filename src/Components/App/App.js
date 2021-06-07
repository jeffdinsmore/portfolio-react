import logo from './../../logo.svg';
import './App.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const BodyStyling = styled.div`
  // background-color: lightGray;
  // text-align: center;
  padding: 6px 0px 16px 0px;
  padding-left: 10%;
  padding-right: 10%;
  // border-radius: 20px;
`;


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/login">
          <BodyStyling>
            <Signin />
          </BodyStyling>
        </Route> */}
        {/* <Route path="/signup">
          <BodyStyling>
            <Signup />
          </BodyStyling>
        </Route>
        <Route path="/yourstats">
          <BodyStyling>
            <YourStats />
          </BodyStyling>
        </Route>
        <Route path="/foodlist">
          <BodyStyling>
            <FoodItemControl />
          </BodyStyling>
        </Route> */}
        {/* <Route path="/">
          <BodyStyling>
            <Homepage />
          </BodyStyling>
        </Route> */}
      </Switch>
      <Footer />
    </Router>
    // <Container maxWidth="sm" className="App">
    //   <Paper>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Nope
    //     </Typography>
    //     <Button variant="contained" color="primary">
    //       Primary Button
    //     </Button>&nbsp; &nbsp;
    //     <Button variant="contained" color="secondary">
    //       Secondary Button
    //     </Button>
    //   </Paper>
    // </Container>
  );
}

export default App;
