import axios from "axios";
import { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);

  const dataFetch = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {data.map((el) => (
          <div key={el.id} className="cardjeel" style={{border: '1px solid red', padding: '10px 20px'}}>
            <img src={el.image} alt={el.title} style={{height:"250px",width:"250px", marginLeft: '70px'}} />
            <h5 style={{textAlign: 'center', fontSize: '18px'}}>{el.title}</h5>
            <p style={{textAlign: 'center'}}>{el.description}</p>
            <p style={{textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>${el.price}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Product;