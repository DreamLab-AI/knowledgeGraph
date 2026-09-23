---
okf_version: "0.2"
type: Class
title: Amd Sev
resource: urn:ngm:class:amd-sev
domain: security
description: AMD SEV (Secure Encrypted Virtualisation) is a hardware security technology that encrypts the memory of individual virtual machines using per-VM keys managed by an on-chip security processor, isolating guest memory from the hypervisor and other VMs. Extensions add register-state encryption and integrity protection with attestation, enabling confidential virtual machines whose contents are protecte
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:confidential-computing
requires:
  - urn:ngm:class:hardware-security
enables:
  - urn:ngm:class:cloud-security
dependsOn:
  - urn:ngm:class:memory-encryption
  - urn:ngm:class:hardware-security
implements:
  - urn:ngm:class:tee
contrastsWith:
  - urn:ngm:class:intel-sgx
  - urn:ngm:class:tee
uses:
  - urn:ngm:class:memory-encryption
  - urn:ngm:class:attestation
  - urn:ngm:class:virtualisation
supports:
  - urn:ngm:class:hypervisor
partOf:
  - urn:ngm:class:confidential-computing
relatedTo:
  - urn:ngm:class:secure-enclave
  - urn:ngm:class:attestation
  - urn:ngm:class:cloud-security
---

# Amd Sev

AMD SEV (Secure Encrypted Virtualisation) is a hardware security technology that encrypts the memory of individual virtual machines using per-VM keys managed by an on-chip security processor, isolating guest memory from the hypervisor and other VMs. Extensions add register-state encryption and integrity protection with attestation, enabling confidential virtual machines whose contents are protected even from a privileged host. It is a leading approach to confidential computing in cloud environments.
