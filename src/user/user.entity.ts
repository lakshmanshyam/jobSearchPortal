import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("user_tbl")
export class User {

    @PrimaryColumn({name:'user_id', type: 'varchar'})
    user_id: string;

    @Column({name: 'name', type: 'varchar'})
    name: string;

    @Column({name: 'name', type: 'varchar'})
    email: string;

    @Column({name: 'phone', type: 'int'})
    phone: number;

    @Column({name: 'gender', type: 'int'})
    gender: number;

    @Column({name: 'age', type: 'int'})
    age: number;

    @Column({name: 'company', type: 'varchar'})
    company: string;

    @Column({name: 'role', type: 'varchar'})
    role: string;

    @Column({name: 'salary', type: 'int'})
    salary: number

    @Column({name: 'exp', type: 'int'})
    experience: number

    @Column({name: 'country', type: 'varchar'})
    country: string;
}