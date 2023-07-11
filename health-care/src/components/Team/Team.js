import { Card } from "./Card";

export const Team = () => {
    return (
        <section className="team_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>Our <span>Doctors</span></h2>
                </div>
                <div className="carousel-wrap">
                    <div className="owl-carousel team_carousel owl-loaded owl-drag">

                        <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: "translate3d(-1420px, 0px, 0px)", transition: "all 0.25s ease 0s", width: "3195px" }}><div className="owl-item cloned" style={{ width: '340px', marginRght: '15px' }}><div className="item">
                            <Card />
                        </div></div><div className="owl-item cloned" style={{ width: "340px", marginRight: "15px" }}><div className="item">
                            <Card />
                        </div></div><div className="owl-item cloned" style={{ width: "340px", marginRight: "15px" }}><div className="item">
                            <Card />
                        </div></div><div className="owl-item" style={{ width: "340px", marginRight: "15px" }}><div className="item">
                            <Card />
                        </div></div><div className="owl-item active" style={{ width: "340px", marginRight: "15px" }}><div className="item">
                            <Card />
                        </div></div><div className="owl-item active" style={{ width: "340px", marginRight: "15px" }}><div className="item">
                            <Card />
                        </div></div><div className="owl-item cloned active" style={{ width: "340px", marginRight: "15px" }}><div className="item">
                            <Card />
                        </div></div><div className="owl-item cloned" style={{ width: "340px", marginRight: "15px" }}><div className="item">
                            <Card />
                        </div></div><div className="owl-item cloned" style={{ width: "340px", marginRight: "15px" }}><div className="item">
                            <Card />

                        </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><i className="fa fa-angle-left" aria-hidden="true"></i></button><button type="button" role="presentation" className="owl-next"><i className="fa fa-angle-right" aria-hidden="true"></i></button></div><div className="owl-dots disabled"><button className="owl-dot active"><span></span></button></div></div>
                </div>
            </div>
        </section>
    );
}