public:: true

# Ledger
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9664427c2014914631cc5f96c9a529974bc1c39804f6c3ec680ce2a261adcb1",
  "@type": "Page",
  "vc:slug": "ledger",
  "title": "Ledger",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:private-key",
      "vc:label": "Private Key"
    },
    {
      "@id": "urn:visionflow:linked:self-custody",
      "vc:label": "Self-Custody"
    },
    {
      "@id": "urn:visionflow:linked:key-management",
      "vc:label": "Key Management"
    },
    {
      "@id": "urn:visionflow:linked:cold-storage",
      "vc:label": "Cold Storage"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ledger"
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
  "@id": "urn:ngm:class:ledger",
  "@type": "Class",
  "label": "Ledger",
  "definition": "Ledger is a company that produces hardware wallets for the offline storage of cryptocurrency private keys.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cold-storage",
      "label": "Cold Storage"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ledger:fe14010b4fe8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c9664427c2014914631cc5f96c9a529974bc1c39804f6c3ec680ce2a261adcb1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:linked:private-key",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Custody]]",
      "resolved": "urn:visionflow:linked:self-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Key Management]]",
      "resolved": "urn:visionflow:linked:key-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cold Storage]]",
      "resolved": "urn:visionflow:linked:cold-storage",
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
  - Ledger is a company that produces hardware wallets for the offline storage of cryptocurrency private keys.

- ### Semantic Classification
  - owl-class:: blockchain:Ledger
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cold Storage]]
  - bridges-to:: [[Key Management]]
  - requires:: [[Private Key]]
  - enables:: [[Self-Custody]]

- ### Content
  - Ledger manufactures hardware wallets that keep cryptocurrency private keys in a secure element and sign transactions on the device.
  - Its products support a range of cryptocurrencies and are used for self-custody through cold storage.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
