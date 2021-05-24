import React from "react";
import styled from "styled-components";
import { CONTROLLER_COLOR } from "../style/color";
import Text from "../atoms/Text";
import SettingItemText from "../block/SettingItemText";
import { RadioButton, CssButton } from "../atoms/";
import { useAppSelector, useAppDispatch } from "../../hooks/index";
import {
  updataDisplay,
  updataFlexDirection,
  updataJustifyContent,
  updataAlignItems,
  updataFlexWrap,
  updataAlignContent,
} from "../../stores/slices/flexSlice";
import { openModal } from "../../stores/slices/modalSlice";

const Controller = React.memo(() => {
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
  const onClickUpdataDisplay = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => dispatch(updataDisplay(event.currentTarget.dataset.button));

  const onClickUpdataFlexDirection = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => dispatch(updataFlexDirection(event.currentTarget.dataset.button));

  const onClickUpdataJustifyContent = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => dispatch(updataJustifyContent(event.currentTarget.dataset.button));

  const onClickUpdataAlignItems = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => dispatch(updataAlignItems(event.currentTarget.dataset.button));

  const onClickUpdataFlexWrap = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => dispatch(updataFlexWrap(event.currentTarget.dataset.button));

  const onClickUpdataAlignContent = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => dispatch(updataAlignContent(event.currentTarget.dataset.button));

  const onClickOpenModal = () => dispatch(openModal());

  return (
    <Wrapper>
      <Text text='Setting' fontSize={35} textAlign={"center"} />
      <List>
        <Row>
          <RowTop>
            <SettingItemText text='Display' subText='親要素の表示形式' />
          </RowTop>
          <RowBottom>
            <RadioButton
              text='flex'
              checked={display}
              onClick={onClickUpdataDisplay}
            />
            <RadioButton
              text='inline-flex'
              checked={display}
              onClick={onClickUpdataDisplay}
            />
          </RowBottom>
        </Row>
        <Row>
          <RowTop>
            <SettingItemText text='flex-direction' subText='主軸の方向や向き' />
          </RowTop>
          <RowBottom>
            <RadioButton
              text='row'
              checked={flexDirection}
              onClick={onClickUpdataFlexDirection}
            />
            <RadioButton
              text='column'
              checked={flexDirection}
              onClick={onClickUpdataFlexDirection}
            />
          </RowBottom>
        </Row>
        <Row>
          <RowTop>
            <SettingItemText text='justify-content' subText='水平方向揃え' />
          </RowTop>
          <RowBottom>
            <RadioButton
              text='flex-start'
              checked={justifyContent}
              onClick={onClickUpdataJustifyContent}
            />
            <RadioButton
              text='flex-end'
              checked={justifyContent}
              onClick={onClickUpdataJustifyContent}
            />
            <RadioButton
              text='center'
              checked={justifyContent}
              onClick={onClickUpdataJustifyContent}
            />
            <RadioButton
              text='space-between'
              checked={justifyContent}
              onClick={onClickUpdataJustifyContent}
            />
            <RadioButton
              text='space-around'
              checked={justifyContent}
              onClick={onClickUpdataJustifyContent}
            />
          </RowBottom>
        </Row>
        <Row>
          <RowTop>
            <SettingItemText text='align-items' subText='垂直方向揃え ' />
          </RowTop>
          <RowBottom>
            <RadioButton
              text='flex-start'
              checked={alignItems}
              onClick={onClickUpdataAlignItems}
            />
            <RadioButton
              text='flex-end'
              checked={alignItems}
              onClick={onClickUpdataAlignItems}
            />
            <RadioButton
              text='center'
              checked={alignItems}
              onClick={onClickUpdataAlignItems}
            />
            <RadioButton
              text='baseline'
              checked={alignItems}
              onClick={onClickUpdataAlignItems}
            />
            <RadioButton
              text='stretch'
              checked={alignItems}
              onClick={onClickUpdataAlignItems}
            />
          </RowBottom>
        </Row>
        <Row>
          <RowTop>
            <SettingItemText text='flex-wrap' subText='子要素の折り返し' />
          </RowTop>
          <RowBottom>
            <RadioButton
              text='nowrap'
              checked={flexWrap}
              onClick={onClickUpdataFlexWrap}
            />
            <RadioButton
              text='wrap'
              checked={flexWrap}
              onClick={onClickUpdataFlexWrap}
            />
            <RadioButton
              text='wrap-reverse'
              checked={flexWrap}
              onClick={onClickUpdataFlexWrap}
            />
          </RowBottom>
        </Row>
        <Row>
          <RowTop>
            <SettingItemText text='align-content' subText='複数行設定' />
          </RowTop>
          <RowBottom>
            <RadioButton
              text='flex-start'
              checked={alignContent}
              onClick={onClickUpdataAlignContent}
            />
            <RadioButton
              text='flex-end'
              checked={alignContent}
              onClick={onClickUpdataAlignContent}
            />
            <RadioButton
              text='center'
              checked={alignContent}
              onClick={onClickUpdataAlignContent}
            />
            <RadioButton
              text='baseline'
              checked={alignContent}
              onClick={onClickUpdataAlignContent}
            />
            <RadioButton
              text='stretch'
              checked={alignContent}
              onClick={onClickUpdataAlignContent}
            />
          </RowBottom>
        </Row>
        <Row>
          <Center>
            <CssButton onClick={onClickOpenModal} />
          </Center>
        </Row>
      </List>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  border-radius: 15px;
  background-color: ${CONTROLLER_COLOR};
  padding: 5px 10px 20px;
  background: rgba(192, 221, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const List = styled.ul`
  display: flex:
  flex-direction: colum;
  `;

const Row = styled.li`
  display: flex;
  flex-direction: column;
  align-item: left;
  padding: 0.8em 0 0;
`;

const RowTop = styled.div`
  width: 100%;
`;

const RowBottom = styled.div`
  width: 100%;
  margin: 0.5em 0 0 0;
  display: flex;
  justify-content: space-around;
  background-color: #4687de;
  padding: 2px 2px;
  border-radius: 5px;
`;

const Center = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
`;

export default Controller;