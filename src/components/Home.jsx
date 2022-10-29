import { Link } from "react-router-dom";




export default function Home() {
  return (
    <div className="home">  
      <h1>Home Page</h1>
      <div className="productsNav">

      <Link to="/*">error 404</Link>
      

      </div>
      <div className="homecontainer">
       <img src="https://img.freepik.com/free-vector/shop-with-sign-we-are-open_52683-38687.jpg?w=740&t=st=1666602924~exp=1666603524~hmac=f92080e429a414eb929ed2c96471511031b6ad97b25e9aff56449de21da59d2f"
       alt="home image" />
      
      </div>
     
      </div>
  );
}
