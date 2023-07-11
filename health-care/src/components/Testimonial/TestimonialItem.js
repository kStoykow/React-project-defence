export const TestimonialItem = ({
    name,
    active
}) => {
    return (
        <div className={'carousel-item ' + active}>
            <div className="box">
                <div className="client_info">
                    <div className="client_name">
                        <h5>
                            {name}
                        </h5>
                        <h6>
                            Default model text
                        </h6>
                    </div>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
                <p>
                    Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </p>
            </div>
        </div>
    );
}