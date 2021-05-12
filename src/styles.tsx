import styled from "styled-components";
import { O_PLAYER } from "./helper";

export const BoardContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 10px 5px gainsboro;
`;

export const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
`;

export const SquareButton = styled.button`
    background-color: ${({ value }) =>
        value === O_PLAYER ? "papayawhip" : "white"};
    color: darkgrey;
    font-size: 16px;
    box-sizing: border-box;
    border: 1px solid grey;
    display: inline-block;
    width: 33%;
    flex-grow: 1;
    padding: 20px;
    min-height: 150px;
    cursor: pointer;
    & > span {
        display: block;
        min-width: 15px;
    }
`;

export const ResultText = styled.h1`
    & > span {
        color: lightpink;
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const ToggleShowHistory = styled.ul`
    list-style: none;
    position: fixed;
    top: 0;
    padding: 10px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    background-color: cornsilk;
    box-shadow: 1px 1px 5px 0px gainsboro;

    & > h5 {
        margin: 0 5px;
        margin-bottom: 10px;
        text-decoration: underline;
        color: darkseagreen;
        font-size: 14px;
    }

    & > li > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-bottom: 10px;
        text-decoration: underline;
        font-weight: bold;
    }
`;
