const TodoForm = (props) => {
    return (
        <div className="todo">
            <input placeholder="Write To do" value={props.todo} onChange={(e) => { props.settodo(e.target.value) }} />
            <button onClick={() => {
                props.seTtodos([...props.todos, props.todo]);
                props.settodo("");
                localStorage.setItem("todo", JSON.stringify([...props.todos, props.todo]));
            }}>
                <img src="./image/add-logo.png"></img>
            </button>
            <button onClick={
                () => {
                    props.seTtodos([]);
                    localStorage.removeItem("todo")
                }
            }>
                <img src="./image/111.png"></img>
            </button>
        </div>
    )
}
export default TodoForm;
