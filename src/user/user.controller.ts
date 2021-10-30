import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly users: UserService) {}

    @Post()
    @UsePipes(new ValidationPipe({ forbidNonWhitelisted: true, whitelist: true }))
    createUser(@Body() body: UserCreateInput){
        return this.users.createUser(body);
    } 

    @Get()
    getAllUserDetails(){

    }

    @Get(":id")
    @UsePipes(new ValidationPipe({ forbidNonWhitelisted: true, whitelist: true }))
    getUserById(@Param() id: string) {
        // TODO: authenticate request user and then call service
        return this.users.getUserById(id);
    }

    @Patch(":id")
    updateUserById() {

    }

    @Delete(":id")
    removeUserById(){

    }
}