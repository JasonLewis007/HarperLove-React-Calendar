// Importing the React library, which is necessary for creating React components.
import React from 'react';

// Defining a functional component named Header.
const Header = () => {
  // The component returns JSX, which is a syntax extension that looks like HTML but is used in React.
  return (
    <header>
      {/* A container for the logo */}
      <div className="logo">
        {/* Including an image for the logo */}
        <img src="/images/HarperLoveLOGOCOLOR - no background.png" alt="HarperLove Logo" />
      </div>
      
      {/* A container for the logout link */}
      <div className="logout">
        {/* A clickable link that takes the user back to the home page */}
        <a href="/" title="Log out of Calendar Tracking">
          Signout
        </a>
      </div>
    </header>
  );
};

// Exporting the Header component so it can be imported and used in other files.
export default Header;

