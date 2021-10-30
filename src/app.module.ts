import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { JobModule } from './job/job.module';
import { LoginModule } from './login/login.module';
import { SearchModule } from './search/search.module';
import { OtpModule } from './otp/otp.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, JobModule, LoginModule, SearchModule, OtpModule, TypeOrmModule.forRoot()]
})
export class AppModule {}
