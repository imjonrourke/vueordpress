export class User {
  constructor({
    data = {},
    id = 0,
    caps = [],
    cap_key = '',
    roles = [],
    allcaps = [],
    filter = ''
  }) {
    /**
     * The user's id.
     * @property {int} id
     */
    this.id = id;

    /**
     * User data container.
     * @property {object} data
     */
    this.data = data;

    /**
     * The individual capabilities the user has been given.
     * @property {array} caps
     */
    this.caps = caps;

    /**
     * User metadata option name.
     * @property {string} cap_key
     */
    this.cap_key = cap_key;

    /**
     * The roles the user is part of.
     * @property {array} roles
     */
    this.roles = roles;

    /**
     * All capabilities the user has, including individual and role based.
     * @property {array} allcaps -Array of key/value pairs where keys represent a capability name and boolean values
     * represent whether the user has that capability.
     */
    this.allcaps = allcaps;

    /**
     * The filter context applied to user data fields.
     * @property {string} filter
     */
    this.filter = filter;

  }
}