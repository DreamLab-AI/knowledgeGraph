public:: true

# Decentralized Identity (DID)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:64812304a0cb52ad329a73633d0b791a1254bf509de49b6432e4dfba4f29f3a2",
  "@type": "Page",
  "vc:slug": "decentralized-identity-did",
  "title": "Decentralized Identity (DID)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-technology",
      "vc:label": "Blockchain Technology"
    },
    {
      "@id": "urn:visionflow:linked:cross-domain-identity",
      "vc:label": "Cross-Domain Identity"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-authentication",
      "vc:label": "Decentralized Authentication"
    },
    {
      "@id": "urn:visionflow:linked:did-document",
      "vc:label": "DID Document"
    },
    {
      "@id": "urn:visionflow:linked:did-method",
      "vc:label": "DID Method"
    },
    {
      "@id": "urn:visionflow:linked:did-resolver",
      "vc:label": "DID Resolver"
    },
    {
      "@id": "urn:visionflow:linked:did-uri",
      "vc:label": "DID URI"
    },
    {
      "@id": "urn:visionflow:linked:json-ld",
      "vc:label": "JSON-LD"
    },
    {
      "@id": "urn:visionflow:linked:privacy-preserving-identity",
      "vc:label": "Privacy-Preserving Identity"
    },
    {
      "@id": "urn:visionflow:linked:self-sovereign-identity-ssi",
      "vc:label": "Self-Sovereign Identity (SSI)"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-did-core-specification",
      "vc:label": "W3C DID Core Specification"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-did-specification",
      "vc:label": "W3C DID Specification"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-keys",
      "vc:label": "Cryptographic Keys"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-management-system",
      "vc:label": "Identity Management System"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:public-key-infrastructure",
      "vc:label": "Public Key Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:verifiable-credential-vc",
      "vc:label": "Verifiable Credential (VC)"
    },
    {
      "@id": "urn:visionflow:owl:class:verifiable-data-registry",
      "vc:label": "Verifiable Data Registry"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20280"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralized Identity (DID)"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralized-identity-did",
  "@type": "Class",
  "label": "Decentralized Identity (DID)",
  "definition": "A W3C standard for self-sovereign digital identities that are globally unique, cryptographically verifiable, and controlled by the identity subject without requiring centralized authorities.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      },
      {
        "@id": "urn:ngm:class:did-resolver",
        "label": "DID Resolver"
      },
      {
        "@id": "urn:ngm:class:verifiable-data-registry",
        "label": "Verifiable Data Registry"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-keys",
        "label": "Cryptographic Keys"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-authentication",
        "label": "Decentralized Authentication"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-identity",
        "label": "Privacy-Preserving Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential (VC)"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity-ssi",
        "label": "Self-Sovereign Identity (SSI)"
      },
      {
        "@id": "urn:ngm:class:identity-management-system",
        "label": "Identity Management System"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:decentralized-identity-did:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:64812304a0cb52ad329a73633d0b791a1254bf509de49b6432e4dfba4f29f3a2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Technology]]",
      "resolved": "urn:visionflow:linked:blockchain-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Domain Identity]]",
      "resolved": "urn:visionflow:linked:cross-domain-identity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralized Authentication]]",
      "resolved": "urn:visionflow:linked:decentralized-authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID Document]]",
      "resolved": "urn:visionflow:linked:did-document",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID Method]]",
      "resolved": "urn:visionflow:linked:did-method",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID Resolver]]",
      "resolved": "urn:visionflow:linked:did-resolver",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID URI]]",
      "resolved": "urn:visionflow:linked:did-uri",
      "kind": "StubLink"
    },
    {
      "raw": "[[JSON-LD]]",
      "resolved": "urn:visionflow:linked:json-ld",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy-Preserving Identity]]",
      "resolved": "urn:visionflow:linked:privacy-preserving-identity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Self-Sovereign Identity (SSI)]]",
      "resolved": "urn:visionflow:linked:self-sovereign-identity-ssi",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C DID Core Specification]]",
      "resolved": "urn:visionflow:linked:w3-c-did-core-specification",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C DID Specification]]",
      "resolved": "urn:visionflow:linked:w3-c-did-specification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Keys]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-keys",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:owl:class:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management System]]",
      "resolved": "urn:visionflow:owl:class:identity-management-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public Key Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:public-key-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credential (VC)]]",
      "resolved": "urn:visionflow:owl:class:verifiable-credential-vc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Data Registry]]",
      "resolved": "urn:visionflow:owl:class:verifiable-data-registry",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A W3C standard for self-sovereign digital identities that are globally unique, cryptographically verifiable, and controlled by the identity subject without requiring centralized authorities.

- ### Semantic Classification
  - owl-class:: infrastructure:DecentralizedIdentity
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[DID URI]], [[DID Document]], [[DID Resolver]], [[DID Method]], [[Verifiable Data Registry]]
  - is-part-of:: [[Self-Sovereign Identity (SSI)]], [[Identity Management System]]
  - requires:: [[Public Key Infrastructure]], [[Cryptographic Keys]], [[Distributed Ledger]]
  - enables:: [[Verifiable Credential (VC)]], [[Decentralized Authentication]], [[Privacy-Preserving Identity]], [[Cross-Domain Identity]]
  - depends-on:: [[W3C DID Specification]], [[JSON-LD]], [[Blockchain Technology]]

- ### Content
  Decentralized Identity (DID) — content pending enrichment.

- ### Provenance
  - bridges-to:: [[DID Nostr Identity]] (ngm)
  - sources:: [[W3C DID Core Specification]]
  - migration-date:: 2026-04-26T00:00:00Z
