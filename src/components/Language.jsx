import'../App.css'
import { languages } from '../languages'
import { clsx } from 'clsx'
export default function Language(props){
    let className;
    const progL = languages.map((lang,index)=>{
        const isLanguageLost = index < props.wrongGuessCount
        const styles={
        background:lang.backgroundColor,
        color:lang.color
        }
        className = clsx("Language",isLanguageLost && "lost")
        return(
            <span style={styles} className={className}>{lang.name}</span>       
        )
    })
    return(
        <section className="LanguageEl">
        {...progL}
        </section>
    )
}