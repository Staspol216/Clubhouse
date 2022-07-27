import * as style from "./style";

const StepInfo = ({ title, description, icon }) => {
  return (
    <div>
      <div>
        <img css={style.img} src={icon} alt="Step picture" />
      </div>
      <b className={style.title}>{title}</b>
      {description && <p className={style.description}>{description}</p>}
    </div>
  );
};

export default StepInfo;
  