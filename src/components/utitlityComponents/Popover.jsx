import React from "react";

const Popover = ({ isOpen, onClose, children }) => {
  const overlayClasses = isOpen ? "fixed inset-0 bg-black opacity-50" : "hidden";
  const modalClasses = isOpen ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md" : "hidden";

  return (
    <div>
      {/* Overlay */}
      <div
        className={overlayClasses}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className={modalClasses}>
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popover;
