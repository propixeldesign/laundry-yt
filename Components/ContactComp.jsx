
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


function ContactComp() {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ful36co', 'template_21z98i4', form.current, 'c66Xz0UkzQX-sGOAW')
      .then((result) => {
          console.log(result.text);
          console.log("Success")
          setSubmitted(true)
      }, (error) => {
          console.log(error.text);
          console.log("Falied")
          setSubmitted(false)
      });
      e.target.reset()
  };


  return (

    <div>
      <div className="w-full h-[40vh] bg-blue-400 flex flex-col justify-center relative top-20 md:top-0 items-center text-white">
        <img src="/img/pattern.png" alt="" className="hidden md:inline-block absolute inset-0 top-20 sm:top-0 object-contain opacity-30" />
        <h1 className="text-2xl md:text-4xl tracking-widest uppercase font-medium text-center md:text-left text-white mx-5">
            GET IN TOUCH WITH US
        </h1>
        <span className="inline-block h-1 w-10 rounded bg-white mt-8 mb-6 "></span>
        <p>SAY HELLO! DON’T BE SHY.</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative max-w-full">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.159531164998!2d55.265597127689816!3d25.18500959242774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682def25f457%3A0x3dd4c4097970950e!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1664593710125!5m2!1sen!2sae"
                style={{ filter: "opacity(0.8)" }}
              ></iframe>
              {/* <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter: " "}}></iframe> */}

             

              <div className=" bg-white max-w-xl mx-auto relative items-center  flex-wrap py-4 rounded shadow-md top-[12rem] md:top-5 ">
                <div className="hidden md:inline-block lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 py-2">
                    Business Bay Dubai. United Arab Emirates
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-blue-500 leading-relaxed">
                    example@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              
              
              <p className="leading-relaxed mb-5 text-gray-600">
                We are here to answer any questions you may have about us. Reach out to us and we’ll respond as soon as we can.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-blue-500  mb-6"></span>

              {submitted ? (
                <div className="flex flex-col p-10 my-10 bg-blue-500 text-white max-w-2xl mx-auto">
                    <h3 className="text-3xl font-bold">Message Submitted Successfully!</h3>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Name</label>
                    <input
                    placeholder="Enter your Name"
                      type="text"
                      id="name"
                      name="user_name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Email</label>
                    <input
                      placeholder="Enter your Email"
                      type="email"
                      id="email"
                      name="user_email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                    placeholder="Write your message"
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    ></textarea>

                  </div>
                  <button type='submit' className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Submit
                  </button>
                </form> 
              )}
              

              {/* {contactSend && (
                <div className='bg-blue-400'>
                  <p className='text-white text-xl'>Message Submitted Successfully!</p>
                </div>
              )} */}
              


              <p className="text-xs text-center text-gray-500 mt-3">
                    You may also call us at 333-33-33
              </p>

              {/* Social Icons */}
            <div className="flex space-x-3 mx-auto my-4">
                <div className="h-10 w-10 rounded p-4 bg-blue-500 flex justify-center items-center text-white cursor-pointer hover:bg-blue-600">
                    <a href="#" className="text-white" target="_blank" rel="noopener noreferrer" ><FacebookIcon /></a>
                </div>
                <div className="h-10 w-10 rounded p-4 bg-blue-500 flex justify-center items-center text-white cursor-pointer  hover:bg-blue-600">
                    <a href="#" className="text-white" target="_blank" rel="noopener noreferrer" ><InstagramIcon /></a>
                </div>
                <div className="h-10 w-10 rounded p-4 bg-blue-500 flex justify-center items-center text-white cursor-pointer  hover:bg-blue-600">
                    <a href="#" className="text-white " target="_blank" rel="noopener noreferrer" ><LinkedInIcon /></a>
                </div>
            </div>
              

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactComp;