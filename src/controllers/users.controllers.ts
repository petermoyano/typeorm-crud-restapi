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

export async function updateUser(req: Request, res: Response) {
  try {
    /*     const { firstName, lastName } = req.body; */
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) {
      return res.status(404).json({ message: `No user with id: ${id}` });
    }
    /* user.firstName = firstName;
    user.lastName = lastName;
    user.save(); */
    await User.update({ id: parseInt(id) }, req.body);
    return res.status(204).json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    /*     const { firstName, lastName } = req.body; */
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) {
      return res.status(404).json({ message: `No user with id: ${id}` });
    }
    await User.delete({ id: parseInt(id) });
    return res.status(204).json({ message: "deleted" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) {
      return res
        .status(404)
        .json({ message: `No user with id: ${req.params.id}` });
    }

    return res.status(200).json({ user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
