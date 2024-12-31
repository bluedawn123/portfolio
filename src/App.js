import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from './data.js';
import { useState } from 'react';

function App() {
  let [sites] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Yoon's Portfolio</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">About me</Nav.Link>
            <Nav.Link href="#contactMe">Contact me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          <Card sites={sites[0]} />
          <Card sites={sites[1]} />
          <Card sites={sites[2]} />
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  // 이미지 파일 이름 생성
  const imageName = props.sites.title.toLowerCase() + '.jpg';

  return (
    <div className="col-md-4">
      <img
        src={process.env.PUBLIC_URL + '/' + imageName}
        className="card-img"
        alt={props.sites.image_name}
      />
      <h4>{props.sites.title}</h4>
      <p>{props.sites.content}</p>
    </div>
  );
}

export default App;