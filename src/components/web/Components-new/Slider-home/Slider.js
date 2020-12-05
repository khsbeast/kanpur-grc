import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"
import Product from "../Product/Product"


export default class Sliders extends Component {
  render() {
    const settings = {
      rows:2,
      dots: true,
      arrows : true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll:4
    };
    return (
      <div>
        <Slider {...settings} className="Apps">
          <div>
            
          <Product image="images/of.png" name="Moong" priceold="5" pricenew="2.5" id="moong" category="a1" />
          </div>
          <div>
          <Product image="images/of1.png" name="Sunflower" priceold="5" pricenew="2.5" id="sunflower" category="a1" />
          </div>
          <div>
          <Product image="images/of.png" name="Moong" priceold="5" pricenew="2.5" id="moong" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
          <div>
          <Product image="images/of3.png" name="Soya Chunks" priceold="5" pricenew="2.5" id="soyachunks" category="a1" />
          </div>
        </Slider>
      </div>
    );
  }
}