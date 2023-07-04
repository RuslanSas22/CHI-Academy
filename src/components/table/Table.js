import React from "react";
import { useState } from "react";
import "./Table.css";

function Table({ cars, toggleDeleteModal, toggleAddModal }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  const getPageData = () => {
    const filteredData = cars.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = filteredData.slice(startIndex, endIndex);
    return pageData;
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    const totalPages = Math.ceil(cars.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleActionSelect = (id, action) => {
    // Handle the selected action (e.g., edit or delete)
    switch (action) {
      case "edit":
        console.log(action);
        break;

      case "delete":
        console.log(action);
        toggleDeleteModal(id);

        break;

      default:
        return null;
    }
    console.log(`Performing ${action} action on item with ID ${id} `);
  };

  const filteredData = cars.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
  const pageData = getPageData();
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <div className="table-container">
      <div className="top-menu">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="add-new" onClick={toggleAddModal}>
          {" "}
          Add New Car
        </button>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Mark</th>
            <th>Model</th>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>

          {pageData.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.car}</td>
                <td>{item.car_model}</td>
                <td>{item.car_vin}</td>
                <td>{item.car_color}</td>
                <td>{item.car_model_year}</td>
                <td>{item.price}</td>
                <td>{String(item.availability)}</td>
                <td>
                  <select
                    onChange={(e) =>
                      handleActionSelect(item.id, e.target.value)
                    }
                    defaultValue="default"
                  >
                    <option value="default" disabled>
                      Action
                    </option>
                    <option value="edit"> Edit </option>
                    <option value="delete">Delete</option>
                  </select>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-buttons">
        <button onClick={handlePrevClick} disabled={isFirstPage}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextClick} disabled={isLastPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Table;
