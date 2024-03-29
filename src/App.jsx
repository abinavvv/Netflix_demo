import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Row from './components/Row'
import requests from './request'



function App() {


  

  return (
    <>
    <Nav/>
   <Banner fetchurl={requests.fetchNetflixOriginals}/>
  
   <Row isPoster='true' tittle='Trending'fetchUrl={requests.fetchTrending}/>  
   
   <Row tittle='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>
   <Row tittle='Top Rated' fetchUrl={requests.fetchTopRated  }/>
   <Row tittle='Action' fetchUrl={requests.fetchActionMovies}/>
   <Row tittle='Comedy' fetchUrl={requests.fetchComedyMovies}/>
   <Row tittle='Horror' fetchUrl={requests.fetchHorrorMovies}/>
   <Row tittle='Romance' fetchUrl={requests.fetchRomanceMovies}/>
   <Row tittle='Documentries' fetchUrl={requests.fetchDocumentaries}/>
   
   
    </>
  )
}

export default App
