import AboutSection from "./AboutSection";
import timoutLoading from "../../../config/timeoutLoading";
import AboutUsBg from "./AboutUsBg";

const AboutContent = () => {
  timoutLoading();
  return (
    <>
      <AboutUsBg />
      <AboutSection />
    </>
  );
};

export default AboutContent;
