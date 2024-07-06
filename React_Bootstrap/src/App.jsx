import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Button from 'react-bootstrap/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="">
     <Container>
      <div className="row mt-5 pt-5">
     <div className="col-6 mt-5 pt-5 mb-5">
      <h1 className='fw-bold'>Hi, Hi, I'm John Deo.</h1>
       <h5 className='col-6'>In publishing and graphic design, Lorem ipsum is a placeholder </h5>
       <p> Lorem ipsum may be used as a</p>
       <Button variant="danger">I'M AVAILABLE</Button>
     </div>
     <div className="col-6">
      <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQfMUY4UD8DJtdrqyNeP4tZ5S85fkr8-fS3myqiPkOznI9uQIY" alt="" className='col-10 mt-5' />
     </div>
     </div>
    </Container>
     </div>
    </>
  )
}

export default App