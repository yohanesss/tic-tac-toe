import React, { FC, useEffect, useState } from "react";
import { Board } from "./Board";
import { calculateWinner, O_PLAYER, X_PLAYER } from "./helper";
import * as S from "./styles";

export const Game: FC = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [is_XNext, setIs_XNext] = useState(true);
    const [isTie, setIsTie] = useState(false);
    const [champ, setChamp] = useState("");
    const winner = calculateWinner(history[stepNumber]);

    useEffect(() => {
        const winner = calculateWinner(history[stepNumber]);
        if (winner) {
            setChamp(is_XNext ? O_PLAYER : X_PLAYER);
        } else if (history[stepNumber].filter((b) => b === null).length === 0) {
            setIsTie(true);
        }
    }, [history, stepNumber, is_XNext]);

    const handleClick = (i: number) => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        if (winner || squares[i]) {
            return;
        }
        squares[i] = is_XNext ? X_PLAYER : O_PLAYER;
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);
        setIs_XNext(!is_XNext);
    };

    const jumpTo = (step: any) => {
        const currentStep = stepNumber;
        if (currentStep !== step) {
            setIsTie(false);
            setChamp("");
        }
        setStepNumber(step);
        setIs_XNext(step % 2 === 0);
    };

    const replayGame = () => {
        setHistory([Array(9).fill(null)]);
        setStepNumber(0);
        setIsTie(false);
        setChamp("");
    };

    const renderMoves = () => {
        return (
            <S.ToggleShowHistory>
                <h5>Time Travel</h5>
                {history.map((_step, index) => {
                    const destination = index
                        ? `Go to move${index}`
                        : "Go to start";
                    return (
                        <li key={index}>
                            <button onClick={() => jumpTo(index)}>
                                {destination}
                            </button>
                        </li>
                    );
                })}
            </S.ToggleShowHistory>
        );
    };

    return (
        <>
            <S.GameContainer>
                <Board squares={history[stepNumber]} onclick={handleClick} />
            </S.GameContainer>
            {isTie ? (
                <>
                    <S.ResultText>
                        Tie,{" "}
                        <span onClick={() => replayGame()}>Try Again?</span>
                    </S.ResultText>
                </>
            ) : champ.length ? (
                <>
                    <S.ResultText>
                        {champ} player is the champion!,{" "}
                        <span onClick={() => replayGame()}>Try Again?</span>
                    </S.ResultText>
                </>
            ) : null}
            {renderMoves()}
        </>
    );
};
