import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { JobService } from './job.service';

@Controller('job')
export class JobController {

    constructor(private readonly jobs: JobService){}

    @Post()
    creatJob(){
        this.jobs.createJob();
    } 

    @Get()
    getAllJobs(){

    }

    @Get(":id")
    getJobById() {
        this.jobs.getJobById();
    }

    @Patch(":id")
    updateJobById() {

    }

    @Delete(":id")
    removeJobById(){
        
    }
}
