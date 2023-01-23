import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseList} = props
  const {courseTitle, description, duration, tagsList} = courseList
  console.log(courseTitle)
  return (
    <div className="course-card">
      <div className="heading">
        <h1>{courseTitle}</h1>
        <div className="clock">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default CourseTimelineCard
