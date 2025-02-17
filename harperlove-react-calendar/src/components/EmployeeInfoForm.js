import React from 'react';

/**
 * EmployeeInfoForm component displays a form with a button
 * that says "Enter to screen". This form is part of the additional table.
 */
const EmployeeInfoForm = () => {
  return (
    <div className="employee-info-cell">
      {/* Employee information form */}
      <form name="form1" method="post" action="EmployeeInfo.html">
        <div className="form-container">
          <p>
            {/* Submit button */}
            <input type="submit" name="SubmitContinue" id="SubmitContinue" value="Enter to screen" className="btn-submit" />
          </p>
          <p>
            {/* Placeholder for conditionally rendered content */}
            {/* This can be updated later based on props or context */}
          </p>
        </div>
      </form>
    </div>
  );
};

export default EmployeeInfoForm;
