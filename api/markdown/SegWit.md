public:: true

# SegWit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e64efc54617e9cce559e60a9977a50758f974e31555c9c282a2770f589159eae",
  "@type": "Page",
  "vc:slug": "seg-wit",
  "title": "SegWit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-script",
      "vc:label": "Bitcoin Script"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:taproot",
      "vc:label": "Taproot"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-protocol",
      "vc:label": "Bitcoin Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SegWit"
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
  "@id": "urn:ngm:class:seg-wit",
  "@type": "Class",
  "label": "SegWit",
  "definition": "Segregated Witness is a Bitcoin protocol upgrade that moves signature data into a separate witness structure, fixing transaction malleability and increasing block capacity.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-protocol",
      "label": "Bitcoin Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
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
  "@id": "urn:visionflow:annotation:link-resolutions:seg-wit:b3e29ae57aef",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e64efc54617e9cce559e60a9977a50758f974e31555c9c282a2770f589159eae"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Script]]",
      "resolved": "urn:visionflow:linked:bitcoin-script",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Taproot]]",
      "resolved": "urn:visionflow:linked:taproot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin-protocol",
      "kind": "StubLink"
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
  - Segregated Witness is a Bitcoin protocol upgrade that moves signature data into a separate witness structure, fixing transaction malleability and increasing block capacity.

- ### Semantic Classification
  - owl-class:: blockchain:SegWit
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Protocol]]
  - bridges-to:: [[Bitcoin]]
  - requires:: [[Bitcoin Script]]
  - enables:: [[Lightning Network]], [[Taproot]]

- ### Content
  - SegWit separates the witness, which holds signatures, from the rest of a transaction. Because the transaction identifier no longer depends on the signature data, third parties can no longer alter it in ways that change the identifier.
  - Removing this malleability made reliable off-chain protocols such as the Lightning Network practical. SegWit also introduced a weight-based accounting that effectively raised block capacity and prepared the ground for the later Taproot upgrade.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
