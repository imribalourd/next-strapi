
export default  {
    routes: [
      {
        method: 'POST',
        path: '/test/send-email',
        handler: 'api::test.email.sendTestEmail', 
        config: {
          auth: false,
        },
      },
    ],
  };