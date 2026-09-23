
AMD SEV (Secure Encrypted Virtualisation) is a hardware security technology that encrypts the memory of individual virtual machines using per-VM keys managed by an on-chip security processor, isolating guest memory from the hypervisor and other VMs. Extensions add register-state encryption and integrity protection with attestation, enabling confidential virtual machines whose contents are protected even from a privileged host. It is a leading approach to confidential computing in cloud environments.

- ### Overview
  - AMD SEV protects guest virtual machines by transparently encrypting their memory with keys held inside a dedicated on-chip security processor and never exposed to the hypervisor. Later generations, SEV-ES and SEV-SNP, additionally encrypt the guest register state on context switches and add integrity protection against memory remapping and replay, closing classes of attack a malicious host might attempt. Remote attestation lets a relying party verify that a workload runs inside a genuine SEV-protected VM before provisioning secrets, making it a foundation for confidential cloud computing.
- ### Mechanisms
  - Per-VM memory encryption with keys held by an on-chip security processor.
  - SEV-ES encrypts guest register state across context switches.
  - SEV-SNP adds memory-integrity protection against remapping and replay.
  - Hardware attestation proves a workload runs in a genuine SEV VM.
  - Protects guest memory from the hypervisor and co-located tenants.
- ### Applications
  - Confidential virtual machines in public clouds.
  - Protecting sensitive workloads from privileged hosts.
  - Multi-tenant isolation and lift-and-shift confidentiality.
  - Secret provisioning gated by remote attestation.
  - Regulated workloads requiring data-in-use protection.
- ### Provenance

