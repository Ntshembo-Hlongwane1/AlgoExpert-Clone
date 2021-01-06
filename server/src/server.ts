import express, { Application } from 'express';
import cors from 'cors';
import CodeExercise from './Routes/CodeExercise/CodeExercise';

const Server: Application = express();

Server.use(cors());

Server.use(CodeExercise);

const PORT = process.env.PORT || 5000;
Server.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});
