- ### Definition
  - Hardware-isolated execution environments that protect the confidentiality and integrity of code and data running inside them, even from a compromised operating system or host.

- ### Semantic Classification
  - owl-class:: cryptographic:TrustedExecutionEnvironments
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Confidential Computing]]
  - bridges-to:: [[Secure Enclave]], [[ARM TrustZone]]
  - requires:: [[Confidential Computing]]
  - enables:: [[Verifiable Computation]]

- ### Content
  - Trusted execution environments (TEEs) use processor features to create isolated regions, often called enclaves, where memory is protected from the rest of the system. Code running inside a TEE can produce remote attestations proving its identity and integrity to external parties.
  - TEEs underpin confidential computing, secure key handling and privacy-preserving processing of sensitive data. Their security depends on the hardware vendor's trust model, and they have been subject to side channel research, so they are usually combined with other protections.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z