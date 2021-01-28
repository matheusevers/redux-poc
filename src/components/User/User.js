import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setUsername,
  setUserCountry,
  asyncActionCreator,
} from "../../store/UserData/UserData.actions";
import "./User.css";

const User = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [showCountry, setShowCountry] = useState(false);

  const dispatch = useDispatch();

  const handleNameChange = (e) => setName(e.target.value);
  const handleCountryChange = (e) => {
    setCountry(e.target.value);

    dispatch(asyncActionCreator());
    return dispatch(setUserCountry(e.target.value));
  };

  const handleClick = () => {
    setShowCountry(true);

    return dispatch(setUsername(name));
  };
  return (
    <div className="wrapper">
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={handleNameChange}
        className="user-input"
        disabled={country}
      />

      <button className="bt-user" onClick={handleClick}>
        Ok!
      </button>
      {showCountry && (
        <select
          value={country}
          onChange={handleCountryChange}
          className="user-input"
        >
          <option hidden selected>
            Country
          </option>
          <option value="es">Spain</option>
          <option value="pt">Brazil</option>
          <option value="fr">France</option>
        </select>
      )}
    </div>
  );
};

export default User;
