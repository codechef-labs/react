import reactLogo from './assets/react.svg'
import viteLogo from '/codechef.svg'
import './App.css'

function App() {
    return (
    <>
      <div>
        <a href="https://codechef.com" target="_blank">
          <img src={viteLogo} className="logo" alt="CodeChef logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CodeChef Labs</h1>
    </>
  )
}

export default App
