module.exports = {
    database: {
       client: "mysql",
       connection: {
        database: "safebox",
         user: "root",
         password: "123456789",
       },
       acquireConnectionTimeout: 300000,
       wrapIdentifier: (value, _origImpl, _queryContext) => value,
     }
  };
