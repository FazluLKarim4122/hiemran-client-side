import React from "react";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import img2 from "../../assets/Emran_cropped_2.png";

const Myself = () => {
  return (
    <div className="flex justify-center">
      <div>
        <img src={img2} alt="" />
        <div className="text-end mt-32">
          <p className="text-[#00000066] text-xs font-medium ">IN THIS PAGE </p>
          <p className="text-xs font-medium">Myself</p>
          <p className="text-xs font-medium">Experiences </p>
          <p className="text-xs font-medium">Education</p>
        </div>
      </div>

      <div>
        <p className="text-7xl font-light text-black">
          EMRAN <br /> HOSSAIN
        </p>
        <p className="font-normal text-3xl text-[#000000cc]">
          Product Designer
        </p>
        <p className="font-light text-xl text-[#000000] pt-36 pr-40">
          I am a creativity practitioner with over 5 years of professional
          experience designing solutions in the digital product industry as a UI
          and UX designer. My focus is on creating clear visual concepts that
          deliver impactful and inclusive experiences. I believe that beauty is
          an expression, but ultimately, we value the solutions that make us
          feel better and safer.
        </p>
        <p className="font-normal text-xl text-[#000000] pt-8">
          In addition to my design work, I have a strong interest in business
          and investment. I enjoy practicing photography, appreciating the
          sounds of nature's silence, and riding along beautiful roads.
        </p>
       <p className="font-medium text-xs text-[#00000066] pt-12">
       Long Story Short
       </p>
        <p className="font-normal text-xl text-[#000000] pt-6">
        I didn’t start my career in design—I found my way into it. My journey began in Finance & Banking, a world of numbers and logic. But something was missing. I was drawn to creativity and the way design shapes experiences, that truly connect with people.
        <br />
        That curiosity led me to UI and UX design, what started as learning soon became a passion—understanding user behaviour, designing intuitive interfaces, and creating digital experiences that feel effortless.
          </p>
          <p className="font-light
           text-3xl text-black pt-8">
            For me, design isn’t just about 
            aesthetics — it’s about architecture, flow, and purpose. Every product should solve a problem, guide users seamlessly, and make technology feel natural. I focus on the intersection of business strategy, user psychology, and design systems, ensuring that what I create is not only visually compelling but also functional and meaningful.
          </p>
          <p className="font-normal text-xl text-[#000000] pt-8">
          Outside of work, I find creativity in the simple moments—long road trips, quiet nature, photography, and meaningful conversations. My wife is my biggest partner and supporter, keeping me grounded and inspired. To me, design isn’t just a profession; it’s a way of seeing the world, shaping experiences, and making everyday life just a little better.
          I believe that great design is never finished—there’s always something to refine, a new perspective to explore, and a better way to connect with users. And that’s what makes this journey so exciting.

          </p>
          <div className="flex gap-14 pt-20">
            <div className="font-light text-lg text-black">Photography</div>
            <div className="font-light text-lg text-black">Riding</div>
            <div className="font-light text-lg text-black">Silence</div>
            <div className="font-light text-lg text-black">Reading</div>
          </div>
      </div>
      <div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Myself;
