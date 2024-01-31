import "./icon.css";

export default function Icon({
  imgUrl,
  name,
  isActive,
  disabled,
  handleClick,
}) {
  return (
    <div
      className={`icon-comp ${isActive && isActive === name && "activeClass"} 
        ${disabled && "cursor-na"}`}
    >
      {!isActive ? (
        <img src={imgUrl} alt="fund_logo" className="w-50 h-50" />
      ) : (
        <img
          src={imgUrl}
          alt="fund_logo"
          className={`w-50 h-50 ${!isActive && "grayscale-img"}`}
          onClick={handleClick}
        />
      )}
    </div>
  );
}
