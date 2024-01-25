const Contact = () => {
  return (
    <div
      className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full pt-48 md:pt-0 pb-12"
      id="contact"
    >
      <form
        action="https://getform.io/f/1d724c66-e3f1-417d-923c-9d65203bbb07"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email - oskarkuchta5@gmail.com
          </p>
        </div>
        <input
          autoComplete="off"
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          autoComplete="off"
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
