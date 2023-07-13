import { Card } from "./Card";
import { doctors } from "../../constants";

export const Team = () => {

    return (
        <section className="team_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>Our <span>Doctors</span></h2>
                </div>
                <div className="carousel-wrap">
                    <div className="owl-carousel team_carousel owl-loaded owl-drag">

                        <div className="owl-stage-outer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {doctors.map(e => <Card key={e.id} {...e} />)}
                        </div>

                        {doctors.length > 4 && (
                            <div className="link">
                                <a href="/">See all doctors</a>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section >
    );
}