public:: true

# Ethereum Classic
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8219790e10cb95c7fe543ac98f83e2dd58a32160ba26c4d44bbc035d88bad522",
  "@type": "Page",
  "vc:slug": "ethereum-classic",
  "title": "Ethereum Classic",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:mining",
      "vc:label": "Mining"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:ethereum-virtual-machine",
      "vc:label": "Ethereum Virtual Machine"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:https-ethereumclassic-org",
      "vc:label": "https://ethereumclassic.org/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethereum Classic"
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
  "@id": "urn:ngm:class:ethereum-smart-contract-platform-classic",
  "@type": "Class",
  "label": "Ethereum Classic",
  "definition": "A proof-of-work blockchain that continued the original Ethereum chain after the 2016 DAO hard fork, preserving the unaltered transaction history. It maintains the principle that the ledger should not be reversed by social intervention.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptocurrency",
      "label": "Cryptocurrency"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:mining",
        "label": "Mining"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:de-fi",
        "label": "DeFi"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethereum-classic:f80cc5c027cf",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8219790e10cb95c7fe543ac98f83e2dd58a32160ba26c4d44bbc035d88bad522"
  },
  "vc:resolutions": [
    {
      "raw": "[[Mining]]",
      "resolved": "urn:visionflow:linked:mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Virtual Machine]]",
      "resolved": "urn:visionflow:linked:ethereum-virtual-machine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ethereumclassic.org/]]",
      "resolved": "urn:visionflow:linked:https-ethereumclassic-org",
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
  - A proof-of-work blockchain that continued the original Ethereum chain after the 2016 DAO hard fork, preserving the unaltered transaction history. It maintains the principle that the ledger should not be reversed by social intervention.

- ### Semantic Classification
  - owl-class:: blockchain:EthereumClassic
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Cryptocurrency]]
  - bridges-to:: [[Ethereum Smart Contract Platform]], [[Ethereum Virtual Machine]]
  - requires:: [[Mining]], [[Smart Contract]]
  - enables:: [[DeFi]]

- ### Content
  - Ethereum Classic is the chain that kept the pre-fork transaction record after the Ethereum community executed a hard fork to reverse losses from the 2016 DAO exploit. Its supporters held that an immutable ledger should stand even when its outcome is contested.
  - It remains compatible with the Ethereum Virtual Machine, so smart contracts written for Ethereum can in principle run on it, and it retained proof-of-work consensus after Ethereum moved to proof of stake.

- ### Provenance
  - sources:: [[https://ethereumclassic.org/]]
  - migration-date:: 2026-05-29T00:00:00Z
