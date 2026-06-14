public:: true

# DID Resolver
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:did-resolver",
  "@type": "Page",
  "vc:slug": "did-resolver",
  "title": "DID Resolver",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:did-resolver",
  "@type": "Class",
  "label": "DID Resolver",
  "definition": "A DID resolver is a component that takes a Decentralized Identifier (DID) and returns its associated DID document containing public keys, verification methods, and service endpoints. It implements the W3C DID Resolution specification, dispatching to method-specific drivers (e.g. did:web, did:ion, did:key) to locate and verify the document. Resolvers are the lookup layer that makes DIDs actionable for authentication and credential exchange.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:did-method-driver", "label": "DID Method Driver"},
      {"@id": "urn:ngm:class:did-document", "label": "DID Document"},
      {"@id": "urn:ngm:class:resolution-metadata", "label": "Resolution Metadata"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:verifiable-data-registry", "label": "Verifiable Data Registry"},
      {"@id": "urn:ngm:class:did-method", "label": "DID Method"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralized-authentication", "label": "Decentralized Authentication"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:dns", "label": "DNS"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:w3c-did-core-specification", "label": "W3C DID Core Specification"},
      {"@id": "urn:ngm:class:did-resolution-protocol", "label": "DID Resolution Protocol"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-key-pair", "label": "Cryptographic Key Pair"},
      {"@id": "urn:ngm:class:json-ld", "label": "JSON-LD"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:w3c", "label": "W3C"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:dns-resolver", "label": "DNS Resolver"},
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-smart-contract", "label": "Blockchain Smart Contract"},
      {"@id": "urn:ngm:class:web-of-trust", "label": "Web of Trust"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-identity-did", "label": "Decentralized Identity (DID)"},
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"},
      {"@id": "urn:ngm:class:universal-resolver", "label": "Universal Resolver"},
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:did-resolution-engine", "label": "DID Resolution Engine"}
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
  - A DID resolver maps a DID to its DID document via method-specific drivers, following the W3C DID Resolution spec. It is a core component of [[Decentralized Identity (DID)]] and the mechanism that operationalises [[Decentralized Identifiers]].
- ### Content
  - Resolution may hit a blockchain, web server, or peer protocol depending on the DID method, returning verification material and service endpoints. Universal resolvers aggregate many method drivers behind one interface; key concerns are caching, trust in the underlying verifiable data registry, and resistance to spoofed documents.
