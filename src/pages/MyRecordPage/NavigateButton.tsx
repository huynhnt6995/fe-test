interface Props {
  image: string;
  title: string;
  button: string;
}

function NavigationButton({ image, title, button }: Props) {
  return (
    <div className="bg-primary lg:w-72 lg:h-72 w-36 h-36 lg:p-6 p-3 relative flex justify-center items-center">
      <div className="w-full h-full bg-dark-600">
        <img src={image} className="w-full h-full" alt="Icon"/>
      </div>
      <div className="absolute flex flex-col items-center justify-center">
        <div className="text-primary lg:text-25px mb-3 font-inter">{title}</div>
        <button className="bg-primary-400 text-white lg:text-sm text-xs h-6 flex justify-center items-center lg:w-40 hover:opacity-70">
          {button}
        </button>
      </div>
    </div>
  );
}

export default NavigationButton;
