import User, { IUser } from "./models/User";
export const resolvers = {
  Query: {
    clients: async (): Promise<IUser[]> => await User.find({}),
    client: async (_: any, args: any): Promise<IUser> => {
        const user = await User.findById(args.id)
        return user!
    
    }
  },
  Mutation: {
    create: async (_: any, args: any): Promise<IUser> => {
      const { name, projectValue, projectDepartment, city } = args;
      const user = {
        name,
        projectValue,
        projectDepartment,
        city,
      };
      const newUser = await User.create(user);
      return newUser;
    },
  },
};
