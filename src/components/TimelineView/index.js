import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const courseList = timelineItemsList.filter(
    each => each.categoryId === 'COURSE',
  )
  const projectList = timelineItemsList.filter(
    eachProject => eachProject.categoryId === 'PROJECT',
  )
  return (
    <div>
      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: '#0967d2',
          secondary: '#ffffff',
          cardBgColor: '#ffffff',
          cardForeColor: '#0967d2',
          titleColor: '#171f46',
        }}
      >
        {courseList.map(eachCourse => (
          <CourseTimelineCard courseList={courseList} key={eachCourse.id} />
        ))}
      </Chrono>
    </div>
  )
}

export default TimelineView
