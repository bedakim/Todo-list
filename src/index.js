const todoFormEl = document.querySelector(".todo-form");
const todoListEl = document.querySelector(".todo-list");

todoFormEl.addEventListener("submit", e => {
  e.preventDefault();
  addTodo(e.target.elements.todo.value);
  //input 안의 내용 초기화

  //1. .value에 값 대입
  // e.target.elements.todo.value = ''

  //2. 폼의 리셋 사용하기
  e.target.reset();
});
function addTodo(newTodoText) {
  // 클릭 한번이 되어야 할때 수행되어야하는 작업

  // alert (newTodoText)
  //li 태그를 만들어서 문서안에 삽입하기
  const todoItemEl = document.createElement("li");
  todoItemEl.textContent = newTodoText;

  todoListEl.appendChild(todoItemEl);

  //  const trashEl = document.createElement('button')
  //  trashEl.textContent = "삭제"

  //   const todoTrasheEl = document.querySelector('.button')
  //  todoTrasheEl.appendChild(todoListEl)

  //삭제 버튼 만들어서 문서안에 넣기
  const deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "삭제";
  todoItemEl.appendChild(deleteButtonEl);
  //삭제를 클릭시 항목이 삭제
  deleteButtonEl.addEventListener("click", e => {
    todoListEl.removeChild(todoItemEl);
    //e.target.parentElement.parentElement.removeChild(e.target.parentElement)
  });
  //위로버튼을 만들어서 안에 넣기
  const upButtonEl = document.createElement("button");
  upButtonEl.textContent = "위로";
  todoItemEl.appendChild(upButtonEl);

  upButtonEl.addEventListener("click", e => {
    // alert('위로')
    if (todoItemEl.previousElementSibling != null) {
      todoListEl.insertBefore(todoItemEl, todoItemEl.previousElementSibling);
    }
  });
  //아래로 버튼
  const downButtonEl = document.createElement("button");
  downButtonEl.textContent = "아래로";
  todoItemEl.appendChild(downButtonEl);
  downButtonEl.addEventListener("click", e => {
    // alert('아래로')
    if (todoItemEl.nextElementSibling != null) {
      todoListEl.insertBefore(
        todoItemEl,
        todoItemEl.nextElementSibling.nextElementSibling
      );
    }
  });
}

// addEl.addEventListener( 'click', e => {
//     const newTodoText = prompt('새 할일을 추가 하시오')
//   addTodo(newTodoText)
// })

// addTodo('xsccss')
// addTodo('vdsvdvsd')
// addTodo('dwdgggw')

document.querySelector(".todo-input").addEventListener("keypress", e => {
  console.log("keypress");
  console.log("key:", e.key);
});
