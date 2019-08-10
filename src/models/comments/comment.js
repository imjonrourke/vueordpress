export class Comment {
  constructor({
    /**
     * @property {number} comment_id - Comment id.
     */
    comment_id = 0,
    /**
     * @property {number} comment_post_id - id of the post the comment is associated with.
     */
    comment_post_id = 0,
    /**
     * @property {string} comment_author - Comment author name.
     */
    comment_author = '',
    /**
     * @property {string} comment_author_email - Comment author email address.
     */
    comment_author_email = '',
    /**
     * @property {string} comment_author_url - Comment author URL.
     */
    comment_author_url = '',
    /**
     * @property {string} comment_author_IP - Comment author IP address (IPv4 format).
     */
    comment_author_IP = '',
    /**
     * @property {string} comment_date - Comment date in YYYY-MM-DD HH:MM:SS format.
     */
    comment_date = '',
    /**
     * @property {string} comment_date_gmt - Comment GMT date in YYYY-MM-DD HH::MM:SS format.
     */
    comment_date_gmt = '',
    /**
     * @property {string} comment_content - Comment content.
     */
    comment_content = '',
    /**
     * @property {number} comment_karma - Comment karma count.
     */
    comment_karma = 0,
    /**
     * @property {string} comment_approved - Comment approval status.
     */
    comment_approved = '',
    /**
     * @property {string} comment_agent - Comment author HTTP user agent.
     */
    comment_agent = '',
    /**
     * @property {string} comment_type - Comment type.
     */
    comment_type = '',
    /**
     * @property {number} comment_parent - Parent comment id.
     */
    comment_parent = 0,
    /**
     * @property {number} user_id - Comment author id.
     */
    user_id = 0
  }) {

    this.comment_id = comment_id;
    this.comment_post_id = comment_post_id;
    this.comment_author = comment_author;
    this.comment_author_email = comment_author_email;
    this.comment_author_url = comment_author_url;
    this.comment_author_IP = comment_author_IP;
    this.comment_date = comment_date;
    this.comment_date_gmt = comment_date_gmt;
    this.comment_content = comment_content;
    this.comment_karma = comment_karma;
    this.comment_approved = comment_approved;
    this.comment_agent = comment_agent;
    this.comment_type = comment_type;
    this.comment_parent = comment_parent;
    this.user_id = user_id;
  }
}