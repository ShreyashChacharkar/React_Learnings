import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <>
       {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" />
    <div className="container">
      <TextForm headings="Enter Text here"/>
    </div>
    <About/>
    </> 
  );
}

export default App;