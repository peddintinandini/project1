import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic4 from '../h _Images/soup.jpg'
import pic2 from '../h _Images/pasta2.png';
import pic1 from '../h _Images/meals.jpg';
import pic3 from '../h _Images/biryani.webp';
const Sliderr = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
    <Carousel {...settings}>
      <Wrap>
      <div  style={{backgroundColor:"black",height:"800px",width:"cover"}}>
          <img src={pic2} alt="" />
        </div>
      </Wrap>
      <Wrap>
        <div  style={{backgroundColor:"black",height:"800px",width:"cover"}}>
          <img src={pic3} alt="" />
        </div>
      </Wrap>

      <Wrap>
        <div  style={{backgroundColor:"black",height:"800px",width:"cover"}}>
          <img src={pic4} alt="" />
        </div>
      </Wrap>

      <Wrap>
        <div  style={{backgroundColor:"black",height:"800px",width:"cover"}}>
          <img src={pic1} alt="" />
        </div>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
    & > button {
        opacity: 0;
        height: 100%;
        width: 50px;
        z-index: 1;

        &:hover {
            opacity: 4;
        }
    }

    ul li button {
        &:before {
        font-size: 10px;
        color: white;
        }
    }

    .slick-list {
        overflow: initial;
    }

`
const Wrap = styled.div`
    border-radius: 4px;
    position: relative;

    div{
        border-radius: 5px;
        box-shadow: 
        rgb(0 0 0 / 75%) 0px 30px 30px -10px,
        rgb(0 0 0 / 75%) 0px 10px 10px -10px;
        display: block;
        padding: 5px;

        img {
            height:600px;
            width:1200px;
            padding:175px;
            // opacity:50%;
;        }

        &:hover {
            border: 4px solid white;
        }
    }
`;

export default Sliderr;