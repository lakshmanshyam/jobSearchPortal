import { Injectable } from '@nestjs/common';
import { JobRepository } from './job.repository';

@Injectable()
export class JobService {
    constructor(private readonly jobRepo: JobRepository){}

    createJob(){
        this.jobRepo.create();
    }

    getJobById(){
        this.jobRepo.findOne();
    }
}
