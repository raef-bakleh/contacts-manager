import React from "react";
import Button from "../Form/Button";
import "./Error.css";

function Error(props) {
  return (
    <div className="back" onClick={props.onChange}>
      <div className="error">
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onChange}>Okay</Button>
        </footer>
      </div>
    </div>
  );
}

export default Error;
