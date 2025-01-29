import React from "react";
import "./AllCSS/table.css"; // Optional: Add your CSS file for styling

const DynamicTable = ({ columns, data, onButtonClick }) => {
  return (
    <div className="table-container">
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
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
              <td>
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