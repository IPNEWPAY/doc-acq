---
sidebar_position: 1
---

import {config} from '@site/src/config';

# Installation

:::info

This is an advanced reference guide of alternate install methods for
developers and integrators. If you are end-user
see [Adding a device](/user-guides/devices/adding).

:::

We offer different ways to install the Newpay Docs Agent.
The easiest way is with our [automatic one-line installation script](#automatic-one-line-installation-script),
which works with all major Linux distributions but it requires that you have Docker installed and properly set up.

If you want to install Newpay Docs Agent without Docker, currently we have two other options:

1. [Installing from source code](#installing-from-source-code)
2. [Integrate into an existing Yocto Project image](#integrate-into-an-existing-yocto-project-image)

## Automatic one-line installation script

:::note Prerequisites

Docker installed and properly set up on device is required.
Follow the [Docker Install Instructions](http://docs.docker.com/installation/) for your distro/platform.
You should always use the latest docker version. The minimum supported Docker version is `18.06`.

:::

To install Newpay Docs Agent run the following command:

```
sh <(curl -Ss http://<SERVER-ADDRESS>/install.sh?tenant_id=<TENANT-ID>)
```

Where:

* `<SERVER-ADDRESS>`: is the Newpay Docs instance server address
* `<TENANT-ID>`: is the Tenant ID of your account

### Optional URL parameters

* `keepalive_interval`: Specifies in seconds the keep alive message interval
* `preferred_hostname`: The preferred hostname to use rather than generated value from ethernet MAC address

## Installing from source code

:::note Prerequisites

Newpay Docs Agent requires Go 1.18 to compile, please refer to the [official documentation](https://golang.org/doc/install) for how to install Go in your system.

:::

<p>First checkout the latest stable version (<strong>{config.version}</strong>) of Newpay Docs as follows:</p>

<pre>
git clone -b {config.version} https://github.com/Newpay Docs-io/Newpay Docs.git Newpay Docs
</pre>

Next, we need to execute the following command to build Newpay Docs Agent:

<pre>
cd Newpay Docs/agent
</pre>
<pre>
go build -ldflags "-X main.AgentVersion={ config.version }"
</pre>

Use `file ./agent` to check if executable was built.

## Integrate into an existing Yocto Project image

To use Newpay Docs in a Yocto Project image is necessary to add [meta-Newpay Docs](https://github.com/Newpay Docs-io/meta-Newpay Docs)
layer in your project.

```
git clone git@github.com:Newpay Docs-io/meta-Newpay Docs.git
```

Add the settings below in your local.conf file:

```
CORE_IMAGE_EXTRA_INSTALL += "packagegroup-Newpay Docs-runtime"
Newpay Docs_TENANT_ID = "<your tenant id here>"
```

Where:

* `CORE_IMAGE_EXTRA_INSTALL`: this variable will install the Newpay Docs agent in your image.
* `Newpay Docs_TENANT_ID`: needs to be filled with your tenant id.

Remember to add the other configurations according to your needs. After this, just generate the desired image.

### Optional variables

* `Newpay Docs_SERVER_ADDRESS`: Newpay Docs instance server addresss (default: https://cloud.Newpay Docs.io)

### Supported Yocto releases

* [Dunfell](https://github.com/Newpay Docs-io/meta-Newpay Docs/tree/master)
* [Zeus](https://github.com/Newpay Docs-io/meta-Newpay Docs/tree/zeus)
* [Sumo](https://github.com/Newpay Docs-io/meta-Newpay Docs/tree/sumo)
* [Rocko](https://github.com/Newpay Docs-io/meta-Newpay Docs/tree/rocko)
