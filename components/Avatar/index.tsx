import * as Styled from "./styles";

export interface AvatarProps {
  src: string;
  width: string;
  height: string;
  isVoice?: boolean;
  letters?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  letters,
  isVoice,
  width,
  height,
}) => {
  return (
    <Styled.Avatar width={width} height={height} isVoice={isVoice} src={src}>
      {!src ? letters : null}
    </Styled.Avatar>
  );
};

export default Avatar;
