import './App.css';
import Home from './components/Home/Home';
import React from 'react'

function App() {

  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //       setLoading(true)
  //   }, 9000)
  // }, [])

  return (

    <div className="App">
      {
      <Home /> 
        // <LoaderPage />
}
    </div>
  );
}

export default App;
