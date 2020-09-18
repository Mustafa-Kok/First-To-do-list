import { useState, useEffect } from "react";
const Home = () => {
  const [todos, seTtodos] = useState([]);
  const [item, setitem] = useState();
  const set = (e) => {
    setitem(e.target.value);
  };

  const addnew = () => {
    seTtodos([...todos, item]);
    setitem("");
    localStorage.setItem("todo", JSON.stringify([...todos, item]));
  };
  useEffect(() => {
    const _todo = localStorage.getItem("todo");
    if (_todo) {
      seTtodos(JSON.parse(_todo));
    }
  }, [])


  return (
    <>
      <div className="container">
        <div className="todo">
          <input placeholder="Write To do" value={item} onChange={set} />
          <button onClick={addnew}>
            <img src="./image/add-logo.png"></img>
          </button>
          <button onClick={
            () => {
              seTtodos([]);
              localStorage.removeItem("todo")
            }
          }>
            <img src="./image/111.png"></img>
          </button>
        </div>
        <div className="list">
          {todos.map((item, index) => (
            <div key={index} className="list-item">
              <p>{item}</p>
              <button
                onClick={() => {
                  seTtodos(todos.filter((el, indexx) => el !== item));
                  localStorage.setItem("todo", JSON.stringify(todos.filter((el, indexx) => el !== item)))
                }

                }
              >
                <img src="./image/111.png"></img>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
