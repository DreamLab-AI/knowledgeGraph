public:: true

# Reality.eth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:91417f9d93362f8857248c5c502ec895a813cf76979865f6fdb94ce2a87097d4",
  "@type": "Page",
  "vc:slug": "reality-eth",
  "title": "Reality.eth",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:safe-snap",
      "vc:label": "SafeSnap"
    },
    {
      "@id": "urn:visionflow:linked:dao-governance",
      "vc:label": "DAO Governance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Reality.eth"
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
  "@id": "urn:ngm:class:reality-eth",
  "@type": "Class",
  "label": "Reality.eth",
  "definition": "Reality.eth is an Ethereum-based oracle that answers questions by crowdsourcing responses with an escalating bond mechanism, allowing economic dispute resolution. It is used to bring real-world facts on chain.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contract",
      "label": "Smart Contract"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:safe-snap",
        "label": "SafeSnap"
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
  "@id": "urn:visionflow:annotation:link-resolutions:reality-eth:0286cb6f797a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:91417f9d93362f8857248c5c502ec895a813cf76979865f6fdb94ce2a87097d4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SafeSnap]]",
      "resolved": "urn:visionflow:linked:safe-snap",
      "kind": "StubLink"
    },
    {
      "raw": "[[DAO Governance]]",
      "resolved": "urn:visionflow:linked:dao-governance",
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
  - Reality.eth is an Ethereum-based oracle that answers questions by crowdsourcing responses with an escalating bond mechanism, allowing economic dispute resolution. It is used to bring real-world facts on chain.

- ### Semantic Classification
  - owl-class:: blockchain:Realityeth
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[DAO Governance]]
  - requires:: [[Smart Contract]], [[Ethereum]]
  - enables:: [[SafeSnap]]

- ### Content
  - Reality.eth is a decentralised oracle in which anyone can post an answer to a question by staking a bond, and others can challenge by posting a higher bond, so that the economically backed answer settles after a timeout. Unresolved disputes can be escalated to an arbitration mechanism such as a court contract.
  - The system lets smart contracts obtain answers to subjective or real-world questions without trusting a single reporter. It is a component of SafeSnap, which connects off-chain governance votes to on-chain execution.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
