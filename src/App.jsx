import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState([])
  const [str, setStr] = useState('') // состояние input

  const saveName = () => {
    if (str.trim() === '') return // не добавляем пустую строку
    setArr([...arr, str]) // добавляем введённый текст в массив
    setStr('') // очищаем input
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Test</h1>

      {/* просто количество элементов в массиве */}
      <div>Всего людей: {arr.length}</div>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>

        <button onClick={saveName}>Добавить</button>

        <input
          type="text"
          value={str}
          onChange={(e) => setStr(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') saveName()
          }}
          placeholder="Введите имя"
        />

        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
