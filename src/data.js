import { assets } from './assets';

export const categories = [
  ['Label', '63,476', 'Cpu', 'lavender'],
  ['Business', '52,822', 'Handshake', 'green'],
  ['Finance & Accounting', '33,841', 'CreditCard', 'peach'],
  ['IT & Software', '22,649', 'ChartBarHorizontal', 'pink'],
  ['Personal Development', '20,126', 'BugDroid', 'white'],
  ['Office Productivity', '13,932', 'Receipt', 'gray'],
  ['Marketing', '12,068', 'MegaphoneSimple', 'lavender'],
  ['Photography & Video', '6,196', 'Camera', 'gray'],
  ['Lifestyle', '2,736', 'Package', 'peach'],
  ['Design', '2,600', 'PenNib', 'salmon'],
  ['Health & Fitness', '1,678', 'FirstAidKit', 'green'],
  ['Music', '959', 'Headphones', 'peach'],
].map(([name, count, icon, color]) => ({ name, count, icon: assets.categories[`img${icon}`], color }));

// The repeated titles, prices and statistics intentionally preserve the supplied template.
export const courses = [
  ['website', 140, 'IT & Software', 'Create an online course website with WordPress'],
  ['web-development', 141, 'IT & Software', 'Web development full course in 10 hours'],
  ['full-stack', 142, 'IT & Software', 'Web development full course with an instructor'],
  ['marketing', 143, 'Marketing', 'Careers in digital marketing'],
  ['figma', 144, 'Design', 'Modern and clean Figma landing page design'],
  ['development', 145, 'IT & Software', 'Web development course in Bangladesh'],
].map(([id, image, category, description]) => ({ id, image: assets.courses[`imgRectangle${image}`], category, description,
  title: 'Create an LMS Website with LearnPress', author: 'Determined-Poitras', duration: '2Weeks', students: '156', price: '$29.0' }));

export const instructors = [
  { name: 'Devon Lane', role: 'Senior Developer', rating: '4.6', students: '854', image: assets.instructors.imgImage, crop: 'devon' },
  { name: 'Darrell Steward', role: 'Digital Product Designer', rating: '4.9.', students: '451,444', image: assets.instructors.imgImage1 },
  { name: 'Jane Cooper', role: 'UI/UX Designer', rating: '4.8', students: '435,671', image: assets.instructors.imgImage2, crop: 'jane' },
  { name: 'Albert Flores', role: 'Adobe Instructor', rating: '4.7', students: '511,123', image: assets.instructors.imgImage3 },
];

export const description = 'We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.';
export const feedback = 'I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound';
