import { BsUpload, BsDownload, BsFillShieldLockFill } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import { AiFillFileAdd } from "react-icons/ai";
import { IconContext } from "react-icons";
const GetIcon = (props) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "upload":
        return <BsUpload />;
      case "delete":
        return <FiDelete />;
      case "download":
        return <BsDownload />;
      case "lock":
        return <BsFillShieldLockFill />;
      case "add":
        return <AiFillFileAdd />;

      default:
        break;
    }
  };
  const icon = getIcon(props.name);
  return (
    <IconContext.Provider
      value={{
        // style: {
        //   verticalAlign: "middle",
        //   position: "absolute",
        //   top: "32px",
        //   left: "14px",
        // },
        size: "1.25em",
      }}
    >
      {icon}
    </IconContext.Provider>
  );
};

export default GetIcon;
