import ThemeToggleButton from "./buttons/ThemeToggleButton";
import TranslationButton from "./buttons/TranslationButton";

const BottomScreenButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-8 flex space-x-4">
      <TranslationButton />
      <ThemeToggleButton />
    </div>
  );
};

export default BottomScreenButtons;
