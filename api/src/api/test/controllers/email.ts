export default {
  async sendTestEmail(ctx) {
    const { email, name } = ctx.request.body;

    if (!email) {
      return ctx.badRequest("Email is required");
    }
    const response = await strapi.plugins["email"].services.email.send({
      to: email,
      subject: "Test Email",
      templateId: 1,
      params: {
        name: name || "Test name",
        imageLink:
          "https://yt3.googleusercontent.com/sENA4b73NcFH-5cvRkc0yyFRPw0_XmYL-f2YZ1S56KmWrvl9hpVYL__3qpaGWEDbY6UZ_5XjAp0=s900-c-k-c0x00ffffff-no-rj",
      },
    });

    if (response.status >= 400) {
      return ctx.badRequest("Failed to send email");
    }

    ctx.send({ message: "Email sent successfully" });
  },
};
