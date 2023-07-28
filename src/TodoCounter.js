import "./TodoCounter.css";

function TodoCounter({ total=0, completed=0 }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span>  TODO'S
    </h1>
  )
}

export {  TodoCounter };