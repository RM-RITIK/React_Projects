import OutputRow from "./outputRow";

const Output = props => {
    return(
        <div>
            <OutputRow value = {props.answer} textSize = {{fontSize: '20px'}}/>
            <OutputRow value = {props.user} textSize = {{fontSize: '20px'}}/>
        </div>
    );

}

export default Output