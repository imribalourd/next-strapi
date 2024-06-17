export default ({env}) => ({
    email : {
        config: {
            provider: "strapi-provider-email-brevo",
            providerOptions: {
                apiKey: env('BREVO_API_KEY')
            },
            settings: {
                defaultSenderEmail: env('EMAIL_DEFAULT_SENDER_EMAIL'),
                defaultSenderName: env('EMAIL_DEFAULT_SENDER_NAME'),
                defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO'),
            },
        },
    }
});
