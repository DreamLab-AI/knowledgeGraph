public:: true

# DDS Middleware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dds-middleware",
  "@type": "Page",
  "vc:slug": "dds-middleware",
  "title": "DDS Middleware",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dds-middleware",
  "@type": "Class",
  "label": "DDS Middleware",
  "definition": "Data Distribution Service (DDS) Middleware is an OMG-standardised publish-subscribe communication middleware designed for real-time, scalable, and decentralised data exchange in safety-critical and high-performance distributed systems. It defines a Data-Centric Publish-Subscribe (DCPS) model in which participants discover each other automatically and exchange typed data via a global data space, governed by a rich set of Quality of Service (QoS) policies covering reliability, latency, deadline, liveliness, and durability. DDS is the foundational communication layer for ROS 2, NATO's STANAG 4910 tactical networks, and aerospace control systems.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:middleware",
      "label": "Middleware"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality of Service Policy"
      },
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Data-Centric Publish-Subscribe"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:network-transport",
        "label": "Network Transport"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Publish-Subscribe Pattern"
      },
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      },
      {
        "@id": "urn:ngm:class:distributed-system-protocol",
        "label": "Distributed System Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-robotics",
        "label": "Collaborative Robotics"
      },
      {
        "@id": "urn:ngm:class:robot-kinematics",
        "label": "Robot Kinematics"
      },
      {
        "@id": "urn:ngm:class:industrial-robot",
        "label": "Industrial Robot"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      },
      {
        "@id": "urn:ngm:class:real-time-system",
        "label": "Real-Time System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ros2",
        "label": "ROS 2"
      },
      {
        "@id": "urn:ngm:class:safety-critical-systems",
        "label": "Safety-Critical System"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:object-management-group",
        "label": "Object Management Group"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:message-broker",
        "label": "Message Broker"
      },
      {
        "@id": "urn:ngm:class:mqtt",
        "label": "MQTT"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:middleware-layer",
        "label": "Middleware Layer"
      },
      {
        "@id": "urn:ngm:class:time-sensitive-networking",
        "label": "Time-Sensitive Networking"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-distribution-service",
      "label": "Data Distribution Service"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[DDS Middleware]] is an OMG-standardised [[Middleware]] implementing Data-Centric Publish-Subscribe semantics for real-time [[Distributed Systems]], providing automatic participant discovery and fine-grained Quality of Service policies that guarantee deterministic, low-latency data exchange in safety-critical robotics, defence, and aerospace applications.

- ### Relationships
  - DDS Middleware is a specialised [[Middleware]] that operates within a [[Middleware Layer]] in distributed architectures. It implements [[Communication Protocol]] semantics tailored for [[Distributed Systems]] including resource-constrained [[Embedded Systems]]. Its deterministic QoS guarantees enable [[Collaborative Robotics]] deployments and underpin [[Industrial Robot]] control networks where reliable low-latency data exchange is safety-critical. [[Robot Kinematics]] computation pipelines in ROS 2 communicate joint states, sensor readings, and control commands via DDS topics, making DDS integral to modern robotics infrastructure. The real-time performance characteristics also apply to [[Distributed System Protocol]] requirements in simulation and digital twin environments.

- ### Content
  - DDS was standardised by the Object Management Group (OMG) in 2003 following work at Real-Time Innovations (RTI) and other vendors in the late 1990s. The core motivation was the inadequacy of client-server and broker-based middleware (CORBA, SOAP) for embedded real-time systems where a central broker creates a single point of failure and adds unacceptable latency. DDS introduces a fully decentralised, peer-to-peer data model: publishers write data to named Topics; subscribers declare interest in Topics; the middleware handles discovery and delivery without a central broker. The specification defines the DCPS (Data-Centric Publish-Subscribe) API and the RTPS (Real-Time Publish-Subscribe) wire protocol, enabling interoperability across vendor implementations.

  - The DDS QoS policy framework is its defining differentiator. Over 20 distinct QoS policies govern data exchange: RELIABILITY (best-effort vs. reliable), DEADLINE (maximum acceptable data age), LATENCY_BUDGET, LIVELINESS (automatic detection of failed participants), DURABILITY (late-joining subscriber receives historical data), HISTORY (depth of sample cache), OWNERSHIP (exclusive vs. shared write access), and PARTITION (logical namespace isolation). This policy set allows system designers to express application-level requirements declaratively, with the middleware enforcing them automatically. Automatic discovery uses SPDP (Simple Participant Discovery Protocol) and SEDP (Simple Endpoint Discovery Protocol) over multicast, eliminating manual configuration.

  - DDS became the communication backbone of ROS 2 (Robot Operating System 2), released in 2017 as a complete redesign of ROS 1 to address real-time and production deployment shortcomings. ROS 2's rmw (ROS middleware) abstraction layer supports multiple DDS implementations—FastDDS (eProsima, default), Cyclone DDS (Eclipse), RTI Connext, and GurumDDS—providing vendor portability. Beyond robotics, DDS is mandated in multiple defence and aerospace standards: the US DoD's FACE (Future Airborne Capability Environment) technical standard, NATO's STANAG 4910 for UAS communications, and air traffic management systems. Medical device interoperability profiles (OpenICE) also use DDS for physiological data distribution in operating theatre environments.

  - Through 2024–2025, DDS adoption continues to expand with the growth of autonomous vehicles, drone swarms, and smart manufacturing. The OMG DDS Security specification (DDS-Security) adds authentication, authorisation, and encryption plugins to the wire protocol, addressing the attack surface of safety-critical real-time networks. ROS 2 Jazzy Jalisco (2024 LTS release) further matures the DDS abstraction, and micro-ROS extends DDS connectivity to microcontrollers using Micro XRCE-DDS. Integration with time-sensitive networking (TSN) Ethernet hardware is an active standardisation area, coupling DDS's logical QoS policies with Layer 2 scheduling guarantees for deterministic industrial network fabrics.