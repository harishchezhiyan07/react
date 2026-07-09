const Home = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "20px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      textAlign: "center",
    },
    heading: {
      color: "#2563eb",
      fontSize: "48px",
      fontWeight: "bold",
      margin: 0,
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Home</h1>
        </div>
      </div>
    </>
  );
};

export default Home;