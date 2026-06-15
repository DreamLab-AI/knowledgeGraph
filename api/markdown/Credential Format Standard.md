public:: true

# Credential Format Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6dcc2c937fad1c9c2490437b829d9154c4d677d3d6c2a8caba78a05e4fed39a4",
  "@type": "Page",
  "vc:slug": "credential-format-standard",
  "title": "Credential Format Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:credential-verification",
      "vc:label": "Credential Verification"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-proofs",
      "vc:label": "Cryptographic Proofs"
    },
    {
      "@id": "urn:visionflow:linked:did",
      "vc:label": "DID"
    },
    {
      "@id": "urn:visionflow:linked:identity-portability",
      "vc:label": "Identity Portability"
    },
    {
      "@id": "urn:visionflow:linked:iso-m-dl",
      "vc:label": "ISO mDL"
    },
    {
      "@id": "urn:visionflow:linked:issuer-infrastructure",
      "vc:label": "Issuer Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:trust-interoperability",
      "vc:label": "Trust Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-verifiable-credentials",
      "vc:label": "W3C Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-standards",
      "vc:label": "Identity Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:standards-body",
      "vc:label": "Standards Body"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9834"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Credential Format Standard"
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
  "@id": "urn:ngm:class:credential-format-standard",
  "@type": "Class",
  "label": "Credential Format Standard",
  "definition": "Technical specifications defining the structure, encoding, and cryptographic verification methods for digital credentials, enabling secure issuance, storage, and verification of identity documents, certifications, and attestations across different platforms and systems through interoperable formats such as W3C Verifiable Credentials and ISO mDL.",
  "domain": "security",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:identity-standards",
    "label": "Identity Standards"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-proofs",
        "label": "Cryptographic Proofs"
      },
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      },
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:credential-verification",
        "label": "Credential Verification"
      },
      {
        "@id": "urn:ngm:class:identity-portability",
        "label": "Identity Portability"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:w3-c-verifiable-credentials",
        "label": "W3C Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:sd-jwt",
        "label": "SD-JWT"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld",
        "label": "JSON-LD"
      },
      {
        "@id": "urn:ngm:class:cbor",
        "label": "CBOR"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:saml-assertion",
        "label": "SAML Assertion"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:did-nostr-identity",
        "label": "DID Nostr Identity"
      },
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "EU Digital Identity Wallet"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:verifiable-credential-data-model",
      "label": "Verifiable Credential Data Model"
    },
    {
      "@id": "urn:ngm:class:digital-credential-specification",
      "label": "Digital Credential Specification"
    }
  ],
  "quality": 0.65,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:credential-format-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6dcc2c937fad1c9c2490437b829d9154c4d677d3d6c2a8caba78a05e4fed39a4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Credential Verification]]",
      "resolved": "urn:visionflow:linked:credential-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Proofs]]",
      "resolved": "urn:visionflow:linked:cryptographic-proofs",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID]]",
      "resolved": "urn:visionflow:linked:did",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Portability]]",
      "resolved": "urn:visionflow:linked:identity-portability",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO mDL]]",
      "resolved": "urn:visionflow:linked:iso-m-dl",
      "kind": "StubLink"
    },
    {
      "raw": "[[Issuer Infrastructure]]",
      "resolved": "urn:visionflow:linked:issuer-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Interoperability]]",
      "resolved": "urn:visionflow:linked:trust-interoperability",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C Verifiable Credentials]]",
      "resolved": "urn:visionflow:linked:w3-c-verifiable-credentials",
      "kind": "StubLink"
    },
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Standards]]",
      "resolved": "urn:visionflow:owl:class:identity-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standards Body]]",
      "resolved": "urn:visionflow:owl:class:standards-body",
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
  - Technical specifications defining the structure, encoding, and cryptographic verification methods for digital credentials, enabling secure issuance, storage, and verification of identity documents, certifications, and attestations across different platforms and systems through interoperable formats like W3C Verifiable Credentials.

- ### Semantic Classification
  - owl-class:: infrastructure:CredentialFormatStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[DID Nostr Identity]]
  - is-subclass-of:: [[Identity Standards]]
  - requires:: [[Cryptographic Proofs]], [[Standards Body]], [[Issuer Infrastructure]]
  - enables:: [[Credential Verification]], [[Identity Portability]], [[Trust Interoperability]]

- ### Content

  - ## Technical Details
  - **W3C Verifiable Credentials 2.0** (Published May 2025):
		- Cryptographically secure, privacy-respecting, machine-verifiable
		- Extensible data model for identity credentials, university certificates, etc.
		- Three-party ecosystem: issuers, holders, verifiers
  - **Core Components**:
		- Subject and issuer identification
		- Claims/attributes about the subject
		- Cryptographic proofs for integrity
		- JSON-LD serialization for linked data
		- Decentralized Identifiers (DIDs) for unique identification
  - **EU Digital Identity Integration**:
		- European Commission assessing W3C VCDM v2.0 by December 2025
		- Comparison with ISO mDL (mobile Driver License) format
  - **Advantages**: Tamper-resistant, instantly verifiable, issued by anyone, verified by everyone
  - ## Applications
  - Digital driver licenses
  - Educational certificates
  - Professional certifications
  - Healthcare credentials
  - Government identity documents

- ### Provenance
  - sources:: [[W3C Verifiable Credentials]], [[ISO mDL]], [[DID]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T14:15:00Z
