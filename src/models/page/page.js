// eslint-disable-next-line
import { Post, PostUpdate, PostDelete, PostRetrieve } from '../post/post';

/**
 * @class Page
 * Class for Page. Extends Base Post class.
 * Page is a post type of type "page".
 */
export default class Page extends Post {
  constructor({ type = 'page' }) {
    super();
    this.type = type;
  }
}

export class PageCreate {
  constructor({
    /**
     * @property date - The date the object was published, in the site's timezone.
     */
    date = new Date(0),
    /**
     * @property date_gmt - The date the object was published, as GMT.
     */
    date_gmt = new Date(0),
    /**
     * @property slug - An alphanumeric identifier for the object unique to its type.
     */
    slug = '',
    /**
     * @property status - A named status for the object. One of: publish, future, draft, pending, private
     */
    status = '',
    /**
     * @property password - A password to protect access to the content and excerpt.
     */
    password = '',
    /**
     * @property parent - The ID for the parent of the object.
     */
    parent = '',
    /**
     * @property title - The title for the object.
     */
    title = '',
    /**
     * @property content - The content for the object.
     */
    content = '',
    /**
     * @property author - The ID for the author of the object.
     */
    author = '',
    /**
     * @property excerpt - The excerpt for the object.
     */
    excerpt = '',
    /**
     * @property featured_media - The ID of the featured media for the object.
     */
    featured_media = '',
    /**
     * @property comment_status - Whether or not comments are open on the object. One of: open, closed
     */
    comment_status = '',
    /**
     * @property ping_status - Whether or not the object can be pinged. One of: open, closed
     */
    ping_status = '',
    /**
     * @property menu_order - The order of the object in relation to other object of its type.
     */
    menu_order = '',
    /**
     * @property meta - Meta fields.
     */
    meta = '',
    /**
     * @property template - The theme file to use to display the object.
     */
    template = '',
  }) {
    this.date = date;
    this.date_gmt = date_gmt;
    this.slug = slug;
    this.status = status;
    this.password = password;
    this.parent = parent;
    this.title = title;
    this.content = content;
    this.author = author;
    this.excerpt = excerpt;
    this.featured_media = featured_media;
    this.comment_status = comment_status;
    this.ping_status = ping_status;
    this.menu_order = menu_order;
    this.meta = meta;
    this.template = template;
  }
}

export class PageUpdate {
  constructor({
    /**
     * @property {number} id - Unique identifier for the object.
     */
    id = 0,
    /**
     * @property {string} date - The date the object was published, in the site\'s timezone.'
     */
    date = new Date(0),
    /**
     * @property {string} date_gmt - The date the object was published, as GMT.
     */
    date_gmt = new Date(0),
    /**
     * @property {string} slug - An alphanumeric identifier for the object unique to its type.
     */
    slug = '',
    /**
     * @property {string} status - A named status for the object. One of: publish, future, draft, pending, private
     */
    status = '',
    /**
     * @property {string} password - A password to protect access to the content and excerpt.
     */
    password = '',
    /**
     * @property {number} parent - The ID for the parent of the object.
     */
    parent = 0,
    /**
     * @property {string} title - The title for the object.
     */
    title = '',
    /**
     * @property {string} content - The content for the object.
     */
    content = '',
    /**
     * @property {number} author - The ID for the author of the object.
     */
    author = 0,
    /**
     * @property {string} excerpt - The excerpt for the object.
     */
    excerpt = '',
    /**
     * @property {number} featured_media - The ID of the featured media for the object.
     */
    featured_media = 0,
    /**
     * @property {string} comment_status - Whether or not comments are open on the object. One of: open, closed
     */
    comment_status = '',
    /**
     * @property {string} ping_status - Whether or not the object can be pinged. One of: open, closed
     */
    ping_status = '',
    /**
     * @property {number} menu_order - The order of the object in relation to other object of its type.
     */
    menu_order = 0,
    /**
     * @property {object} meta - Meta fields.
     */
    meta = {},
    /**
     * @property {string} template - The theme file to use to display the object.
     */
    template = '',
  }) {
    this.id = id;
    this.date = date;
    this.date_gmt = date_gmt;
    this.slug = slug;
    this.status = status;
    this.password = password;
    this.parent = parent;
    this.title = title;
    this.content = content;
    this.author = author;
    this.excerpt = excerpt;
    this.featured_media = featured_media;
    this.comment_status = comment_status;
    this.ping_status = ping_status;
    this.menu_order = menu_order;
    this.meta = meta;
    this.template = template;
  }
}

export class PageRetrieve extends PostRetrieve {
  constructor() {
    super();
  }
}

export class PageDelete extends PostDelete {
  constructor() {
    super();
  }
}
