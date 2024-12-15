import react from "react"
import Button from "../atoms/Button"

const Company = function(){
    return(
        <div>
            Company
            <div>
                <Button text="Click Me" color="blue"></Button>
                <Button text="View More ..." color="red"></Button>
            </div>
        </div>
    )
}
export default Company