- ### Definition
  - The Trust over IP (ToIP) Foundation is a Linux Foundation project that defines a dual-stack architecture combining cryptographic trust at the technical layer with human and legal trust governance frameworks for decentralised identity. The lower technical stack encompasses decentralised identifiers, verifiable credentials, and cryptographic key management, whilst the upper governance stack provides legal frameworks, policy schemas, and trust registries enabling parties to establish authoritative trust relationships without a central intermediary. ToIP aims to provide the governance meta-model needed to make self-sovereign identity deployments interoperable at scale.

- ### Semantic Classification
  - owl-class:: trust-over-ip-foundation:Trust Over IP Foundation
  - owl-role:: Concept

- ### Relationships
  - supports [[Self Sovereign Identity]]
  - supports [[Verifiable Credentials]]
  - relatedTo [[Decentralised Identity]]
  - relatedTo [[DID Document]]
  - enables [[Decentralized Identity Foundation]]

- ### Content
  The Trust over IP Foundation was established within the Linux Foundation to address a coordination problem: cryptographic protocols for decentralised identity had advanced considerably, but organisations lacked a consistent governance framework to determine which credential issuers and verifiers to trust. The ToIP dual-stack architecture separates the concern of technical trust (layer 1: public utilities / DID methods; layer 2: peer-to-peer protocols; layer 3: credential exchange) from the concern of governance trust (layer 4: application ecosystems with defined trust registries, legal agreements, and assurance levels).

  The governance stack component is distinctive in that it specifies meta-standards—templates for governance frameworks, trust registry schemas, and liability allocation—rather than mandating specific legal texts, allowing diverse application ecosystems (healthcare credential wallets, supply chain provenance, professional qualification records) to instantiate governance that fits their context whilst remaining structurally compatible.

  ToIP interacts closely with W3C standards for Decentralised Identifiers and Verifiable Credentials, and with the work of the Decentralized Identity Foundation on DIF Presentation Exchange and related credential protocols. Its outputs are used by organisations building interoperable credential ecosystems across sectors including healthcare, finance, and cross-border identity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z