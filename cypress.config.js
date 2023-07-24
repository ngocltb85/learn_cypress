const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://dev.admin-digieye.stunited.vn/'
  },
});
