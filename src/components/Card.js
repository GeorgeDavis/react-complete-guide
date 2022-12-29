import './Card.css'

function Card (props) {
    const classes = 'card ' + props.className;
    // children is a reserved name. The value of the children will always be the output of the content between the open & closing tags - aka the Card
    return <div className={classes}>{props.children}</div>
}

export default Card;