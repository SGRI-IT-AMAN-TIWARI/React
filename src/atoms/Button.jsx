// import "./Button.css"
import styled from "./Button.module.css"
const Button = function(props){
    let styles = {color : props.color} //Internal Styling
    
    return(
        // <button className="default-button" style={{color : props.color}}>{props.text}</button>   //Inline Styling
        // <button className="default-button" style={styles}>{props.text}</button>
        <button className={styled.default_button} style={styles}>{props.text}</button>
    )
}
export default Button


// Components 
// Navigation 
// Styling 
// Props 