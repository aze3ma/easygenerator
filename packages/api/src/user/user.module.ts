import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { AuthenticationModule } from '../authentication/authentication.module';

@Module({
  imports: [
    forwardRef(() => AuthenticationModule),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [],
  exports: [MongooseModule],
})
export class UserModule {}
