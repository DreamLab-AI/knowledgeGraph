public:: true

# Fireblocks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b58513f6be68ef0cb7bc5522ac3150da8af9a59375bc01133cfa38fb01c84b4b",
  "@type": "Page",
  "vc:slug": "fireblocks",
  "title": "Fireblocks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:key-management",
      "vc:label": "Key Management"
    },
    {
      "@id": "urn:visionflow:linked:institutional-custody",
      "vc:label": "Institutional Custody"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset",
      "vc:label": "Digital Asset"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Fireblocks"
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
  "@id": "urn:ngm:class:fireblocks",
  "@type": "Class",
  "label": "Fireblocks",
  "definition": "Fireblocks is a company that provides digital asset custody and transfer infrastructure for institutions, using secure key management technology.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:institutional-custody",
      "label": "Institutional Custody"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:institutional-custody",
        "label": "Institutional Custody"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fireblocks:778cbf1e58b2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b58513f6be68ef0cb7bc5522ac3150da8af9a59375bc01133cfa38fb01c84b4b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Key Management]]",
      "resolved": "urn:visionflow:linked:key-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Institutional Custody]]",
      "resolved": "urn:visionflow:linked:institutional-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset]]",
      "resolved": "urn:visionflow:linked:digital-asset",
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
  - Fireblocks is a company that provides digital asset custody and transfer infrastructure for institutions, using secure key management technology.

- ### Semantic Classification
  - owl-class:: blockchain:Fireblocks
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Institutional Custody]]
  - bridges-to:: [[Digital Asset]]
  - requires:: [[Key Management]]
  - enables:: [[Institutional Custody]]

- ### Content
  - Fireblocks provides infrastructure for securing the storage and transfer of digital assets, including key management technology for institutions.
  - Its platform is used by exchanges, custodians, and financial institutions to manage cryptocurrency operations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
