module.exports = {
  production: {
    store: {
      type: 'S3',
      accessKeyId: 'AKIAJADIUEATRHVB7SKA',
      secretAccessKey: process.env['AWS_ACCESS_KEY'],
      bucket: 'cro.mtmckenna.com'
    },

    assets: {
      accessKeyId: 'AKIAJADIUEATRHVB7SKA',
      secretAccessKey: process.env['AWS_ACCESS_KEY'],
      bucket: 'cro.mtmckenna.com-assets'
    }
  }
};

