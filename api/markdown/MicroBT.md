public:: true

# MicroBT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:51f90841dcf3df7b8d46d48530602e14bb475228d3d9800410423a1eb90f0399",
  "@type": "Page",
  "vc:slug": "micro-bt",
  "title": "MicroBT",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:transaction-validation",
      "vc:label": "Transaction Validation"
    },
    {
      "@id": "urn:visionflow:linked:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:linked:asic",
      "vc:label": "ASIC"
    },
    {
      "@id": "urn:visionflow:linked:https-www-microbt-com",
      "vc:label": "https://www.microbt.com"
    },
    {
      "@id": "urn:visionflow:linked:https-whatsminer-net",
      "vc:label": "https://whatsminer.net"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "MicroBT"
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
  "@id": "urn:ngm:class:micro-bt",
  "@type": "Class",
  "label": "MicroBT",
  "definition": "MicroBT is a Chinese manufacturer of Bitcoin mining hardware, known for its Whatsminer series of ASIC machines. It competes with other mining hardware producers.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asic",
      "label": "ASIC"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
        "label": "Bitcoin Mining"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:micro-bt:004f84daa736",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:51f90841dcf3df7b8d46d48530602e14bb475228d3d9800410423a1eb90f0399"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Validation]]",
      "resolved": "urn:visionflow:linked:transaction-validation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hardware]]",
      "resolved": "urn:visionflow:linked:hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ASIC]]",
      "resolved": "urn:visionflow:linked:asic",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.microbt.com]]",
      "resolved": "urn:visionflow:linked:https-www-microbt-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://whatsminer.net]]",
      "resolved": "urn:visionflow:linked:https-whatsminer-net",
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
  - MicroBT is a Chinese manufacturer of Bitcoin mining hardware, known for its Whatsminer series of ASIC machines. It competes with other mining hardware producers.

- ### Semantic Classification
  - owl-class:: blockchain:MicroBT
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[ASIC]]
  - bridges-to:: [[Hardware]]
  - requires:: [[Bitcoin Mining]]
  - enables:: [[Transaction Validation]]

- ### Content
  - MicroBT designs ASIC miners for SHA-256 proof of work and sells them under the Whatsminer brand. Its machines are used by mining operations seeking competitive efficiency.
  - The company is one of the main suppliers of mining hardware alongside others in the sector. Its release cycles introduce machines with improved energy efficiency that influence the cost structure of mining.

- ### Provenance
  - sources:: [[https://www.microbt.com]], [[https://whatsminer.net]]
  - migration-date:: 2026-05-29T00:00:00Z
