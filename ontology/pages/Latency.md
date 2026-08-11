public:: true

# Latency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:281cdf45875a731319c752994463696dbb850c7b54402463ce1714136866e9f5",
  "@type": "Page",
  "vc:slug": "latency",
  "title": "Latency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bandwidth",
      "vc:label": "Bandwidth"
    },
    {
      "@id": "urn:visionflow:linked:etsi-arf-010",
      "vc:label": "ETSI ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:measurement-tools",
      "vc:label": "Measurement Tools"
    },
    {
      "@id": "urn:visionflow:linked:monitoring-system",
      "vc:label": "Monitoring System"
    },
    {
      "@id": "urn:visionflow:linked:network-performance-metrics",
      "vc:label": "Network Performance Metrics"
    },
    {
      "@id": "urn:visionflow:linked:processing-delay",
      "vc:label": "Processing Delay"
    },
    {
      "@id": "urn:visionflow:linked:propagation-delay",
      "vc:label": "Propagation Delay"
    },
    {
      "@id": "urn:visionflow:linked:quality-assessment",
      "vc:label": "Quality Assessment"
    },
    {
      "@id": "urn:visionflow:linked:routing-protocol",
      "vc:label": "Routing Protocol"
    },
    {
      "@id": "urn:visionflow:linked:sla-monitoring",
      "vc:label": "SLA Monitoring"
    },
    {
      "@id": "urn:visionflow:linked:timestamp-synchronization",
      "vc:label": "Timestamp Synchronization"
    },
    {
      "@id": "urn:visionflow:linked:user-experience-tuning",
      "vc:label": "User Experience Tuning"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-infrastructure",
      "vc:label": "Network Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:network-layer",
      "vc:label": "Network Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:performance-optimization",
      "vc:label": "Performance Optimization"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-layer",
      "vc:label": "Physical Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:quality-of-service",
      "vc:label": "Quality of Service"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20148"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Latency"
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
  "@id": "urn:ngm:class:latency",
  "@type": "Class",
  "label": "Latency",
  "definition": "Performance metric representing the time delay between a stimulus (user action, network request, or computation trigger) and the corresponding system response; a fundamental constraint in networked, real-time, and interactive systems spanning communication networks, distributed computing, and immersive environments.",
  "vc:plainGloss": "The delay between asking for something and getting a response — for an AI assistant, how long you wait after sending a prompt before the answer starts to appear. Lower latency means a snappier, more responsive experience.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:network-performance-metrics",
    "label": "Network Performance Metrics"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:propagation-delay",
        "label": "Propagation Delay"
      },
      {
        "@id": "urn:ngm:class:processing-delay",
        "label": "Processing Delay"
      },
      {
        "@id": "urn:ngm:class:transmission-delay",
        "label": "Transmission Delay"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:network-performance-metrics",
        "label": "Network Performance Metrics"
      },
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality Of Service"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:monitoring-system",
        "label": "Monitoring System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:performance-optimization",
        "label": "Performance Optimization"
      },
      {
        "@id": "urn:ngm:class:real-time-control",
        "label": "Real-Time Control"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      },
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      },
      {
        "@id": "urn:ngm:class:physical-layer",
        "label": "Physical Layer"
      },
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:jitter",
        "label": "Jitter"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:round-trip-time",
        "label": "Round-Trip Time"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:inference-serving",
        "label": "Inference Serving"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:network-delay",
      "label": "Network Delay"
    },
    {
      "@id": "urn:ngm:class:response-time",
      "label": "Response Time"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:latency:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:281cdf45875a731319c752994463696dbb850c7b54402463ce1714136866e9f5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bandwidth]]",
      "resolved": "urn:visionflow:linked:bandwidth",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[Measurement Tools]]",
      "resolved": "urn:visionflow:linked:measurement-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Monitoring System]]",
      "resolved": "urn:visionflow:linked:monitoring-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Performance Metrics]]",
      "resolved": "urn:visionflow:linked:network-performance-metrics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Processing Delay]]",
      "resolved": "urn:visionflow:linked:processing-delay",
      "kind": "StubLink"
    },
    {
      "raw": "[[Propagation Delay]]",
      "resolved": "urn:visionflow:linked:propagation-delay",
      "kind": "StubLink"
    },
    {
      "raw": "[[Quality Assessment]]",
      "resolved": "urn:visionflow:linked:quality-assessment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Routing Protocol]]",
      "resolved": "urn:visionflow:linked:routing-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[SLA Monitoring]]",
      "resolved": "urn:visionflow:linked:sla-monitoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[Timestamp Synchronization]]",
      "resolved": "urn:visionflow:linked:timestamp-synchronization",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Experience Tuning]]",
      "resolved": "urn:visionflow:linked:user-experience-tuning",
      "kind": "StubLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:network-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Layer]]",
      "resolved": "urn:visionflow:owl:class:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Performance Optimization]]",
      "resolved": "urn:visionflow:owl:class:performance-optimization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Physical Layer]]",
      "resolved": "urn:visionflow:owl:class:physical-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Quality of Service]]",
      "resolved": "urn:visionflow:owl:class:quality-of-service",
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
  - Virtual performance metric representing the time delay between a user action and corresponding system response within networked immersive environments.
- ### In Plain Terms
  - The delay between asking for something and getting a response — for an AI assistant, how long you wait after sending a prompt before the answer starts to appear. Lower latency means a snappier, more responsive experience.
- ### Semantic Classification
  - owl-class:: spatial-computing:Latency
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]]
  - implemented-in-layer:: [[Physical Layer]], [[Network Layer]]
- ### Relationships
  - is-part-of:: [[Network Performance Metrics]], [[Quality of Service]]
  - requires:: [[Measurement Tools]], [[Monitoring System]], [[Timestamp Synchronization]]
  - enables:: [[Performance Optimization]], [[Quality Assessment]], [[SLA Monitoring]], [[User Experience Tuning]]
  - depends-on:: [[Network Infrastructure]], [[Routing Protocol]], [[Bandwidth]], [[Processing Delay]], [[Propagation Delay]]
- ### Content
  Latency — content pending enrichment.
- ### Provenance
  - sources:: [[ETSI ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
