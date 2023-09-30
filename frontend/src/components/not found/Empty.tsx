import cloud from "../../assets/cloud.png";
import "./styles.scss";

interface TextProps {
  text: React.ReactNode;
}

function Empty(props: TextProps) {
  return (
    <div className="empty b_flex">
      <div className="content">
        <img src={cloud} alt="" className="img" />
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
}

export default Empty;
