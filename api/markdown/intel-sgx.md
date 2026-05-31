- ### Definition
  - Intel SGX is a set of processor instructions that create isolated memory regions called enclaves, protecting code and data from other software on the same system.

- ### Semantic Classification
  - owl-class:: distributed-systems:IntelSGX
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Trusted Execution Environment]]
  - bridges-to:: [[Encryption]], [[Hardware]]
  - requires:: [[Intel]]
  - enables:: [[Information Security]]

- ### Content
  - Intel SGX, short for Software Guard Extensions, lets applications place sensitive code and data inside enclaves whose memory is encrypted and isolated from the operating system and other processes. Access is mediated by the processor.
  - Remote attestation allows a third party to verify that an enclave is running expected code on genuine hardware. The technology supports confidential computing scenarios where data must remain protected during processing.

- ### Provenance
  - sources:: [[https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html]], [[https://en.wikipedia.org/wiki/Software_Guard_Extensions]]
  - migration-date:: 2026-05-29T00:00:00Z