```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d4fd0b74b852b1911ba0d715428d40e39b4396bcb74a23ae83765b3d56f2e306",
  "@type": "Page",
  "vc:slug": "digital-twin-synchronisation-bus",
  "title": "Digital Twin Synchronisation Bus",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bidirectional-data-flow",
      "vc:label": "Bidirectional Data Flow"
    },
    {
      "@id": "urn:visionflow:linked:conflict-resolution-module",
      "vc:label": "Conflict Resolution Module"
    },
    {
      "@id": "urn:visionflow:linked:distributed-twin-orchestration",
      "vc:label": "Distributed Twin Orchestration"
    },
    {
      "@id": "urn:visionflow:linked:event-log",
      "vc:label": "Event Log"
    },
    {
      "@id": "urn:visionflow:linked:event-stream-processor",
      "vc:label": "Event Stream Processor"
    },
    {
      "@id": "urn:visionflow:linked:iso-23247-addendum",
      "vc:label": "ISO 23247 Addendum"
    },
    {
      "@id": "urn:visionflow:linked:iv-data-layer",
      "vc:label": "IV) Data Layer"
    },
    {
      "@id": "urn:visionflow:linked:message-broker",
      "vc:label": "Message Broker"
    },
    {
      "@id": "urn:visionflow:linked:message-queue",
      "vc:label": "Message Queue"
    },
    {
      "@id": "urn:visionflow:linked:multi-instance-state-coherence",
      "vc:label": "Multi-Instance State Coherence"
    },
    {
      "@id": "urn:visionflow:linked:publish-subscribe-pattern",
      "vc:label": "Publish-Subscribe Pattern"
    },
    {
      "@id": "urn:visionflow:linked:state-store",
      "vc:label": "State Store"
    },
    {
      "@id": "urn:visionflow:linked:state-synchronization-engine",
      "vc:label": "State Synchronization Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin-infrastructure",
      "vc:label": "Digital Twin Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:distributed-system",
      "vc:label": "Distributed System"
    },
    {
      "@id": "urn:visionflow:owl:class:event-driven-architecture",
      "vc:label": "Event-Driven Architecture"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:real-time-digital-twin-synchronization",
      "vc:label": "Real-Time Digital Twin Synchronization"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20248"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Twin Synchronisation Bus"
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
  "@id": "urn:ngm:class:digital-twin-synchronisation-bus",
  "@type": "Class",
  "label": "Digital Twin Synchronisation Bus",
  "definition": "Digital Twin Synchronisation Bus is a type of Digital Twin Infrastructure in the spatial computing domain.",
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
        "@id": "urn:ngm:class:conflict-resolution",
        "label": "Conflict Resolution Module"
      },
      {
        "@id": "urn:ngm:class:message-broker",
        "label": "Message Broker"
      },
      {
        "@id": "urn:ngm:class:state-synchronisation",
        "label": "State Synchronization Engine"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:event-log",
        "label": "Event Log"
      },
      {
        "@id": "urn:ngm:class:message-queue",
        "label": "Message Queue"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-digital-twin-synchronization",
        "label": "Real Time Digital Twin Synchronization"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-twin-infrastructure",
        "label": "Digital Twin Infrastructure"
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

- ### Definition
  - Middleware infrastructure maintaining real-time state coherence and bidirectional synchronisation among distributed digital twin instances through event streaming and conflict resolution.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalTwinSynchronisationBus
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[InfrastructureDomain]]
  - implemented-in-layer:: [[IV) Data Layer]]

- ### Relationships
  - has-part:: [[Message Broker]], [[Event Stream Processor]], [[State Synchronization Engine]], [[Conflict Resolution Module]]
  - is-part-of:: [[Digital Twin Infrastructure]]
  - requires:: [[Message Queue]], [[Event Log]], [[State Store]], [[Network Protocol]]
  - enables:: [[Real-Time Digital Twin Synchronization]], [[Multi-Instance State Coherence]], [[Distributed Twin Orchestration]], [[Bidirectional Data Flow]]
  - depends-on:: [[Distributed System]], [[Event-Driven Architecture]], [[Publish-Subscribe Pattern]]

- ### Content
  Digital Twin Synchronisation Bus — content pending enrichment.

- ### Provenance
  - sources:: [[ISO 23247 Addendum]]
  - migration-date:: 2026-04-26T00:00:00Z
