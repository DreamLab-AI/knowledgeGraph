public:: true

# BitGo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:37af839b916080653798a1429c807be2444c13a92726cd64ef69c459ff69d698",
  "@type": "Page",
  "vc:slug": "bit-go",
  "title": "BitGo",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:multisignature",
      "vc:label": "Multisignature"
    },
    {
      "@id": "urn:visionflow:linked:institutional-custody",
      "vc:label": "Institutional Custody"
    },
    {
      "@id": "urn:visionflow:linked:key-management",
      "vc:label": "Key Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BitGo"
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
  "@id": "urn:ngm:class:bit-go",
  "@type": "Class",
  "label": "BitGo",
  "definition": "BitGo is a company that provides digital asset custody, wallet, and security services, including multi-signature wallet technology, for institutional clients.",
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
        "@id": "urn:ngm:class:multisignature",
        "label": "Multisignature"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bit-go:ada684adac21",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:37af839b916080653798a1429c807be2444c13a92726cd64ef69c459ff69d698"
  },
  "vc:resolutions": [
    {
      "raw": "[[Multisignature]]",
      "resolved": "urn:visionflow:linked:multisignature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Institutional Custody]]",
      "resolved": "urn:visionflow:linked:institutional-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Key Management]]",
      "resolved": "urn:visionflow:linked:key-management",
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
  - BitGo is a company that provides digital asset custody, wallet, and security services, including multi-signature wallet technology, for institutional clients.

- ### Semantic Classification
  - owl-class:: blockchain:BitGo
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Institutional Custody]]
  - bridges-to:: [[Key Management]]
  - requires:: [[Multisignature]]
  - enables:: [[Institutional Custody]]

- ### Content
  - BitGo offers custody and wallet infrastructure for digital assets, including multi-signature security and institutional custody services.
  - Its services are used by exchanges and institutions to secure and manage cryptocurrency holdings.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
