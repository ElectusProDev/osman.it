import { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { About, Blogs, Categories, Feedback, Instructors, Promotion, SectionHeading, Statistics } from './components/Sections';
import { categories, courses } from './data';

function readSavedCourses() {
  try { const value = JSON.parse(localStorage.getItem('osman-it-saved') || '[]'); return Array.isArray(value) ? value.filter(id => courses.some(course => course.id === id)) : []; } catch { return []; }
}

function AuthForm({ mode, onSwitch }) {
  const [submitted, setSubmitted] = useState(false);
  return <form className="auth-form" onSubmit={e => { e.preventDefault(); setSubmitted(true); e.currentTarget.reset(); }}>
    <p className="modal-intro">{mode === 'register' ? 'Start your learning journey with OSMAN IT.' : 'Welcome back to OSMAN IT.'}</p>
    {mode === 'register' && <label>Full name<input name="name" autoComplete="name" required placeholder="Your full name" /></label>}
    <label>Email address<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
    <label>Password<input type="password" name="password" autoComplete={mode === 'register' ? 'new-password' : 'current-password'} minLength={8} required placeholder="At least 8 characters" /></label>
    <p className="demo-note">Frontend preview: account services are not connected. This form does not send or store your credentials.</p>
    <button className="button button-primary" type="submit">{mode === 'register' ? 'Create account' : 'Login'}</button>
    {submitted && <p className="form-message" role="status">Form validated. Connect an authentication service to enable {mode === 'register' ? 'registration' : 'login'}.</p>}
    <p className="auth-switch">{mode === 'register' ? 'Already have an account?' : 'New to OSMAN IT?'} <button type="button" onClick={onSwitch}>{mode === 'register' ? 'Login' : 'Register'}</button></p>
  </form>;
}

export default function App() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [modal, setModal] = useState(null);
  const [saved, setSaved] = useState(readSavedCourses);
  const [storageMessage, setStorageMessage] = useState('');
  const visibleCourses = useMemo(() => courses.filter(course => (category === 'All' || course.category === category) && `${course.title} ${course.description} ${course.author} ${course.category}`.toLowerCase().includes(query.trim().toLowerCase())), [query, category]);
  const chooseCategory = name => { setCategory(name); setQuery(''); setModal(null); setTimeout(() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }), 0); };
  const reset = () => { setQuery(''); setCategory('All'); };
  const saveCourse = id => { const next = saved.includes(id) ? saved.filter(value => value !== id) : [...saved, id]; setSaved(next); try { localStorage.setItem('osman-it-saved', JSON.stringify(next)); setStorageMessage(''); } catch { setStorageMessage('Browser storage is unavailable. Your selection is saved for this session only.'); } };
  return <div id="home">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header query={query} onSearch={setQuery} onCategory={chooseCategory} onAuth={type => setModal({ type })} />
    <Hero />
    <main className="container main-content" id="main-content">
      <Categories selected={category} onSelect={chooseCategory} onBrowse={() => setModal({ type: 'categories' })} />
      <section className="courses-section" id="courses"><SectionHeading title="Featured courses" subtitle="Explore our Popular Courses" centered={false}><button className="button button-outline all-courses" onClick={reset}>All courses</button></SectionHeading>
        {(category !== 'All' || query) && <div className="filter-summary" role="status"><span>{visibleCourses.length} {visibleCourses.length === 1 ? 'course' : 'courses'}{category !== 'All' ? ` in ${category}` : ''}{query ? ` matching “${query}”` : ''}</span><button onClick={reset}>Clear filters ×</button></div>}
        <div className="course-grid">{visibleCourses.map(course => <CourseCard key={course.id} course={course} onOpen={course => { setStorageMessage(''); setModal({ type: 'course', course }); }} />)}</div>
        {!visibleCourses.length && <div className="empty-state"><h3>No matching courses</h3><p>Try “web”, “Figma” or “marketing”, or explore all featured courses.</p><button className="button button-primary" onClick={reset}>Show all courses</button></div>}
      </section>
      <Instructors /><Statistics /><About /><Promotion /><Feedback /><Blogs onOpen={() => setModal({ type: 'article' })} />
    </main>
    <Footer onInfo={type => setModal({ type })} onCategory={chooseCategory} />
    {modal && <Modal title={modal.type === 'login' ? 'Login' : modal.type === 'register' ? 'Create your account' : modal.type === 'course' ? 'Course details' : modal.type === 'categories' ? 'Browse all categories' : modal.type === 'article' ? 'Our Latest Blogs' : modal.type === 'faq' ? 'Frequently asked questions' : 'Privacy'} onClose={() => setModal(null)} wide={['course', 'categories', 'article'].includes(modal.type)}>
      {['login', 'register'].includes(modal.type) && <AuthForm key={modal.type} mode={modal.type} onSwitch={() => setModal({ type: modal.type === 'login' ? 'register' : 'login' })} />}
      {modal.type === 'categories' && <div className="category-dialog-list"><button onClick={() => chooseCategory('All')}>All featured courses <span>6 courses →</span></button>{categories.map(item => <button key={item.name} onClick={() => chooseCategory(item.name)}><img src={item.icon} alt="" />{item.name}<span>→</span></button>)}</div>}
      {modal.type === 'course' && <div className="course-detail"><img className="detail-image" src={modal.course.image} alt={modal.course.description} /><span className="category-tag">{modal.course.category}</span><h3>{modal.course.title}</h3><p>{modal.course.description}</p><p className="muted">by {modal.course.author} · 2 weeks · 156 students</p><div className="detail-enrollment"><strong>Free</strong><button className="button button-primary" onClick={() => saveCourse(modal.course.id)}>{saved.includes(modal.course.id) ? 'Remove from my courses' : 'Add to my courses'}</button></div><p className="demo-note" role="status">{saved.includes(modal.course.id) ? 'Added to your courses on this device. ' : ''}This is a course preview. Lesson content and enrollment services are not connected.{storageMessage && ` ${storageMessage}`}</p></div>}
      {modal.type === 'article' && <div className="article-preview"><h3>Best LearnPress WordPress Theme Collection for 2023</h3><p>Looking for an amazing &amp; well-functional LearnPress WordPress Theme?...</p><p className="demo-note">The supplied design includes this article preview. Full article content has not been supplied.</p><a className="button button-primary" href="#courses" onClick={() => setModal(null)}>Explore courses</a></div>}
      {modal.type === 'faq' && <div className="faq-list"><details open><summary>How do I find a course?</summary><p>Search by topic in the header or choose a category. “All courses” clears the filters.</p></details><details><summary>Can I save a course?</summary><p>Open View Details and select Add to my courses. Your selection is stored in this browser.</p></details><details><summary>Can I create an account?</summary><p>This frontend preview includes account forms. A backend authentication service is required to create real accounts.</p></details></div>}
      {modal.type === 'privacy' && <div className="privacy-copy"><p>This preview stores only your selected course IDs in your browser. You can remove a course from its details dialog.</p><p>Login and registration details are not sent or stored. All images and fonts are served locally. No analytics or tracking services are included.</p></div>}
    </Modal>}
  </div>;
}
