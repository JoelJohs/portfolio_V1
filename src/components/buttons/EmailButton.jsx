import { useState } from "react";
import PropTypes from "prop-types";
import { EmailIcon, CopyIcon } from "../../assets/HeroIcons";

const EmailButton = ({ email }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setTooltipVisible(true);
    setTimeout(() => setTooltipVisible(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <button
        id="copy-email"
        className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-accent font-bold bg-transparent hover:bg-accent hover:text-primary transition-all"
        onClick={handleCopy}
      >
        <EmailIcon /> {email} <CopyIcon />
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
