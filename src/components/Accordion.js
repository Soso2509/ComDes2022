import React, { useState } from "react";
//code from https://github.com/myogeshchavan97/react-accordion-demo

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>
          {title}
          {isActive ? "-" : "+"}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
}
