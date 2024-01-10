import React from "react";

import { Input } from "@/components/ui/input";
import SubmitBtn from "@/components/Unique/Buttons/submitBtn/submitBtn";


const Contact = () => {
  return (
    <section className="eachSections sectionHolder" id="contact">
      <h3 className="title">Get in Touch </h3>

      <form>
        <div className=" gap-x-2 md:flex-row gap-y-2 flex flex-col my-4">
          <Input type="text" placeholder="Your Name" className="underBorder" />
          <Input type="email" placeholder="Your Email" className="underBorder" />
        </div>
        <div className=" gap-x-2 md:flex-row gap-y-2 md:mt-0 flex flex-col my-4 mt-5">
          <Input type="number" placeholder="contact number" className="underBorder" />
          <Input type="text" placeholder="Subject" className="underBorder" />
        </div>
        <textarea
          name="userMessage"
          id="userMessage"
          placeholder="Write your message"
          className={`md:h-60 h-96 underBorder  w-full block p-2.5  text-sm   rounded-lg   focus:bg-slate-700 bg-slate-800 placeholder:text-gray-300 text-paste`}
        ></textarea>
        <SubmitBtn>submit</SubmitBtn>
      </form>
    </section>
  );
};
export default Contact;
