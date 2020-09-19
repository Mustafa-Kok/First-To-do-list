import { useState, useEffect } from "react";
import List from "../componets/List";
import TodoForm from "../componets/TodoForm";
const Home = () => {
  const [todos, seTtodos] = useState([]);
  const [todo, settodo] = useState();

  useEffect(() => {
    const _todo = localStorage.getItem("todo");
    if (_todo) {
      seTtodos(JSON.parse(_todo));
    }
  }, [])


  return (
    <>
      <div className="container">
        <h1>TO DO List</h1>
        <TodoForm
          todos={todos} todo={todo} seTtodos={seTtodos} settodo={settodo}
        />
        <div className="list">
          {todos.map((item, index) => (
            <List
              item={item}
              todo={todo}
              seTtodos={seTtodos}
              todos={todos}
              index={index} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
