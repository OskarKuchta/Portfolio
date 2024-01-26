import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    message: "",
  });
  const emailRegex: RegExp =
    /^[A-Za-z0-9]+([._-][A-Za-z0-9]+)*[A-Za-z][A-Za-z0-9]*@[A-Za-z0-9._-]+\.[A-Za-z]{2,}$/;

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorMessages: string[] = [];

    if (inputValues.email.length === 0) {
      errorMessages.push("Email is missed.");
    } else if (!emailRegex.test(inputValues.email)) {
      errorMessages.push("Invalid email.");
    }

    if (inputValues.message.length === 0) {
      errorMessages.push("Message is missed");
    } else if (inputValues.message.length < 15) {
      errorMessages.push("Message is too short");
    }

    if (errorMessages.length > 0) {
      toast.warn(errorMessages.join("\n"));
    } else {
      emailjs.sendForm(
        "service_130vt6e",
        "template_qfxxelc",
        e.target as HTMLFormElement,
        "S6P_vPM2NN7Qz6Bdp"
      );
      toast.success("Email has been sent!");
      setInputValues({
        email: "",
        message: "",
      });
    }
  };
  return (
    <div
      className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full pt-48"
      id="contact"
    >
      <form className="flex flex-col max-w-[600px] w-full" onSubmit={sendEmail}>
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#46E258] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - oskarkuchta5@gmail.com
          </p>
        </div>
        <input
          autoComplete="off"
          className="my-2 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email_from"
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={10}
          placeholder="Message"
          onChange={(e) =>
            setInputValues({ ...inputValues, message: e.target.value })
          }
        ></textarea>
        <button className="text-white border-2 hover:bg-[#46E258] hover:border-[#46E258] px-4 py-3 my-8 mx-auto flex items-center outline-none rounded-sm focus:bg-[#46E258] focus:border-[#46E258]" >
          Send message
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
