public:: true

# DID Method
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5290719e8be7f4171f1c414cd057bbaa91524ab55d0641395b4af5b3f0d06aae",
  "@type": "Page",
  "vc:slug": "did-method",
  "title": "DID Method",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralized-identity",
      "vc:label": "Decentralized Identity"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:linked:w-3-c",
      "vc:label": "W3C"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DID Method"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:did-method",
  "@type": "Class",
  "label": "DID Method",
  "definition": "A DID Method is a specification that defines how a particular type of Decentralised Identifier (DID) is created, resolved, updated, and deactivated, encoding the syntax rules and CRUD semantics for identifiers anchored to a specific verifiable data registry, ledger, or peer-to-peer network. Each method is identified by a unique method name embedded in the DID string (e.g. did:web, did:key, did:ion), and must provide a compliant DID Resolver that retrieves the corresponding DID Document containing public keys and service endpoints. DID Methods are standardised through the W3C DID Core specification and registered in the DIF DID Method Registry, enabling interoperable self-sovereign identity across heterogeneous systems. The diversity of methods reflects trade-offs between decentralisation guarantees, key management complexity, ledger dependency, and resolver performance.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-identity",
      "label": "Decentralized Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralised Identifier"
      },
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:verifiable-data-registry",
        "label": "Verifiable Data Registry"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:decentralised-authentication",
        "label": "Decentralised Authentication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3c-did-core",
        "label": "W3C DID Core"
      },
      {
        "@id": "urn:ngm:class:did-resolution-protocol",
        "label": "DID Resolution Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-key-pair",
        "label": "Cryptographic Key Pair"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      },
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity-foundation",
        "label": "Decentralized Identity Foundation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      },
      {
        "@id": "urn:ngm:class:centralised-identity-provider",
        "label": "Centralised Identity Provider"
      },
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:did-resolver",
        "label": "DID Resolver"
      },
      {
        "@id": "urn:ngm:class:identity-wallet",
        "label": "Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:did-specification-method",
      "label": "DID Specification Method"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:did-method:3e80578b0322",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5290719e8be7f4171f1c414cd057bbaa91524ab55d0641395b4af5b3f0d06aae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralized Identity]]",
      "resolved": "urn:visionflow:linked:decentralized-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[W3C]]",
      "resolved": "urn:visionflow:linked:w-3-c",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A DID Method is a specification that defines how a particular type of [[Decentralised Identifier]] (DID) is created, resolved, updated, and deactivated on a specific verifiable data registry or network. Each method encodes CRUD semantics for identifiers bound to a particular anchoring system—whether a [[Distributed Ledger Technology]], a peer-to-peer network, or a simple web domain—and is identified by a unique method name embedded in the DID URI string. Methods must provide a compliant [[DID Resolver]] and describe how to retrieve a [[DID Document]] containing cryptographic public keys and service endpoints. The full set of registered methods is maintained by the [[Decentralized Identity Foundation]] and governed under the [[W3C DID Core]] specification (W3C Recommendation, 2022).

- ### Overview
  - DID Methods emerged as the practical implementation layer of [[Self-Sovereign Identity]] (SSI), giving concrete meaning to the abstract DID Core model by specifying how each type of identifier actually operates.
  - The three-segment DID URI structure is `did:<method-name>:<method-specific-id>`. The method name (e.g. `web`, `key`, `ion`, `ethr`, `peer`) determines which method specification governs resolution.
  - A method specification must formally describe four operations:
    - **Create** — how a new DID and initial [[DID Document]] are registered or generated
    - **Read/Resolve** — how a [[DID Resolver]] retrieves the DID Document for a given identifier
    - **Update** — how the DID Document can be modified, including key rotation
    - **Deactivate** — how the identifier is permanently revoked or tombstoned
  - The choice of method encodes architectural trade-offs across several axes: decentralisation degree, dependency on external infrastructure, resolver latency, cost, key management complexity, and [[Privacy]] guarantees.
  - As of the mid-2020s there are over 100 registered DID methods, reflecting the breadth of underlying substrate diversity.

- ### Key Components
  - **Method Name** — the short string in the DID URI that identifies the governing specification (e.g. `did:web:example.com` uses method `web`).
  - **Method-Specific ID** — the remainder of the DID after the method name; its syntax is defined by the method (hash, public key, domain, etc.).
  - **[[DID Document]]** — the JSON-LD or CBOR document returned by resolution, containing `verificationMethod` (public key material), `authentication` relationships, `service` endpoints, and controller assertions.
  - **[[DID Resolver]]** — the software component that, given a DID, fetches and validates the DID Document; may be a universal resolver or method-specific.
  - **[[Verifiable Data Registry]]** — the underlying system of record (blockchain, IPFS node, DNS, peer DID ledger) from which the DID Document is derived.
  - **Key Agreement Material** — [[Cryptographic Key Pair]] entries within the DID Document used for [[Encryption]] and key exchange (e.g. X25519, P-256 keys).
  - **Service Endpoints** — URIs within the DID Document pointing to associated services (credential issuance, messaging, DIDComm agents).
  - **Proof of Control** — the mechanism (typically a digital signature) by which a DID controller proves ownership, enabling [[Decentralised Authentication]].

- ### Major Method Families
  - **Ledger-anchored methods** — anchor DID state to a blockchain; examples: `did:ethr` (Ethereum), `did:ion` (Bitcoin/[[IPFS]] via Sidetree), `did:indy` ([[Hyperledger Indy]]).
    - Trade-off: strong decentralisation and tamper-evidence but ledger cost, latency, and environmental footprint.
  - **Web-based methods** — `did:web` resolves identifiers via HTTPS at a well-known path on a domain; operationally simple but domain owner-dependent (trusted party).
    - Trade-off: easy to deploy and revoke, but relies on [[DNS]] and [[TLS]] trust anchors.
  - **Peer methods** — `did:peer` uses locally generated key material exchanged out-of-band; no registry required.
    - Trade-off: zero infrastructure cost but only useful for direct pairwise relationships.
  - **Key-based methods** — `did:key` encodes a single [[Cryptographic Key Pair]] directly in the identifier; immutable by design (no update or deactivate).
    - Trade-off: extremely simple but no key rotation.
  - **Sidetree-based methods** — `did:ion`, `did:orb`, and others use the Sidetree protocol to batch DID operations into ledger transactions, improving throughput and reducing cost.
  - **Consortium/permissioned methods** — `did:ebsi` (EU Blockchain Services Infrastructure), `did:cheqd`, designed for regulated enterprise or governmental use.

- ### Applications and Use Cases
  - **[[Verifiable Credentials]] ecosystems** — DID Methods provide the identifier layer that issuers, holders, and verifiers reference; e.g. a university issues a credential signed with its `did:web` or `did:ion` DID.
  - **[[DIDComm]]** — the DIDComm messaging protocol uses DIDs and their service endpoints to route encrypted peer-to-peer messages between [[Identity Wallet]] agents.
  - **[[Zero-Knowledge Proof]] selective disclosure** — methods such as `did:indy` are paired with ZKP-capable [[Verifiable Credentials]] (AnonCreds) for privacy-preserving presentation.
  - **Enterprise [[Public Key Infrastructure]] replacement** — organisations replace costly X.509 hierarchies with DID-anchored key material, removing reliance on Certificate Authorities.
  - **[[Internet of Things]]** — devices are assigned lightweight DIDs (e.g. `did:key`) for machine-to-machine authentication without centralised directory services.
  - **Metaverse and spatial computing** — [[Digital Twin]] and avatar identity in [[Extended Reality]] environments can be anchored to DIDs, enabling portable [[Digital Identity]] across platforms.
  - **Government digital identity programmes** — the EU eIDAS 2.0 / [[European Digital Identity Wallet]] (EUDIW) framework specifies DID-compatible credentials and resolvers for citizen identity.
  - **Cross-border supply chain** — provenance records and operator credentials in [[Supply Chain]] systems use DIDs anchored to consortium ledgers for tamper-evident audit trails.

- ### Relationships
  - requires:: [[Decentralised Identifier]]
  - requires:: [[DID Document]]
  - requires:: [[Verifiable Data Registry]]
  - requires:: [[Public Key Infrastructure]]
  - enables:: [[Self-Sovereign Identity]]
  - enables:: [[Verifiable Credentials]]
  - enables:: [[Digital Identity]]
  - enables:: [[Decentralised Authentication]]
  - implements:: [[W3C DID Core]]
  - implements:: [[DID Resolution Protocol]]
  - uses:: [[Cryptographic Key Pair]]
  - uses:: [[Distributed Ledger Technology]]
  - uses:: [[Content Addressing]]
  - standardizedBy:: [[W3C]]
  - standardizedBy:: [[Decentralized Identity Foundation]]
  - contrastsWith:: [[OAuth]]
  - contrastsWith:: [[Centralised Identity Provider]]
  - contrastsWith:: [[X.509 Certificate]]
  - relatedTo:: [[Decentralized Identity]]
  - relatedTo:: [[DID Resolver]]
  - relatedTo:: [[Identity Wallet]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[IPFS]]

- ### Standards and Context
  - **W3C DID Core 1.0** (July 2022) — the primary normative specification defining the data model, URI syntax, CRUD operations contract, and conformance criteria for DID Methods.
  - **W3C DID Resolution** (Draft Community Group Report) — specifies the [[DID Resolver]] interface, resolution options, and metadata returned by resolution.
  - **DIF DID Method Registry** — the Decentralized Identity Foundation maintains a public registry of submitted DID Method specifications; submission requires a published spec and working implementation.
  - **W3C Verifiable Credentials Data Model** — tightly coupled; DIDs are the canonical identifier for issuers and subjects in [[Verifiable Credentials]].
  - **DIDComm Messaging v2** (DIF specification) — defines encrypted, transport-agnostic messaging using DID-anchored keys and service endpoints.
  - **EU eIDAS 2.0 / ARF** — the European Architecture Reference Framework for the [[European Digital Identity Wallet]] references DID-compatible identifiers for natural and legal persons.
  - **NIST SP 800-63** — US digital identity guidelines acknowledge decentralised identity models and federation approaches compatible with DID Methods.
  - **ISO/IEC 18013-5** (mDL) — mobile driving licence standard uses [[CBOR]]-encoded credentials with identity binding mechanisms compatible with DID-anchored public keys.
  - Governance bodies: [[W3C]] Decentralised Identifiers Working Group; DIF Identifiers & Discovery Working Group; [[OpenID Foundation]] (SIOP v2 / OID4VCI for DID-based authentication).

- ### Technical Considerations
  - **Key rotation** — methods that support update operations enable rotation of cryptographic material without changing the DID, a significant security advantage over [[X.509 Certificate]] pinning.
  - **Deactivation vs deletion** — most ledger-based methods can only mark a DID as deactivated, not delete it; privacy implications must be assessed per [[GDPR]] and similar regulations.
  - **[[Privacy]] by design** — pairwise DIDs (did:peer, rotated `did:key` instances) limit correlation across contexts; universal ledger anchoring creates linkability risks.
  - **Resolver trust** — the [[DID Resolver]] introduces a trust dependency; universal resolvers (e.g. dev.uniresolver.io) must be treated as potentially centralising components.
  - **Sidetree throughput** — the Sidetree protocol batches operations into anchor transactions, achieving thousands of DID operations per second on substrates that would otherwise be too slow.
  - **KERI alternative** — the Key Event Receipt Infrastructure ([[KERI]]) proposes a cryptographic event log approach to DID-like identifiers that avoids ledger dependency entirely; some see it as a rival paradigm.
  - **Interoperability** — the Universal Resolver project and Universal Registrar aim to provide method-agnostic tooling so any DID can be resolved regardless of substrate.

- ### Provenance
  - sources:: W3C DID Core 1.0 Recommendation (2022); DIF DID Method Registry; DIDComm v2 specification; EU eIDAS 2.0 Architecture Reference Framework
  - updated:: 2026-06-13
