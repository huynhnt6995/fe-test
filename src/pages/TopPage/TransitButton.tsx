import bgTransit from "./../../assets/images/bg_transit.png";

interface Props {
  icon: string;
  text: string;
  onClick?: () => void;
}

function TransitButton({ icon, text, onClick }: Props) {
  return (
    <button
      style={{ backgroundImage: `url(${bgTransit})` }}
      className="w-[136px] h-[136px] bg-no-repeat	bg-contain bg-center flex flex-col justify-center items-center hover:opacity-70 cursor-pointer lg:mx-8 lg:mb-0 mb-4"
      onClick={onClick}
    >
      <img src={icon} alt="icon" className="w-14 h-14" />
      <span className="text-xl text-white leading-6 font-inter">{text}</span>
    </button>
  );
}

export default TransitButton;
