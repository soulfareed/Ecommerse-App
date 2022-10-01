import React, { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2"> Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">
            {" "}
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2"> Jewellary</button>
          <button className="btn btn-outline-dark me-2"> Electronic</button>
        </div>
        {filter.map((Product) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card h-100 text-center p-4" key={Product.id}>
                  <img
                    src={Product.image}
                    className="card-img-top"
                    alt={Product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{Product.title}</h5>
                    <p className="card-text">${Product.price}</p>
                    <a href="#" className="btn btn-primary">
                      purchase now
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">
              {" "}
              Latest Products
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}
