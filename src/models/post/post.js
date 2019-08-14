/**
 * @class Post
 * Class for Post. Constructor is directly replicated from WordPress documentation.
 */
export default class Post {
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
    comment_count = 0,
    /**
     * - Does not correspond to a DB field
     * @property {string} filter - Stores the post object's sanitization level
     */
    filter
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
