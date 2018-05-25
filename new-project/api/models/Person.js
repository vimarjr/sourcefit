/**
 * @module App
 * @description Model for apps
 *
 */

module.exports = {
  migrate: 'safe',
  tableName: 'apps',
  primaryKey: 'id',

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true
    },

    first_name: {
      type: 'string',
      required: true
    },

    last_name: {
      type: 'string',
      required: true
    },

    contact_number: {
      type: 'string',
      required: true
    }
  }

};
