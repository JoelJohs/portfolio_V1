import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";

const EmailButton = ({ email }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000);
  };

  return (
    <div className="relative inline-block w-full md:w-auto text-center md:text-left">
      <button
        id="copy-email"
        className="w-full md:w-auto flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-accent font-bold bg-transparent hover:bg-accent hover:text-primary transition-all"
        onClick={handleCopy}
      >
        <FontAwesomeIcon icon={faEnvelope} /> {email}{" "}
        <FontAwesomeIcon icon={faCopy} />
      </button>
      {tooltipVisible && (
        <span
          id="copy-tooltip"
          className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-accent text-primary px-2 py-1 rounded-md text-sm shadow-md"
        >
          ¡Copiado!
        </span>
      )}
    </div>
  );
};

EmailButton.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EmailButton;
