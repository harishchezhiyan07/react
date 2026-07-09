function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2563eb",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>My Website</h2>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;