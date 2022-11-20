import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <div>
      <Link to={"/contact"}><button>contato</button></Link>
    </div>
  );
};

export default ContactButton;
