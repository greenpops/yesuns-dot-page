type Project = {
  name: string
  description: string
  link: string
  images: string[]
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'A Project for My Kid',
    description: 'Interactive Piano.',
    link: '/projects/interactive-piano',
    images: ['/interactive-piano-1.png','/interactive-piano-2.png'],
    // video:
    //   'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },  
  {
    name: 'Projects at Hearst',
    description:
      'Showcasing various projects developed during my time at Hearst.',
    link: '/work/hearst',
    images: ['/home-car-finder.png','/make-page-car-finder.png','/mega-menu-car-finder.png', '/car-insurance-widget.png'],
    // video:
    //   'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },

]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Hearst',
    title: 'Senior Software Engineer',
    start: '2021',
    end: 'Present',
    link: 'work/hearst',
    id: 'work1',
  },
  {
    company: 'McGraw-Hill Education',
    title: 'Software Engineer',
    start: '2015',
    end: '2021',
    link: 'work/mcgraw-hill-education',
    id: 'work2',
  },
  {
    company: 'Senior Engineer',
    title: 'Avago Tech. (now Broadcom) ',
    start: '2011',
    end: '2015',
    link: 'work/avago-tech',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
   {
    title: 'Building an Interactive Piano Component with React',
    description:
      'How to build an interactive piano component using React.',
    link: '/blog/building-an-interactive-piano-component-with-react',
    uid: 'blog-1',
  }, 
  // {
  //   title: 'Exploring the Intersection of AI, and Software Engineering',
  //   description: 'How AI is changing the way we design and build software.',
  //   link: '/blog/exploring-the-intersection-of-ai-and-software-engineering',
  //   uid: 'blog-2',
  // },
]




export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yesun-joung/',
  },
  // {
  //   label: 'Github',
  //   link: 'https://github.com/greenpops',
  // },

  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/yesun_joung',
  // },
]

export const EMAIL = 'myemail@example.com'
