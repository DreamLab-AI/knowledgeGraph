public:: true

# micro-ROS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:636053e4cb56ec85eeff9e0f816096f3bf81fb42ad98435da8dadcf7cd998aec",
  "@type": "Page",
  "vc:slug": "micro-ros",
  "title": "micro-ROS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:embedded-systems",
      "vc:label": "Embedded Systems"
    },
    {
      "@id": "urn:visionflow:linked:real-time-operating-system",
      "vc:label": "Real-Time Operating System"
    },
    {
      "@id": "urn:visionflow:linked:real-time-control",
      "vc:label": "Real-Time Control"
    },
    {
      "@id": "urn:visionflow:linked:ros",
      "vc:label": "ROS"
    },
    {
      "@id": "urn:visionflow:linked:dds-middleware",
      "vc:label": "DDS Middleware"
    },
    {
      "@id": "urn:visionflow:linked:robot-operating-system",
      "vc:label": "Robot Operating System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "micro-ROS"
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
  "@id": "urn:ngm:class:micro-ros",
  "@type": "Class",
  "label": "micro-ROS",
  "definition": "micro-ROS is a framework that brings the ROS 2 programming model and communication to resource-constrained microcontrollers, allowing embedded devices to participate as first-class nodes in a ROS graph.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-operating-system",
      "label": "Robot Operating System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      },
      {
        "@id": "urn:ngm:class:real-time-operating-system",
        "label": "Real-Time Operating System"
      },
      {
        "@id": "urn:ngm:class:dds-middleware",
        "label": "DDS Middleware"
      },
      {
        "@id": "urn:ngm:class:microcontroller",
        "label": "Microcontroller"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-control",
        "label": "Real-Time Control"
      },
      {
        "@id": "urn:ngm:class:ros",
        "label": "ROS Node"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ros-2",
        "label": "ROS 2"
      },
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Publish-Subscribe Messaging"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:freertos",
        "label": "FreeRTOS"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Embedded Robotics"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ros",
        "label": "ROS"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:micro-ros-framework",
      "label": "micro-ROS Framework"
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
  "@id": "urn:visionflow:annotation:link-resolutions:micro-ros:480d8a5b699d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:636053e4cb56ec85eeff9e0f816096f3bf81fb42ad98435da8dadcf7cd998aec"
  },
  "vc:resolutions": [
    {
      "raw": "[[Embedded Systems]]",
      "resolved": "urn:visionflow:linked:embedded-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Operating System]]",
      "resolved": "urn:visionflow:linked:real-time-operating-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Control]]",
      "resolved": "urn:visionflow:linked:real-time-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ROS]]",
      "resolved": "urn:visionflow:linked:ros",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DDS Middleware]]",
      "resolved": "urn:visionflow:linked:dds-middleware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Operating System]]",
      "resolved": "urn:visionflow:linked:robot-operating-system",
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
  - micro-ROS is a framework that brings the ROS 2 programming model and communication to resource-constrained microcontrollers, allowing embedded devices to participate as first-class nodes in a ROS graph.

- ### Semantic Classification
  - owl-class:: robotics:microROS
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robot Operating System]]
  - bridges-to:: [[ROS]], [[DDS Middleware]]
  - requires:: [[Embedded Systems]], [[Real-Time Operating System]]
  - enables:: [[Real-Time Control]]

- ### Content
  - micro-ROS adapts the ROS 2 client libraries and a lightweight middleware to run on microcontrollers with limited memory and compute, typically over a real-time operating system. An agent on a more capable host bridges the microcontroller to the wider ROS 2 network.
  - This lets low-level controllers handling sensing and actuation expose ROS topics and services directly, integrating tightly timed embedded behaviour with higher-level robot software. It extends the ROS ecosystem down to the deeply embedded layer.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
