const { execSync } = require('child_process');
const concurrently = require('concurrently');

const services = ['cliente-service', 'pedido-service', 'produto-service'];

// Instala dependências
services.forEach(service => {
  console.log(`Instalando em ${service}...`);
  execSync(`cd ${service} && npm install`, { stdio: 'inherit' });
});

// Inicia todos
concurrently(services.map(service => `cd ${service} && npm start`));