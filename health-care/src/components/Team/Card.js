export const Card = () => {
    return (
        <div className="box">
            <div className="img-box"><img src="images/team1.jpg" alt="pic" /></div>
            <div className="detail-box">
                <h5>Hennry</h5>
                <h6>MBBS</h6>
                <div className="social_box"><a href="/"> <i className="fa fa-facebook" aria-hidden="true"></i></a> <a href="/"> <i className="fa fa-twitter" aria-hidden="true"></i></a> <a href="/"> <i className="fa fa-linkedin" aria-hidden="true"></i></a> <a href="/"> <i className="fa fa-instagram" aria-hidden="true"></i></a></div>
            </div>
        </div>
    );
}