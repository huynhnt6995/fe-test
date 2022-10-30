import "./PrimaryButton.css";

interface Props {
  onClick?: () => void;
}

function PrimaryButton({ onClick, children }: React.PropsWithChildren<Props>) {
  return (
    <button
      onClick={onClick}
      className="primary-button rounded lg:h-14 lg:w-72 lg:px-0 lg:py-0 px-10 py-2 text-lg text-white flex items-center justify-center hover:opacity-70"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
