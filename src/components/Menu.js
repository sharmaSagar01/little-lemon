import React, { useRef } from "react";
import "../styles/Menu.css";
import Card from "./Card";

const Menu = () => {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2crUu4J2JWafAtVXJEVF4_UkEo26wT0fWA&usqp=CAU",
      title: "Card 1",
      price: "$10.99",
      description:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
      image:
        "https://img.delicious.com.au/BeKyn8Dn/del/2022/10/p69-parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-and-cabbage-slaw-176385-1.png",
      title: "Card 2",
      price: "$20.99",
      description:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
      image:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg",
      title: "Card 3",
      price: "$30.99",
      description:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
      image:
        "https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
      title: "Card 4",
      price: "$40.99",
      description:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Top-10-foods-to-try-in-Mexico-c560a97.jpg?resize=960,872",
      title: "Card 5",
      price: "$50.99",
      description:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
  ];

  const menuBodyRef = useRef(null);
  // function to handle scrolling left
  const handleScrollLeft = () => {
    menuBodyRef.current.scrollBy({
      left: -400, // adjust this value to change the amount of scroll
      behavior: "smooth",
    });
  };

  // function to handle scrolling right
  const handleScrollRight = () => {
    menuBodyRef.current.scrollBy({
      left: 400, // adjust this value to change the amount of scroll
      behavior: "smooth",
    });
  };
  return (
    <div className="menu">
      <div className="menu__heading">
        <h1>Specials</h1>

        <button>Online Menu</button>
      </div>
      <div className="menu__controls">
        <button className="menu__control" onClick={handleScrollLeft}>
          &lt;
        </button>
        <div className="menu__body" ref={menuBodyRef}>
          {data.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
        <button className="menu__control" onClick={handleScrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Menu;
