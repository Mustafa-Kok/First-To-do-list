const List = (props) => {
    return (
        <div key={props.index} className="list-item">
            <p>{props.item}</p>
            <button
                onClick={() => {
                    props.seTtodos(props.todos.filter((el, indexx) => el !== props.item));
                    localStorage.setItem("todo", JSON.stringify(props.todos.filter((el, indexx) => el !== props.item)))
                }

                }
            >
                <img src="./image/111.png"></img>
            </button>
        </div>
    )
}
export default List;