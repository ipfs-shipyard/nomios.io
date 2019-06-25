# nomios.io

The [nomios.io](https://nomios.io) website.


## Base technology

- [Gatsby](https://www.gatsbyjs.org/)
- React
- CSS modules
- [PostCSS](https://github.com/postcss/postcss) with [MOXY's preset](https://github.com/moxystudio/postcss-preset-moxy)


## Development

Install & run the project with:

```sh
npm i && npm start
```

### start

```sh
$ npm start
```

Starts Gatsby's development server.

### build

```sh
$ npm run build
```

Builds the project.

### lint

```sh
$ npm run lint
```

Checks if the project has any linting errors.

### test

```sh
$ npm test
```

Runs the project tests.

### release

```sh
$ npm run release
```

Releases the package. Runs tests, lints and builds the project beforehand. If successful, it runs `npm run deploy` to deploy the website on GitHub pages.

This command uses [`standard-version`](https://github.com/conventional-changelog/standard-version) underneath. The version is automatically inferred from the [conventional commits](https://conventionalcommits.org/).

### deploy

```sh
$ npm run deploy
```

Deploy the website to the `gh-pages` branch, updating `https://nomios.io`. Note that it might take a few minutes to update the website due to caching.


## Contributing

If you want to contribute for the project, we encourage you to read over the [Nomios](https://github.com/ipfs-shipyard/pm-idm) repository README.


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php), except for the GT Sectra font files.

Due to the Grilli Type [End User License Agreement (EULA)](https://grillitype.com/api/v1/download/eula_web/Grilli-Type-Web-EULA-1_7.pdf), the GT Sectra font files should not be used outside of this project.
