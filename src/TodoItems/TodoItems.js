

const TodoItems=(props)=>{

    const {items,deleteItem} = props;
    let length = items.length;
    
    const ListItems= length ? (
        items.map(item=>{
            return(
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={()=>{deleteItem(item.id)}}>&times;</span>
                </div>
            )
        }) 
    ) : (
        <div>There is nothing show</div>
    )
    return(
        <div className="ListItems">
            <div>
             <span className="name title">Name</span>
             <span className="age title">Age</span>
             <span className="action title">Action</span>
             {ListItems}
             </div>
        </div>
    )
}

export default TodoItems;