import axios from "axios"
import './App.css'
import { useEffect ,useState} from "react"

function App() {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(response=>{
      // console.log(response);
      setData(response.data.books)
    }).catch(error=>{
      if(error.response.status==404){
        console.log('Status code:', error.response.status )
        console.log('Website not found')
      }
    })
  },[])
  // console.log(data)

  return (
    <>
      {data.map((item)=>{
        return <div key={item.id} className='container'>
          <h1>{item.title}</h1>
          <div className="body">
            <img className="img" src={item.imageLinks.smallThumbnail} alt="images"/>
            <p>{item.description}</p>
          </div>
          {item.authors.map((name)=>{
            return <h3>{name}</h3>
          })}
          <hr />
        </div>
      })}
    </>
  )
}

export default App
