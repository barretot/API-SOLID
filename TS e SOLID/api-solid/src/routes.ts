import { Router } from 'express';

const router = Router();

router.get('/api', (req, res) => {
  res.json({
    message: 'hello_world',
  });
});

export { router };
