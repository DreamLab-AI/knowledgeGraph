public:: true

# did document
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dde74c3fa51c364b693fede4663924b04412f7465ca0a8c5a7981e2be40c81c8",
  "@type": "Page",
  "vc:slug": "did-document",
  "title": "did document",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:did-document",
  "@type": "Class",
  "label": "DID Document",
  "definition": "A DID Document is a JSON-LD resource resolved from a Decentralised Identifier (DID) that expresses the DID subject's cryptographic public keys, authentication methods, assertion methods, key agreement protocols, capability delegation mechanisms, and service endpoints. Defined by the W3C DID Core specification, a DID Document is the machine-readable artefact that enables any verifier to discover how to authenticate with or communicate securely to a DID subject without relying on a centralised identity authority. DID Documents are anchored to a Verifiable Data Registry — such as a distributed ledger, blockchain, or peer-to-peer network — via a DID method-specific read operation, making them a foundational component of self-sovereign identity and verifiable credential ecosystems.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-identifier",
      "label": "Decentralised Identifier"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:verification-method",
        "label": "Verification Method"
      },
      {
        "@id": "urn:ngm:class:service-endpoint",
        "label": "Service Endpoint"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:verifiable-data-registry",
        "label": "Verifiable Data Registry"
      },
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      },
      {
        "@id": "urn:ngm:class:did-resolver",
        "label": "DID Resolver"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:decentralised-authentication",
        "label": "Decentralised Authentication"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3-c-did-core",
        "label": "W3C DID Core"
      },
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      },
      {
        "@id": "urn:ngm:class:centralized-identity-provider",
        "label": "Centralised Identity Provider"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:did-resolution",
        "label": "DID Resolution"
      },
      {
        "@id": "urn:ngm:class:did-url",
        "label": "DID URL"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:agent-identity",
        "label": "Agent Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:did-descriptor-object",
      "label": "DID Descriptor Object"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A **DID Document** is the machine-readable artefact that a [[Decentralised Identifier]] (DID) resolves to, containing cryptographic public keys, authentication methods, and service endpoints needed to interact securely with the DID subject. Governed by the [[W3C DID Core]] specification (v1.0 a W3C Recommendation since July 2022), DID Documents are serialised as [[JSON-LD]] and published to a [[Verifiable Data Registry]] — which may be a [[Blockchain]], a [[Distributed Ledger]], or a peer-to-peer network — without requiring a centralised authority. They are the cornerstone artefact of [[Self-Sovereign Identity]] and underpin the full [[Verifiable Credentials]] trust chain from issuer to holder to verifier.

- ### Overview
  - DID Documents exist to answer a fundamental question in decentralised systems: "given a persistent identifier, how do I verify that the entity controlling it has authorised this action?" Classical approaches required a trusted third party (a certificate authority or identity provider); DID Documents offload that trust to the cryptographic material they carry and the [[Verifiable Data Registry]] they are anchored to.
  - When a relying party receives a [[DID URL]] — for example in a [[Verifiable Presentation]] — it triggers [[DID Resolution]]: a [[DID Resolver]] dereferences the identifier according to the [[DID Method]] rules, retrieves or constructs the DID Document, and returns it to the caller. The caller then uses the document to verify signatures, negotiate keys, or discover services — all without phoning home to a central server.
  - The documents themselves are living artefacts: controllers may rotate keys, add new service endpoints, or revoke verification methods by executing DID Method–specific update operations against the Verifiable Data Registry. This mutability, combined with cryptographic binding, gives DID Documents a security posture that is resistant to registrar compromise or certificate-authority failures.

- ### Key Components
  - **`id`** — the DID itself (e.g. `did:web:example.com`) that uniquely identifies this document; must match the DID used to resolve it.
  - **`controller`** — zero or more DIDs that are authorised to perform update operations on this document; enables delegated control.
  - **Verification Methods** — entries in `verificationMethod` array, each specifying a [[Public-Key Cryptography]] material (e.g. `Ed25519VerificationKey2020`, `JsonWebKey2020`, `Multikey`) and the type of proof it supports.
    - Each method has a fragment-form [[DID URL]] id (e.g. `did:example:123#key-1`), enabling direct referencing.
    - Common key types: [[Ed25519]] (signatures), [[X25519]] (key agreement), [[ECDSA]] over P-256 (broad compatibility), [[BLS12-381]] (selective disclosure in BBS+ signatures).
  - **Verification Relationships** — properties that reference verification methods by id or embed them inline:
    - `authentication` — keys proving control of the DID; used during [[Decentralised Authentication]].
    - `assertionMethod` — keys used to sign [[Verifiable Credentials]] or other claims.
    - `keyAgreement` — keys for [[Key Agreement Protocol]] (e.g. ECDH-ES for encrypted messaging).
    - `capabilityInvocation` — keys authorised to invoke capabilities on services (relevant to [[Object Capabilities]]).
    - `capabilityDelegation` — keys that may delegate capabilities to third parties.
  - **Service Endpoints** — objects in the `service` array advertising URIs for interacting with the DID subject:
    - Credential issuance endpoints (linking to [[Credential Status List]] or OpenID for Verifiable Credentials servers).
    - [[DIDComm]] messaging endpoints for agent-to-agent communication.
    - Linked-domain endpoints (for `did:web` binding to a web origin).
    - Hub or data-vault endpoints (for [[Secure Data Store]] / [[Identity Hub]] access).
  - **`@context`** — JSON-LD context array that maps terms to IRIs, allowing the document to be interpreted as [[Linked Data]] and embedded in semantic graphs.
  - **`alsoKnownAs`** — optional array of alternative identifiers (URIs, DIDs) the subject is also known by, enabling cross-registry aliasing.

- ### DID Methods and Registries
  - DID Documents do not exist in isolation; their lifecycle is entirely governed by the [[DID Method]] specification:
    - **`did:web`** — Document served as `/.well-known/did.json` on an HTTPS origin; registry is the web PKI / DNS. Simplest to deploy; security anchored to TLS.
    - **`did:key`** — Self-certifying; no registry required. DID Document is derived deterministically from the embedded public key. No update or deactivation possible (key rotation means new DID).
    - **`did:ion`** — Sidetree-based method anchored to the [[Bitcoin]] blockchain. Supports key rotation and deactivation; long-term resolution requires access to a Sidetree node.
    - **`did:ethr`** — Anchored to [[Ethereum]] smart contracts (ERC-1056); gas fees apply for updates.
    - **`did:peer`** — Pairwise DIDs generated for a specific relationship; documents exchanged directly, no public registry.
    - **`did:jwk`** — DID Document derived from a [[JSON Web Key]]; analogous to `did:key` but using the JWK format.
    - **`did:tdw`** (Trust DID Web) — Enhanced `did:web` variant with append-only log for auditability.
  - The [[W3C DID Method Registry]] catalogues over 100 registered methods, each making different trade-offs between decentralisation, cost, availability, and trust model.

- ### Applications and Use Cases
  - **[[Verifiable Credentials]] ecosystem** — Issuers publish DID Documents so holders and verifiers can retrieve the issuer's assertion method keys and validate credential signatures; holders publish DID Documents (optionally) so verifiers can confirm presentations. The entire [[W3C Verifiable Credentials Data Model]] v2.0 trust triangle depends on DID Document resolution.
  - **[[DIDComm]] messaging** — Agents discover each other's encrypted messaging endpoints from DID Documents, enabling secure, asynchronous, transport-agnostic communication without any central broker.
  - **[[OpenID for Verifiable Credentials]] (OID4VC)** — DID Documents underpin issuer and verifier discovery in OID4VC and OpenID for Verifiable Presentations (OID4VP) flows, bridging W3C standards with OAuth/OIDC infrastructure.
  - **[[Decentralised Access Control]]** — `capabilityInvocation` and `capabilityDelegation` relationships enable [[Object Capabilities]]-based authorisation, allowing fine-grained, delegatable permissions without central policy stores.
  - **[[AI Agent Identity]]** — Emerging use where autonomous [[AI Agent]] systems hold DIDs to authenticate with services, sign outputs, and receive credentials, enabling [[Agent Identity]] management in multi-agent architectures.
  - **[[Supply Chain]]** — Manufacturers and logistics providers use DIDs and DID Documents to assign persistent identities to products, shipments, and organisations, anchoring [[Provenance]] trails and enabling verifiable attestations at each hand-off.
  - **[[Internet of Things]]** — IoT devices issued DIDs with compact DID Documents (`did:key`, `did:peer`) to authenticate with gateways and cloud services without PKI certificate management overhead.
  - **Healthcare** — Patient-controlled health data sharing where patients hold DIDs and authorise providers to access data vaults via service endpoints, without a central health identity broker.

- ### Security Considerations
  - **Key Compromise** — If a private key corresponding to an `authentication` verification method is compromised, the controller must rotate the key via a DID Method update operation before an attacker can impersonate them. Methods anchored to immutable registries (e.g. `did:key`) have no rotation; users must abandon the DID.
  - **DID Document Freshness** — Resolvers must consider document cache TTL and check for deactivation. A revoked or deactivated DID Document signals that the subject is no longer active.
  - **Metadata vs Document** — The W3C spec separates the DID Document from DID Document Metadata (timestamps, equivalentId, canonicalId); security-conscious resolvers must process both.
  - **Registry Liveness** — Methods anchored to specific blockchains introduce availability risk; if the registry becomes inaccessible, document resolution fails.
  - **[[Zero-Knowledge Proof]] extensions** — BBS+ signatures (using [[BLS12-381]] keys) in DID Documents enable selective disclosure: a holder can prove subset-claims from a credential without revealing the full signed payload, bridging DID Documents into the privacy-preserving layer.

- ### Relationships
  - partOf:: [[Decentralised Identifier]]
  - partOf:: [[Self-Sovereign Identity]]
  - hasPart:: [[Verification Method]]
  - hasPart:: [[Service Endpoint]]
  - hasPart:: [[Verification Relationship]]
  - requires:: [[Verifiable Data Registry]]
  - requires:: [[DID Method]]
  - requires:: [[DID Resolver]]
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[JSON-LD]]
  - uses:: [[Linked Data]]
  - uses:: [[Digital Signature]]
  - enables:: [[Verifiable Credentials]]
  - enables:: [[Decentralised Authentication]]
  - enables:: [[Key Agreement Protocol]]
  - standardizedBy:: [[W3C DID Core]]
  - standardizedBy:: [[W3C]]
  - contrastsWith:: [[X.509 Certificate]]
  - contrastsWith:: [[Centralised Identity Provider]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Identity Verification]]
  - relatedTo:: [[DID Resolution]]
  - relatedTo:: [[DID URL]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Agent Identity]]

- ### Standards and Context
  - **W3C DID Core v1.0** (July 2022 Recommendation) — Normative specification for DID Document structure, syntax (JSON, JSON-LD, CBOR), verification methods, verification relationships, and service endpoints. Maintained by the W3C Decentralised Identifier Working Group.
  - **W3C Verifiable Credentials Data Model v2.0** — Sibling specification that references DID Documents extensively; credential `issuer` and `credentialSubject` values are typically DIDs, resolved to DID Documents during verification.
  - **DIF DID Resolution Spec** — Decentralised Identity Foundation specification for the DID Resolution algorithm, metadata conventions, and resolver API; complements the W3C DID Core spec.
  - **DIF DIDComm Messaging v2** — Defines how DID Documents' `service` endpoints advertise DIDComm agent endpoints for encrypted messaging.
  - **IETF RFC 8037** (Ed25519/X25519 JSON Web Keys), **RFC 7517** (JSON Web Key) — Underpin key representation formats used in DID Documents.
  - **W3C DID Method Registry** — Community-maintained catalogue at `w3c.github.io/did-spec-registries`; lists over 100 registered DID methods, each with a conformant DID Document lifecycle.
  - **OpenID Foundation OID4VC / OID4VP** — Uses DID Documents for issuer and verifier metadata discovery within OAuth/OIDC-based credential flows.
  - **ETSI / eIDAS 2.0** — European digital-identity framework mandates support for DID Documents and Verifiable Credentials in the EU Digital Identity Wallet (EUDIW) architecture.

- ### Provenance
  - sources:: W3C DID Core 1.0 Recommendation (July 2022); DIF DID Resolution Spec; W3C VC Data Model v2.0; DIF DIDComm Messaging v2
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
