import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { globalMongoConfig } from './config/mongodb-connection';





@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env.development.local', '.env.development', '.env'],
  }),
  MongooseModule.forRoot(globalMongoConfig().MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
