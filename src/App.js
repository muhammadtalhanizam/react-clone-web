
import header from '../assets/header.jpg';
import commitment from '../assets/commitment.png';
// import email from '../assets/email.png';
import files from '../assets/files.png';
// import followUs from '../assets/followUs.png';
import graph from '../assets/graph.png';
import lists from '../assets/lists.png';
import services from '../assets/services.jpg';
import solution from '../assets/solution.png';
import video from '../assets/video.png'
// import subscribe from '../assets/subscribe.png';
import Navbar from './Navbar';

import './App.css';

function App() {
  
  return (
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
    <Navbar/>

  <nav className="navbar navbar-expand-lg bg-light header">
  <div className="container-fluid ">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item btn-active">
          <button className="btn nav-link " aria-current="page" href="/">Communinty</button>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Porrtfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Inspiration</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Jobs</a>
        </li>
       
      </ul>
    </div>

    
  </div>
</nav>

<div>
    <img className="img-fluid header-img" src={header} alt=""/>
</div>


<section className='card-container px-5'>
    <div className='col-xs-6 col-md-3 col-sm-4 ' >
    <div className='card mainCard'>
    <div className="card-body ">
    <h5 className="card-title">Services</h5>
    <img src={services} className="card-img-top" alt="..."></img>
    <p className="card-main-text">Some quick example</p>
    <small className="card-small-text">Some quick example</small>
    <hr/>
    <p className="card-main-text">Some quick example</p>
    <p className="card-main-text">Some quick example</p>
    <p className="card-main-text">Some quick example</p>
    </div>
    </div>
    </div>

    <div className='col-xs-6 col-md-3 col-sm-4 ' >
    <div className='card mainCard'>
    <div className="card-body ">
    <h5 className="card-title">Shared Files</h5>
    <img src={files} className="card-img-top" alt="..."></img>
    <p className="card-main-text">Some quick example</p>
    <small className="card-small-text">Some quick example</small>
    <hr/>
    <p className="card-main-text">Some quick example</p>
    <p className="card-main-text">Some quick example</p>
    <p className="card-main-text">Some quick example</p>
    </div>
    </div>
    </div>

    <div className='col-xs-6 col-md-3 col-sm-4 ' >
    <div className='card mainCard'>
    <div className="card-body ">
    <h5 className="card-title">Manage Lists  Subscribers</h5>
    <img src={lists} className="card-img-top" alt="..."></img>
    <p className="card-main-text">Some quick example</p>
    <small className="card-small-text">Some quick example</small>
    <hr/>
    <p className="card-main-text">Some quick example</p>
    <p className="card-main-text">Some quick example</p>
    <p className="card-main-text">Some quick example</p>
    </div>
    </div>
    </div>


    <div className='col-xs-6 col-md-3 col-sm-4 ' >

    <div className='card mainCard'>
    <div className="card-body ">
    <h5 className="card-title">Videos & Photos</h5>
    <img src={video} className="card-img-top" alt="..."></img>
    <p className="card-main-text">Some quick example</p>
    <small className="card-small-text">Some quick example</small>
    <hr/>
    <p className="card-main-text">Some quick example</p>
    <p className="card-main-text">Some quick example</p>
    <p className="card-main-text">Some quick example</p>
    </div>
    </div>
    </div>

</section>

<section className="about-section">
  <div className='about-content' >
    <h5 className=''> Commited to Our Clients </h5>
    <img src={commitment} className="card-img-top" alt="..."></img>
    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button className="btn">Read More</button>
  </div>

  <div className='about-content' >
    <h5 > Solutions for Bottom Line </h5>
    <img src={solution} className="card-img-top" alt="..."></img>
    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <button className="btn">Read More</button>
  </div>

  <div className='about-img' >
    
    <img src={graph} className="img-fluid" alt="..."></img>
    
  </div>
</section>

<section className='footer'>
  <div className='footer-content'>
    <div className='footer-content-top d-flex'>
    <div>
     <img src={solution} className="card-img-top" alt="..."></img>
    </div>
    <div className='footer-content-heading'>
      <h5>SUBSCRIBE</h5>
      <h4> GET NEWSLETTERS</h4>   
    </div>
    </div>
    <div className='footer-content-text d-flex'>
      <input/>   <h4>subscribe</h4>
    </div>
    </div>

</section>

    </>
  );
}

export default App;
