import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { UserCredentialsRepository } from './userCredentials.repository';
const bcrypt = require ('bcrypt');
@Injectable()
export class LoginService {

    constructor(private readonly userCredentials: UserCredentialsRepository, private readonly userRepo: UserRepository){}

    login(userLogin: UserLoginDTO){
        let user;

        // find user 
        if(userLogin.name){
            user = this.userRepo.findOne({ name: userLogin.name});
        }

        this.userCredentials.findOne(user.user_id);
        
        userLogin.password 
        // encrypt password 
        // if encrypted password matched generate jwt token
    }
}
