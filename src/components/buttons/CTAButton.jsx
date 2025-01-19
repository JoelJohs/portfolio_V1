import PropTypes from "prop-types";

const CTAButton = ({ label, href, variant = "primary" }) => {
  const baseClasses =
    "px-6 py-3 rounded-lg font-medium relative overflow-hidden transition-transform hover:-translate-y-1";
  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-accent to-purple-500 text-white hover:text-white hover:from-accent hover:to-purple-500"
      : "border-2 border-accent text-accent bg-transparent";
  const shadowClasses =
    "hover:shadow-[0_8px_20px_rgba(177,100,255,0.2)] dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)]";

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses} ${shadowClasses}`}
    >
      {label}
    </a>
  );
};

CTAButton.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default CTAButton;
