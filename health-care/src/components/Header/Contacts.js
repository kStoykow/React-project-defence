export const Contacts = () => {
    return (
        <div className="header_top">
            <div className="container">
                <div className="contact_nav">
                    <a href="/">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>
                            Call : +01 123455678990
                        </span>
                    </a>
                    <a href="/">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>
                            Email : demo@gmail.com
                        </span>
                    </a>
                    <a href="/">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span>
                            Location
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}