# Yocto Project

This guide walks you through integrating Newpay Docs Agent into Yocto Project-based Linux systems, allowing for seamless remote device management. By combining the Yocto Project's flexibility for custom Linux image builds with Newpay Docs’s powerful remote management capabilities, you can efficiently manage embedded devices.

## Prerequisites

- **Yocto Project Setup:** Familiarity with Yocto Project environment and build processes.
- **Newpay Docs Access:** Valid tenant ID for your Newpay Docs instance.
- **Git Installed:** Required for cloning repositories.
- **Project for Integration:** A Yocto Project setup ready to integrate with Newpay Docs.

## Step 1: Adding the Newpay Docs Layer

Start by adding the Newpay Docs layer to your Yocto Project environment:

```bash
bitbake-layers layerindex-fetch meta-Newpay Docs -b scarthgap
```

This command fetches the `meta-Newpay Docs` layer from the [OpenEmbedded Layer Index](https://layers.openembedded.org/layerindex/branch/master/layer/meta-Newpay Docs/) and adds it to the **bblayers.conf** file.

:::info
If you want to consult meta-Newpay Docs compability with others Yocto Project releases, you can consult the [meta-Newpay Docs repository](https://github.com/Newpay Docs-io/meta-Newpay Docs) and look the branches available.
:::

For more on managing layers, see [Managing Layers in Yocto](https://docs.yoctoproject.org/next/dev-manual/layers.html#managing-layers).

## Step 2: Adding the Newpay Docs Agent Package to the Image

To include the Newpay Docs Agent in your build, add `Newpay Docs-agent` to your image. Set `Newpay Docs_TENANT_ID` to link the device to your Newpay Docs instance.

:::note
If you don't know how to get your Tenant ID, see [Retrieving Your Tenant ID](/user-guides/namespaces/retrieving-your-tenant-id)
:::

Edit the `conf/local.conf` file to add these variables:

```bash
CORE_IMAGE_EXTRA_INSTALL += "Newpay Docs-agent"
Newpay Docs_TENANT_ID = "<your tenant id here>"
```

### Optional: Configuring the Newpay Docs Server Address

If using a self-hosted Newpay Docs server, add this line to `conf/local.conf`:

```bash
Newpay Docs_SERVER_ADDRESS = "<your server address here>"
```

:::note
You can also change others Newpay Docs Agent settings. See the complete variable list [here](#Newpay Docs-environment-variables).
:::

## Step 3: Building the Image

Once configured, build the image with:

```bash
bitbake <image-name>
```

Replace `<image-name>` with your target image (e.g., `core-image-base`).

## Deploying and Testing

1. Flash the image onto your target device.
2. Connect the device to the internet.
3. Boot the device and verify its connection to your Newpay Docs instance under the specified tenant ID.

![](/img/pending-device-notification.png)

## Troubleshooting Tips

- **Network Connectivity:** Ensure the device can reach the Newpay Docs server.
- **Tenant ID & Server Address:** Double-check these values in `conf/local.conf`.
- **Dependencies:** Verify all necessary dependencies for the Newpay Docs Agent are met.
- **Yocto Variables:** Ensure all Yocto configuration variables are correctly spelled.

## Newpay Docs Environment Variables for Yocto Project

- **Newpay Docs_SERVER_ADDRESS:** Sets the address for the Newpay Docs server (default is Newpay Docs Cloud: https://cloud.Newpay Docs.io).
- **Newpay Docs_PRIVATE_KEY:** Path to the device’s private key.
- **Newpay Docs_TENANT_ID:** Links the device to a specific tenant or namespace.
- **Newpay Docs_KEEPALIVE_INTERVAL:** Interval for keep-alive messages to the server.
- **Newpay Docs_PREFERRED_HOSTNAME:** Suggested hostname for the device, if available.

## Conclusion

Your Yocto Project image now has Newpay Docs integrated for efficient remote management of your embedded devices. For more on the Yocto Project, see the [Yocto Project Documentation](https://docs.yoctoproject.org/).
