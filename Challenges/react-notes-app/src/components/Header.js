const Header = ({ darkMode, handleToggleDarkMode }) => {
  return (
    <header className="header">
      <h1 className="header">Notes</h1>
      <button
        onClick={() => handleToggleDarkMode((prevMode) => !prevMode)}
        className="save"
      >
        {`${darkMode ? "Light Mode ☀️" : "Dark Mode 🌛"}`}
      </button>
    </header>
  );
};

export default Header;
