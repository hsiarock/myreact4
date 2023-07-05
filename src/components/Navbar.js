import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
    <div>
        <Link to={"/"}>Home</Link><br />
        <Link to={"/contact"}>Contact</Link><br />
        <Link to={"/profile"}>Profile</Link><br />
    </div>
    );
}