import { Image } from "react-native/types";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 40px;
  width: 40px;

  border-radius: 999px;
  overflow: hidden;
  border: ${({ theme }) => `2px solid ${theme.COLORS.GRAY_600}`}
`

export const ProfileImage = styled.Image.attrs<Image>(({ source }) => ({
  source
}))`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`