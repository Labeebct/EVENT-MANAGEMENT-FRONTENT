import ContactForm from "./ContactForm";
import timoutLoading from "../../../config/timeoutLoading";

const ContactContent = ({ role }) => {
  timoutLoading();
  return <ContactForm role={role} />;
};

export default ContactContent;
