
import '../App.css';
const Mydata=(props)=>{
return(
    <h3>I'm {props.name}-{props.class}</h3>
)
}

function User(){
    return(
        <>
        <Mydata name="Divi" class= "CSE"></Mydata>
        <Mydata name="DCD" class="CSE"/>
        </>
    )
}

export default User