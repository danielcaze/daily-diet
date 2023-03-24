import { ImageSourcePropType } from "react-native/types";
import { Container, ProfileImage } from "./styles";

type AvatarProps = {
  source: ImageSourcePropType;
}

export function Avatar({ source }: AvatarProps) {
  return (
    <Container>
      <ProfileImage source={source} />
    </Container>
  )
}