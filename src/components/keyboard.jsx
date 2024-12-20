import {clsx} from 'clsx'
export default function Keyboard(props){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const keyboardEl = alphabet.split("").map(letter=>{
        const isGuessed = props.guessedLetter.includes(letter)
        const isCorrect = isGuessed && props.currentWord.includes(letter)
        const isWrong = isGuessed && !props.currentWord.includes(letter)
        const className = clsx({
            correct:isCorrect,
            wrong:isWrong
        })
        return(
            <button 
                key={letter}
                className={className}
                onClick={props.isGameOver?null:()=>props.onClick(letter)}
                style={props.isGameOver?{opacity:0.5}:null}
                >{letter.toUpperCase()}
            </button>
            
        )
    })
    return(
        <>
        {keyboardEl}
        </>
        
    )
    
}