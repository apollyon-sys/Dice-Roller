import PropTypes from 'prop-types'
import styles from './Dice.module.css'

class Cube{
    constructor(a1,a2,a3,b1,b2,b3,c1,c2,c3){
        return(
        <div className={styles.dice}>
            <div className={styles.side}>
                {a1 == 'white' ? <div className={styles.white}></div> : <div className={styles.dot}></div>}
                {a2 == 'white' ? <div className={styles.white}></div> : <div className={styles.dot}></div>}
                {a3 == 'white' ? <div className={styles.white}></div> : <div className={styles.dot}></div>}
            </div>
            <div className={styles.side}>
                {b1 == 'white' ? <div className={styles.white}></div> : <div className={styles.dot}></div>}
                {b2 == 'white' ? <div className={styles.white}></div> : <div className={styles.dot}></div>}
                {b3 == 'white' ? <div className={styles.white}></div> : <div className={styles.dot}></div>}
            </div>
            <div className={styles.side}>
                {c1 == 'white' ? <div className={styles.white}></div> : <div className={styles.dot}></div>}
                {c2 == 'white' ? <div className={styles.white}></div> : <div className={styles.dot}></div>}
                {c3 == 'white' ? <div className={styles.white}></div> : <div className={styles.dot}></div>}
            </div>
        </div>
        )
    }
}

function Dice(props){
    let dice
    switch (props.side){
        case 1:
            dice = new Cube('white','white','white',
                            'white','','white',
                            'white','white','white')
            break
        case 2:
            dice = new Cube('white','white','',
                            'white','white','white',
                            '','white','white')
            break
        case 3:
            dice = new Cube('white','white','',
                            'white','','white',
                            '','white','white')
            break
        case 4:
            dice = new Cube('','white','',
                            'white','white','white',
                            '','white','')
            break
        case 5:
            dice = new Cube('','white','',
                            'white','','white',
                            '','white','')
            break
        case 6:
            dice = new Cube('','','',
                            'white','white','white',
                            '','','')
            break
        default:
            dice = new Cube('white','','white','','white','white')
            break
        
    }
    return(
        dice
    );
}

Dice.propTypes = {
    side: PropTypes.number,
}


export default Dice