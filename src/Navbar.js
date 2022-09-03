import header from '../assets/header.jpg';

function Navbar() {
    return (
        <>

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
                <img className="img-fluid header-img" src={header} alt="" />
            </div>


        </>
    )
}

export default Navbar