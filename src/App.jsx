import { useState } from "react"

function App() {
  const [arr, setArr] = useState([])
  const [input, setInput] = useState("")

  const addNumber = () => {
    if (input.trim() === "" || isNaN(input)) return
    setArr([...arr, Number(input)])
    setInput("") // очистить инпут
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Сумма чисел</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          addNumber()
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите число..."
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            border: "none",
            borderRadius: "8px",
            background: "#4cafef",
            color: "white",
            cursor: "pointer",
          }}
        >
          Добавить
        </button>
      </form>

      <div style={{ marginTop: "20px" }}>
        <p>Элементы: {arr.join(", ") || "пусто"}</p>
        <p>Сумма: {arr.reduce((acc, val) => acc + val, 0)}</p>
      </div>
    </div>
  )
}

export default App
