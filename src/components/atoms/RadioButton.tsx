import React from "react";
import styled from "styled-components";

type propType = {
  text: string;
  checked?: string;
  onChange?: (event: React.ChangeEvent<HTMLElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const RadioButton: React.FC<propType> = React.memo(
  ({ text, checked, onChange, onClick }) => {
    return (
      <RadioButtonContainer>
        <Radio
          type='radio'
          value={text}
          checked={text === checked ? true : false}
          onChange={onChange}
          readOnly
        />
        <RadioButtonC data-button={text} onClick={onClick} name={text}>
          {text}
        </RadioButtonC>
      </RadioButtonContainer>
    );
  }
);

const RadioButtonContainer = styled.div`
  width: 100%;
  margin: 0 1px;
  border-radius: 5px;
  overflow: hidden;
`;

const Radio = styled.input`
  display: none;

  &:checked + button {
    color: #fff;
    transition: 0.2s;
    background-color: rgba(12, 19, 81, 0.6);
  }
`;

const RadioButtonC = styled.button`
  padding: 4px 2px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: rgba(195, 200, 241, 0.6);
  cursor: pointer;
  transition: 0.1s;
  display: inline-block;
  text-align: center;

  &:hover {
    color: #fff;
    transition: 0.2s;
    background-color: rgba(12, 19, 81, 0.6);
  }
`;
export default RadioButton;
