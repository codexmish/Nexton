import React, { useEffect, useState } from "react";
import ProductCard from "./Common/ProductCard";
import axios from "axios";
import Slider from "react-slick";
import CommonHead from "./Common/CommonHead";
import { useNavigate } from "react-router";

const Recommendation = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // console.log(window)
      const w = window.innerWidth;
      if (w <= 360) setSlidesToShow(1);
      else if (w <= 620) setSlidesToShow(1);
      else if (w <= 768) setSlidesToShow(2);
      else if (w <= 1024) setSlidesToShow(2);
      else if (w <= 1289) setSlidesToShow(4);
      else setSlidesToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 4,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  const [allProductes, setAllProduces] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setAllProduces(res.data.products);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);





  const navigate = useNavigate();


  const handleDetails =(id)=>{
    console.log(id)
    navigate(`/productdetails/${id}`)

  };













  return (
    <>
      <section className="recomendatio py-22 px-3 lg:px-0">
        <div className="container reco">
          <CommonHead
            text1={"Recommendations. "}
            text2={"Best matching products for you"}
          />

          <Slider className="pt-10" {...settings}>
            {allProductes.slice(0, 9).map((item) => (
              <div>
                <ProductCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  discount={item.discountPercentage}
                  rating={item.rating}
                  stock={item.stock}
                  image={item.thumbnail}
                  detailsClick={()=>handleDetails(item.id)}
                />
              </div>
            ))}
          </Slider>

          {/* {allProductes.slice(0, 9).map((item) => (
            
            <div>
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                category={item.category}
                discount={item.discountPercentage}
                rating={item.rating}
                stock={item.stock}
                image={item.thumbnail}
              />
            </div>
          ))} */}
        </div>
      </section>
    </>
  );
};

export default Recommendation;
