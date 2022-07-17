(function () {
  "use strict";

  const get = (target) => {
    return document.querySelector(target);
  };

  const $todos = get(".todos");
  const $form = get(".todo_form");
  const $todoInput = get(".todo_input");
  const API_URL = `http://localhost:3000/todos`;

  const createTodoElement = (item) => {
    const { id, content } = item;
    const $todoItem = document.createElement("div");
    $todoItem.classList.add("item");
    $todoItem.dataset.id = id;
    $todoItem.innerHTML = `
            <div class="content">
              <input
                type="checkbox"
                class='todo_checkbox' 
              />
              <label>${content}</label>
              <input type="text" value="${content}" />
            </div>
            <div class="item_buttons content_buttons">
              <button class="todo_edit_button">
                <i class="far fa-edit"></i>
              </button>
              <button class="todo_remove_button">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
            <div class="item_buttons edit_buttons">
              <button class="todo_edit_confirm_button">
                <i class="fas fa-check"></i>
              </button>
              <button class="todo_edit_cancel_button">
                <i class="fas fa-times"></i>
              </button>
            </div>
      `;
    return $todoItem;
  };

  const renderAllTodos = (todos) => {
    $todos.innerHTML = "";
    todos.forEach((item) => {
      const todoElement = createTodoElement(item);
      $todos.appendChild(todoElement);
    });
  };

  const getTodos = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((todos) => {
        renderAllTodos(todos);
      })
      .catch((error) => console.error(error.message));
  };

  const addTodo = (e) => {
    e.preventDefault();
    const content = $todoInput.value;
    if (!content) return;
    const todo = {
      content,
      completed: false,
    };
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then(getTodos)
      .then(() => {
        $todoInput.value = "";
        $todoInput.focus();
      })
      .catch((error) => console.error(error.message));
  };

  const toggleTodo = (e) => {
    if (e.target.className !== "todo_checkbox") return;
    const $item = e.target.closest(".item");
    const id = $item.dataset.id;
    const completed = e.target.checked;
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ completed }),
    })
      .then((response) => response.json())
      .then(getTodos)
      .catch((error) => console.error(error.message));
  };

  const init = () => {};
  init();
})();
