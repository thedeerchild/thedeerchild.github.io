## Dependencies

Install with

```
yarn install
bundle install
```

Assumes node (v11 or earlier, due to ancient Gulp version), yarn, ruby and bundler are already installed.

## Development

Running middleman with the following command activates the asset pipeline and activates live reload on [localhost:4567](http://localhost:4567)

```
nvm use 11
bundle exec middleman
```

## Deployment

```
bundle exec middleman deploy
```
