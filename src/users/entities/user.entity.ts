import { Column } from 'typeorm';

export class User {
  @Column()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  token: string;
}
