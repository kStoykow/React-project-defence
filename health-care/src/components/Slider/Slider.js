import { SliderItem } from "./SliderItem";

export const Slider = () => {
    return (
        <section className="slider_section ">
            <div className="dot_design">
                <img src="images/dots.png" alt="" />
            </div>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <SliderItem active='active' title='Rehab and Massage' />
                    <SliderItem title='Eye Care' />
                </div>
                <div className="carousel_btn-box">
                    <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                        <img src="images/prev.png" alt="<" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                        <img src="images/next.png" alt=">" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </section>
    );
}