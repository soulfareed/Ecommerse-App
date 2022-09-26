import React, { useState, useEffect } from "react";

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading = true;
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
          <div className="btn btn-outline-dark me-2">All</div>
          <div className="btn btn-outline-dark me-2"> Men's Clothing</div>
          <div className="btn btn-outline-dark me-2"> Women's Clothing</div>
          <div className="btn btn-outline-dark me-2"> Jewellary</div>
          <div className="btn btn-outline-dark me-2"> Electronic</div>
        </div>
        {filter.map(
          (Products = () => {
            return (
              <>
                <div className="col-md-3">
                  <div class="card">
                    <img
                      src={Products.image}
                      class="card-img-top"
                      alt={Products.title}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{Products.title}</h5>
                      <p class="card-text">${Products.price}</p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
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
