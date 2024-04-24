import React from "react";
import './Footer.css'
 
const Footer: React.FC = () => {
    const curYear = new Date().getFullYear();
    return ( 
        <footer id="footer" className="footer">
            <div className="footer-container">
                <h5>&copy; {curYear} M.Tavarez-Feliciano.</h5>
            </div>
        </footer>
     );
}
 
export default Footer;