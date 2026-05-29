- ### Definition
  - The Decentralized Identity Foundation (DIF) is an open industry consortium that develops interoperable specifications, protocols, and reference implementations for decentralised digital identity systems. It produces work items including the DIF Presentation Exchange specification for credential proof requests, the Decentralized Web Node (DWN) protocol for identity-linked personal data storage, and the Sidetree protocol family for scalable DID method implementations. DIF operates as a complement to W3C standards, producing the lower-level coordination layer that W3C DID and verifiable credential specifications rely on.

- ### Semantic Classification
  - owl-class:: decentralized-identity-foundation:Decentralized Identity Foundation
  - owl-role:: Concept

- ### Relationships
  - enables [[Verifiable Credentials]]
  - enables [[DID Document]]
  - supports [[Self Sovereign Identity]]
  - supports [[Identity]]
  - relatedTo [[Blockchain]]

- ### Content
  - The Decentralized Identity Foundation was established to address the coordination gap between competing decentralised identity implementations and the need for interoperable protocols that work across different DID methods and verifiable credential formats. Its working groups operate in areas including Identifiers and Discovery, Claims and Credentials, DID Communication (DIDComm), Secure Data Storage, and Sidetree.
  - DIDComm—a DIF-developed messaging protocol—defines how identity agents exchange messages over any transport in a mutually authenticated, encrypted channel, enabling secure peer-to-peer communication between identity holders without requiring centralised messaging infrastructure. DIF's Presentation Exchange specification provides a structured language for verifiers to declare what credential attributes they require and for holders to select and present matching credentials.
  - DIF specifications are adopted by major identity wallet implementations and are integrated into the European Union's EUDI wallet architecture through the ARF (Architecture Reference Framework). The organisation collaborates closely with W3C, IETF, and OpenID Foundation to ensure that decentralised identity specifications are technically coherent across the global standards landscape. Its reference implementations in TypeScript and Rust lower the barrier for developers building identity-enabled applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z