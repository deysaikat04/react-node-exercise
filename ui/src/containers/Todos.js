import React, { useState } from "react";

const Todos = () => {
  const [list, setList] = useState([]);

  const [newItem, setNewItem] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setNewItem(value);
  };

  const addTodo = () => {
    if (newItem !== "") {
      
      const newObj = {
        id: Math.random(),
        name: newItem,
        time: new Date().toLocaleDateString(),
      };
      list.push(newObj);
      setList([...list]);
      setNewItem("");
    }
  };

  const removeTodo = (itemId) => {
    const newList = list.filter((todo) => todo.id !== itemId);
    setList([...newList]);
  };

  return (
    <div>
      <h4>Todos</h4>
      <input name="addItem" value={newItem} onChange={handleOnChange} placeholder="Add todo..."/>
      <input type="button" onClick={addTodo} name="Add" value="Add" />
      <br />
      <br />
      {list.length !== 0 &&
        list.map((item) => {
          return (
            <div key={item.id}>
              <span>
                {item.name}
                {" - "}
                {item.time}
              </span>{" "}
              <input
                type="button"
                onClick={() => removeTodo(item.id)}
                name="Remove"
                value="X"
              />
            </div>
          );
        })}
    </div>
  );
};

export default Todos;
