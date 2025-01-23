# FreeBSD

This guide provides instructions for building, installing, and configuring the Newpay Docs Agent on FreeBSD, allowing you to remotely manage your device through Newpay Docs.

## Prerequisites

- **FreeBSD System**: A FreeBSD system with root access.
- **Newpay Docs Access**: A valid tenant ID for your Newpay Docs Cloud or self-hosted instance.
- **Git Installed**: Required to clone the FreeBSD Ports Collection repository.

## Step 1: Cloning the FreeBSD Ports Collection

Begin by cloning the Newpay Docs Agent port from the FreeBSD Ports Collection repository to your system:

```bash
git clone https://github.com/Newpay Docs-io/ports.git
```

Once cloned, navigate to the directory containing the Newpay Docs Port:

```bash
cd ports
```

## Step 2: Building and Installing Newpay Docs Agent

To build and install the Newpay Docs Agent, run:

```bash
make install clean
```

This command compiles and installs the Newpay Docs Agent on your system.

## Step 3: Configuring Newpay Docs Agent

After installation, configure the Newpay Docs Agent by adding the necessary settings to `/etc/rc.conf`:

```bash
# Enable Newpay Docs Agent
Newpay Docs_enable="YES"

# Set the Newpay Docs Server Address
Newpay Docs_server_address="https://cloud.Newpay Docs.io"

# Set the Tenant ID
Newpay Docs_tenant_id="00000000-0000-0000-0000-000000000000"
```

:::note
If you don't know how to get your Tenant ID, see [Retrieving Your Tenant ID](/user-guides/namespaces/retrieving-your-tenant-id)
:::

## Starting Newpay Docs Agent and Testing

To start the Newpay Docs Agent, use:

```bash
service Newpay Docs start
```

The Newpay Docs Agent will now connect in the background using the specified server address and tenant ID.

![](/img/pending-device-notification.png)

## Troubleshooting Tips

- **Network Connectivity:** Ensure the device can reach the Newpay Docs server.
- **Tenant ID & Server Address:** Double-check the variable content reading `/etc/rc.conf`. Also verify if all variables are correctly spelled.
- **Logs and Debugging:**
Check the Newpay Docs Agent logs for detailed error messages by running `cat /var/log/Newpay Docs.log`. Look for messages indicating connection issues, authentication errors, or misconfigurations.
- **Service Status:**
Ensure the Newpay Docs service is running by checking its status `service Newpay Docs status`. If the service is not running, try starting it: `service Newpay Docs start`.
- **System Updates:**
Ensure your FreeBSD system and ports tree are up-to-date to avoid compatibility issues:

```bash
freebsd-update fetch install
portsnap fetch update
```

## Newpay Docs Environment Variables for FreeBSD

- **Newpay Docs_enable:** Enable or disable Newpay Docs Agent. By default, it is set to `NO`. Set it to `YES` to enable Newpay Docs.
- **Newpay Docs_server_address:** Sets the address for the Newpay Docs server (default is Newpay Docs Cloud: https://cloud.Newpay Docs.io).
- **Newpay Docs_private_key:** Path to the device’s private key.y default, it is stored in `/etc/Newpay Docs.key`
- **Newpay Docs_tenant_id:** Links the device to a specific tenant or namespace.

## Conclusion

With Newpay Docs Agent installed on FreeBSD, your device is now set up for remote management. For more information on FreeBSD Ports, see the [FreeBSD Handbook on Ports and Packages](https://www.freebsd.org/doc/handbook/ports.html).