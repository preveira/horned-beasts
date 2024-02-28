import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './assets/data.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">💖 Like</Button>
      </Card.Body>
    </Card>
  );
}

function App() {

  return (
    <div>
      <Header />
      <BasicExample />
      <Footer />
    </div>
  );
}

export default App;
