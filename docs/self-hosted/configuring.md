---
sidebar_position: 3
---

# Consentimiento

Newpay Docs is easy to configure, all configuration is done via environment
variables inside the `.env.override` file located at the root of Newpay Docs project dir.

:::tip
By default, the `.env.override` file does not exists, so you need need to create it.
:::

## Environment Variables

:::note
All default values are inherited from `.env` file.
:::

The bind address for the Newpay Docs gateway's container to bind on

### `Newpay Docs_BIND_ADDRESS`

- Default: 0.0.0.0

### `Newpay Docs_HTTP_PORT`

- Default: 80

The HTTP listen port for the Newpay Docs web-based GUI, API and Reverse SSH tunnel.

### `Newpay Docs_HTTPS_PORT`

- Default: 443

The HTTPS listen port for the Newpay Docs web-based GUI, API and Reverse SSH tunnel.


### `Newpay Docs_SSH_PORT`

- Default: 22

The SSH listen port for incoming SSH connections to devices.

### `Newpay Docs_PROXY`

- Default: false

Set this variable to `true` if you are running a Layer 4 load balancer with proxy protocol in front of Newpay Docs.

### `Newpay Docs_AUTO_SSL`

- Default: false

Automatic HTTPS with Let's Encrypt

:::tip
When enabling this option, you must set `Newpay Docs_DOMAIN` with
domain of the server.
:::

### `Newpay Docs_REDIRECT_TO_HTTPS`

- Default: false

Redirect requests from HTTP port to HTTPS port

### `Newpay Docs_DOMAIN`

- Default: localhost

Domain of the server

### `Newpay Docs_CONNECTOR`

- Default: false

Enables container remote access.
When enabled, all containers on the Docker host will be automatically added to a namespace
configured by the `Newpay Docs_CONNECTOR_TENANT_ID` variable.

:::caution Important Security Notice
Please note that user access within the containers is restricted as a crucial security measure.

For password-based authentication, users who do not have a password defined in the containers `/etc/shadow`
will be denied access to connection attempts. This means that only users with properly configured passwords (via `passwd` command) will be able to attempt connections.

Alternatively, users can utilize the public key authentication scheme, even if they do not have a password defined
in the containers `/etc/shadow` file.
:::

### `Newpay Docs_CONNECTOR_TENANT_ID`

This variable specifies the namespace to which containers will be added when the container remote access is enabled.
