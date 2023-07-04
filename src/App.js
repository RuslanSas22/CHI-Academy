import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/table/Table";
import Header from "./components/header/Header";
import DeleteModal from "./components/modals/deleteModal/DeleteModal";
import AddModal from "./components/modals/addModal/AddModal";

function App() {
  const [cars, setCars] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [deletingId, setDeletingId] = useState();

  const toggleDeleteModal = (id) => {
    setDeleteModal(!deleteModal);
    setDeletingId(id);
  };
  const toggleAddModal = (id) => {
    setAddModal(!addModal);
  };

  const handleDelete = () => {
    setCars(cars.filter((p) => p.id !== deletingId));
    console.log("deleting");
    setDeletingId("");
    setDeleteModal(false);
  };

  const handleSubmit = (newCar) => {
    setCars([...cars, newCar]);
  };

  const fetchCars = () => {
    fetch("https://myfakeapi.com/api/cars/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCars(data.cars);
      });
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="App">
      <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        toggleDeleteModal={toggleDeleteModal}
        handleDelete={handleDelete}
        deletingId={deletingId}
      />
      <AddModal
        addModal={addModal}
        toggleAddModal={toggleAddModal}
        onSubmit={handleSubmit}
        cars={cars}
      />
      <Header />
      <Table
        cars={cars}
        setCars={setCars}
        toggleDeleteModal={toggleDeleteModal}
        toggleAddModal={toggleAddModal}
      />
    </div>
  );
}

export default App;
