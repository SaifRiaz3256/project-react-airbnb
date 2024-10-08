import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaSnapchatGhost } from "react-icons/fa";


const Footer = () => {
  const icons = [
    <BsTwitter />,
    <BsInstagram />,
    <BsFacebook />,
    <FaSnapchatGhost />,
  ];
  
  return (
    <div className="footer">
      {icons.map((icon, index) => (
        <div key={index} className="footer-icon">
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Footer;
