import './Item.css';
function Items(props){
    const itemName = props.name;

    return(
        <p className="nirma">{itemName}</p>
    )
}

export default Items;
