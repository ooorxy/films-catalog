import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('films')
export class Film {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  synopsis: string;
}
