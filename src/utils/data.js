import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'

export const data = {
  companyName: 'Company',
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
}
