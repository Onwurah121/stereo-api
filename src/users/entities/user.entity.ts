import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserInterface } from "../interface/user.interface";


@Entity({name : 'users'})
export class User implements UserInterface {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'full_name' })
    fullName: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
