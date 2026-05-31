public:: true

# Stacks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aea877a068348acdd730c3da947f43acd2d7e356bab53ae80dc992ece1035102",
  "@type": "Page",
  "vc:slug": "stacks",
  "title": "Stacks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consensus-protocol",
      "vc:label": "Consensus Protocol"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
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
      "vc:value": "Stacks"
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
  "@id": "urn:ngm:class:stacks",
  "@type": "Class",
  "label": "Stacks",
  "definition": "A Bitcoin Layer that enables smart contracts and applications whose state is anchored to the Bitcoin blockchain through its proof-of-transfer consensus.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin",
      "label": "Bitcoin"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:stacks:b4f4e6c4e52c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:aea877a068348acdd730c3da947f43acd2d7e356bab53ae80dc992ece1035102"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consensus Protocol]]",
      "resolved": "urn:visionflow:linked:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin-protocol",
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
  - A Bitcoin Layer that enables smart contracts and applications whose state is anchored to the Bitcoin blockchain through its proof-of-transfer consensus.

- ### Semantic Classification
  - owl-class:: blockchain:Stacks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin]]
  - bridges-to:: [[Bitcoin Protocol]]
  - requires:: [[Consensus Protocol]], [[Bitcoin]]
  - enables:: [[Smart Contract]]

- ### Content
  - Stacks runs a separate chain whose blocks are anchored to Bitcoin, settling its history against the Bitcoin ledger. Its proof-of-transfer mechanism recycles Bitcoin to secure the production of Stacks blocks.
  - Contracts on Stacks are written in the Clarity language, which is interpreted rather than compiled. The design aims to add programmability while inheriting settlement assurances from Bitcoin.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
