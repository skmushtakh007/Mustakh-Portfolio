/* eslint-disable react/no-unescaped-entities */
import { Service } from "./Service"


const ServiceData =
  [
    {
      "title": "Angular",
      "icon": "/images/Angular.png",
      "description": "Greeting...! I'm started learning another front end framework to leverage my front end skill. "
    },
    {
      "title": "DSA",
      "icon": "/images/DSA.webp",
      "description": "Data Structures and Algorithms (DSA) refer to the study of methods for organizing and storing data and the design of procedures (algorithms) for solving problems, which operate on these data structures."
    },
    {
      "title": "Jenkins",
      "icon": "/images/Jenkins.png",
      "description": "Jenkins is an open-source automation server widely used for continuous integration and continuous delivery of software projects."
    },
    {
      "title": "AZURE",
      "icon": "/images/azure.png",
      "description": "Azure is comprehensive and widely used cloud computing platform provided by Microsoft."
    }
  ];

const About = () => {

  return (
    <div className="about active">
      <header className="h2 article-title">About Me</header>
      <section className="about-text">
        <p> Hi, I'm Mustakh Shaikh. Succefully completed Master's degree in Computer Application with distiction. Passionate for Software Developer, Skilled in Core Java, JavaScript, React.js, Redux, Routing. Looking for an opportunities to contribute to the Software development projects and deliver impactful solutions with a passion for coding and quick learning ability.</p>

        <p> Completed MERN Stack course from Naresh IT. Gained skill in front end technology like javascript, React Js and in back end like node JS, Express. Completely practical based learning daily assignment. Developed several projects based on it. Committed to continuous learning, entrolled in new course i.e Angular with real time project. Simultaneously learning deployment tools like docker and Jenkins.</p>
      </section>

      {/* services */}
      <section className="services">
        <h2 className="h3 service-title">What I'm Learning Now</h2>
        <ul className="service-list">
          {
            ServiceData.map((service, index) => (
              <Service key={index} title={service.title} icon={service.icon} description={service.description} />
            ))
          }
        </ul>
      </section>
    </div>
  )
}
export default About