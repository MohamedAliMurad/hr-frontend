
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './componets/sidebar'
import TaxDetails from './pages/TaxesDetails'
import TaxesList from './pages/TaxesList'

function App() {

  return (
    <AppLayout>
      <Router>
<Routes>
<Route path="/tax-details" Component={TaxDetails}/>
<Route  path="/tax-list" Component={TaxesList}/>
<Route  path="*" Component={TaxesList}/>

</Routes>
      </Router>
    </AppLayout>
  )
}

export default App
