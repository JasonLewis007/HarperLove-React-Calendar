// Import React to define the Welcome component.
import React from 'react';

// Define a functional component that accepts props (username and groupName).
const Welcome = ({ username, groupName }) => {
  return (
    // Wrap the welcome message in a div for styling.
    <div className="welcome">
      {/* Display the username as part of a welcoming message */}
      <h1>Welcome {username}</h1>
      {/* Conditionally render a note about the group if the user is an admin */}
      {groupName === 'ADMIN' && (
        <p>You are part of the {groupName} Group</p>
      )}
    </div>
  );
};

// Export the Welcome component so it can be used in other files.
export default Welcome;

