import { Column } from 'typeorm';

export class Film {
  @Column()
  id: number;

  @Column()
  title: string;

  @Column()
  synopsis: string;
}
