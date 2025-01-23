const fetch = require('node-fetch');

exports.handler = async (event) => {
  const method = event.httpMethod;
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Permitir todos los orígenes
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  };

  // Manejar solicitudes preflight (OPTIONS)
  if (method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    };
  }

  // Proxy para otras solicitudes (POST, GET, etc.)
  const targetUrl = `https://wallet.release.newpay.com.ar${event.path}`;
  
  try {
    const response = await fetch(targetUrl, {
      method,
      headers: event.headers,
      body: event.body,
    });

    const responseBody = await response.text();

    return {
      statusCode: response.status,
      headers: {
        ...headers,
        'Content-Type': response.headers.get('Content-Type'),
      },
      body: responseBody,
    };
  } catch (error) {
    console.error('Error proxying request:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
