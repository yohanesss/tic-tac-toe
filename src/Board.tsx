import React, { FC } from "react";
import * as S from "./styles";
import { Square } from "./Square";

interface BoardProps {
    squares: [number][];
    onclick(i: number): void;
}

export const Board: FC<BoardProps> = ({ squares, onclick }: BoardProps) => {
    return (
        <S.BoardContainer>
            {squares.map((square: any, index) => (
                <Square
                    key={index}
                    value={square}
                    onClick={() => onclick(index)}
                />
            ))}
        </S.BoardContainer>
    );
};
