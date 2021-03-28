'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments('id')
      table.string('title')
      table.text('description', 'longtext')
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
