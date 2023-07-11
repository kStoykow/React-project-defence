import { useState, useEffect } from 'react';

export const Copyrights = () => {
    const [year, setYear] = useState('');
    const currentYear = new Date().getFullYear();

    useEffect(() => setYear(currentYear), [currentYear])

    return (
        <footer className="footer_section">
            <div className="container">
                <p>
                    &copy; <span id="displayYear">{year}</span> All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
            </div>
        </footer>
    );
}