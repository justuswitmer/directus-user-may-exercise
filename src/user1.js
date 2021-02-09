const userPerms = {
  data: [
    {
      id: 1,
      collection: 'posts',
      role: 3,
      status: null,
      create: 'full',
      read: 'mine',
      update: 'none',
      delete: 'none',
      comment: 'update',
      explain: 'none',
      read_field_blacklist: [],
      write_field_blacklist: [],
      status_blacklist: []
    },
    {
      id: 2,
      collection: 'blocks',
      role: 3,
      status: null,
      create: 'full',
      read: 'mine',
      update: 'none',
      delete: 'none',
      comment: 'update',
      explain: 'none',
      read_field_blacklist: [],
      write_field_blacklist: [],
      status_blacklist: []
    },
    {
      id: 3,
      collection: 'users',
      role: 1,
      status: null,
      create: 'full',
      read: 'mine',
      update: 'none',
      delete: 'none',
      comment: 'update',
      explain: 'none',
      read_field_blacklist: [],
      write_field_blacklist: [],
      status_blacklist: []
    }
  ]
};

module.exports = userPerms;