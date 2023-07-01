const { User, Book } = require('../models');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
        if(context.user) {
            return User.findOne({ _id: context.user._id}).populate('books')
        }
    }
  },
  Mutation: {
    login: async () => {

    },
    addUser: async () => {

    },
    saveBook: async () => {

    },
    removeBook: async () => {

    },
  },
};

module.exports = resolvers;
