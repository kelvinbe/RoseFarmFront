import './App.css';
import Home from './components/Home/Home';
import React, {useEffect, useState} from 'react'
import LoaderPage from './components/Loader/LoaderPage';

function App() {

  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
        setLoading(true)
    }, 9000)
  }, [])

  return (

    <div className="App">
      { isLoading ? 
      <Home /> :
        <LoaderPage />
}
    </div>
  );
}

export default App;
