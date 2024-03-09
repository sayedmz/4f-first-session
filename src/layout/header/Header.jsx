// import { Link } from "react-router-dom";
// import "./Header.scss";
// const Header = () => {
//   return (
//     <header className="app-header">
//       <div>LOGO </div>

//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about-us">About Us</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/contact-us">Contact</Link>
//           </li>

//           <li>
//             <Link to="/counter">Counter</Link>
//           </li>
//         </ul>
//       </nav>

//       <div>Sign out</div>
//     </header>
//   );
// };
// export default Header;
// To be continue tomorrow: connect the Links with the routes
//2eme methode
import { Link } from "react-router-dom";
import "./Header.scss";
const Links = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About US" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact-us", label: "contact-us" },
  { to: "/counter", label: "Counter" },
  { to: "/dummyData", label: "DummyData" },
  { to: "/destructuring", label: "Destructuring" },
];
const Header = () => {
  return (
    <header className="app-header">
      <div>LOGO </div>
      <nav>
        <ul>
          {Links.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>Sign out</div>
    </header>
  );
};
export default Header;
