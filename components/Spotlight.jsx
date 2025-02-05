import Image from "next/image";

import FavBtn from "./FavBtn";
import styles from "@/styles";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 600px;
  height: 340px;
  border-radius: 50px;
  object-fit: cover;
`;


export default function Spotlight({ artist, image }) {
  return (
    <>

      <StyledImg src={image} height={80} width={80} alt={`An art piece by ${artist}`} />

      <p>Artist: {artist}</p>
    </>
  );
}
