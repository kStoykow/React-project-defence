import { Nav } from "./Nav";
import { Contacts } from "./Contacts";

export const Header = () => {
    return (
        <header className="header_section">
            <Contacts />
            <Nav isUser={false} />
        </header>
    );
}