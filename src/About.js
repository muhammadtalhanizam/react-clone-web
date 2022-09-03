import commitment from '../assets/commitment.png';
import graph from '../assets/graph.png';
import solution from '../assets/solution.png';



function About() {
    return (

        <>
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

        </>
    )
}


export default About;