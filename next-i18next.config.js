const { DateTime } = require('luxon');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he', 'zh'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: (value, format, lng) => {
        if (value instanceof Date) {
          return DateTime.fromJSDate(value)
            .setLocale(lng)
            .toLocaleString(DateTime[format]);
        }
        return value;
      },
    },
    serializeConfig: false,
  },
  // this will download the translations from locize directly, in client (browser) and server (node.js)
  // DO NOT USE THIS if having a serverless environment => this will generate too much download requests
  //   => https://github.com/locize/i18next-locize-backend#important-advice-for-serverless-environments---aws-lambda-google-cloud-functions-azure-functions-etc
  // backend: {
  //   projectId: 'd3b405cf-2532-46ae-adb8-99e88d876733',
  //   // apiKey: 'myApiKey', // to not add the api-key in production, used for saveMissing feature
  //   referenceLng: 'en'
  // },
  // use: [
  //   require('i18next-locize-backend/cjs')
  // ],
  // serializeConfig: false, // because of the custom use i18next plugin
  // debug: true,
  // saveMissing: true, // do not saveMissing to true for production
};

// for a serverless environment bundle the translations first. See downloadLocales script in package.json
// and configre this file like this:
// module.exports = {
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en', 'de'],
//   }
// }
