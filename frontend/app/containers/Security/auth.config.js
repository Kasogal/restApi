const AuthConfig = () => ({
  apiUrl: 'http://localhost:8080',
  clientId: 'spring-security-oauth2-read-write-client',
  clientSecret: '$2a$04$soeOR.QFmClXeFIrhJVLWOQxfHjsJLSpWrU1iGxcMGdu.a5hvfY4W',
  scope: 'read,write',
});

export default new AuthConfig();
