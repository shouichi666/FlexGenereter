import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";

type propType = {
  text: string;
  subText: string;
};

const SettingItemText: React.FC<propType> = React.memo(({ text, subText }) => {
  return (
    <Box>
      <Text text={text} fontSize={18} textAlign='center' />
      <Space />
      <Text text={subText} fontSize={8} textAlign='center' />
    </Box>
  );
});

const Box = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: left;
`;

const Space = styled.div`
  width: 10px;
`;

export default SettingItemText;
