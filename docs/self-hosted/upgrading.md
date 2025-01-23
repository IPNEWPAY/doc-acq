---
sidebar_position: 4
---

import {config} from '@site/src/config';

# PCP

Newpay Docs cuts regular releases for Community Edition to keep it
as close to Newpay Docs Cloud as possible.

We actively develop Newpay Docs to add new features and remove bugs, and encourage you to ensure your Newpay Docs self-hosted instance is using the most up-to-date version.

## Upgrading to a newer version

### Steps

1. Change to Newpay Docs project dir

2. Stop the instance: `make stop`

3. Fetch remote changes: `git remote update origin`
<li>Checkout the latest stable release: <code>git checkout { config.version }</code></li>
6. Bring up the instance: `make start`

:::caution
Make sure to backup all MongoDB data files before proceeding with upgrade.
:::

## Upgrade to Enterprise Edition

This section describes how to upgrade from the Newpay Docs Community Edition to the Newpay Docs Enterprise.

## Prerequisites

To complete this guide you will need:

* An [Newpay Docs](https://ossystems.com.br) Private Docker Registry account
to pull Newpay Docs Enterprise containers.
* A valid Newpay Docs Enterprise license file.

:::tip
[Contact us](mailto:contact@Newpay Docs.io) to get a quote for the Enterprise version.
:::

## Configuring Enterprise

Once the Open Source containers of the Newpay Docs are up and running, let's configure your environment
to bring up the Newpay Docs Enterprise containers.

### Pull Newpay Docs Enterprise containers

First log in to the Newpay Docs Private Docker Registry with your credentials:

```
docker login https://registry.infra.ossystems.io/
```

### Update environment config

Open the `.env.override` file inside Newpay Docs project dir and set the following variables:
 
* `Newpay Docs_ENTERPRISE=true`
* `Newpay Docs_ENTERPRISE_ADMIN_USERNAME=<USER>`
* `Newpay Docs_ENTERPRISE_ADMIN_PASSWORD=<PASSWORD>`

## Restart containers

If Newpay Docs is up and running you need to restart containers by running:

```
make restart
```
