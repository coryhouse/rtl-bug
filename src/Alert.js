import React, { useState, useEffect } from "react";

/** Alert */
const Alert = props => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Hide alert when escape key is pressed
    function keyHandler({ key }) {
      if (props.closable && key === "Escape") setHidden(true);
    }

    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [props.closable]);

  function handleClick(event) {
    event.preventDefault();
    setHidden(true);
  }

  if (hidden) return null;

  return (
    <div role="alert">
      alert here
      <button aria-label="Close alert dialog" onClick={handleClick}>
        close
      </button>
    </div>
  );
};

Alert.defaultProps = {
  className: "",
  closable: true
};

export default Alert;
