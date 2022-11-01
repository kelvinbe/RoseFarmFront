import './App.css';
import Home from './components/Home/Home';
import React from 'react'
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications } from 'react-notifications-component'



function App() {

  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //       setLoading(true)
  //   }, 9000)
  // }, [])

  return (

    <div className="App">
      <ReactNotifications />
      
        
      <Home /> 

    </div>
  );
}

export default App;
