---
sidebar_position: 1
---

# Using API Keys

Requests can be authenticated using an API key by setting the `X-API-Key`
header in the request. If an invalid API key is provided, the server will
return a `401 Unauthorized` status code.

For example, to use an API key within cURL:

```bash
curl -X GET "https://cloud.Newpay Docs.io/api/" -H "X-API-Key: $Newpay Docs_API_KEY"
```
