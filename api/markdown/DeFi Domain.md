public:: true

# DeFi Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1269c82862f7cb5b4e3062613fa54968f4cd825739691022dc4c046b5ad3aa75",
  "@type": "Page",
  "vc:slug": "de-fi-domain",
  "title": "DeFi Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:lending-protocol",
      "vc:label": "Lending Protocol"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-exchange",
      "vc:label": "Decentralised Exchange"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
      "vc:label": "Digital Asset Domain"
    },
    {
      "@id": "urn:visionflow:linked:permissionless-finance",
      "vc:label": "Permissionless Finance"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DeFi Domain"
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
  "@id": "urn:ngm:class:de-fi-domain",
  "@type": "Class",
  "label": "DeFi Domain",
  "definition": "The DeFi Domain is a short-form alias for decentralised finance as a subject classification. It denotes the same scope of on-ledger financial services delivered through smart contracts without a central intermediary. As a subject classification under the Blockchain Domain, it exists chiefly as a familiar label and defers its substantive treatment to the Decentralised Finance Domain.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:automated-market-maker",
        "label": "Automated Market Maker"
      },
      {
        "@id": "urn:ngm:class:lending-protocol",
        "label": "Lending Protocol"
      },
      {
        "@id": "urn:ngm:class:decentralised-exchange",
        "label": "Decentralised Exchange"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:digital-asset-domain",
        "label": "Digital Asset Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:permissionless-finance",
        "label": "Permissionless Finance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:de-fi-domain:b9d43dcc72f0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1269c82862f7cb5b4e3062613fa54968f4cd825739691022dc4c046b5ad3aa75"
  },
  "vc:resolutions": [
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:linked:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lending Protocol]]",
      "resolved": "urn:visionflow:linked:lending-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Exchange]]",
      "resolved": "urn:visionflow:linked:decentralised-exchange",
      "kind": "StubLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Permissionless Finance]]",
      "resolved": "urn:visionflow:linked:permissionless-finance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
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
  - The DeFi Domain is a short-form alias for decentralised finance as a subject classification. It denotes the same scope of on-ledger financial services delivered through smart contracts without a central intermediary. As a subject classification under the Blockchain Domain, it exists chiefly as a familiar label and defers its substantive treatment to the Decentralised Finance Domain.

- ### Semantic Classification
  - owl-class:: defi:DeFiDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Decentralised Finance Domain]]
  - has-part:: [[Automated Market Maker]], [[Lending Protocol]], [[Decentralised Exchange]]
  - requires:: [[Smart Contract]], [[Digital Asset Domain]]
  - enables:: [[Permissionless Finance]]

- ### Content
  - The DeFi Domain is the colloquial abbreviation that practitioners use for decentralised finance. It is retained in the ontology so that references using the short form resolve correctly, but it carries no distinct meaning of its own. Readers seeking definitions, member protocols, and risk discussion should follow the bridge to the Decentralised Finance Domain.
  - Maintaining the alias prevents fragmentation in the graph, where incoming links may use either spelling. By bridging explicitly rather than duplicating content, the ontology keeps a single authoritative description while still recognising common usage.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
