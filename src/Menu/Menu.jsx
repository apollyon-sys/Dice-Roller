import styles from "./Menu.module.css"
import Dice from "../Dice/Dice.jsx"
import {useState} from "react"
function Menu(){

    let [dices, setDices] = useState()
    let rollinput = document.getElementById("rollinput")
    const updateDices = (dices) => {
        dices = []
        rollinput = document.getElementById("rollinput")
        let rolls;
        rollinput.value > 6 ? rolls=6 : rolls = rollinput.value
        for (let i = 0; i<rolls;i++){
            dices.push(<Dice side={random()} key={i}></Dice>)
            
        }
        setDices(dices)
    }
    
    function random() { // min and max included 
        return Math.floor(Math.random() * (6 - 1 + 1) + 1);
      }
    
    
    return(
        <div className={styles.menu}>
            <div>
                <input type="number" id="rollinput" defaultValue={1} min={1} max={6}/>
                <label htmlFor="rollbutton"> # of dices (1 - 6)</label>
            </div>
                <button id="rollbutton" onClick={updateDices}>ROLL</button>
            <div className={styles.result} id="result">
                {dices}
                
            </div>
        </div>
    )
}

export default Menu