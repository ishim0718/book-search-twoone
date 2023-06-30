const { User, Book } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find({});
    },
    book: async () => {
      return await Book.findById(args.bookId);
    },
    users: async () => {
      return await User.find({}).populate('savedBooks');
    },
    user: async (parent, args) => {
      return await User.findById(args.id).populate('savedBooks');
    },
  }
};

module.exports = resolvers;
