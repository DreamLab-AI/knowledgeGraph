public:: true

# Consensus Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:de4505ff0963ffaeaa904382683fa215c3d57a31a7f4d4c76a4e3c1fe615d778",
  "@type": "Page",
  "vc:slug": "consensus-layer",
  "title": "Consensus Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:protocol-layer",
      "vc:label": "Protocol Layer"
    },
    {
      "@id": "urn:visionflow:linked:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:linked:byzantine-fault-tolerance",
      "vc:label": "Byzantine Fault Tolerance"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:ietf-internet-engineering-task-force",
      "vc:label": "IETF (Internet Engineering Task Force)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Consensus Layer"
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
  "@id": "urn:ngm:class:consensus-layer",
  "@type": "Class",
  "label": "Consensus Layer",
  "definition": "The Consensus Layer is the stratum responsible for agreement on a single canonical ordering of events across distributed participants. In the canonical stack it sits directly above the Protocol Layer and below the Data Layer, converting peer-to-peer message exchange into a shared, append-only history. It contains the agreement algorithms, fork-choice rules, and finality conditions that all participants follow.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Bc Protocol And Consensus"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:protocol-layer",
        "label": "Protocol Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-layer",
        "label": "Data Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:consensus-layer:245b56428ff4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:de4505ff0963ffaeaa904382683fa215c3d57a31a7f4d4c76a4e3c1fe615d778"
  },
  "vc:resolutions": [
    {
      "raw": "[[Protocol Layer]]",
      "resolved": "urn:visionflow:linked:protocol-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Layer]]",
      "resolved": "urn:visionflow:linked:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Byzantine Fault Tolerance]]",
      "resolved": "urn:visionflow:linked:byzantine-fault-tolerance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[IETF (Internet Engineering Task Force)]]",
      "resolved": "urn:visionflow:linked:ietf-internet-engineering-task-force",
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
  - The Consensus Layer is the stratum responsible for agreement on a single canonical ordering of events across distributed participants. In the canonical stack it sits directly above the Protocol Layer and below the Data Layer, converting peer-to-peer message exchange into a shared, append-only history. It contains the agreement algorithms, fork-choice rules, and finality conditions that all participants follow.

- ### Semantic Classification
  - owl-class:: arch:ConsensusLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Byzantine Fault Tolerance]], [[Proof of Stake]]
  - requires:: [[Protocol Layer]]
  - enables:: [[Data Layer]]

- ### Content
  - The Consensus Layer ensures that independent nodes converge on the same state despite failures, delays, and adversarial behaviour. Typical members include leader election, voting and quorum protocols, fork-choice rules, and finality gadgets. Its guarantees are usually framed in terms of safety, the property that honest nodes never disagree, and liveness, the property that progress continues.
  - It builds on the Protocol Layer, which delivers the messages that consensus reasons over, and supplies the Data Layer above it with an agreed ordering on which durable records depend. Without this layer the strata above could hold divergent histories.
  - The layer bridges to Byzantine fault tolerance and to specific schemes such as proof of stake and proof of work. The chosen mechanism fixes the trust assumptions, throughput, and finality time inherited by every higher layer.

- ### Provenance
  - sources:: [[IETF (Internet Engineering Task Force)]]
  - migration-date:: 2026-05-29T00:00:00Z
