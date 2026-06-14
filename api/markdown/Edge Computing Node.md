public:: true
alias:: EdgeComputingNode

# Edge Computing Node
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3e706fcc61ae2b16000b41ef399971a2bf73bd1f2c76f784759220e1f89549a5",
  "@type": "Page",
  "vc:slug": "edge-computing-node",
  "title": "Edge Computing Node",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bandwidth-optimization",
      "vc:label": "Bandwidth Optimization"
    },
    {
      "@id": "urn:visionflow:linked:cooling-system",
      "vc:label": "Cooling System"
    },
    {
      "@id": "urn:visionflow:linked:etsi-arf-010",
      "vc:label": "ETSI ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    },
    {
      "@id": "urn:visionflow:linked:ieee-p2048-3",
      "vc:label": "IEEE P2048-3"
    },
    {
      "@id": "urn:visionflow:linked:local-data-processing",
      "vc:label": "Local Data Processing"
    },
    {
      "@id": "urn:visionflow:linked:low-latency-processing",
      "vc:label": "Low Latency Processing"
    },
    {
      "@id": "urn:visionflow:linked:memory-module",
      "vc:label": "Memory Module"
    },
    {
      "@id": "urn:visionflow:linked:network-connectivity",
      "vc:label": "Network Connectivity"
    },
    {
      "@id": "urn:visionflow:linked:network-interface",
      "vc:label": "Network Interface"
    },
    {
      "@id": "urn:visionflow:linked:physical-housing",
      "vc:label": "Physical Housing"
    },
    {
      "@id": "urn:visionflow:linked:processor",
      "vc:label": "Processor"
    },
    {
      "@id": "urn:visionflow:linked:real-time-analytics",
      "vc:label": "Real-time Analytics"
    },
    {
      "@id": "urn:visionflow:linked:storage-unit",
      "vc:label": "Storage Unit"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-research-area",
      "vc:label": "ComputationAndIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:edge-mesh-network",
      "vc:label": "Edge Mesh Network"
    },
    {
      "@id": "urn:visionflow:owl:class:edge-network",
      "vc:label": "Edge Network"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-layer",
      "vc:label": "PhysicalLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:power-supply",
      "vc:label": "Power Supply"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20141"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Edge Computing Node"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:edge-computing-node",
  "@type": "Class",
  "label": "Edge Computing Node",
  "definition": "Physical computing resource deployed near data sources to reduce latency for immersive applications through localized processing.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:cooling-system",
        "label": "Cooling System"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:memory-module",
        "label": "Memory Module"
      },
      {
        "@id": "urn:ngm:class:network-interface",
        "label": "Network Interface"
      },
      {
        "@id": "urn:ngm:class:processor",
        "label": "Processor"
      },
      {
        "@id": "urn:ngm:class:storage-unit",
        "label": "Storage Unit"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-connectivity",
        "label": "Network Connectivity"
      },
      {
        "@id": "urn:ngm:class:physical-housing",
        "label": "Physical Housing"
      },
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Power Supply"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bandwidth-optimization",
        "label": "Bandwidth Optimization"
      },
      {
        "@id": "urn:ngm:class:local-data-processing",
        "label": "Local Data Processing"
      },
      {
        "@id": "urn:ngm:class:low-latency-processing",
        "label": "Low Latency Processing"
      },
      {
        "@id": "urn:ngm:class:real-time-analytics",
        "label": "Real-time Analytics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:edge-mesh-network",
        "label": "Edge Mesh Network"
      },
      {
        "@id": "urn:ngm:class:edge-network",
        "label": "Edge Network"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:edge-computing-node:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3e706fcc61ae2b16000b41ef399971a2bf73bd1f2c76f784759220e1f89549a5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bandwidth Optimization]]",
      "resolved": "urn:visionflow:linked:bandwidth-optimization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cooling System]]",
      "resolved": "urn:visionflow:linked:cooling-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE P2048-3]]",
      "resolved": "urn:visionflow:linked:ieee-p2048-3",
      "kind": "StubLink"
    },
    {
      "raw": "[[Local Data Processing]]",
      "resolved": "urn:visionflow:linked:local-data-processing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Low Latency Processing]]",
      "resolved": "urn:visionflow:linked:low-latency-processing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Memory Module]]",
      "resolved": "urn:visionflow:linked:memory-module",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Connectivity]]",
      "resolved": "urn:visionflow:linked:network-connectivity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Interface]]",
      "resolved": "urn:visionflow:linked:network-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[Physical Housing]]",
      "resolved": "urn:visionflow:linked:physical-housing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Processor]]",
      "resolved": "urn:visionflow:linked:processor",
      "kind": "StubLink"
    },
    {
      "raw": "[[Real-time Analytics]]",
      "resolved": "urn:visionflow:linked:real-time-analytics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Storage Unit]]",
      "resolved": "urn:visionflow:linked:storage-unit",
      "kind": "StubLink"
    },
    {
      "raw": "[[ComputationAndIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-research-area",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputeLayer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge Mesh Network]]",
      "resolved": "urn:visionflow:owl:class:edge-mesh-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge Network]]",
      "resolved": "urn:visionflow:owl:class:edge-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PhysicalLayer]]",
      "resolved": "urn:visionflow:owl:class:physical-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Power Supply]]",
      "resolved": "urn:visionflow:owl:class:power-supply",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Physical computing resource deployed near data sources to reduce latency for immersive applications through localized processing.

- ### Semantic Classification
  - owl-class:: spatial-computing:EdgeComputingNode
  - owl-role:: Object
  - owl-inferred:: spatial-computing:PhysicalObject
  - belongs-to-domain:: [[InfrastructureDomain]], [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[PhysicalLayer]], [[ComputeLayer]]

- ### Relationships
  - has-part:: [[Processor]], [[Memory Module]], [[Network Interface]], [[Storage Unit]], [[GPU]], [[Cooling System]]
  - is-part-of:: [[Edge Network]], [[Edge Mesh Network]]
  - requires:: [[Power Supply]], [[Network Connectivity]], [[Physical Housing]]
  - enables:: [[Low Latency Processing]], [[Local Data Processing]], [[Bandwidth Optimization]], [[Real-time Analytics]]

- ### Content
  Edge Computing Node — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI ARF 010]], [[IEEE P2048-3]]
  - migration-date:: 2026-04-26T00:00:00Z
