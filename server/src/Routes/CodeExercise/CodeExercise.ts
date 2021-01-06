import { Router } from 'express';
import { CodeController } from '../../Controller/CodeController/CodeController';

const router = Router();
const Controller = new CodeController();

router.get('/api/get-exercise', (request, response) => {
  Controller.GetExercise(request, response);
});

router.post('/api/run-code', (request, response) => {
  Controller.CompileRunCode(request, response);
});

export default router;
