- ### Definition
  - DID Resolution is the process of translating a [[Decentralized Identifier]] (DID) into its associated [[DID Document]], which contains the cryptographic material, authentication methods, and [[Service Endpoint]]s needed to interact with the identified subject. The operation is formally defined by the [[W3C DID Core Specification]] and executed by a [[DID Resolver]] that invokes the read operation of the relevant [[DID Method]] against its underlying [[Verifiable Data Registry]]. Resolution returns three outputs — the DID Document, DID Resolution Metadata, and DID Document Metadata — forming the foundation for [[Verifiable Credential]] verification and [[Decentralized Authentication]] in the [[Self-Sovereign Identity]] paradigm.

- ### Overview
  - DID Resolution is a foundational protocol operation that underpins the entire decentralised identity stack. Just as [[DNS Resolution]] translates domain names into IP addresses for the traditional web, DID Resolution translates persistent, cryptographically verifiable identifiers into structured documents that describe an entity's public keys, capabilities, and services.
  - The need for resolution arises because DIDs are intentionally opaque strings — they carry no information by themselves. A DID such as `did:web:example.com` only becomes useful when resolved to the document at its canonical location. Critically, unlike DNS, the DID system has no central registry; each [[DID Method]] defines its own anchoring mechanism, whether that is a [[Blockchain]], a web server, a peer-to-peer network, or a static file.
  - Resolution matters for several reasons:
    - It enables any party to independently verify the current public keys of a DID subject without contacting a [[Centralized Identity Provider]].
    - It allows the retrieval of [[Service Endpoint]]s that specify how to interact with an entity's services (messaging, credential issuance, etc.).
    - It supports key rotation and revocation by always fetching the latest version of a DID Document from the authoritative source.
    - It is method-agnostic at the interface level: callers invoke a universal resolver API regardless of the underlying method.

- ### Key Components
  - #### DID Resolver
    - The [[DID Resolver]] is the software component responsible for executing DID Resolution. It accepts a DID and optional resolution options, dispatches to the appropriate method driver, and returns the standardised resolution result.
    - Universal resolvers (such as the DIF Universal Resolver) aggregate method-specific drivers behind a single HTTP API, enabling cross-method resolution without requiring callers to implement every driver.
  - #### DID Document
    - The [[DID Document]] is the primary output of resolution. It is a JSON-LD document containing:
      - `id` — the DID being described.
      - `verificationMethod` — an array of cryptographic key descriptions (public keys, [[JSON Web Key]] format, or multibase-encoded keys).
      - `authentication`, `assertionMethod`, `keyAgreement`, `capabilityInvocation`, `capabilityDelegation` — verification relationships linking keys to specific usage purposes.
      - `service` — an array of [[Service Endpoint]] descriptors for agent communication, credential status, linked resources, etc.
    - DID Documents are immutable in the sense that each resolution returns the document at the moment of retrieval; historical versions may be accessed via `versionId` or `versionTime` resolution options.
  - #### DID Resolution Metadata
    - Describes the resolution process itself: the content type of the returned document, any error codes (e.g. `notFound`, `invalidDid`, `representationNotSupported`), the resolver driver used, and cache-control hints.
  - #### DID Document Metadata
    - Describes properties of the DID Document as anchored in the registry: creation timestamp, update timestamp, version ID, `nextUpdate`, and `deactivated` flag indicating whether the DID has been deactivated.
  - #### DID Method
    - Each [[DID Method]] (e.g. did:web, did:key, did:ion, did:ethr, did:peer, did:jwk) defines the read operation that the resolver must execute. The method specification describes:
      - The format and structure of DIDs in that method namespace.
      - The [[Verifiable Data Registry]] where documents are anchored.
      - How to construct and verify the DID Document from registry data.
  - #### Resolution Options
    - Callers may pass options to control resolution behaviour: `accept` (requested media type), `versionId` (resolve a specific historical version), `versionTime` (resolve as-of a timestamp), and `noCache` (bypass cached results).

- ### Mechanisms
  - #### Resolution Algorithm
    - The W3C DID Core specification defines a normative resolution algorithm:
      1. Parse the DID string and extract the method name and method-specific identifier.
      2. Look up the registered driver for that method.
      3. Invoke the method's `read` operation with the DID and options.
      4. Validate the returned DID Document (well-formed JSON-LD, matching `id`, valid verification methods).
      5. Assemble and return the resolution result tuple: (DID Document, DID Resolution Metadata, DID Document Metadata).
  - #### DID URL Dereferencing
    - [[DID URL Dereferencing]] is a closely related but distinct operation: it resolves a DID URL (a DID with an appended path, query, or fragment such as `did:example:123#key-1`) to a specific resource — often a single verification method or a linked external resource. The DID Resolver first resolves the base DID, then applies the DID URL components to navigate the document.
  - #### Caching and Performance
    - Resolution may be expensive for methods anchored on [[Blockchain]] networks. Resolvers often implement caching strategies with TTL values derived from DID Document Metadata (`nextUpdate`) or resolver policy. Cache invalidation must balance freshness (key rotation visibility) against performance.
  - #### Error Handling
    - Standard error codes include: `invalidDid`, `notFound`, `representationNotSupported`, `methodNotSupported`, `internalError`. Well-behaved callers must handle these gracefully, particularly in credential verification pipelines.

- ### Applications / Use Cases
  - #### Verifiable Credential Verification
    - When a [[Verifiable Credential]] is presented, the verifier resolves the issuer's DID to retrieve the public key(s) listed under `assertionMethod`. The credential's proof (typically a [[Linked Data Proof]] or [[JSON Web Token]] signature) is then verified against that key. Without resolution, credential verification is impossible in the SSI model.
  - #### DIDComm Messaging
    - [[DIDComm]] agents resolve the recipient's DID to discover the `service` endpoint of type `DIDCommMessaging`, then send encrypted messages to that endpoint using keys from the resolved document.
  - #### Decentralized Authentication
    - Protocols such as [[SIOP v2]] (Self-Issued OpenID Provider) and [[DIF Presentation Exchange]] use DID Resolution to validate the subject's identity during authentication flows, replacing centralised OIDC identity providers.
  - #### Key Recovery and Rotation
    - When a subject rotates cryptographic keys, the DID Document is updated in the registry. Any subsequent resolution returns the new keys, enabling forward-secure authentication without reissuing credentials or changing the DID itself.
  - #### Agent and Service Discovery
    - IoT devices, AI agents, and enterprise services can publish their capabilities and interaction endpoints in DID Documents. Resolution enables peers to discover those endpoints dynamically, supporting [[Decentralized Collaboration]] patterns.
  - #### Supply Chain and IoT Identity
    - In [[Supply Chain]] and [[Internet of Things]] contexts, physical objects can be assigned DIDs. Resolution allows supply chain participants to verify the provenance and authenticity of objects without relying on a single manufacturer's centralised registry.
  - #### Cross-Chain Identity
    - Universal resolvers aggregate drivers for dozens of DID methods, enabling resolution of identities anchored on different [[Blockchain]] networks (Ethereum, Bitcoin via ION, Hyperledger Indy) through a single interface.

- ### Relationships
  - requires:: [[Decentralized Identifier]]
  - requires:: [[DID Method]]
  - requires:: [[Verifiable Data Registry]]
  - hasPart:: [[DID Document]]
  - hasPart:: [[DID Resolution Metadata]]
  - hasPart:: [[DID Document Metadata]]
  - enables:: [[Identity Verification System]]
  - enables:: [[Verifiable Credential]]
  - enables:: [[Decentralized Authentication]]
  - enables:: [[Self-Sovereign Identity]]
  - uses:: [[DID Resolver]]
  - uses:: [[Public Key Infrastructure]]
  - uses:: [[Cryptographic Key Management]]
  - implements:: [[W3C DID Core Specification]]
  - standardizedBy:: [[World Wide Web Consortium]]
  - contrastsWith:: [[DNS Resolution]]
  - contrastsWith:: [[Centralized Identity Provider]]
  - relatedTo:: [[Identity Management]]
  - relatedTo:: [[DID URL Dereferencing]]
  - relatedTo:: [[Service Endpoint]]
  - relatedTo:: [[DIDComm]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Blockchain]]

- ### Standards & Context
  - #### W3C DID Core 1.0
    - The primary normative specification is **W3C Decentralized Identifiers (DIDs) v1.0**, published as a W3C Recommendation in July 2022. It defines the DID syntax, the DID Document data model, the resolution algorithm, DID URL syntax, and the normative requirements for DID Methods.
  - #### DID Resolution Specification
    - The **DID Resolution** specification (a W3C Working Group Note, developed by the Credentials Community Group and later the DID Working Group) elaborates the resolution algorithm, input parameters, output structure, and error handling beyond what DID Core mandates. It is the definitive reference for resolver implementers.
  - #### DIF Universal Resolver
    - The [[Decentralized Identity Foundation]] (DIF) maintains the Universal Resolver — an open-source aggregator of method-specific drivers providing a REST API for resolving any registered DID method. It serves as a reference implementation and production resolver for the ecosystem.
  - #### DIF DID Registration
    - The companion DIF DID Registration specification defines the create, update, and deactivate operations that complement resolution (the read operation).
  - #### Registered DID Methods
    - The W3C DID Specification Registries tracks all published DID Methods. Well-adopted methods include:
      - `did:web` — anchored on HTTPS-accessible web resources.
      - `did:key` — a self-contained method deriving the document entirely from the key itself, requiring no external registry.
      - `did:ion` — anchored on Bitcoin via the Sidetree protocol, developed by Microsoft.
      - `did:ethr` — anchored on Ethereum smart contracts (uPort/Spruce).
      - `did:peer` — peer-to-peer method for pairwise/n-wise relationships.
      - `did:jwk` — encodes a JSON Web Key directly in the DID.
  - #### Related Specifications
    - [[Verifiable Credentials Data Model]] (W3C) — defines the credential format that relies on DID Resolution for issuer/subject verification.
    - [[JSON Web Token]] (RFC 7519) — used for JWT-encoded DID Documents and credential proofs.
    - [[Linked Data Proofs]] — used for LD-Proof credential signing verified via resolved keys.
    - [[OpenID Connect for Verifiable Presentations]] (OpenID Foundation) — uses DID Resolution in credential presentation flows.

- ### Semantic Classification
  - owl-class:: security:DIDResolution
  - owl-role:: Class
  - subClassOf:: [[Decentralized Identifier]]

- ### Provenance
  - sources:: W3C DID Core 1.0 Recommendation (2022); W3C DID Resolution Working Group Note; DIF Universal Resolver documentation; DIF DID Registration specification; W3C DID Specification Registries
  - updated:: 2026-06-13