import React from 'react'
import { FaBookReader } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2  className="h2 article-title">Resume</h2> 
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className='timeline-list'>
          <TimelineItem
            title="DY Patil Institute of Master of Computer Application"
            date="Dec 2021 - Aug 2023"
            CGPA="7.96"
          />
          <TimelineItem
            title="Maharashtra Udayagiri Mahavidyalaya Udgir"
            date="June 2018 — Aug 2021"
            CGPA="9.8"
          />
          <TimelineItem
            title="Maharashtra Udayagiri Mahavidyalaya Udgir"
            date="June 2016 — April 2017"
            CGPA="65%"
          />
          <TimelineItem
            title="Sanskar Mahavidyalaya Udgir"
            date="June 2014 — May 2015"
            CGPA="80%"
          />
        </ol>
      </div>
      <div className="skill">
        <h3 className="h3 skills-title">Technical skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="JavaScript" value={85} />
          <SkillItem title="React JS" value={80} />
          <SkillItem title="Java" value={75} />
          <SkillItem title="MySQL" value={70} />
        </ul>
      </div>
    </section>
  )
}

export default Resume;