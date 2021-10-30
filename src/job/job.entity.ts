import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("job_tbl")
export class Job {

    @PrimaryColumn({name:'job_id', type: 'varchar'})
    job_id: string;

    @Column({name:'title', type: 'varchar'})
    title: string;

    @Column({name:'description', type: 'varchar'})
    descriptions: string;

    @Column({name:'company', type: 'varchar'})
    company: string;

}