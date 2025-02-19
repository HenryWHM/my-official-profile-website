const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Welcome to the Real World</h1>
        <div className="links">
          <a href="/contacts" style={{
            color: 'red',
            borderRadius: '8px'
          }}><bold>Contacts</bold></a>
        </div>
      </nav>
    );
  }

export default Navbar;