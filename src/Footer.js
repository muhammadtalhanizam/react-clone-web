// import email from '../assets/email.png';
// import followUs from '../assets/followUs.png';
// import subscribe from '../assets/subscribe.png';

import solution from '../assets/solution.png';



function Footer() {
    return (
        <>
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
                        <input />   <h4>subscribe</h4>
                    </div>
                </div>

            </section>

        </>
    )

}

export default Footer;