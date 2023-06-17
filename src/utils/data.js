import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'
import HomeBanner from '../../public/assets/images/BannerGif6-unscreen.gif'
import AboutBanner from '../../public/assets/images/about-banner.jpg'
import ContactBanner from '../../public/assets/images/contact.png'
import PortfolioImage from '../../public/assets/images/portfolio-image.png'
import BlogImage from '../../public/assets/images/blog-image.jpg'

export const data = {
  // HOME PAGE

  home: {
    banner: HomeBanner,
    companyName: 'Company',
    companyTagline: 'Company Tagline Lorem, ipsum dolor sit',
    comapnyDesc:
      'Company description Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    navbarLinks: [
      {
        id: 1,
        title: 'Home',
        url: '/',
      },
      {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
      },
      {
        id: 3,
        title: 'Blog',
        url: '/blog',
      },
      {
        id: 4,
        title: 'About',
        url: '/about',
      },
      {
        id: 5,
        title: 'Contact',
        url: '/contact',
      },
      {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
      },
    ],
    socialAccounts: [
      {
        id: 1,
        title: 'Facebook',
        icon: <BsFacebook />,
        url: '',
      },
      {
        id: 2,
        title: 'LinkedIn',
        icon: <BsLinkedin />,
        url: '',
      },
      {
        id: 3,
        title: 'Twitter',
        icon: <BsTwitter />,
        url: '',
      },
      {
        id: 4,
        title: 'Instagram',
        icon: <BsInstagram />,
        url: '',
      },
      {
        id: 5,
        title: 'Youtube',
        icon: <BsYoutube />,
        url: '',
      },
    ],
  },

  // ABOUT

  about: {
    banner: AboutBanner,
    col1: {
      title: 'Who Are We?',
      content: [
        {
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsum eos sunt dicta adipisci unde et accusantium temporibus itaque quis velit aut culpa error doloremque possimus eligendi nihil consequuntur, incidunt provident magni? Ipsam ab eveniet cupiditate quam tenetur molestias? Autem, necessitatibus.  Similique dolorem quaerat adipisci ullam!',
        },
        {
          para: 'Perferendis repellat sapiente minima rerum ut animi beatae, labore placeat ab consectetur corrupti temporibus neque nihil reiciendis soluta officiis, ducimus est, facilis tempora.',
        },
        {
          para: 'Quos amet quo tempore cumque veniam consequuntur culpa rem libero saepe ratione? Perspiciatis ab labore vel veritatis aliquid nisi itaque voluptatem recusandae voluptates, libero animi, fugit mollitia a quidem accusantium eum?',
        },
      ],
    },
    col2: {
      title: 'What We Do?',
      content: [
        {
          para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda impedit magni, dolorem autem dicta ea unde saepe, cupiditate deserunt eos, esse alias. Officiis quibusdam nostrum neque molestiae repudiandae maiores deserunt sed iure similique',
        },
        {
          para: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
        },
      ],
    },
  },

  // CONTACT

  contact: {
    banner: ContactBanner,
    title: 'Ping Us!',
  },

  // PORTFOLIO

  portfolio: [
    {
      image: PortfolioImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
      actionButtons: [
        {
          text: 'See more',
          url: '#',
        },
        {
          text: 'Github',
          url: '#',
        },
        {
          text: 'Live website',
          url: '#',
        },
      ],
    },
    {
      image: PortfolioImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
      actionButtons: [
        {
          text: 'See more',
          url: '#',
        },
        {
          text: 'Github',
          url: '#',
        },
        {
          text: 'Live website',
          url: '#',
        },
      ],
    },
    {
      image: PortfolioImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
      actionButtons: [
        {
          text: 'See more',
          url: '#',
        },
        {
          text: 'Github',
          url: '#',
        },
        {
          text: 'Live website',
          url: '#',
        },
      ],
    },
    {
      image: PortfolioImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
      actionButtons: [
        {
          text: 'See more',
          url: '#',
        },
        {
          text: 'Github',
          url: '#',
        },
        {
          text: 'Live website',
          url: '#',
        },
      ],
    },
    {
      image: PortfolioImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
      actionButtons: [
        {
          text: 'See more',
          url: '#',
        },
        {
          text: 'Github',
          url: '#',
        },
        {
          text: 'Live website',
          url: '#',
        },
      ],
    },
  ],

  // BLOG

  blogs: [
    {
      image: BlogImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
    },
    {
      image: BlogImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
    },
    {
      image: BlogImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
    },
    {
      image: BlogImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
    },
    {
      image: BlogImage,
      title: 'Lorem ipsum dolor sit',
      desc: 'cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!cumque expedita inventore ratione facere optio? Consequuntur nisi in laboriosam quo, libero, veritatis atque minus cum beatae dolor inventore autem sequi velit dolores molestiae quas! Voluptate, at!',
    },
  ],

  // SINGLE BLOG POST

  blog: {
    id: '',
    image: BlogImage,
    title: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eius tempore hic facere, dolores illo quas culpa nulla minima blanditiis ut maiores voluptas corporis iusto consectetur nam, cupiditate eligendi sit.',
    author: {
      name: 'John Doe',
      avatar: BlogImage,
    },
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste autem suscipit impedit necessitatibus velit dolore nihil. Veniam non tenetur sit. Tempora error earum odit velit reprehenderit mollitia quis magni ipsum, doloremque molestiae maiores nam distinctio alias ut deserunt adipisci ex inventore, aspernatur dolorem aliquid! Totam nam fugit a aliquam delectus dignissimos nulla voluptates corrupti debitis cum numquam consequatur error perspiciatis, culpa molestias, commodi ducimus explicabo veniam! Iste beatae deleniti ut. Pariatur blanditiis voluptatibus nobis ipsum tempore autem consectetur nulla a dolore, neque enim assumenda sed maiores ab, nisi minima numquam velit quas id magnam doloribus! Dolor, laudantium! Tempora, nobis enim.',
  },
}
