import React from 'react';

// The ChangePassword component conditionally renders a "Change My Password" form
const ChangePassword = ({ canChangePassword }) => {
  // If canChangePassword is false, nothing will be rendered
  if (!canChangePassword) {
    return null; // Returning null means the component renders no output
  }

  // Otherwise, render the password change form
  return (
    <div className="change-password-section">
      {/* The form submits to "ChangePassword.html" */}
      <form method="post" action="ChangePassword.html">
        <p>
          {/* The button to trigger the password change */}
          <input
            type="submit"
            value="Change My Password"
            className="btn-submit"
          />
          {/* Hidden fields can be added here if needed to pass extra data */}
        </p>
      </form>
    </div>
  );
};

export default ChangePassword;
