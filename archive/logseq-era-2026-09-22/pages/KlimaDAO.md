public:: true

# KlimaDAO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ef6df39f895cf6f900559056df88711a2694c8939753cec8b1066d69012a9440",
  "@type": "Page",
  "vc:slug": "klima-dao",
  "title": "KlimaDAO",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:carbon-credit-token",
      "vc:label": "Carbon Credit Token"
    },
    {
      "@id": "urn:visionflow:linked:treasury-management",
      "vc:label": "Treasury Management"
    },
    {
      "@id": "urn:visionflow:linked:voluntary-carbon-market",
      "vc:label": "Voluntary Carbon Market"
    },
    {
      "@id": "urn:visionflow:linked:carbon-markets",
      "vc:label": "Carbon Markets"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "KlimaDAO"
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
  "@id": "urn:ngm:class:klima-dao",
  "@type": "Class",
  "label": "KlimaDAO",
  "definition": "A decentralised organisation that acquires and holds tokenised carbon credits in its treasury, issuing a token backed by those credits to channel capital toward carbon retirement.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-autonomous-organisation",
      "label": "Decentralised Autonomous Organisation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:carbon-credit-token",
        "label": "Carbon Credit Token"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
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
  "@id": "urn:visionflow:annotation:link-resolutions:klima-dao:962c917ab88a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ef6df39f895cf6f900559056df88711a2694c8939753cec8b1066d69012a9440"
  },
  "vc:resolutions": [
    {
      "raw": "[[Carbon Credit Token]]",
      "resolved": "urn:visionflow:linked:carbon-credit-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Treasury Management]]",
      "resolved": "urn:visionflow:linked:treasury-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Voluntary Carbon Market]]",
      "resolved": "urn:visionflow:linked:voluntary-carbon-market",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Carbon Markets]]",
      "resolved": "urn:visionflow:linked:carbon-markets",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
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
  - A decentralised organisation that acquires and holds tokenised carbon credits in its treasury, issuing a token backed by those credits to channel capital toward carbon retirement.

- ### Semantic Classification
  - owl-class:: blockchain:KlimaDAO
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralised Autonomous Organisation]]
  - bridges-to:: [[Voluntary Carbon Market]], [[Carbon Markets]]
  - requires:: [[Carbon Credit Token]], [[Treasury Management]]

- ### Content
  - KlimaDAO is a treasury-backed protocol that holds tokenised carbon credits and issues a native token whose backing is intended to reflect those holdings. By drawing credits into its reserves, it aims to raise the on-chain price of carbon and direct capital toward retiring offsets.
  - Holders participate in governance over treasury policy and bonding mechanisms through which the organisation acquires further credits. The model links voluntary carbon markets to on-chain finance, and its effectiveness depends on the integrity and verification of the underlying credits it absorbs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
