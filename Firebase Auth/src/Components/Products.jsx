import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass } from "react-icons/fa6";

const Products = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState(null);
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState(null);

  const getDataFromServer = () => {
    axios.get(`https://fakestoreapi.com/products`, {
      params: {
        _page: page,
        _limit: 7,
        type: type,
        _sort: "price",
        _order: order,
        q : search
      }
    }).then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3000/products/${id}`)
      .then((res) => {
        alert("Product Deleted Successfully...");
        getDataFromServer();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDataFromServer()
  }, [page, type, order, search])

  return (
    <>
      <div className=' d-flex justify-content-center align-items-center'>
   
      </div>

      <div className="products p-5 container" style={{ borderBottom: "2px solid #f0f0f0" }}>
        <div className="row">
          <div className='p-5 ps-4 pe-4 d-flex justify-content-between align-items-center'>
          <div className='pe-1 d-flex justify-content-center align-items-center'>
              <div className='search me-4 p-2 d-flex align-items-center'>
                <FaMagnifyingGlass className='me-2 ms-1'/>
                <input onChange={(e) => setSearch(e.target.value)} className='' type="text" placeholder='Search...' />
              </div>
            </div>
            <div className='sort ps-1'>
              <button onClick={() => setOrder("asc")} className='me-3 p-2 ps-5 pe-5 lowToHigh'>Price Low To High</button>
              <button onClick={() => setOrder("desc")} className='ms-3 p-2 ps-5 pe-5 highToLow'>Price High To Low</button>
            </div>
          </div>
          {data.map((el) => (
            <div key={el.id} className="product p-0 text-center mb-4 col-3 h-100-block">
              <Link to={`/description/${el.id}`}>
                <img className='product-img mb-4' src={el.image} height={200} width={180} alt="" />
              </Link>
              <h5 className='mb-2'>{el.title}</h5>
              <p style={{fontWeight: 'bold'}}>$ {el.price}</p>
              <div className='d-flex justify-content-center align-items-center'>
                <button className='edit-btn me-2'><Link className='edit-link' to={`/edit/${el.id}`}>Edit</Link></button>
                <button onClick={() => deleteProduct(el.id)} className='delete-btn ms-2'>Delete</button>
              </div>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center align-items-center mt-3'>
          <button onClick={() => setPage(page - 1)} disabled={page == 1} className='pagination-btn me-4'>Prev</button>
          <span className='pagination-page-count'>{page}</span>
          <button onClick={() => setPage(page + 1)} disabled={page == 5} className='pagination-btn ms-4'>Next</button>
        </div>
      </div>
    </>
  )

}

export default Products
