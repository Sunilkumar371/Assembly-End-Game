import clsx from "clsx";
import { getFarewellText } from "../utils";
import { languages } from '../languages'
export default function Header(props){
    const className = clsx("win-style",{
      won:props.isGameWon,
      lost:props.isGameLost,
      farewell:!props.isGameOver && props.isLastGuessIncorrect 
    })
    function gameStatus(){
        if(!props.isGameOver && props.isLastGuessIncorrect){
            return <p>{getFarewellText(languages[props.wrongGuessCount-1].name)}</p>
        }else if(props.isGameWon){
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }else if(props.isGameLost){
            return(
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
        return null;
    }
    return(
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            <section className={className}>
                {gameStatus()}
            </section>
        </header>
    )
}