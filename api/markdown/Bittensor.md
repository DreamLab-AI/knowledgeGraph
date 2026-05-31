public:: true

# Bittensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fbd9c2ba2144b4cc4206ef3b6b48ed0ba0f7a8227b9e380ea8da23d51960105c",
  "@type": "Page",
  "vc:slug": "bittensor",
  "title": "Bittensor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:token-economics",
      "vc:label": "Token Economics"
    },
    {
      "@id": "urn:visionflow:linked:distributed-computing",
      "vc:label": "Distributed Computing"
    },
    {
      "@id": "urn:visionflow:linked:peer-to-peer-network",
      "vc:label": "Peer-to-Peer Network"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bittensor"
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
  "@id": "urn:ngm:class:bittensor",
  "@type": "Class",
  "label": "Bittensor",
  "definition": "A decentralised network that uses blockchain-based incentives to coordinate and reward the contribution of machine learning models and compute by independent participants.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bittensor:a714e8511902",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fbd9c2ba2144b4cc4206ef3b6b48ed0ba0f7a8227b9e380ea8da23d51960105c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Economics]]",
      "resolved": "urn:visionflow:linked:token-economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Computing]]",
      "resolved": "urn:visionflow:linked:distributed-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Peer-to-Peer Network]]",
      "resolved": "urn:visionflow:linked:peer-to-peer-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
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
  - A decentralised network that uses blockchain-based incentives to coordinate and reward the contribution of machine learning models and compute by independent participants.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Bittensor
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Peer-to-Peer Network]]
  - requires:: [[Blockchain]], [[Token Economics]]
  - enables:: [[Distributed Computing]]

- ### Content
  - Bittensor organises machine intelligence as a market in which participants run models that respond to queries and are scored by other participants. A native token is used to distribute rewards according to assessed contribution, with the intention of incentivising useful model outputs.
  - The network is structured into subnets, each defining a task and an evaluation mechanism. The design aims to pool compute and model capability across many independent operators rather than relying on a single centralised provider, although the quality and value of contributions depend heavily on the scoring mechanisms used.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
