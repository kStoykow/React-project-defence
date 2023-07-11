export const Card = ({
    name,
    imageUrl,
    spec,
    city,
    description }) => {

    const onDetailsClick = () => {
        //TODO open details;
        console.log(1);
    }
    const onSocialClick = (e) => {
        e.preventDefault();
        //TODO open some link;
        console.log(2);
    }

    return (
        <div className="owl-item active" style={{ width: "240px", marginRight: "15px" }}>
            <div className="item" >
                <div className="owl-item active" style={{ width: "240px", marginRight: "15px" }}>
                    <div className="item"></div>
                    <div className="box">
                        <div className="img-box" onClick={onDetailsClick} style={{ cursor: 'pointer' }}><img src={imageUrl} alt="pic" />
                            <div className="detail-box">
                                <h5>{name}</h5>
                                <h6>{spec}</h6>
                            </div>
                        </div>
                        <div className="social_box">
                            <a href="/" onClick={onSocialClick}> <i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="/" onClick={onSocialClick}> <i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="/" onClick={onSocialClick}> <i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="/" onClick={onSocialClick}> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div></div >
    );
}