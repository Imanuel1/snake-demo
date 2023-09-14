import React from "react";

export const Controller = ({ setDirection }) => {
  return (
    <div
      style={{
        position: "absolute",
        right: "10px",
        bottom: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 3,
      }}
    >
      <button
        style={{
          borderRadius: "2rem 2rem 0 0",
          borderColor: "grey",
          height: "38px",
          width: "20px",
          background: "rgba(220, 220, 220, 0.5)",
        }}
        onClick={() => setDirection("ArrowUp")}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{
            borderRadius: "2rem 0 0 2rem",
            borderColor: "grey",
            height: "20px",
            width: "38px",
            background: "rgba(220, 220, 220, 0.5)",
          }}
          onClick={() => setDirection("ArrowLeft")}
        />
        <div
          style={{
            borderRadius: "1rem",
            height: "18px",
            width: "18px",
            margin: "5px",
            background: "rgba(220, 220, 220, 0.5)",
          }}
        />
        <button
          style={{
            borderRadius: "0 2rem 2rem 0",
            borderColor: "grey",
            height: "20px",
            width: "38px",
            background: "rgba(220, 220, 220, 0.5)",
          }}
          onClick={() => setDirection("ArrowRight")}
        />
      </div>
      <button
        style={{
          borderRadius: "0 0 2rem 2rem",
          borderColor: "grey",
          height: "38px",
          width: "20px",
          background: "rgba(220, 220, 220, 0.5)",
        }}
        onClick={() => setDirection("ArrowDown")}
      />
    </div>
  );
};
