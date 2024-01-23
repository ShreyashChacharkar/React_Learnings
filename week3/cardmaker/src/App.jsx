import './App.css'
import Card from './components/Card';
import userInfo from './hooks/userInfo';


function App() {
      let url = 'https://jsonplaceholder.typicode.com/posts'

      const data = userInfo(url)


  return (
    <>
      <h1 style={{color:'white'}}>User Data</h1>
      <div className="container">
        {data.map(user => (
          <Card key={user.id} title={user.title} textBody={user.body} userId={user.userId}/>
        ))}
      

      </div>
    </>
  )
}

export default App;
