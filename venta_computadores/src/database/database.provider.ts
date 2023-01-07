import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: '69.162.91.146',
        port: 5554,
        username: 'postgres',
        password: '4lp3s2023',
        database: '',
      });
      sequelize.addModels([]);
      //await sequelize.sync();
      return sequelize;
    },
  },
];