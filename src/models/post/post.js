/**
 * @class Post
 * Class for Post. Constructor is directly replicated from WordPress documentation.
 */
export class Post {
  constructor({
    /**
     * @property {number} - Post ID
     */
    id = 0,
    /**
     * @property {string} author - ID of post author. A numeric string, for compatibility reasons
     */
    author = 0,
    /**
     * @property {string} date - The post's local publication time '0000-00-00 00:00:00'
     */
    date = new Date(0),
    /**
     * @property {string} date_gmt - The post's GMT publication time '0000-00-00 00:00:00'
     */
    date_gmt = new Date(0),
    /**
     * @property {string} content - The post's content
     */
    content = '',
    /**
     * @property {string} title - The post's title
     */
    title = '',
    /**
     * @property {string} excerpt - The post's excerpt
     */
    excerpt = '',
    /**
     * @property {string} status - The post's status
     */
    status = 'publish',
    /**
     * @property {string} comment_status - Whether comments are allowed
     */
    comment_status = 'open',
    /**
     * @property {string} ping_status - Whether pings are allowed
     */
    ping_status = 'open',
    /**
     * @property {string} password - The post's password in plain text
     */
    password = '',
    /**
     * @property {string} name - The post's slug
     */
    name = '',
    /**
     * @property {string} to_ping - URLs queued to be pinged
     */
    to_ping = '',
    /**
     * @property {string} pinged - URLs that have been pinged
     */
    pinged = '',
    /**
     * @property {string} modified - The post's local modified time '0000-00-00 00:00:00'
     */
    modified = new Date(0),
    /**
     * @property {string} modified_gmt - The post's GMT modified time '0000-00-00 00:00:00'
     */
    modified_gmt = new Date(0),
    /**
     * @property {string} content_filtered - A utility DB field for post content
     */
    content_filtered = '',
    /**
     * @property {int} parent - ID of a post's parent post
     */
    parent = 0,
    /**
     * @property {string} guid - The unique identifier for a post, not necessarily a URL, used as the feed GUID
     */
    guid = '',
    /**
     * @property {int} menu_order - A field used for ordering posts
     */
    menu_order = 0,
    /**
     * @property {string} type - The post's type, like post or page
     */
    type = 'post',
    /**
     * @property {string} mime_type - An attachment's mime type
     */
    mime_type = '',
    /**
     * - Cached comment count
     * @property {string} comment_count - A numeric string, for compatibility reasons
     */
    comment_count = '0',
    /**
     * - Does not correspond to a DB field
     * @property {string} filter - Stores the post object's sanitization level
     */
    filter,
  }) {
    this.id = id;
    this.author = author;
    this.date = date;
    this.date_gmt = date_gmt;
    this.content = content;
    this.title = title;
    this.excerpt = excerpt;
    this.status = status;
    this.comment_status = comment_status;
    this.ping_status = ping_status;
    this.password = password;
    this.name = name;
    this.to_ping = to_ping;
    this.pinged = pinged;
    this.modified = modified;
    this.modified_gmt = modified_gmt;
    this.content_filtered = content_filtered;
    this.parent = parent;
    this.guid = guid;
    this.menu_order = menu_order;
    this.type = type;
    this.mime_type = mime_type;
    this.comment_count = comment_count;
    this.filter = filter;
  }
}

export class PostCreate {
  constructor({
    date =  new Date(0),
    date_gmt =  new Date(0),
    slug = '',
    status = '',
    password = '',
    title = '',
    content = '',
    author = 0,
    excerpt = '',
    featured_media = 0,
    comment_status = '',
    ping_status = '',
    format = '',
    meta = {},
    sticky = false,
    template = '',
    categories = [],
    tags = [],
  }) {
    this.date = date;
    this.date_gmt = date_gmt;
    this.slug = slug;
    this.status = status;
    this.password = password;
    this.title = title;
    this.content = content;
    this.author = author;
    this.excerpt = excerpt;
    this.featured_media = featured_media;
    this.comment_status = comment_status;
    this.ping_status = ping_status;
    this.format = format;
    this.meta = meta;
    this.sticky = sticky;
    this.template = template;
    this.categories = categories;
    this.tags = tags;
  }
}

/**
 * @class PostUpdate
 * Used to update Posts via REST API
 */
export class PostUpdate {
  constructor({
    /**
     * @property {number} - Post ID
     */
    id = 0,
    /**
     * @property {string} author - ID of post author. A numeric string, for compatibility reasons
     */
    author = 0,
    /**
     * @property {string} date - The post's local publication time '0000-00-00 00:00:00'
     */
    date = new Date(0),
    /**
     * @property {string} date_gmt - The post's GMT publication time '0000-00-00 00:00:00'
     */
    date_gmt = new Date(0),
    /**
     * @property {string} slug - An alphanumeric identifier for the object unique to its type
     */
    slug = '',
    /**
     * @property {string} status - The post's status
     */
    status = 'publish',
    /**
     * @property {string} password - The post's password if protected
     */
    password = '',
    /**
     * @property {string} content - The post's content
     */
    content = '',
    /**
     * @property {string} title - The post's title
     */
    title = '',
    /**
     * @property {string} excerpt - The post's excerpt
     */
    excerpt = '',
    /**
     * @property {int} featured_media - The ID of the featured media for the object
     */
    featured_media = 0,
    /**
     * @property {string} comment_status - Whether or not comments are open on the object. One of: open, closed
     */
    comment_status = 'open',
    /**
     * @property {string} ping_status - Whether or not the object can be pinged. One of: open, closed
     */
    ping_status = 'open',
    /**
     * @property {string} format - The format for the object. One of: standard, aside, chat, gallery, link, image, quote, status, video, audio
     */
    format = 'standard',
    meta = {},
    /**
     * @property {boolean} sticky - Whether or not the object should be treated as sticky
     */
    sticky = false,
    /**
     * @property {string} template - The theme file to use to display the object
     */
    template = '',
    /**
     * @property {array} categories - The terms assigned to the object in the category taxonomy
     */
    categories = [],
    /**
     * @property {array} tags - The terms assigned to the object in the post_tag taxonomy
     */
    tags = [],
  }) {
    this.id = id;
    this.date = date;
    this.date_gmt = date_gmt;
    this.slug = slug;
    this.status = status;
    this.password = password;
    this.title = title;
    this.content = content;
    this.author = author;
    this.excerpt = excerpt;
    this.featured_media = featured_media;
    this.comment_status = comment_status;
    this.ping_status = ping_status;
    this.format = format;
    this.meta = meta;
    this.sticky = sticky;
    this.template = template;
    this.categories = categories;
    this.tags = tags;
  }
}

/**
 * @class PostRetrieve
 * Model for arguments to pass when retrieving post
 */
export class PostRetrieve {
  constructor({
    /**
     * @property {number} id - Post ID
     */
    id = 0,
    /**
     * @property {string} context - Scope under which the request is made; determines fields present in response. Default: view One of: view, embed, edit
     */
    context = '',
    /**
     * @property {string} password - The password for the post if it is password protected
     */
    password = '',
  }) {
    this.id = id;
    this.context = context;
    this.password = password;
  }
}

/**
 * @class PostDelete
 * Model for arguments to pass when deleting post
 */
export class PostDelete {
  constructor({
    /**
     * @property {number} id - Post ID
     */
    id = 0,
    /**
     * @property {boolean} force - Whether to bypass trash and force deletion
     */
    force = false,
  }) {
    this.id = id;
    this.force = force;
  }
}

export default class PostResponse {
  constructor({
    id = 0,
    date = new Date(0),
    date_gmt = new Date(0),
    guid = {
      rendered: '',
    },
    modified = new Date(0),
    modified_gmt = new Date(0),
    slug = '',
    status = '',
    type = 'post',
    link = '',
    title = {
      rendered: '',
    },
    content = {
      rendered: '',
      protected: false,
    },
    excerpt = {
      rendered: '',
      protected: false,
    },
    author = 0,
    featured_media = 0,
    comment_status = '',
    ping_status = '',
    sticky = false,
    template = '',
    format = '',
    meta = [],
    categories = [],
    tags = [],
  }) {
    const finalGuid = {
      rendered: guid.rendered ? guid.rendered : ''
    };
    const finalTitle = {
      rendered: title.rendered ? title.rendered : ''
    };
    const finalContent = {
      rendered: content.rendered ? content.rendered : '',
      protected: content.protected ? content.protected : false
    };
    const finalExcerpt = {
      rendered: excerpt.rendered ? excerpt.rendered : '',
      protected: excerpt.protected ? excerpt.protected : false
    };
    this.id = id;
    this.date = date;
    this.date_gmt = date_gmt;
    this.guid = finalGuid;
    this.modified = modified;
    this.modified_gmt = modified_gmt;
    this.slug = slug;
    this.status = status;
    this.type = type;
    this.link = link;
    this.title = finalTitle;
    this.content = finalContent;
    this.excerpt = finalExcerpt;
    this.author = author;
    this.featured_media = featured_media;
    this.comment_status = comment_status;
    this.ping_status = ping_status;
    this.sticky = sticky;
    this.template = template;
    this.format = format;
    this.meta = meta;
    this.categories = categories;
    this.tags = tags;
  }
}
