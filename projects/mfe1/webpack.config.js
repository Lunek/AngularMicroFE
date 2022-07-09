const {
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

// Version 14
module.exports = withModuleFederationPlugin({
  name: "mfe1",

  exposes: {
    "./Module": "./projects/mfe1/src/app/flights/flights.module.ts",
  },

  shared: share({
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  }),
});
