function TodoSearch() {
  return (
    <input placeholder="Escriba la tarea aca" className="TodoSearch" onChange={(event) => console.log(event.target.value)} />
  )
}

export { TodoSearch };