import React from "react";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import img2 from "../../assets/Emran_cropped_2.png";
import Footer from "../../SharedComponents/Footer/Footer";

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
          I didn’t start my career in design—I found my way into it. My journey
          began in Finance & Banking, a world of numbers and logic. But
          something was missing. I was drawn to creativity and the way design
          shapes experiences, that truly connect with people.
          <br />
          That curiosity led me to UI and UX design, what started as learning
          soon became a passion—understanding user behaviour, designing
          intuitive interfaces, and creating digital experiences that feel
          effortless.
        </p>
        <p
          className="font-light
           text-3xl text-black pt-8"
        >
          For me, design isn’t just about aesthetics — it’s about architecture,
          flow, and purpose. Every product should solve a problem, guide users
          seamlessly, and make technology feel natural. I focus on the
          intersection of business strategy, user psychology, and design
          systems, ensuring that what I create is not only visually compelling
          but also functional and meaningful.
        </p>
        <p className="font-normal text-xl text-[#000000] pt-8">
          Outside of work, I find creativity in the simple moments—long road
          trips, quiet nature, photography, and meaningful conversations. My
          wife is my biggest partner and supporter, keeping me grounded and
          inspired. To me, design isn’t just a profession; it’s a way of seeing
          the world, shaping experiences, and making everyday life just a little
          better. I believe that great design is never finished—there’s always
          something to refine, a new perspective to explore, and a better way to
          connect with users. And that’s what makes this journey so exciting.
        </p>
        <div className="flex gap-14 pt-20">
          <div className="font-light text-lg text-black">Photography</div>
          <div className="font-light text-lg text-black">Riding</div>
          <div className="font-light text-lg text-black">Silence</div>
          <div className="font-light text-lg text-black">Reading</div>
        </div>
        {/* Experience Section */}
        <section className="mt-32">
          <p className="font-normal text-[#00000066] text-lg ">
            WORK EXPERIENCES
          </p>
          <div className=" ">
            <h3 className="font-light text-xl text-black ">Awesome Motive</h3> 

            <ul className="space-y-2">
            <li className=" flex items-baseline space-x-2">
              <span className="w-[5.99px] h-[6px] bg-[#00000066] rounded-full"></span>
                <p className="text-lg font-light text-[#000000]">
                  Designing and enhancing the most powerful and user-friendly
                  photography gallery plugins in the WordPress industry.
                </p>
              </li>
              <li className=" flex items-baseline space-x-2">
              <span className="w-[5.99px] h-[6px] bg-[#00000066] rounded-full"></span>
                <p className="text-lg font-light text-[#000000]">
                  Collaborating across teams, including developers, marketing,
                  and support, to gather design requirements and translate them
                  into user-friendly solutions that align with product goals.
                </p>
              </li>
              <li className=" flex items-baseline space-x-2">
              <span className="w-[5.99px] h-[6px] bg-[#00000066] rounded-full"></span>
              <p className="text-lg font-light text-[#000000]">
                  Balancing functionality and usability—understanding complex
                  features, researching best practices, and developing intuitive
                  designs that simplify workflows for users.
                </p>
              </li>
              <li className=" flex items-baseline space-x-2" >
              <span className="w-[5.99px] h-[6px] bg-[#00000066] rounded-full"></span>
              <p className="text-lg font-light text-[#000000]">
                  Working closely with the Product Manager to align design
                  decisions with business strategy, product vision, and user
                  needs to drive engagement and growth.
                </p>
              </li>
              <li className=" flex items-baseline space-x-2">
              <span className="w-[5.99px] h-[6px] bg-[#00000066] rounded-full"></span>
              <p className="text-lg font-light text-[#000000]">
                  Ensuring consistency by contributing to design systems and
                  reusable UI components, making development and iteration more
                  efficient.
                </p>
              </li>
            </ul>
          </div>
        </section>
        {/* Academic Section */}
        <section className="mt-32 mb-60">
        <p className="font-normal text-[#00000066] text-lg ">
            ACADEMIC LEARNING
          </p>
          <div className="space-y-2 mt-5">
            <h3 className="font-normal text-2xl text-black ">National University</h3> 
            <div className="flex  gap-2 mt-2 space-x-0">
              <p className="font-normal text-lg text-black ">Bachelor of Business Administration (BBA)</p>
              <div className="divider divider-horizontal"></div>
              <p className="font-normal text-sm text-[#00000099] ">2012 - 2017</p>
            </div>
            <p className="font-normal text-sm text-[#00000099] ">Finance & Banking</p>
            
          </div>
          <p className="divider"></p>
          <div className="space-y-2 mt-5">
            <h3 className="font-normal text-2xl text-black ">BASIS - BITM</h3> 
            <div className="flex  gap-2 mt-2 space-x-0">
              <p className="font-normal text-lg text-black ">Graphics & UI/UX Designer</p>
              <div className="divider divider-horizontal"></div>
              <p className="font-normal text-sm text-[#00000099] ">Oct 2015 - Dec 2015</p>
            </div>
            <p className="font-normal text-sm text-[#00000099] ">Finance & Banking</p>
            
          </div>
          <p className="divider"></p>
          <div className="space-y-2 mt-5">
            <h3 className="font-normal text-2xl text-black ">Dania University College</h3> 
            <div className="flex  gap-2 mt-2 space-x-0">
              <p className="font-normal text-lg text-black ">Higher Secondary School Certificate</p>
              <div className="divider divider-horizontal"></div>
              <p className="font-normal text-sm text-[#00000099] ">2010 - 2012</p>
            </div>
            <p className="font-normal text-sm text-[#00000099] ">Business Studies</p>
            
          </div>
          <p className="divider"></p>
          <div className="space-y-2 mt-5">
            <h3 className="font-normal text-2xl text-black ">AK High School</h3> 
            <div className="flex  gap-2 mt-2 space-x-0">
              <p className="font-normal text-lg text-black ">Secondary School Certificate</p>
              <div className="divider divider-horizontal"></div>
              <p className="font-normal text-sm text-[#00000099] ">2006 - 2010</p>
            </div>
            <p className="font-normal text-sm text-[#00000099] ">Business/Commerce</p>
            
          </div>

        </section>
        {/* Footer Section */}
        <Footer></Footer>
      </div>
      <div>
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Myself;
