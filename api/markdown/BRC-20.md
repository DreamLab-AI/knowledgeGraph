public:: true

# BRC-20
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dfa17370644ba07de370f8094354a44b73313895fb65d919d4bb35079d0232ad",
  "@type": "Page",
  "vc:slug": "brc-20",
  "title": "BRC-20",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ordinals",
      "vc:label": "Ordinals"
    },
    {
      "@id": "urn:visionflow:linked:fungible-token",
      "vc:label": "Fungible Token"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:token-standard",
      "vc:label": "Token Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BRC-20"
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
  "@id": "urn:ngm:class:brc-20",
  "@type": "Class",
  "label": "BRC-20",
  "definition": "An experimental token standard on Bitcoin that records fungible token operations as JSON inscriptions using ordinal theory.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:token-standard",
      "label": "Token Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ordinals",
        "label": "Ordinals"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
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
  "@id": "urn:visionflow:annotation:link-resolutions:brc-20:6c6fd692e3cf",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dfa17370644ba07de370f8094354a44b73313895fb65d919d4bb35079d0232ad"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ordinals]]",
      "resolved": "urn:visionflow:linked:ordinals",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fungible Token]]",
      "resolved": "urn:visionflow:linked:fungible-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:linked:token-standard",
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
  - An experimental token standard on Bitcoin that records fungible token operations as JSON inscriptions using ordinal theory.

- ### Semantic Classification
  - owl-class:: blockchain:BRC20
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Token Standard]]
  - bridges-to:: [[Bitcoin]]
  - requires:: [[Ordinals]]
  - enables:: [[Fungible Token]]

- ### Content
  - BRC-20 defines a convention for deploying, minting, and transferring fungible tokens by inscribing small JSON payloads onto satoshis. Balances are computed by off-chain indexers that read these inscriptions in order.
  - The standard relies entirely on the Ordinals inscription mechanism and carries no on-chain enforcement of supply rules, so token state depends on shared indexer interpretation rather than native Bitcoin validation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
