import { IncomingForm } from 'formidable';
import { Request, Response } from 'express';
import { python } from 'compile-run';
import fs from 'fs';

const Exercises: Array<object> = [
  {
    exercise: 'Print out Hello World',
    expectedOutput: 'Hello World'
  },

  {
    exercise: 'Print',
    expectedOutput: [3, 2, 1]
  }
];

interface Code {
  GetExercise(request: Request, response: Response): Response;
  CompileRunCode(request: Request, response: Response): Response | any;
}

class CodeController implements Code {
  GetExercise(request: Request, response: Response) {
    const randomNumber: number = Math.floor(Math.random() * 2);

    try {
      return response.status(200).json(Exercises[randomNumber]);
    } catch (error) {
      return response.status(500).json({ msg: 'Network Error: Failed to load exercise' });
    }
  }

  CompileRunCode(request: Request, response: Response) {
    const form = new IncomingForm();

    try {
      form.parse(request, (error, fields: any, files) => {
        if (error) {
          return response
            .status(500)
            .json({ msg: 'Network Error: Failed to compile your code please try again later' });
        }

        const { code, expectedOutput } = fields;

        fs.writeFile('./code.py', code, (error) => {
          if (error) {
            console.log(error);
          }
          python.runFile('./code.py', (err, res) => {
            if (err) {
              return console.log(err);
            }

            if ('Hello World' === res?.stdout.toString()) {
              return response.status(200).json({ msg: 'Correct Answer' });
            }

            return response.status(400).json({ msg: 'Wrong Answer' });
            // return console.log(res?.stdout);
          });
        });
      });
    } catch (error) {
      return response
        .status(500)
        .json({ msg: 'Network Error: Failed to compile code please try again later' });
    }
  }
}

export { CodeController };
