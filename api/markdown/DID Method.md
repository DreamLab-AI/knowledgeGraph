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
  "definition": "A specification that defines how a particular type of decentralised identifier is created, resolved, updated, and deactivated. Each method describes the syntax and operations for DIDs anchored to a specific system such as a blockchain or registry.",
  "domain": "identity",
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
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
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
  - A specification that defines how a particular type of decentralised identifier is created, resolved, updated, and deactivated. Each method describes the syntax and operations for DIDs anchored to a specific system such as a blockchain or registry.

- ### Semantic Classification
  - owl-class:: identity:DIDMethod
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Identity]]
  - bridges-to:: [[W3C]]
  - requires:: [[Decentralized Identity]]
  - enables:: [[Digital Identity]]

- ### Content
  - Decentralised identifiers follow the W3C DID specification, in which the method name embedded in the identifier indicates which method governs it. Examples include did:web, did:key, and methods anchored to specific ledgers.
  - A DID method defines the CRUD operations for its identifiers and specifies how to retrieve the associated DID document, which contains public keys and service endpoints used to verify control and locate related services.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
