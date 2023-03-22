import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Create users
const createUsers = async () => {
  try {
    const users = await prisma.user.createMany({
      data: [
        {
          name: "Satya Swaroop",
          email: "satya@testing.com",
        },
        {
          name: "John Doe",
          email: "john@testing.com",
        },
      ],
    });
    console.log("users", users);
  } catch (error) {
    throw error;
  }
};

// Read user
const findUsers = async () => {
  try {
    const getUsers = await prisma.user.findMany();
    const getUser = await prisma.user.findUnique({
      where: {
        name: "John Doe",
      },
      select: {
        email: true,
      },
    });
    console.log("getusers", getUsers);
  } catch (error) {
    throw error;
  }
};

// Update user
const updateUser = async () => {
  try {
    const updateUser = await prisma.user.update({
      where: {
        email: "john@testing.com",
      },
      data: {
        email: "john@doe.com",
      },
    });
    console.log("updatedUser", updateUser);
  } catch (error) {
    throw error;
  }
};

// Delete User
const deleteUser = async () => {
  try {
    const deleteUser = await prisma.user.delete({
      where: {
        email: "satya@testing.com",
      },
    });
    console.log("deletedUser", deleteUser);
  } catch (error) {
    throw error;
  }
};

// createUsers();
findUsers();
// updateUser();
// deleteUser();

const createPosts = async () => {
  try {
    const createdPosts = await prisma.post.createMany({
      data: [
        {
          title: "Post Title",
          description: "My post description",
          userName: "John Doe",
          publishedAt: new Date(),
        },
      ],
    });
    console.log("createdPosts", createdPosts);
  } catch (error) {}
};

// createPosts();

const findPosts = async () => {
  try {
    const getPosts = await prisma.post.findMany();
    console.log("createdPosts", getPosts);
  } catch (error) {}
};

findPosts();