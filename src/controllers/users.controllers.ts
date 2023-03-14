import { Request, Response } from "express";
import { User } from "../entities/User";

export async function createUser(req: Request, res: Response) {
  try {
    const { firstName, lastName } = req.body;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;

    await user.save();
    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
