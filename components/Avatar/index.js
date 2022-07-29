import * as style from "./style";

const Avatar = ({ src, letters }) => {
  return (
    <div css={[
      style.avatar, style.avatarBorder, 
      { backgroundImage: src ? `url(${src})` : ""}, 
      { [style.emptyAvatar]: !src }]}
    >
      {!src ? letters : null}
    </div>
  )
}

export default Avatar;