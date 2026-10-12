import { assets } from '../assets';
import { categories, description, feedback, instructors } from '../data';

export function SectionHeading({ title, subtitle, children, centered = true }) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{children}</div>;
}

export function Categories({ selected, onSelect, onBrowse }) {
  return <section className="categories-section" aria-labelledby="categories-title"><h2 id="categories-title">Browse top category</h2>
    <div className="category-grid">{categories.map(category => <button key={category.name} className={`category-card category-${category.color} ${selected === category.name ? 'selected' : ''}`} onClick={() => onSelect(category.name)} aria-pressed={selected === category.name}>
      <span className="category-icon"><img src={category.icon} alt="" loading="lazy" /></span><span className="category-copy"><span className="category-name">{category.name}</span><span className="category-count">{category.count} Courses</span></span>
    </button>)}</div>
    <div className="category-browse"><p>We have more category &amp; subcategory.</p><button onClick={onBrowse}>Browse All<img src={assets.categories.imgArrowRight} alt="" /></button></div>
  </section>;
}

export function Instructors() {
  return <section className="instructors-section" id="instructors"><SectionHeading title="Top instructor of the month" subtitle="What Students Say About Academy LMS" />
    <div className="instructor-grid">{instructors.map(person => <article className="instructor-card" key={person.name}>
      <div className={`instructor-photo ${person.crop || ''}`}><img src={person.image} alt={person.name} loading="lazy" /></div>
      <div className="instructor-info"><h3>{person.name}</h3><p>{person.role}</p></div>
      <div className="instructor-divider"><img src={assets.instructors.imgDevider} alt="" /></div>
      <div className="instructor-rating"><span><img src={assets.instructors.imgStar} alt="Rating" />{person.rating}</span><span>{person.students}<span className="muted"> students</span></span></div>
    </article>)}</div>
  </section>;
}

export function Statistics() {
  return <section className="statistics" aria-label="Learning community statistics">{[['25K+', 'Active Students'], ['899', 'Total Courses'], ['158', 'Instructor'], ['100%', 'Satisfaction rate']].map(([value, label]) => <div className="stat" key={label}><p>{value}</p><h2>{label}</h2></div>)}</section>;
}

export function About() {
  return <section className="about-section" id="about"><img className="about-image" src={assets.about.imgFrame3868} alt="A student using a laptop, surrounded by creative learning illustrations" loading="lazy" /><div className="about-copy"><h2>Grow us your skill<br />with LearnPress LMS</h2><p>{description}</p><ul>{[0, 1, 2, 3].map(i => <li key={i}>Content name here</li>)}</ul><a className="button button-green-outline button-small" href="#courses">Browse all course</a></div></section>;
}

const bannerImages = [
  ['imgImage10', -110, 67, 336.259, 282.22, 300.198, 152.56],
  ['imgImage9', -49, -84, 294.283, 247.094, 262.619, 133.697],
  ['imgImage8', 64, 28, 275.433, 231.157, 245.907, 124.943],
  ['imgImage7', 1160.05, 94.84, 287.489, 241.267, 256.678, 130.398],
  ['imgImage6', 940, -69, 288.811, 242.557, 257.678, 131.31],
  ['imgImage5', 949, 57, 336.205, 282.212, 300.113, 152.6],
];

export function Promotion() {
  return <section className="promotion"><div className="promotion-art" aria-hidden="true" style={{ maskImage: `url('${assets.banner.img82151}')` }}>{bannerImages.map(([name, x, y, w, h, iw, ih]) => <div className="promotion-piece" key={name} style={{ left: x, top: y, width: w, height: h }}><img src={assets.banner[name]} alt="" loading="lazy" style={{ width: iw, height: ih }} /></div>)}</div>
    <div className="promotion-copy"><p className="promotion-eyebrow">PROVIDING AMAZING</p><h2>education wordpress theme</h2><p className="promotion-description">The next level of LMS WordPress Theme. Learn anytime and anywhere.</p><a className="button button-primary" href="#courses">Explorer Course</a></div>
  </section>;
}

export function Feedback() {
  return <section className="feedback-section"><SectionHeading title="Student feedbacks" subtitle="What Students Say About Academy LMS" /><div className="feedback-grid">{[2, 3, 4, 5].map(i => <figure className="feedback-card" key={i}><div className="avatar" style={{ maskImage: `url('${assets.feedback.imgImgAvatar1}')` }}><img src={assets.feedback[`imgImgAvatar${i}`]} alt="Student portrait" loading="lazy" /></div><blockquote>{feedback}</blockquote><figcaption><strong>Roe Smith</strong><span>Designer</span></figcaption></figure>)}</div></section>;
}

export function Blogs({ onOpen }) {
  return <section className="blogs-section" id="blog"><SectionHeading title="Our Latest Blogs" subtitle="Explore world best topics" /><div className="blog-grid">{[0, 1, 2].map(i => <article className="blog-card" key={i}><button className="blog-cover" onClick={onOpen} aria-label="Read Best LearnPress WordPress Theme Collection for 2023"><img src={assets.blog.imgRectangle139} alt="" loading="lazy" /><img src={assets.blog.imgRectangle140} alt="Eduma online education website and certificates illustration" loading="lazy" /></button><div className="blog-body"><h3><button onClick={onOpen}>Best LearnPress WordPress Theme Collection for 2023</button></h3><p className="blog-date"><span aria-hidden="true">▢</span>Jan 24, 22023</p><p>Looking for an amazing &amp; well-functional LearnPress WordPress Theme?...</p></div></article>)}</div></section>;
}
