export const SliderItem = ({ active, title }) => {
    const [first, ...rest] = title.split(' ');
    return (
        <div className={"carousel-item " + active}>
            <div className="container ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                          
                            <h1>
                                {first} <br />
                                <span>
                                    {rest.join(' ')}
                                </span>
                            </h1>
                            <p>
                                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                            </p>
                            <a href="/">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src="images/slider-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}