import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <p className="copyright">Copyright &copy; 2023</p>
      <Link to="/about">About</Link>
    </footer>
  );
}
