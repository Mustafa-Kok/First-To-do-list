import { useState } from "react";
const Home = () => {
  const [todos, seTtodos] = useState([]);
  const [item, setitem] = useState("");
  const set = (e) => {
    setitem(e.target.value);
  };
  const addnew = () => {
    item == "" ? alert("Wrong") : seTtodos([...todos, item]), setitem("");
  };
  return (
    <>
      <div className="container">
        <div className="todo">
          <input placeholder="Write To do" value={item} onChange={set} />
          <button onClick={addnew}>
            <img src="./image/add-logo.png"></img>
          </button>
        </div>
        <div className="list">
          {todos.map((item, index) => (
            <div key={index} className="list-item">
              <p>{item}</p>
              <button
                onClick={() => seTtodos(todos.filter((el) => el !== item))}
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
