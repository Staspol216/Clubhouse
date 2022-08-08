import * as Styled from "./styles";

const Avatar = ({ 
  src, 
  letters, 
  isVoice,
  width,
  height, 
}) => {
  return (
    <Styled.Avatar 
      width={width} 
      height={height}
      isVoice={isVoice}
      src={src}>
      {!src ? letters : null}
    </Styled.Avatar>
  )
}

export default Avatar;