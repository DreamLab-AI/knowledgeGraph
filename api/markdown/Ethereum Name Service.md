public:: true

# Ethereum Name Service
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d33da262fa1abf030017894eff63ba661149f17e91a8a53e40d888ec2aacf847",
  "@type": "Page",
  "vc:slug": "ethereum-name-service",
  "title": "Ethereum Name Service",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum-smart-contracts",
      "vc:label": "Ethereum Smart Contracts"
    },
    {
      "@id": "urn:visionflow:linked:identity",
      "vc:label": "Identity"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethereum Name Service"
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
  "@id": "urn:ngm:class:ethereum-smart-contract-platform-name-service",
  "@type": "Class",
  "label": "Ethereum Name Service",
  "definition": "A decentralised naming system on Ethereum that maps human-readable names to addresses and other resources using smart contracts.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ethereum-smart-contract-platform",
      "label": "Ethereum"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform-smart-contracts",
        "label": "Ethereum Smart Contracts"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity",
        "label": "Identity"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethereum-name-service:ecc5374efda7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d33da262fa1abf030017894eff63ba661149f17e91a8a53e40d888ec2aacf847"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contracts]]",
      "resolved": "urn:visionflow:linked:ethereum-smart-contracts",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity]]",
      "resolved": "urn:visionflow:linked:identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
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
  - A decentralised naming system on Ethereum that maps human-readable names to addresses and other resources using smart contracts.

- ### Semantic Classification
  - owl-class:: blockchain:EthereumNameService
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Ethereum Smart Contract Platform]]
  - bridges-to:: [[Smart Contract]]
  - requires:: [[Ethereum Smart Contracts]]
  - enables:: [[Identity]]

- ### Content
  - The Ethereum Name Service lets users register readable names that resolve to wallet addresses, content hashes, and metadata. Resolution is handled by a hierarchy of registry and resolver contracts on Ethereum.
  - Names are owned as on-chain records, so control follows ownership rather than a central registrar. The system simplifies sending value and referencing decentralised resources by replacing long hexadecimal addresses with memorable labels.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
