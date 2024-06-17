# Strapi brevo test integration

Strapi comes with a provider integration for custom email providers. [Learn more](https://docs.strapi.io/dev-docs/providers#configuring-providers) 

### `init`

To initialize, please add the folowing env variables

```
BREVO_API_KEY=""
EMAIL_DEFAULT_SENDER_EMAIL=""
EMAIL_DEFAULT_SENDER_NAME=""
EMAIL_DEFAULT_REPLY_TO=""

```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```
