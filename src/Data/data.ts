export const myData = [
  {
    icon: "../../src/assets/icon.svg",
    heading: "Page",
    img: "../../src/assets/img.svg",
    img1: "../../src/assets/smCard.svg",
    desc: "Wedding Page",
  },
  {
    icon: "../../src/assets/icon.svg",
    heading: "Page",
    img: "../../src/assets/img.svg",
    img1: "../../src/assets/smCard1.svg",
    desc: "Vendor page",
  },
  {
    icon: "../../src/assets/icon.svg",
    heading: "Page",
    img: "../../src/assets/img.svg",
    img1: "../../src/assets/smCard2.svg",
    desc: "My page",
  },
];

export const buttons = [
  "Creative",
  "Creative",
  "Creative",
  "Creative",
  "Creative",
];

export const demoCards = [
  {
    icon: "../../src/assets/icon.svg",
    heading: "Page",
    img: "../../src/assets/img.svg",
    img1: "../../src/assets/smCard.svg",
    desc: "Template (By Admin)",
  },
  {
    icon: "../../src/assets/icon.svg",
    heading: "Page",
    img: "../../src/assets/img.svg",
    img1: "../../src/assets/smCard.svg",
    desc: "Template (By Admin)",
  },
  {
    icon: "../../src/assets/icon.svg",
    heading: "Page",
    img: "../../src/assets/img.svg",
    img1: "../../src/assets/smCard.svg",
    desc: "Template (By Admin)",
  },
  {
    icon: "../../src/assets/icon.svg",
    heading: "Page",
    img: "../../src/assets/img.svg",
    img1: "../../src/assets/smCard.svg",
    desc: "Template (By Admin)",
  },
  {
    icon: "../../src/assets/icon.svg",
    heading: "Page",
    img: "../../src/assets/img.svg",
    img1: "../../src/assets/smCard.svg",
    desc: "Template (By Admin)",
  },
  {
    icon: "../../src/assets/icon.svg",
    heading: "Page",
    img: "../../src/assets/img.svg",
    img1: "../../src/assets/smCard.svg",
    desc: "Template (By Admin)",
  },
];

export const leftPhotoTimeline = [
  {
    date: {
      day: "15",
      month: "July",
      year: 2023,
    },
    h: "Our First Horse Ride in London",
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    p1: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    img: "../../src/assets/leftphotoTimeline.svg",
  },
];

export const rightPhotoTimeline = [
  {
    date: {
      day: "15",
      month: "August",
      year: 2023,
    },
    h: "Our First Horse Ride in London",
    p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    p1: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    img: "../../src/assets/rightPhotoTimeline.svg",
    img1: "../../src/assets/leftphotoTimeline.svg",
  },
];

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "8gVv6nxq6gY", width: 1080, height: 800 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  { id: "RkBTPqPEGDo", width: 1080, height: 720 },
  { id: "Yizrl9N_eDA", width: 1080, height: 721 },
  { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
  { id: "Jztmx9yqjBw", width: 1080, height: 607 },
  { id: "-heLWtuAN3c", width: 1080, height: 608 },
  { id: "xOigCUcFdA8", width: 1080, height: 720 },
  { id: "1azAjl8FTnU", width: 1080, height: 1549 },
  { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
  { id: "twukN12EN7c", width: 1080, height: 694 },
  { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
  { id: "sEXGgun3ZiE", width: 1080, height: 720 },
  { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
  { id: "q-motCAvPBM", width: 1080, height: 1620 },
  { id: "Xn4L310ztMU", width: 1080, height: 810 },
  { id: "iMchCC-3_fE", width: 1080, height: 610 },
  { id: "X48pUOPKf7A", width: 1080, height: 160 },
  { id: "GbLS6YVXj0U", width: 1080, height: 810 },
  { id: "9CRd1J1rEOM", width: 1080, height: 720 },
  { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;

export const transportData = [
  {
    img: "../../src/assets/transportImg.svg",
    h1: "MY TRANSPORT CO. LTD",
    address: "London , Uk",
    mail: "theemail@mail.com",
    website: "pages.wosom.eu",
    phone: "0123456789",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  },
  {
    img: "../../src/assets/transportImg1.svg",
    h1: "MY TRANSPORT CO. LTD",
    address: "London, UK",
    website: "pages.wosom.eu",
    mail: "theemail@mail.com",
    phone: "0123456789",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  },
  {
    img: "../../src/assets/transportImg1.svg",
    h1: "MY TRANSPORT CO. LTD",
    address: "London, UK",
    mail: "theemail@mail.com",
    website: "pages.wosom.eu",
    phone: "0123456789",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  },
];
