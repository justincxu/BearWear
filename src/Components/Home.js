import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 

function Home () {
    function App() {
        return (
        <div>
          <div style={{ 
            backgroundImage: `url("https://1800cabinetwholesalers.com/wp-content/uploads/2014/11/kitchen-cabinet-background-1.jpg")`,  
            marginTop: "30px" ,backgroundSize:'cover', marginLeft: "300px", marginRight: '300px', backgroundPosition: 'center', height: '500px'

          }}>
      
            <div class="flex flex-col items-center space-y-10 text-xl text-white">
        <Link to={"/Outer"}>Outer</Link>
        <Link to={"/Bottom"}>Bottom</Link>
        <Link to={"/Tops"}>Tops</Link>
        <Link to={"/Shoes"}>Shoes</Link>
        <Link to={"/Accessories"}>Accessories</Link>
        <Link to={"/Underwear"}>Underwear</Link>
        </div>    
          </div>
        </div>
        );
      }
    return (
    <div>
        <h1 class="text-center text-2xl">
            Categories
        </h1>
        <div class="justify-center">
        <App />
        </div>
        {/* <div className="flex flex-col items-center space-y-10">
        <Link to={"/Outer"}>Outer</Link>
        <Link to={"/Bottom"}>Bottom</Link>
        <Link to={"/Tops"}>Tops</Link>
        <Link to={"/Shoes"}>Shoes</Link>
        <Link to={"/Accessories"}>Accessories</Link>
        <Link to={"/Underwear"}>Underwear</Link>
        </div>     */}
    </div>
    )
}


export default Home;