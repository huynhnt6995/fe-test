interface Props {
  title: string;
  onClick?: () => void;
  active?: boolean;
}

function BodyWeightFilterButton({ title, onClick, active }: Props) {
  return (
    <button
      className={`flex w-14 h-6 justify-center items-center rounded-xl hover:opacity-70 mr-4 ${active ? "text-white bg-primary" : "text-primary bg-white"}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default BodyWeightFilterButton;
