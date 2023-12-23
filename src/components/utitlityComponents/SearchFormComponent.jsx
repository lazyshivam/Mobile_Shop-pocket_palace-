import React, { useState } from 'react';
import Filter from './Filter';

const SearchFormComponent = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="mt-10 relative">
      {/* Show/Hide Filter Button for Small Screens */}
      <div className="md:hidden mb-4  absolute left-0 top-70">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="p-2 hover:cursor-pointer rounded-full bg-teal-200"
        >
          {showFilter ? 'Hide Filter' : 'Show Filter'}
        </button>
      </div>

      {/* Filter Popup for Small Screens */}
      {showFilter && (
        <div className="rounded-xl border border-gray-200 bg-white shadow-lg absolute left-0 top-20">
          {/* ... (rest of the existing code for the filter form) ... */}
          <Filter />
        </div>
      )}

      {/* Filter Form for Medium and Large Screens */}
      <div className={`hidden md:block rounded-xl border border-gray-200 bg-white shadow-lg `}>
        {/* ... (rest of the existing code for the filter form) ... */}
        <Filter />
      </div>
    </div>
  );
};

export default SearchFormComponent;
