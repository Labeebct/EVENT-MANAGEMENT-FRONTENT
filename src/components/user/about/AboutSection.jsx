import AboutFrame from "./AboutFrame";

import about1 from "../../../assets/about (1).jpg";
import about2 from "../../../assets/about (3).jpg";
import about3 from "../../../assets/about (2).jpg";
import about4 from "../../../assets/about (4).jpg";

const aboutObj = [
  {
    img: about1,
    title: "Successful Business Collaboration",
    discription:
      "At Strategic Event Solutions, we specialize in crafting seamless and impactful events that drive growth and success. Just like the diverse icons in our logo, representing growth, communication, innovation, and achievement, we are committed to delivering exceptional event experiences tailored to your goals. Whether its corporate functions, conferences, or special celebrations, we bring creativity and expertise to every handshake, ensuring your events shine with excellence.",
  },
  {
    img: about2,
    title: "Creative Customer Connections",
    discription:
      "At Labio, we pride ourselves on fostering innovative and personalized connections with our clients. Just like the symbolic light bulb hovering over the interaction between our team and customers, we illuminate ideas and bring visions to life. Whether you are planning a special event or seeking tailored solutions, our customer-centric approach ensures a collaborative journey towards success. Let us brighten your experiences with creativity and dedication",
  },
  {
    img: about3,
    title: "Supportive Event Collaborators",
    discription:
      "At Labio, we believe in the power of teamwork to elevate your events. Our approach is symbolized by the image of mutual support and collaboration, where each member of our team works together to navigate challenges and achieve success. Just as the man supports his colleague in the slope arrow, we are dedicated to providing seamless event solutions backed by strong teamwork and shared expertise. Let us join forces to bring your event visions to life with precision and unity."
  },
  {
    img: about4,
    title:'24/7 Event Management Services',
    discription:'Welcome to Labio, where our dedicated event concierge service is available around the clock to assist you. Just like our team member depicted monitoring events on multiple screens, we provide continuous support and responsiveness to meet your event needs at any hour. Whether you have questions, require immediate assistance, or need real-time updates, our commitment to 24/7 availability ensures, ready to deliver exceptional experiences whenever inspiration strikes'
  },
];

const AboutSection = () => {
  return (
    <div className="w-full flex justify-around flex-wrap h-auto px-4 pt-20 pb-6">
      <AboutFrame aboutObj={aboutObj} />
    </div>
  );
};

export default AboutSection;
  