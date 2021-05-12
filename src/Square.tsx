import React from "react";
import * as S from "./styles";

interface SquareProps {
    value?: string;
    onClick(): void;
}

export const Square = ({ onClick, value }: SquareProps) => {
    return (
        <S.SquareButton value={value} onClick={onClick} tabIndex={-1}>
            <span>{value}</span>
        </S.SquareButton>
    );
};
