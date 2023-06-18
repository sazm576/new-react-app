import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()

export class AppService {
  constructor(){
  }
  getHello(): string {
    return `'Hello World!' ${process.env.MONGO_DB_USERNAME}`;
  }
}
