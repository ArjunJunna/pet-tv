import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'All',
  },
  {
    _id: uuid(),
    categoryName: 'Dogs',
  },
  {
    _id: uuid(),
    categoryName: 'Cats',
  },
  {
    _id: uuid(),
    categoryName: 'Birds',
  },
  {
    _id: uuid(),
    categoryName: 'Horses',
  },
  {
    _id: uuid(),
    categoryName: 'Rabbits',
  },
  {
    _id: uuid(),
    categoryName: 'Guinea Pigs',
  },
];
