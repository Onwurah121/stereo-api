import { DataSource, DataSourceOptions } from 'typeorm' ;

export  const dataSourceOptions: DataSourceOptions = {
      type: 'mysql',
      host: 'db4free.net',
      port: 3306,
      username: 'stereopayapp',
      password: 'stereoPay123',
      database: 'stereo',
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/db/migrations/*.js']
};


const dataSource = new DataSource(dataSourceOptions);

export default dataSource;