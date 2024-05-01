import { MigrationInterface, QueryRunner } from "typeorm";

export class UserMigration1714536858875 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            email VARCHAR NOT NULL,
            password VARCHAR NOT NULL,
            PRIMARY KEY ('id'),
            CONSTRAINT "uq_email_users" UNIQUE (email)
        );
        
        CREATE TABLE films (
            id SERIAL PRIMARY KEY,
            title VARCHAR NOT NULL,
            synopsis TEXT NOT NULL,
            user_id INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            PRIMARY KEY (id),
            CONSTRAINT "fk_films_user_id" FOREIGN KEY (user_id) REFERENCES users(id)
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE films;
        DROP TABLE users;
    `,
    );
    await queryRunner.query('');
  }
}
