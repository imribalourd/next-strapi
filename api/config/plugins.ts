export default ({env}) => ({
    email: {
        config: {
          provider: "strapi-provider-email-mandrill",
          providerOptions: {
            apiKey: env('MANDRILL_API_KEY'),
          },
         settings: {
            defaultFrom: env('EMAIL_DEFAULT_SENDER_EMAIL'),
            defaultName: env('EMAIL_DEFAULT_SENDER_NAME'),
            defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO'),
            defaultHtml: '',
            defaultText: '',
          },
        },
      }
});
