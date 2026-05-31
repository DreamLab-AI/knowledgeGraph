public:: true

# Aztec Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e7d4e3980ae07e03a52377afabd5b6f3e3f58a7331f9141b2c80c279032bfc74",
  "@type": "Page",
  "vc:slug": "aztec-network",
  "title": "Aztec Network",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:aztec-protocol",
      "vc:label": "Aztec Protocol"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-networks",
      "vc:label": "Layer 2 Networks"
    },
    {
      "@id": "urn:visionflow:linked:aztec",
      "vc:label": "Aztec"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Aztec Network"
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
  "@id": "urn:ngm:class:aztec-network",
  "@type": "Class",
  "label": "Aztec Network",
  "definition": "The privacy-preserving Layer 2 network operated under the Aztec protocol, providing confidential transactions and private smart contracts settled on Ethereum.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:aztec",
      "label": "Aztec"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:aztec-protocol",
        "label": "Aztec Protocol"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:aztec-network:5820adb67e54",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e7d4e3980ae07e03a52377afabd5b6f3e3f58a7331f9141b2c80c279032bfc74"
  },
  "vc:resolutions": [
    {
      "raw": "[[Aztec Protocol]]",
      "resolved": "urn:visionflow:linked:aztec-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Networks]]",
      "resolved": "urn:visionflow:linked:layer-2-networks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Aztec]]",
      "resolved": "urn:visionflow:linked:aztec",
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
  - The privacy-preserving Layer 2 network operated under the Aztec protocol, providing confidential transactions and private smart contracts settled on Ethereum.

- ### Semantic Classification
  - owl-class:: blockchain:AztecNetwork
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Aztec]]
  - bridges-to:: [[Layer 2 Networks]]
  - requires:: [[Aztec Protocol]], [[Ethereum]]
  - enables:: [[Privacy]]

- ### Content
  - The Aztec network is the deployed system that runs the Aztec protocol, batching private transactions and posting zero-knowledge proofs to Ethereum for settlement. It provides a rollup where transaction details can remain hidden.
  - Users interact with encrypted state while the network proves correctness without disclosure. This positions it as a confidentiality-focused Layer 2 within the Ethereum ecosystem.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
