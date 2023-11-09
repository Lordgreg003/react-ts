import {
  image8,
  woman1,
  woman2,
  star1,
  star2,
  star3,
  star4,
  star5,
} from "../images/Index";

type AfricaType = {
  image: string;
  link: string;
  star : string;
  testimony : string;
};

export const HomeAfrica: Array<AfricaType> = [
  {
    image: image8,
    link: "1st link",
    star : star1,
    testimony:''
  },
  {
    image: woman1,
    link: "2nd link",
    star : star2,
    testimony : ''
  },
  {
    image: woman2,
    link: "3rd link",
    star: star3,
    testimony :''
  },
   
];

export default HomeAfrica;
