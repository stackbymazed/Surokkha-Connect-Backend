import { Request, Response } from 'express';
import * as userService from '../services/user.service';

// Firebase Authentication ব্যবহার করা হচ্ছে, তাই Login এখানে হয় না।
// Firebase নিজেই email/password manage করে।
// এই endpoint টি Firebase login-এর পর user কে DB-তে save করার জন্য।

export const register = async (req: Request, res: Response) => {
  try {
    const { uid, email, name, phone } = req.body;

    // আগে user আছে কিনা চেক করো
    const existingUser = await userService.getUserByEmail(email);
    if (existingUser) {
      return res.status(200).json(existingUser);
    }

    // নতুন user তৈরি করো Firebase UID দিয়ে
    const user = await userService.createUser({ id: uid, email, name, phone });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  const email = req.params.email as string;
  try {
    const user = await userService.getUserByEmail(email);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};
