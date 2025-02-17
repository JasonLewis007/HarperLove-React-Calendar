import React from 'react';

/**
 * SearchCalendarForm component displays a form that allows
 * users to enter a screen for searching the calendar.
 */
const SearchCalendarForm = () => {
  return (
    <div className="search-calendar-cell">
      {/* Search calendar form */}
      <form name="form3" method="post" action="SearchMenu.html">
        <div className="form-container">
          <p>
            {/* Submit button */}
            <input type="submit" name="SubmitSearch" id="SubmitSearch" value="Enter to Screen" className="btn-submit" />
          </p>
          {/* Hidden inputs to store group and user data */}
          <input type="hidden" name="hiddenGroupName" id="hiddenGroupName" value="SampleGroupName" />
          <input type="hidden" name="hiddenUserName" id="hiddenUserName" value="SampleUserName" />
          <input type="hidden" name="hiddenWhoAmI" id="hiddenWhoAmI" value="SampleWhoAmI" />
        </div>
      </form>
    </div>
  );
};

export default SearchCalendarForm;
