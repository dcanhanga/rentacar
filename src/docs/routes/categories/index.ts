import { get } from './get';
import { post } from './post';

const categories = {
  '/categories': {
    ...post,
    ...get
  }
};

export { categories };
