import React from 'react'

const TimelineItem = ({title,date,CGPA}) => {
  return (
    <li className='timeline-item'>
      <h4 className='h4 timeline-item-title'>{title}</h4>
      <span >{date}</span>
      <p className='timeline-text'>{CGPA}</p>

    </li>
  )
}

export default TimelineItem