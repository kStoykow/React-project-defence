import { TestimonialItem } from "./TestimonialItem";

export const Testimonial = () => {
    return (
        <section className="client_section layout_padding">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        <span>Testimonial</span>
                    </h2>
                </div>
            </div>
            <div className="container px-0">
                <div id="customCarousel2" className="carousel  carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <TestimonialItem name='Oliv' active='active' />
                        <TestimonialItem name='Peter' />
                        <TestimonialItem name='Isac' />

                    </div>
                    <div className="carousel_btn-box">
                        <a className="carousel-control-prev" href="#customCarousel2" role="button" data-slide="prev">
                            <i className="fa fa-angle-left" aria-hidden="true"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#customCarousel2" role="button" data-slide="next">
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}