import React, { useEffect, useState } from "react";

const recipesData = [
  { id: 1, name: "Pizza", category: "Lunch", prepTime: 30 },
  { id: 2, name: "Pancakes", category: "Breakfast", prepTime: 15 },
  { id: 3, name: "Burger", category: "Lunch", prepTime: 25 },
  { id: 4, name: "Salad", category: "Dinner", prepTime: 10 },
  { id: 5, name: "Pasta", category: "Dinner", prepTime: 20 },
  { id: 6, name: "Omelette", category: "Breakfast", prepTime: 5 },
  { id: 7, name: "Omelette", category: "Breakfast", prepTime: 5 },
  { id: 8, name: "Omelette", category: "Breakfast", prepTime: 5 }
];

export default function RecipesTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState('asc'); // asc | desc
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  useEffect(() => {
  const sorted = [...recipesData].sort((a, b) => a.prepTime - b.prepTime);
  setData(sorted);
}, []);

  const handleSortPrepTime = () => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);

    const sorted = [...data].sort((a, b) =>
      order === "asc" ? a.prepTime - b.prepTime : b.prepTime - a.prepTime
    );

    setData(sorted);
  };

  const filteredData = data.filter((item) => (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory === "All" || item.category === filterCategory)
  ));

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Recipes Table</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        style={{ marginRight: "10px" }}
      />

      {/* Filter Dropdown */}
      <select
        value={filterCategory}
        onChange={(e) => {
          setFilterCategory(e.target.value);
          setCurrentPage(1);
        }}
      >
        <option>All</option>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
      </select>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>

            {/* Sorting Visible in UI */}
            <th
              style={{ cursor: "pointer", backgroundColor: "#ffe8c4" }}
              onClick={handleSortPrepTime}
            >
               Prep Time {sortOrder === "asc" ? " ▲" : " ▼"}
            </th>
          </tr>
        </thead>

        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.category}</td>
                <td>{r.prepTime} min</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: "15px" }}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          {currentPage} / {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
