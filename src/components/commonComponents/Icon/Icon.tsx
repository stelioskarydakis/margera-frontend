import iconMappings from "../../../utils/iconMappings";

type IconType = {
  type: keyof typeof iconMappings;
  isInvert?: boolean;
};

const Icon = ({ type, isInvert }: IconType) => {
  return (
    <img
      src={iconMappings[type]}
      alt={`${type} icon`}
      style={{
        filter: isInvert ? "invert(1) brightness(255)" : "none",
      }}
    />
  );
};

export default Icon;
