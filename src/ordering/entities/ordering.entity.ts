import { Column, PrimaryGeneratedColumn, Entity, Unique, OneToMany } from "typeorm";
import { Ticket } from "src/ticket/entities/ticket.entity";
import { Passenger } from "src/passengers/entities/passenger.entity";

@Entity()
export class Ordering {

    @OneToMany(()=> Passenger,passenger => passenger.idorder)
    passengers:Passenger[]

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name : string

    @Column({unique: true})
    email : string

    @Column()
    phonenumber : number

    @Column()
    password : string
}
