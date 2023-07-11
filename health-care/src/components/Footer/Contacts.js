export const Contacts = () => {
    return (
        <div className="col-md-6 col-lg-3">
            <h5>
                Address
            </h5>
            <div className="info_contact">
                <a href="/">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                        Location
                    </span>
                </a>
                <a href="/">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                        Call +01 1234567890
                    </span>
                </a>
                <a href="/">
                    <i className="fa fa-envelope"></i>
                    <span>
                        demo@gmail.com
                    </span>
                </a>
            </div>
            <div className="social_box">
                <a href="/">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="/">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="/">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="/">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}