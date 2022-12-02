import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.createElement("div");
modalRoot.id = "portal";
const body = document.querySelector("body") as HTMLBodyElement;
body.appendChild(modalRoot);

const Portal = ({ children }: { children: React.ReactNode }) => {
  return ReactDOM.createPortal(children, modalRoot);
};

export default React.memo(Portal);
