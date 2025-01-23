const fetch = require('node-fetch');

exports.handler = async (event) => {
  const method = event.httpMethod;
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  };

  if (method === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    };
  }

  const targetUrl = `https://wallet.release.newpay.com.ar${event.path}`;
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
    console.error('Proxy error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};
