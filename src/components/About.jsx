import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 "
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            An enthusiastic, energetic and reliable professional with sound
            programming knowledge and always ready to learn new things. Ability
            to work in a team for the better result and reliable for task
            assignment. Expertise in working on multiple task and passionate
            about web development
          </p>
          <br />
          <h1 className="text-green-600 font-semibold text-xl">Eduction</h1>
          <span>
            "Education: Bachelor of Science in Computer Science and Information
            Technology. Comprehensive coursework and practical experience in
            full-stack development, including proficiency in HTML, CSS,
            JavaScript, React, Node.js, Express, and MongoDB."
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Skils & Experience
          </h1>
          <span>
            Experience in developing dynamic and responsive web applications,
            focusing on creating seamless user experiences and robust
            server-side functionality. Proficient in both individual and
            collaborative projects, adhering to best practices in coding and
            project management.
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Professional Experience
          </h1>
          <p>
            I am a skilled Full Stack Developer with 1 years of experience in
            designing, developing, and maintaining web applications. Proficient
            in both front-end and back-end technologies, including HTML, CSS,
            JavaScript, React, Node.js, Express, and MongoDB. Adept at
            collaborating with cross-functional teams to deliver high-quality
            solutions that meet business requirements. Proven track record in
            optimizing performance, enhancing user experience, and implementing
            scalable architecture. Strong problem-solving skills and commitment
            to continuous learning and improvement in fast-paced environments.
          </p>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl ">
            Certification
          </h1>
          {/* If There are large content or paragraph then we should used <P><P/> tag instead of <span/> tag */}
          <span>
            I have got certificate on Html ,CSS JavaScript ,React ,Python
            ,Nodejs ,Expressjs ,MongooDb.
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <span className="">
            "As a full-stack developer, my mission is to create innovative,
            efficient, and user-friendly web applications that bridge the gap
            between functionality and design. I strive to deliver seamless
            digital experiences by leveraging my expertise in front-end and
            back-end technologies, fostering continuous learning, and embracing
            cutting-edge solutions to meet diverse client needs."
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
