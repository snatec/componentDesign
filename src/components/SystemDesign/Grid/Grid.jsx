import React, { useState } from "react";

export default function EditableGrid() {
  const initialRows = 3;
  const initialCols = 3;

  const createGrid = (rows, cols) => {
    return Array.from({ length: rows }, function () {
      return Array(cols).fill("");
    });
  };

  const [grid, setGrid] = useState(createGrid(initialRows, initialCols));

  // Update a single cell
  const updateCell = (rowIndex, colIndex, value) => {
    setGrid(function (prevGrid) {
      return prevGrid.map(function (row, r) {
        if (r !== rowIndex) return row;

        return row.map(function (cell, c) {
          if (c !== colIndex) return cell;
          return value;
        });
      });
    });
  };

  // Add new row
  const addRow = () => {
    setGrid(function (prev) {
      const cols = prev[0].length;
      return [...prev, Array(cols).fill("")];
    });
  };

  // Add new column
  const addColumn = () => {
    setGrid(function (prev) {
      return prev.map(function (row) {
        return [...row, ""];
      });
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Editable Grid</h2>

      <div style={{ marginBottom: 10 }}>
        <button onClick={addRow}>Add Row</button>
        <button onClick={addColumn} style={{ marginLeft: 10 }}>
          Add Column
        </button>
      </div>

      <table border="1" cellPadding="5">
        <tbody>
          {grid.map(function (row, r) {
            return (
              <tr key={r}>
                {row.map(function (cell, c) {
                  return (
                    <td key={c}>
                      <input
                        value={cell}
                        onChange={function (e) {
                          updateCell(r, c, e.target.value);
                        }}
                        aria-label={"Row " + (r + 1) + " Column " + (c + 1)}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
