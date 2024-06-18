export default {
  async sendTestEmail(ctx) {
    const { email, name } = ctx.request.body;

    if (!email) {
      return ctx.badRequest("Email is required");
    }
    await strapi.plugins["email"].services.email.send({
      to: email,
      name: name || "Test name",
      subject: "Test strapi mandrill from maBible",
      merge_language: "handlebars",
      global_merge_vars: [
        {
          name: "user_name",
          content: "Default test name",
        },
      ],
      merge_vars: [
        {
          rcpt: email,
          vars: [
            {
              name: "user_name",
              content: name || "Test name",
            },
          ],
        },
      ],
      metadata :{
        template_name: "mabible-email",
        template_content: []
      }
      
    });
    
    
    ctx.send({ message: "Email sent successfully" });
  },
};
