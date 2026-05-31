public:: true

# Trezor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:77d660b9091aa590609077160a57be402bfb67c30790e62848c910273cce0d72",
  "@type": "Page",
  "vc:slug": "trezor",
  "title": "Trezor",
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
      "vc:value": "Trezor"
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
  "@id": "urn:ngm:class:trezor",
  "@type": "Class",
  "label": "Trezor",
  "definition": "Trezor is a brand of hardware wallets for storing cryptocurrency private keys offline in a dedicated physical device.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:trezor:b53952139312",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:77d660b9091aa590609077160a57be402bfb67c30790e62848c910273cce0d72"
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
  - Trezor is a brand of hardware wallets for storing cryptocurrency private keys offline in a dedicated physical device.

- ### Semantic Classification
  - owl-class:: blockchain:Trezor
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cold Storage]]
  - bridges-to:: [[Key Management]]
  - requires:: [[Private Key]]
  - enables:: [[Self-Custody]]

- ### Content
  - Trezor produces hardware devices that store cryptocurrency private keys offline and sign transactions without exposing keys to a connected computer.
  - The devices support multiple cryptocurrencies and are used to provide self-custody through cold storage of keys.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
