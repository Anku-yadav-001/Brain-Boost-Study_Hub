import React,{ useReducer } from "react";

export const initialState = {
  name: "",
  batch: "",
  course: "",
  image: "",
  rating: "1",
  status: "inactive"
};

export const reducer = (state, action) => { 
  switch (action.type) {
  case "NAME":
    return { ...state, name: action.payload };
  case "BATCH":
    return { ...state, batch: action.payload };
  case "COURSE":
    return { ...state, course: action.payload };
  case "IMAGE":
    return { ...state, image: action.payload };
  case "RATING":
    return { ...state, rating: action.payload };
  case "STATUS":
    return { ...state, status: action.payload };
  case "RESET":
    return initialState;
  default:
    return state;
}};

export const AddStudent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name.toUpperCase(), payload: value });
  };

  const handleCheckboxChange = (e) => {
    const status = e.target.checked ? "active" : "inactive";
    dispatch({ type: "STATUS", payload: status });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted with state:", state);
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1>Add Student</h1>
      <div>
        <form data-testid="input-form">
          <div className="name-wrapper" data-testid="name-wrapper">
            <label htmlFor="name">Name :</label>
            {/* Provide Input tag Here */}
            <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            data-testid="name-input"
          />
          </div>

          <div className="batch-wrapper" data-testid="batch-wrapper">
            <label htmlFor="batch">Batch :</label>
            {/* Provide Input tag Here */}
            <input
            type="text"
            id="batch"
            name="batch"
            value={state.batch}
            onChange={handleChange}
            data-testid="batch-input"
          />
          </div>

          <div className="course-wrapper" data-testid="course-wrapper">
            <label htmlFor="course">Course :</label>
            {/* Provide Input tag Here */}
            <input
            type="text"
            id="course"
            name="course"
            value={state.course}
            onChange={handleChange}
            data-testid="course-input"
          />
          </div>

          <div className="image-wrapper" data-testid="image-wrapper">
            <label htmlFor="image">Image :</label>
            {/* Provide Input tag Here */}
            <input
            type="text"
            id="image"
            name="image"
            value={state.image}
            onChange={handleChange}
            data-testid="image-input"
          />
          </div>

          <div className="rating-wrapper" data-testid="rating-wrapper">
            <label htmlFor="rating">Rating :</label>
            {/* Provide Select tag Here */}
            <select
            id="rating"
            name="rating"
            value={state.rating}
            onChange={handleChange}
            data-testid="rating-select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          </div>

          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status :</label>
            <div>
              {/* Provide checkbox Here */}
              <input
            type="checkbox"
            id="status"
            name="status"
            checked={state.status === "active"}
            onChange={handleCheckboxChange}
            data-testid="status-checkbox"
          />
              <label htmlFor="status">Active</label>
            </div>
          </div>
          <button type="submit" data-testid="submit-button">Submit</button>
          {/* Provide Button to submit Here */}
        </form>
      </div>
    </div>
  );
};
