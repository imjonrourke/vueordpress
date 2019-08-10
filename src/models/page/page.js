import Post from '../post/post';

/**
 * @class Page
 * Class for Page. Extends Base Post class.
 * Page is a post type of type "page".
 */
export class Page extends Post {
  constructor({ type = 'page' }) {
    super();
    this.type = type;
  }
}
