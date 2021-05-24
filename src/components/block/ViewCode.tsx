import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text, CopyButton } from "../atoms";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { openModal } from "../../stores/slices/modalSlice";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type propType = {
  open: boolean;
};

const ViewCode: React.FC<propType> = ({ open }) => {
  const dispatch = useAppDispatch();
  const flex = useAppSelector((state) => state.flex);
  const {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    alignContent,
  } = {
    ...flex,
  };
  const [css, setCss] = useState<any>("");

  const onClickCloseModal = () => dispatch(openModal());

  const onClickCopyCss = () => {
    navigator.clipboard.writeText(css).then(() => alert(css));
  };

  useEffect(() => {
    const codeString = `.flex-container {
      display: ${display};
      flex-direction: ${flexDirection};
      align-content: ${alignContent};
      justify-content: ${justifyContent};
      flex-wrap: ${flexWrap};
      align-items: ${alignItems};
    }`;

    setCss(codeString);
  }, [
    display,
    flexDirection,
    justifyContent,
    alignContent,
    alignItems,
    flexWrap,
  ]);

  return (
    <Wrapper isOpen={open}>
      <Container>
        <Text text='CSS' fontSize={30} textAlign='center' />
        <SyntaxHighlighter language='css' style={a11yDark}>
          {/* {codeString} */}
          {css}
        </SyntaxHighlighter>
        <CopyButton onClick={onClickCopyCss} />
      </Container>
      <Overlay onClick={onClickCloseModal} />
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  isOpen: boolean;
}>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0, 0);
  opacity: 0
  transition: 0.1s;


  ${({ isOpen }) =>
    isOpen &&
    `
    transition: 0.1s;
    transform: scale(1, 1);
    opacity: 1;
`}
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1px);
`;

const Container = styled.div`
  position: absolute;
  width: 500px;
  background-color: #1b1b1b;
  border-radius: 10px;
  z-index: 100;
  text-align: center;
  box-shadow: 0 8px 52px 0 rgba(31, 38, 135, 0.37);
  box-shadow: 0 8px 12px 0 #03040a7e;
  color: yellow;
  padding: 0 0 30px;
`;

export default ViewCode;
