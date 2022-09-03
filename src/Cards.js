import files from '../assets/files.png';
import lists from '../assets/lists.png';
import services from '../assets/services.png';
import video from '../assets/video.png'





function Cards() {
    return (
        <>


            <section className='card-container px-5'>
                <div className='col-xs-6 col-md-3 col-sm-4 ' >
                    <div className='card mainCard'>
                        <div className="card-body ">
                            <h5 className="card-title">Services</h5>
                            <img src={services} className="card-img-top" alt="..."></img>
                            <p className="card-main-text">Some quick example</p>
                            <small className="card-small-text">Some quick example</small>
                            <hr />
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
                            <hr />
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
                            <hr />
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
                            <hr />
                            <p className="card-main-text">Some quick example</p>
                            <p className="card-main-text">Some quick example</p>
                            <p className="card-main-text">Some quick example</p>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )

}


export default Cards;