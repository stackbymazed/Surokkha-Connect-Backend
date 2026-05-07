import { Request, Response } from 'express';
import * as alertService from '../services/alert.service';

export const triggerAlert = async (req: Request, res: Response) => {
  try {
    const alert = await alertService.createAlert(req.body);
    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json({ error: 'Failed to trigger SOS alert' });
  }
};

export const fetchAlerts = async (req: Request, res: Response) => {
  try {
    const alerts = await alertService.getAllAlerts();
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch alerts' });
  }
};
