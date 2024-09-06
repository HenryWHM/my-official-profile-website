const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>Welcome to the Professor's Den</h1>
        <div className="links">
          <a href="/create" style={{
            color: 'red',
            borderRadius: '8px'
          }}><bold>Contacts</bold></a>
        </div>
      </nav>
    );
  }

export default Navbar;