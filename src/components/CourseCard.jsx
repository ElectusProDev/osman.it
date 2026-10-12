import { assets } from '../assets';

export default function CourseCard({ course, onOpen }) {
  return <article className="course-card">
    <button className="course-cover" onClick={() => onOpen(course)} aria-label={`View ${course.description}`}>
      <img className="cover-base" src={assets.courses.imgRectangle139} alt="" loading="lazy" />
      <img className={`course-thumbnail thumbnail-${course.id}`} src={course.image} alt={course.description} loading="lazy" />
    </button>
    <div className="course-body"><div className="course-heading"><p className="course-author">by <span>{course.author}</span></p><h3><button onClick={() => onOpen(course)}>{course.title}</button></h3></div>
      <div className="course-meta"><span><i className="clock-icon" aria-hidden="true" />{course.duration}</span><span><i className="students-icon" aria-hidden="true">♧</i>{course.students} Students</span></div>
      <div className="course-bottom"><p className="course-price"><span>{course.price}</span><strong>Free</strong></p><button className="text-button" onClick={() => onOpen(course)}>View Details</button></div>
    </div>
  </article>;
}
