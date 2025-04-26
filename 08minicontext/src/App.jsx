import './App.css';
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>React With Chai And Share is important</h1>
    </UserContextProvider>
  )
}

export default App
