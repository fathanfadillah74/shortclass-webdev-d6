import PropTypes from "prop-types";
import "../public/css/todosList.css";

function TodoList({ todos }) {
  const checkbox = (e) => {
    const elementCheckBox = e.target;
    const title = elementCheckBox.parentNode;
    if (elementCheckBox.checked) {
      title.style.textDecoration = "line-through";
    } else {
      title.style.textDecoration = "none";
    }
  };

  const isDone = () => {
    const title = document.querySelectorAll("#title");
    title.forEach((title) => {
      if (title.style.textDecoration === "line-through") {
        title.style.display = "none";
      } else {
        title.style.display = "flex";
      }
    });
  };

  return (
    <div>
      {todos.map((e) => (
        <div key={e.id}>
          <span id="title">
            {e.title} - {e.description}{" "}
            <input id="checkbox" type="checkbox" onClick={checkbox}></input>
          </span>
        </div>
      ))}
      <button onClick={isDone}>Hapus</button>
    </div>
  );
}

TodoList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default TodoList;
