const fetch = require('node-fetch');

exports.handler = async (event) => {
  const method = event.httpMethod;

  // Encabezados comunes
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  };

  // Respuesta para solicitudes OPTIONS
  if (method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    };
  }

  // Proxy para otras solicitudes
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