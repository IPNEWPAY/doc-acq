const fetch = require('node-fetch');

exports.handler = async (event) => {
  const method = event.httpMethod;

  // Encabezados CORS comunes
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  };

  // Manejo de solicitudes preflight
  if (method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    };
  }

  // Redirige las solicitudes reales al servidor de destino
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
    console.error('Error en la función proxy:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Error en el servidor proxy' }),
    };
  }
};