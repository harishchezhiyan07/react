
import { Link } from "react-router-dom";

const Navbar = () => {
  const styles = {
    header: {
      backgroundColor: "#1900fd",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      padding: "15px 0",
    },
    container: {
      width: "90%",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      color: "white",
      fontSize: "28px",
      fontWeight: "bold",
    },
    nav: {
      display: "flex",
      gap: "30px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "500",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo}>Logo</div>

        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>
            Home
          </Link>

          <Link to="/about" style={styles.link}>
            About
          </Link>

          <Link to="/contact" style={styles.link}>
            Contact
          </Link>

          <Link to="/help" style={styles.link}>
            Help
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;