type Project = {
  name: string
  description: string
  link: string
  video: string
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
  // {
  //   name: 'Motion Primitives Pro',
  //   description:
  //     'Advanced components and templates to craft beautiful websites.',
  //   link: 'https://pro.motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
  //   id: 'project1',
  // },
  // {
  //   name: 'Motion Primitives',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Hearst',
    title: 'Senior Software Engineer',
    start: '2021',
    end: 'Present',
    link: 'projects/hearst',
    id: 'work1',
  },
  {
    company: 'McGraw Hill Education',
    title: 'Software Engineer',
    start: '2015',
    end: '2021',
    link: 'projects/mcgraw-hill-education',
    id: 'work2',
  },
  {
    company: 'Senior Engineer',
    title: 'Avago Tech. (now Broadcom) ',
    start: '2011',
    end: '2015',
    link: 'projects/avago-tech',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of AI, and Software Engineering',
    description: 'How AI is changing the way we design and build software.',
    link: '/blog/exploring-the-intersection-of-ai-and-software-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Building a Personal Website with Next.js and MDX',
    description:
      'A guide on how to build a personal website using Next.js and MDX.',
    link: '/blog/building-a-personal-website-with-nextjs-and-mdx',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/greenpops',
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/yesun_joung',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yesun-joung/',
  },
  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/yesun_joung',
  // },
]

export const EMAIL = 'myemail@example.com'
