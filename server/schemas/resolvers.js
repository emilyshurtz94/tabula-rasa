const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const dailyFormSchema = require('../models/Form');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    recap: async (parent, args, context) => {
        if (context.user) {
            return User.findOne({ _id: context.user._id })
        }
        throw new AuthenticationError('You need to be logged in!');
    }
 
  },

  Mutation: {
    signUp: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError( 'Incorrect password!' );
      }

      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
       throw new AuthenticationError( 'You need to be logged in!'  );
    },
    updateSettings: async (parent, {input}, context) =>{
      if(context.user){
        return User.findOneAndUpdate({_id: context.user._id},
          {settings:{...input}}, {new:true}
          )
      }
      console.log(input)
    },
    addDailyForm: async (parent, {dailyFormSchema}, context) =>{
      if(context.user){
        return User.findOneAndUpdate({_id: context.user._id},
          {dailyForm:{dailyFormSchema}}
          )
      }
    },
  },
};

module.exports = resolvers;