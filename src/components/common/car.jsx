import React from "react";
import { Link } from "react-router-dom";

const Car = ({ carInfo: car, onModify, onDelete }) =>{
    return (
      <tr>
        <th></th>
        <td >
          <Link className="nameLink">
            {car.name}
          </Link>
        </td>
        <td>{car.carMark}</td>
        <td >{car.plateNumber}</td>
        <td >{car.phoneNumber}</td>

        <td>
          <button
            onClick={() => onModify(car._id)}
            style={{ fontSize: "13px", zIndex: 999 }}
            className="btn btn-dark"
          >
            Modify
          </button>
        </td>
        <td>
          <button onClick={() => onDelete(car._id)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
export default Car;

