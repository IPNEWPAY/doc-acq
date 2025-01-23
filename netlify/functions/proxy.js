const fetch = require('node-fetch');

exports.handler = async (event) => {
  const method = event.httpMethod;

  // Encabezados CORS comunes
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Allow-Credentials': 'true',
  };

  // Maneja solicitudes preflight
  if (method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    };
  }

  // Construye la URL del servidor de destino
  const targetUrl = `https://wallet.release.newpay.com.ar${event.path}`;
  console.log('Redirecting request to:', targetUrl);

  try {
    const response = await fetch(targetUrl, {
      method,
      headers: {
        ...event.headers,
        Host: 'wallet.release.newpay.com.ar',
      },
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
    console.error('Error in proxy function:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal Server Error', error: error.message }),
    };
  }
};
