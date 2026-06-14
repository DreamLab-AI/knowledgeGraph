public:: true

# W3C DID Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:w3-c-did-specification",
  "@type": "Page",
  "vc:slug": "w3-c-did-specification",
  "title": "W3C DID Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:w3-c-did-specification",
  "@type": "Class",
  "label": "W3C DID Specification",
  "definition": "The W3C Decentralized Identifiers (DIDs) specification is a World Wide Web Consortium recommendation that defines a new type of globally unique, persistent, cryptographically verifiable identifier that does not require a centralised registration authority. A DID resolves to a DID Document containing cryptographic material, service endpoints, and verification methods, enabling the subject to authenticate and authorise interactions without reliance on any single identity provider. The specification defines a generic DID syntax and data model that is method-agnostic, with specific DID methods implementing the create/read/update/deactivate operations on different verifiable data registries including blockchains, distributed ledgers, and peer-to-peer networks. It became a W3C Recommendation in July 2022.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:w3-c-did", "label": "W3C DID"},
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:w3-c", "label": "W3C"},
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"},
      {"@id": "urn:ngm:class:did-document", "label": "DID Document"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:digital-identity-standards", "label": "Digital Identity Standards"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:decentralized-identity-did", "label": "Decentralized Identity (DID)"},
      {"@id": "urn:ngm:class:didcomm", "label": "DIDComm"},
      {"@id": "urn:ngm:class:zero-trust-access-control", "label": "Zero-Trust Access Control"},
      {"@id": "urn:ngm:class:eudi-wallet", "label": "EUDI Wallet"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:w3-c", "label": "W3C"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"},
      {"@id": "urn:ngm:class:json-ld", "label": "JSON-LD"},
      {"@id": "urn:ngm:class:uri-scheme", "label": "URI Scheme"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:did-method", "label": "DID Method"},
      {"@id": "urn:ngm:class:verifiable-data-registry", "label": "Verifiable Data Registry"},
      {"@id": "urn:ngm:class:did-resolver", "label": "DID Resolver"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:decentralised-identifier-architecture", "label": "Decentralised Identifier Architecture"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:oauth-2", "label": "OAuth 2"},
      {"@id": "urn:ngm:class:x-509-certificate", "label": "X.509 Certificate"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:eidas-2", "label": "eIDAS 2"},
      {"@id": "urn:ngm:class:openid-connect", "label": "OpenID Connect"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:did-document", "label": "DID Document"},
      {"@id": "urn:ngm:class:verification-method", "label": "Verification Method"},
      {"@id": "urn:ngm:class:service-endpoint", "label": "Service Endpoint"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:did-core", "label": "DID Core"},
    {"@id": "urn:ngm:class:w3c-decentralized-identifiers", "label": "W3C Decentralized Identifiers"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - The [[W3C DID Specification]] is a [[W3C]] Recommendation that defines a globally unique, cryptographically verifiable identifier type that resolves to a [[DID Document]] containing authentication keys and service endpoints, enabling [[Decentralized Identity (DID)]] without dependence on centralised registrars—foundational infrastructure for [[Verifiable Credentials]] and self-sovereign identity systems.

- ### Relationships
  - The W3C DID Specification is governed by [[W3C]] and sits within a broader family of decentralised identity standards alongside the [[Verifiable Credentials|W3C Verifiable Credentials]] data model that DIDs authenticate. [[DID Document|DID Documents]] are the resolution output that encodes the DID subject's cryptographic material. [[DIDComm]] builds on DIDs to provide a secure, private messaging protocol for identity holders. The specification enables [[Decentralized Identity (DID)]] architectures and [[Decentralized Identifiers|decentralised identifier]] ecosystems that underpin self-sovereign identity wallets, credential issuance systems, and zero-trust access control. It uses [[Digital Identity Standards]] vocabulary and is part of the broader [[Identity Standards]] landscape.

- ### Content
  - The intellectual origins of DIDs lie in the self-sovereign identity (SSI) movement that emerged around 2016, synthesising ideas from Bitcoin's pseudonymous address architecture, Pretty Good Privacy's web of trust, and attribute-based credential systems. Christopher Allen's 2016 essay "The Path to Self-Sovereign Identity" articulated the principles that later shaped the specification. Work began in the W3C Credentials Community Group before formal standardisation in a dedicated W3C Working Group. The first working draft appeared in 2019, and the specification became a W3C Recommendation in July 2022 after a contentious process that included formal objections from Google about the diversity and complexity of DID methods.

  - The DID specification defines a URI scheme (`did:<method>:<method-specific-id>`) that is globally unique and persistent. Resolution—translating a DID to its DID Document—is method-specific: `did:web` resolves via HTTPS to a JSON-LD document at a well-known URL; `did:key` encodes the public key directly in the identifier; `did:ion` resolves through the ION sidetree protocol anchored to the Bitcoin blockchain. DID Documents contain verification methods (public keys), authentication relationships specifying which keys are valid for which operations, and optional service endpoints for credential issuance or DIDComm messaging. The subject controls the DID Document by holding the corresponding private keys and can rotate keys or add service endpoints without dependence on any external party.

  - The significance of the DID specification lies in decoupling identity from institutional custody. Traditional identity systems—email addresses, phone numbers, OAuth identities—are issued and controlled by corporations or governments; their revocation or platform failure terminates the identity relationship. DIDs are issued by their subjects, portable across services, and revocable only by the subject. This property is foundational to self-sovereign identity wallets such as those mandated under the EU Digital Identity (EUDI) Wallet regulation, where citizens hold verified attributes without reliance on a government identity provider for every use. Enterprise use cases include supply chain credential verification, academic transcript portability, and zero-knowledge age verification.

  - From 2024 to 2025, W3C DID adoption accelerated through regulatory mandate rather than organic market adoption. The EU eIDAS 2.0 regulation required member states to offer EUDI Wallets to citizens by end of 2026, with W3C DIDs and Verifiable Credentials as the primary technical standard. The OpenID Foundation's OID4VC (OpenID for Verifiable Credentials) protocol, combining OIDC flows with W3C Verifiable Credentials, emerged as the interoperability layer most favoured by governments implementing EUDI Wallets. DIF (Decentralized Identity Foundation) published the Universal Resolver, supporting resolution of dozens of DID methods, and the W3C DID Working Group began revision work addressing the concerns raised during the original standardisation, particularly around discoverability and method ecosystem fragmentation.

