# Snap

This guide walks you through installing and configuring the Newpay Docs Agent as a Snap Package. Using Snap provides a straightforward way to install and manage the Newpay Docs Agent on devices, connecting them for remote management via Newpay Docs.

## Prerequisites

- **Snap Package Manager Installed**: Ensure Snap is installed and available on your device.
- **Newpay Docs Access**: A valid tenant ID for your Newpay Docs Cloud or self-hosted instance.

## Step 1: Installing the Newpay Docs Agent

The Newpay Docs Agent is available on the Snap Store. To install, run:

```bash
sudo snap install --classic Newpay Docs
```

:::info
By default, the Newpay Docs Agent is configured to use **Newpay Docs Cloud** (`https://cloud.Newpay Docs.io`), allowing for quick setup without needing a self-hosted instance. You only need to set the `tenant-id` to connect the device to your Newpay Docs Cloud namespace.
:::

## Step 2: Viewing Newpay Docs Agent Configuration

To view the current configuration of the Newpay Docs Agent, use:

```bash
snap get Newpay Docs
```

This command displays the current settings, showing key configuration details such as the **private key path**, **server address**, and **tenant ID**.

By default, should display these keys and values:

| Key                | Value                       |
|--------------------|-----------------------------|
| private-key        | /etc/Newpay Docs.key           |
| server-address     | https://cloud.Newpay Docs.io   |
| tenant-id          |                             |
| preferred-hostname |                             |

## Step 3: Setting Configuration Options

You can configure the Newpay Docs Agent using the `snap set` command. Update settings by replacing `<key>` and `<value>` with your desired configurations:

```bash
sudo snap set Newpay Docs <key>=<value>
```

### Key Configuration Options:

- **private-key**: Path to the private key for Newpay Docs Agent.
- **server-address**: Address of the Newpay Docs server (default: `https://cloud.Newpay Docs.io`).
- **tenant-id**: Tenant ID associated with your Newpay Docs namespace.

### Example Configuration

To set the **tenant ID** and a custom **server address**, use:

```bash
sudo snap set Newpay Docs tenant-id=<your-tenant-id>
sudo snap set Newpay Docs server-address=<your-server-address>
```
:::note
If you don't know how to get your Tenant ID, see [Retrieving Your Tenant ID](/user-guides/namespaces/retrieving-your-tenant-id)
:::

## Starting Newpay Docs Agent and Testing

The Newpay Docs Agent will automatically connect to the server in background.

![](/img/pending-device-notification.png)

## Troubleshooting Tips

- **Network Connectivity:** Ensure the device can reach the Newpay Docs server.
- **Tenant ID & Server Address:** Double-check the variable content values using `snap get Newpay Docs`. Also verify if all variables are correctly spelled.
- **Logs and Debugging:**
 Check the Newpay Docs Agent logs for detailed error messages by running `sudo snap logs Newpay Docs`.
- **Restarting the Newpay Docs Agent:**
  After updating configuration settings, restart the Newpay Docs Agent to apply changes: `sudo snap restart Newpay Docs`.
- **Updating the Newpay Docs Snap Package:**
  Ensure the Newpay Docs Snap is up-to-date by running:`sudo snap refresh Newpay Docs`.

## Newpay Docs Environment Variables for Snap

- **server-address:** Sets the address for the Newpay Docs server (default is Newpay Docs Cloud: https://cloud.Newpay Docs.io).
- **private-key:** Path to the device’s private key.
- **tenant-id:** Links the device to a specific tenant or namespace.
- **preferred-hostname:** Suggested hostname for the device, if available.

## Conclusion

With Newpay Docs installed as a Snap Package, you can quickly configure and connect your device for remote management. For further details about Snap, see the [Snapcraft Documentation](https://snapcraft.io/docs).
