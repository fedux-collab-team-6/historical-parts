import { renovationThumb, inspirationThumb } from "./images";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

export const navList = [
  {
    id: 101,
    label: "Home",
    path: "/",
  },
  {
    id: 102,
    label: "Products",
    path: "/products/1",
  },
  {
    id: 103,
    label: "About us",
    path: "/about",
  },
  {
    id: 104,
    label: "Inspiration",
    path: "/inspiration",
  },
  {
    id: 105,
    label: "Renovation",
    path: "/renovation",
  },
];

export const featuredBlogData = [
  {
    id: 1,
    title: "Inspiration",
    description: "tips and guidance",
    image: inspirationThumb,
    link: "/inspiration",
  },
  {
    id: 2,
    title: "Renovation",
    description: "with our collaboration partners",
    image: renovationThumb,
    link: "/renovation",
  },
];

export const footerNav = [
  {
    id: 201,
    path: "/",
    label: "Home",
  },
  {
    id: 202,
    path: "/products/1",
    label: "Products",
  },
  {
    id: 203,
    path: "/about",
    label: "About",
  },
  {
    id: 204,
    path: "/faq",
    label: "FAQ",
  },
  {
    id: 205,
    path: "/jobs",
    label: "Jobs",
  },
  {
    id: 206,
    path: "/contact",
    label: "Contact",
  },
];

export const socialsNav = [
  {
    id: 301,
    icon: "FaFacebookF",
    href: "https://www.facebook.com/",
  },
  {
    id: 302,
    icon: "FaLinkedin",
    href: "https://www.linkedin.com/",
  },
  {
    id: 303,
    icon: "FaInstagram",
    href: "http://instagram.com/",
  },
];
