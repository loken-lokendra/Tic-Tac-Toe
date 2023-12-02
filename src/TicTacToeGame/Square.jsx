import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",

        height: "100px ",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      {props.value === "X" ? (
        <h2
          style={{
            fontSize: "40px",
            color: "red",
          }}
        >
          {props.value}
        </h2>
      ) : (
        <h2
          style={{
            fontSize: "40px",
            color: "blue",
          }}
        >
          {props.value}
        </h2>
      )}
    </div>
  );
};

export default Square;
