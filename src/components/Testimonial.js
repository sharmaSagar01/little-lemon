import React from "react";
import { useRef } from "react";
import "../styles/Testimonial.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      user: "User 1",
      compliments:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      user: "User 2",
      compliments:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    {
      image:
        "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=902",
      user: "User 3",
      compliments:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU",
      user: "User 4",
      compliments:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    {
      image:
        "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png",
      user: "User 5",
      compliments:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    {
      image:
        "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png",
      user: "User 6",
      compliments:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
    {
      image:
        "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png",
      user: "User 7",
      compliments:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
    },
  ];

  const testimonialBodyRef = useRef(null);
  // function to handle scrolling left
  const handleScrollLeft = () => {
    testimonialBodyRef.current.scrollBy({
      left: -400, // adjust this value to change the amount of scroll
      behavior: "smooth",
    });
  };

  // function to handle scrolling right
  const handleScrollRight = () => {
    testimonialBodyRef.current.scrollBy({
      left: 400, // adjust this value to change the amount of scroll
      behavior: "smooth",
    });
  };
  return (
    <div className="testimonial">
      <h1>Testimonials</h1>
      <div className="testimonial__controls">
        <button className="testimonial__control" onClick={handleScrollLeft}>
          &lt;
        </button>

        <div className="testimonial__body" ref={testimonialBodyRef}>
          {data.map((item) => (
            <TestimonialCard
              image={item.image}
              user={item.user}
              compliment={item.compliments}
            />
          ))}
        </div>
        <button className="testimonial__control" onClick={handleScrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
