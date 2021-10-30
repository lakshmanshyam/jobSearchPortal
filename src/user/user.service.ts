import { Injectable } from '@nestjs/common';
import { UserCredentials } from 'src/login/userCredentials.entity';
import { UserCredentialsRepository } from 'src/login/userCredentials.repository';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as uuid from 'uuid';
const bcrypt = require ('bcrypt');


@Injectable()
export class UserService {

    constructor(private readonly userRepo: UserRepository, private readonly userCredentials: UserCredentialsRepository){}

    createUser(userDetails: UserCreateInput){

        const id = uuid.v4();
        
        const newUser: User = new User();

        newUser.user_id = id;
        newUser.name = userDetails.name;
        newUser.email = userDetails.email;
        newUser.phone = userDetails.phone;
        newUser.role = userDetails.role;
        // verify otp with otp service

        this.userRepo.create(newUser);

        const creds: UserCredentials = new UserCredentials();

        creds.user_id = id;
        creds.password = userDetails.password;
        // generate salt key
        creds.saltKey = "";
        this.userCredentials.create(creds);

        return newUser;
    }

    getUserById(id: string){
        return this.userRepo.findOne(id);
    }
}
