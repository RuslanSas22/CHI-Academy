import React from "react";
import { useState } from "react";
import "./AddModal.css";

export default function AddModal({ addModal, toggleAddModal, onSubmit }) {
  const [formState, setFormState] = useState({
    id: "",
    car: "",
    car_model: "",
    car_vin: "",
    car_color: "",
    car_model_year: "",
    price: " $",
    availability: false,
  });

  const validateForm = () => {
    if (
      formState.car &&
      formState.car_model &&
      formState.car_vin &&
      formState.car_color &&
      formState.car_model_year &&
      formState.price
    )
      return true;
    else return false;
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);
    toggleAddModal();
  };

  if (addModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {addModal && (
        <div className="modal">
          <div onClick={toggleAddModal} className="overlay"></div>
          <div className="modal-content">
            <h3>Please add all information about new car</h3>
            <form>
              <div className="form-group">
                <label htmlFor="car">Mark</label>
                <input
                  type="text"
                  name="car"
                  onChange={handleChange}
                  value={formState.car}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="car_model">Model</label>
                <input
                  name="car_model"
                  onChange={handleChange}
                  value={formState.car_model}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="car_vin">VIN</label>
                <input
                  name="car_vin"
                  onChange={handleChange}
                  value={formState.car_vin}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="car_color">Color</label>
                <input
                  name="car_color"
                  onChange={handleChange}
                  value={formState.car_color}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="car_model_year">Year</label>
                <input
                  type="number"
                  name="car_model_year"
                  onChange={handleChange}
                  value={formState.car_model_year}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price </label>
                <input
                  type="text"
                  name="price"
                  onChange={handleChange}
                  value={formState.price}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="availability">Availability</label>
                <select
                  name="availability"
                  onChange={handleChange}
                  value={formState.availability}
                  required
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>

              <button type="submit" className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
