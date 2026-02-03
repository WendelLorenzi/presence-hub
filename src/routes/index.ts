import { Router } from "express";

const router = Router();

router.use('/api', (req, res) => {
  res.send('API is working!');
});

router.use('/assets/:id', (req, res) => {
  // service to fetch and return asset by id
});

export default router;