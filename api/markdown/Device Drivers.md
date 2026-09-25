A device driver is a software component that mediates between an operating system and a specific hardware device, translating generic OS calls into the device's command and register protocol. Drivers expose a uniform interface so applications can use peripherals without knowing their internal details, and they handle interrupts, buffering, and power state. They are the foundation of the hardware abstraction layer that makes hardware portable to software.

### Content

- Drivers run in kernel or user space, manage interrupts and DMA, and expose standardised class interfaces (e.g. HID, USB, block). Their correctness and security are critical, since a faulty privileged driver can crash or compromise the entire system.

