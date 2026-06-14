public:: true

# Ordinals
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:18bb4e8497a1640e5a0a82455085bdf8039429dd4e08c64f84b2b2d7071cac05",
  "@type": "Page",
  "vc:slug": "ordinals",
  "title": "Ordinals",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:taproot",
      "vc:label": "Taproot"
    },
    {
      "@id": "urn:visionflow:linked:utxo",
      "vc:label": "UTXO"
    },
    {
      "@id": "urn:visionflow:linked:brc-20",
      "vc:label": "BRC-20"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-script",
      "vc:label": "Bitcoin Script"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ordinals"
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
  "@id": "urn:ngm:class:ordinals",
  "@type": "Class",
  "label": "Ordinals",
  "definition": "A scheme for numbering individual satoshis by order of issuance and transfer, allowing arbitrary data to be inscribed onto specific satoshis on the Bitcoin blockchain.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
      "label": "Bitcoin Proof-of-Work Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:brc-20",
        "label": "BRC-20"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ordinals:4792f0e70768",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:18bb4e8497a1640e5a0a82455085bdf8039429dd4e08c64f84b2b2d7071cac05"
  },
  "vc:resolutions": [
    {
      "raw": "[[Taproot]]",
      "resolved": "urn:visionflow:linked:taproot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[UTXO]]",
      "resolved": "urn:visionflow:linked:utxo",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BRC-20]]",
      "resolved": "urn:visionflow:linked:brc-20",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bitcoin Script]]",
      "resolved": "urn:visionflow:linked:bitcoin-script",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
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
  - A scheme for numbering individual satoshis by order of issuance and transfer, allowing arbitrary data to be inscribed onto specific satoshis on the Bitcoin blockchain.

- ### Semantic Classification
  - owl-class:: blockchain:Ordinals
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Proof-of-Work Protocol]]
  - bridges-to:: [[Bitcoin Script]]
  - requires:: [[Taproot]], [[UTXO]]
  - enables:: [[BRC-20]]

- ### Content
  - Ordinal theory assigns a sequential number to each satoshi based on the order in which it was mined, and tracks it through transactions using a first-in-first-out rule. This gives individual satoshis a stable identity that can be referenced and transferred.
  - Inscriptions attach content such as images or text to a numbered satoshi by storing the data in the witness portion of a Taproot transaction. Ordinals provided the foundation for later experiments including the BRC-20 token convention.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
