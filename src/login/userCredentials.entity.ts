import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity("user_credentials_tbl")
export class UserCredentials {

    @PrimaryColumn({name: 'user_id', type: 'varchar'})
    user_id: string;

    @Column({name: 'password', type: 'varchar'})
    password: string;

    @Column({name: 'salt', type: 'varchar'})
    saltKey: string;
}