function TodoCounter({ total=0, completed=0 }) {
  return (
    <h1>
      Has completado {completed} de {total}  TODO'S
    </h1>
  )
}

export {  TodoCounter };