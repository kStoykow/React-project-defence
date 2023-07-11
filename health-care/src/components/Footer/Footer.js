import { Copyrights } from './Copyrights';

import { Contacts } from "./Contacts";
import { Links } from "./Links";
import { News } from "./News";
import { Posts } from "./Posts";

export const Footer = () => {
    return (
        <div>
            <section className="info_section ">
                <div className="container">
                    <div className="info_top">
                        <div className="info_logo">
                            <a href="/">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="info_form">
                            <form action="">
                                <input type="email" placeholder="Your email" />
                                <button>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="info_bottom layout_padding2">
                        <div className="row info_main_row">
                            <Contacts />
                            <Links />
                            <Posts />
                            <News />
                        </div>
                    </div>
                </div>
            </section>
            <Copyrights />
        </div>
    );
}