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
  star: string;
  name: string;
  testimony: string;
  location: string;
};

export const HomeAfrica: Array<AfricaType> = [
  {
    image: image8,
    link: "1st link",
    star: star1,
    name: "Khana Right",
    testimony:
      "GentAfrica made my life easy. It helped me with the search for the first ever investment.They were an absolute pleasure to work with from the beginning to completion. Thanks to the Team.",
    location: "Buston, Uk",
  },
  {
    image: woman1,
    link: "2nd link",
    star: star2,
    name: "Mrs Brown",
    testimony:
      "GentAfrica is the best so far and am happy to use their company, it helps in easy research and help you save a lof of money and they would give you the best service.Thanks to GentAfrica ",
    location: "Miami, Florida",
  },
  {
    image: woman2,
    link: "3rd link",
    star: star3,
    name: "Mia eloise",
    testimony:
      "GentAfrica helped me alot and a always depend on them for best service and offer at low rates,GentAfrica is the best so far keep up the good work.My reguards. ",
    location: "Tucson, Arizona",
  },
];

export default HomeAfrica;
