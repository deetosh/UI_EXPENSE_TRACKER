import React, { useState } from "react";
import "./AllCSS/table.css"; // Optional: Add your CSS file for styling

const DynamicTable = ({ columns, data, onButtonClick, onAddCustomer }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsToShow, setRowsToShow] = useState(5); // Default rows displayed

  // Filter data based on search input
  const filteredData = data.filter((row) =>
    columns.some(
      (col) =>
        row[col] &&
        row[col].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      {/* Controls (Search + Dropdown + Add Customer Button) */}
      <div className="table-controls">
      <div className="table-controls-1">
      <select
          className="row-dropdown"
          value={rowsToShow}
          onChange={(e) => setRowsToShow(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={data.length}>Show All</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
        <button className="add-customer-btn" onClick={onAddCustomer}>
          Add Customer
        </button>
      </div>

      {/* Table */}
      <table className="dynamic-table">
        {/* Table Head */}
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th>Actions</th> {/* For buttons */}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {filteredData.slice(0, rowsToShow).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
              <td className="buttons_container">
                {row.buttons &&
                  row.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className="action-button"
                      onClick={() => onButtonClick(button, row)}
                    >
                      {button.label}
                    </button>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;