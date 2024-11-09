import './Header.css'; // Import the CSS file here
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <h1>Rorac Johnson</h1> {/* This will have the rainbow and growth effect */}
      <Navigation />
    </header>
  );
}

export default Header;
