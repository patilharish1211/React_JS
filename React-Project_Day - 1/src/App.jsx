import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bentley from './assets/bentley-logo.png'
import balls from './assets/balls.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}



      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '80px' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.bentleymotors.com/en.html">
            <img src={bentley} alt="" style={{ height: '100px', marginLeft: '20px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ margin: 'auto' }}>
              <li className="nav-item">
                <a className="nav-link active text-center " aria-current="page" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-center" href="#">ABOUT</a>
              </li>
              <li className="nav-item dropdown">
                {/* <a className="nav-link dropdown-toggle text-center" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    CONTACT
                  </a> */}
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className  ="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul> */}
              </li>
              <li className="nav-item">
                <a className="nav-link active text-center" href="#">CONTACTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-center" href="#">SERVICES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-center" href="#">BLOGS</a>
              </li>
            </ul>
            <form className="d-flex" style={{ marginRight: '20px' }}>
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button> */}
              <a href="https://www.linkedin.com/in/harish-patil-89b53a2ab/"><i class="fa-brands fa-linkedin-in" style={{ padding: '0px 10px', fontSize: '20px', textDecoration: 'none', color: 'black' }}></i></a>
              <a href="https://www.instagram.com/mr.harish_official_12/"><i class="fa-brands fa-instagram" style={{ padding: '0px 10px', fontSize: '20px', textDecoration: 'none', color: 'black' }}></i></a>
              <a href="https://github.com/patilharish1211"><i class="fa-brands fa-github" style={{ padding: '0px 10px', fontSize: '20px', textDecoration: 'none', color: 'black' }}></i></a>
              <a href="https://dribbble.com/"><i class="fa-brands fa-dribbble" style={{ padding: '0px 10px', fontSize: '20px', textDecoration: 'none', color: 'black' }}></i></a>
            </form>
          </div>
        </div>
      </nav>

      <div className="main">
        <div className="container d-flex justify-content-around">
          <div className="content">
            <div className='heading' style={{padding: '10px 0px'}}>
              <h1>Bentley Motors</h1>
            </div>
            <div className='para' style={{marginTop: '25px'}}>
              <p>Bentley Motors Limited is a British designer, manufacturer <br /> and marketer of luxury cars and SUVs. Headquartered in <br /> Crewe, England, the company was founded by W. O. <br /> Bentley in 1919 in Cricklewood, North London</p>
            </div>
            <div className='ball-img'>
              <img src={balls} alt="" style={{height: '100px', marginTop: '50px'}}/>
            </div>
          </div>

          <div className="img">
            <img src="https://i.pinimg.com/564x/62/85/21/6285212d60441805dd955e8d0073bff2.jpg" alt="" style={{height: '350px', width: '320px',marginTop: '15px', borderRadius: '15px'}}/>
          </div>
        </div>
      </div>

      <div className="footer bg-dark d-flex justify-content-around" style={{height: '200px', marginTop: '33.5px'}}>
        <div className="para-1" style={{color: 'white', marginTop: '50px'}}>
          <h5 style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Block header</h5>
          <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Amet provident quae soluta architecto <br /> laboriosam non sequi </p>
        </div>
        <div className="para-2" style={{color: 'white', marginTop: '50px'}}>
        <h5 style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Block header</h5>
        <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Amet provident quae soluta architecto <br /> laboriosam non sequi </p>
        </div>
        <div className="para-3" style={{color: 'white', marginTop: '50px'}}>
        <h5 style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Block header</h5>
        <p style={{textAlign: 'center'}}>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Amet provident quae soluta architecto <br /> laboriosam non sequi </p>
        </div>
      </div>

    </>
  )
}

export default App
