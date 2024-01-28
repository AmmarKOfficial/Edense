const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.paragraph}>Oops! The page you are looking for does not exist.</p>
      <img
        src="https://as2.ftcdn.net/v2/jpg/03/88/63/83/1000_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" // Replace with your custom image URL
        alt="Page Not Found"
        style={styles.image}
      />
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '50px',
  },
  heading: {
    fontSize: '48px',
    color: '#333',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '40px',
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
  },
};

export default NotFound;
