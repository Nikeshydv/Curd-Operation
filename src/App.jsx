
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Insert from './Pages/Insert'
import Display from './Pages/Display'
import Search from './Pages/Search'
import Update from './Pages/Update'
import Contact from './Pages/Contact'
import Nopage from './Pages/Nopage'
import Layout from './Pages/Layout'





const App=()=>{
  return(
    <>
<BrowserRouter>
<Routes>

<Route path='/' element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path='home' element={<Home/>}/>
<Route path='insert' element={<Insert/>}/>
<Route path='display' element={<Display/>}/>
<Route path='search' element={<Search/>}/>
<Route path='update' element={<Update/>}/>
<Route path='Contact' element={<Contact/>}/>
<Route path='*' element={<Nopage/>}>

</Route>

</Route>
</Routes>

</BrowserRouter>

    </>
  )
}


export default App;