import { COLORS } from "styles";

export const homeData = [
  {
    type: "todo",
    postedBy: "zihaolam",
    text: "has posted a new todo",
    createdAt: 1636414902301,
  },
  {
    type: "payment",
    postedBy: "briony",
    text: "has posted a new payment",
    createdAt: 1636414902081,
  },
  {
    type: "todo",
    postedBy: "tamara",
    text: "has posted a new notice",
    createdAt: 1636414112094,
  },
  {
    type: "food",
    postedBy: "inweon",
    text: "has updated the grocery list",
    createdAt: 1636414703000,
  },
  {
    type: "todo",
    postedBy: "inweon",
    text: "has posted a new todo",
    createdAt: 1636414703000,
  },
];

export const colorMap = {
  todo: COLORS.PURPLE,
  notice: COLORS.BLUE,
  payment: COLORS.LIGHTPINK,
  food: COLORS.GREEN,
};
