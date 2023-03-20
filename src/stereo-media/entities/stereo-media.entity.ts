import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Media, MediaType } from "../interface/media.interface";

export class StereoMedia implements Media {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({
        type: 'enum',
        enum: MediaType,
        nullable: true
      })
    mediaType: MediaType;
}
