export default  {
    baseUrl: 'http://localhost:3000', // Your API domain
    tokenName: 'access_token',
    loginUrl: '/auth/login1',
    registerUrl: '/auth/register1',
    logoutUrl: '/saiu',
    providers: {
      github: {
        clientId: '',
        redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
      }
    }
  }

