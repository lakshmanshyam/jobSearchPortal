import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Post()
    createUser(){

    } 

    @Get()
    getAllUserDetails(){

    }

    @Get("/:id")
    getUserbyId() {

    }
}
