import React from "react";
import styled from "styled-components";

type textProps = {
  text: string | null;
  fontSize: number;
  textAlign?: string;
};

const Text: React.FC<textProps> = React.memo(({ text, fontSize, textAlign }) => {
  return (
    <P fontSizeR={fontSize} textAlignR={textAlign}>
      {text}
    </P>
  );
});

export const P = styled.p<{
  fontSizeR: number;
  textAlignR: string | undefined;
}>`
  text-shadow: 0 3px 5px rgb(41 38 135 / 67%);
  color: #fff;
  font-size: ${({ fontSizeR }) =>
    typeof fontSizeR === "number" ? fontSizeR : 10}px;
  text-align: ${({ textAlignR }) =>
    textAlignR === undefined ? "left" : "center"};
`;

export default Text;
