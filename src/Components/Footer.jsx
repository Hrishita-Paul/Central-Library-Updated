import { Icon } from "@iconify/react";
import "./Footer.css";
const Footer=()=>{
    return (
    <footer className="footer">
    <a href="http://www.nits.ac.in"  target="_blank" rel="noreferrer"><Icon icon="fluent-mdl2:website" width="40px" height="40px" /></a>
    <a href="https://www.linkedin.com/school/national-institute-of-technology-silchar"  target="_blank"  rel="noreferrer"> <Icon icon="ph:linkedin-logo-fill" color="#0A66C2" width="40px" height="40px" /></a>
    <a href="https://www.facebook.com/NIT.Silchar.Assam.India/" target="_blank"  rel="noreferrer"><Icon icon="fluent-mdl2:facebook-logo" width="40px" height="40px" color="#4267B2" /></a>
  </footer>
    )
}
export default Footer;