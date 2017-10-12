exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.alterTable('categories', (table) => {
      table.string('slug');
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.alterTable('categories', (table) => table.dropColumns('slug')),
  ]);
};
