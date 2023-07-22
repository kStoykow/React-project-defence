import { Route } from 'react';
import { Treatment } from '../Treatment/Treatment';


export const Nav = ({ isUser, isGuest, isDoc, isAdmin }) => {
    return (
        <div className="header_bottom">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="index.html">
                        <img src="images/logo.png" alt="" />
                    </a>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <Route path='/treatment' element={<Treatment />} />
                                    {/* <a className="nav-link" href="/">Treatment</a> */}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Doctors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Testimonial</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"> About</a>
                                </li>
                            </ul>
                        </div>


                        <div className="quote_btn-container">
                            {isAdmin && (<a href="/"><span>Admin panel</span></a>)}
                            {isUser && (
                                isDoc
                                    ? <div>
                                        <a href="/"><span>Create Appointments</span></a>
                                        <a href="/"><i className="fa fa-user" aria-hidden="true"></i><span>Profile page</span></a>
                                        <a href="/"><i className="fa fa-user" aria-hidden="true"></i><span>Logout</span></a>
                                    </div>

                                    : <div>
                                        <a href="/"><i className="fa fa-user" aria-hidden="true"></i><span>Profile page</span></a>
                                        <a href="/"><i className="fa fa-user" aria-hidden="true"></i><span>Logout</span></a>
                                    </div>
                            )}

                            {isGuest && (
                                <div>
                                    <a href="/">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <span>
                                            Login
                                        </span>
                                    </a>

                                    <a href="/">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <span>
                                            Sign Up
                                        </span>
                                    </a>
                                </div>)}

                            <form className="form-inline">
                                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav >
            </div >
        </div >
    );
}