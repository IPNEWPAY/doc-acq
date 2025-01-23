# Buildroot

This guide provides instructions for integrating the Newpay Docs Agent into a Buildroot-based system, enabling Newpay Docs’s remote management capabilities.

## Prerequisites

- **Buildroot Environment**: Ensure you have Buildroot installed on your system.
- **Newpay Docs Access**: A valid tenant ID for your Newpay Docs Cloud or self-hosted instance.
- **QEMU**: Installed and configured for emulated environments (optional).

## Step 1: Cloning Repositories

Clone the Buildroot repository:

```bash
git clone git://git.buildroot.net/buildroot
```

Clone the Newpay Docs external Buildroot tree:

```bash
git clone https://github.com/Newpay Docs-io/buildroot.git Newpay Docs
```

## Step 2: Configuring Newpay Docs Integration

### Setting Default Configuration

Navigate to the Buildroot directory and set the default configuration for Newpay Docs:

```bash
cd buildroot
make BR2_EXTERNAL=../Newpay Docs qemu_x86_64_defconfig
```

### Modifying Configuration via Menuconfig

Start the Buildroot `menuconfig` to customize options. Ensure the **Newpay Docs** option is selected under **External options**:

```bash
make BR2_EXTERNAL=../Newpay Docs menuconfig
```

## Step 3: Adding Custom Newpay Docs Configuration

To customize the Newpay Docs Agent’s configuration, create a configuration overlay:

```bash
nano ../Newpay Docs/rootfs_overlay/etc/default/Newpay Docs-agent
```

Put the following content:
```bash
SERVER_ADDRESS="https://cloud.Newpay Docs.io"
TENANT_ID="<your-tenant-id-here>"
PRIVATE_KEY="/etc/Newpay Docs-agent.key"
```
Replace the placeholder values. For more information see [Newpay Docs Environment Variables for BuildRoot.](#Newpay Docs-environment-variables-for-buildroot).

## Step 4: Building the System

Build the root filesystem and kernel:

```bash
make BR2_EXTERNAL=../Newpay Docs rootfs-ext2
```

This command generates the system images required for your device.

## Step 5: Running With QEMU (Optional)

To test your Buildroot system with Newpay Docs in an emulated environment, run:

```bash
qemu-system-x86_64 \
  -kernel output/images/bzImage \
  -drive file=output/images/rootfs.ext2,format=raw \
  -append "root=/dev/sda console=ttyS0" \
  -m 512M \
  -nographic \
  -netdev user,id=n0,hostfwd=tcp::2222-:22 \
  -device virtio-net-pci,netdev=n0
```

![](/img/pending-device-notification.png)

## Troubleshooting

- **Configuration File Not Applied**: Check the log file `/var/log/Newpay Docs-agent.log` for error messages. If the agent fails to load configuration or reports `failed to parse the configuration`, ensure the `Newpay Docs-agent` configuration file is correctly placed in `/etc/default/`. Double-check variable names and values, especially for `SERVER_ADDRESS`, `PRIVATE_KEY`, and `TENANT_ID`.

- **Network Connectivity Issues**: If the agent cannot connect to the server, confirm that the network interface is properly configured and active. Verify connectivity by testing with a tool like `ping` or `curl` from within the target system.

- **Build Errors**: If Buildroot fails during compilation, ensure all dependencies are satisfied and that external trees (e.g., Newpay Docs) are correctly referenced with `BR2_EXTERNAL`. Verify any added `Config.in` modifications do not conflict with existing configurations.

## Newpay Docs Environment Variables for BuildRoot

- **SERVER_ADDRESS**: Your Newpay Docs server address. Keep `https://cloud.Newpay Docs.io` if you're using Newpay Docs Cloud.
- **PRIVATE_KEY**: Path to your private key file.
- **TENANT_ID**: Links the device to a specific tenant or namespace. For help retrieving this, see [Retrieving Your Tenant ID](/user-guides/namespaces/retrieving-your-tenant-id).

## Conclusion

By integrating Newpay Docs into your Buildroot system, you enable seamless remote management of your device. For more information on Buildroot, refer to the [Buildroot Manual](https://buildroot.org/docs.html).