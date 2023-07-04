import React from "react";
import "./DeleteModal.css";

export default function DeleteModal({
  deleteModal,
  setDeleteModal,
  toggleDeleteModal,
  handleDelete,
}) {
  if (deleteModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {deleteModal && (
        <div className="modal">
          <div onClick={toggleDeleteModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Do you want delete this item?</h2>
            <div className="delete-buttons">
              <button onClick={handleDelete}>YES</button>
              <button onClick={toggleDeleteModal}>NO</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
