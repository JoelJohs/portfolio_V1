import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const DownloadCVButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-accent font-bold bg-transparent hover:bg-accent hover:text-primary transition-all"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faDownload} /> {t("home.downloadCV")}
    </button>
  );
};

DownloadCVButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DownloadCVButton;
