public:: true

# Decentralised Identifier
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:479d51b89f122e6b1e23f8dc63d720d38b887829282643b6cf4525fa6c3745be",
  "@type": "Page",
  "vc:slug": "decentralised-identifier",
  "title": "Decentralised Identifier",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:public-key-cryptography",
      "vc:label": "Public-Key Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-credentials",
      "vc:label": "Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-identity",
      "vc:label": "Decentralised Identity"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralised Identifier"
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
  "@id": "urn:ngm:class:decentralised-identifier",
  "@type": "Class",
  "label": "Decentralised Identifier",
  "definition": "A type of globally unique identifier, defined by a W3C standard, that is controlled by its subject and resolves to a document without depending on a central registry.",
  "domain": "cryptographic",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:decentralised-identifier:1eb4dc144b43",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:479d51b89f122e6b1e23f8dc63d720d38b887829282643b6cf4525fa6c3745be"
  },
  "vc:resolutions": [
    {
      "raw": "[[Public-Key Cryptography]]",
      "resolved": "urn:visionflow:linked:public-key-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credentials]]",
      "resolved": "urn:visionflow:linked:verifiable-credentials",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Identity]]",
      "resolved": "urn:visionflow:linked:decentralised-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
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
  - A type of globally unique identifier, defined by a W3C standard, that is controlled by its subject and resolves to a document without depending on a central registry.

- ### Semantic Classification
  - owl-class:: cryptographic:DecentralisedIdentifier
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Digital Identity]]
  - bridges-to:: [[Decentralised Identity]], [[Identity Management]]
  - requires:: [[Public-Key Cryptography]]
  - enables:: [[Verifiable Credentials]]

- ### Content
  - A decentralised identifier (DID) is a persistent identifier that an entity can create and control independently of any central authority. Each DID resolves to a DID document containing public keys and service endpoints, allowing the controller to prove control through cryptographic means.
  - Standardised by the W3C, DIDs are a building block for self-sovereign identity and verifiable credentials, supporting authentication and secure interaction where the subject, rather than an issuing platform, holds the identifier and its associated keys.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
