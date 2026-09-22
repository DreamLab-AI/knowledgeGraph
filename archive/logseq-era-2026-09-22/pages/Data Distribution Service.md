public:: true

# Data Distribution Service

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-distribution-service", "@type":"Page", "title":"Data Distribution Service", "vc:slug":"data-distribution-service", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-distribution-service",
  "@type":"Class",
  "label":"Data Distribution Service",
  "definition":"The Data Distribution Service is a middleware standard for real-time, data-centric publish-subscribe communication between distributed system components. It defines a global data space in which publishers and subscribers exchange typed data samples without direct knowledge of one another, governed by configurable quality-of-service policies for reliability, latency, and durability. It is widely used in robotics, autonomous vehicles, and other systems requiring deterministic machine-to-machine messaging.",
  "domain":"robotics",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:middleware","label":"Middleware"}],
  "relations":{
    "supports":[{"@id":"urn:ngm:class:real-time-communication","label":"Real-Time Communication"},{"@id":"urn:ngm:class:robot-operating-system","label":"Robot Operating System"},{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "uses":[{"@id":"urn:ngm:class:quality-of-service","label":"Quality of Service"},{"@id":"urn:ngm:class:message-broker","label":"Message Broker"}],
    "requires":[{"@id":"urn:ngm:class:real-time-systems","label":"Real-Time Systems"},{"@id":"urn:ngm:class:quality-of-service","label":"Quality of Service"}],
    "enables":[{"@id":"urn:ngm:class:autonomous-vehicle","label":"Autonomous Vehicle"},{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}],
    "implements":[{"@id":"urn:ngm:class:middleware","label":"Middleware"}],
    "relatedTo":[{"@id":"urn:ngm:class:ros","label":"ROS"},{"@id":"urn:ngm:class:robot-control","label":"Robot Control"},{"@id":"urn:ngm:class:sensor-fusion","label":"Sensor Fusion"}],
    "partOf":[{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}],
    "bridgesTo":[{"@id":"urn:ngm:class:robotics","label":"Robotics"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:dds-middleware","label":"DDS Middleware"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The [[Data Distribution Service]] is a [[Middleware]] standard for real-time, data-centric publish-subscribe communication between distributed components.
- It defines a global data space with configurable [[Quality of Service]] policies governing reliability, latency, and durability.
- It is the messaging backbone of the [[Robot Operating System]] and many [[Real-Time Systems]].
- ### Overview
- The Data Distribution Service organises communication around data rather than connections. Publishers write typed samples to named topics and subscribers read them, with the middleware handling discovery, delivery, and matching so the two sides never need direct references to each other. This decoupling in time, space, and flow suits dynamic, fault-tolerant systems.
- A defining feature is its rich set of quality-of-service policies. Designers can independently configure reliability, deadlines, latency budgets, history depth, durability, and ownership, allowing a single bus to carry both best-effort sensor streams and strictly reliable command channels. This makes deterministic machine-to-machine messaging practical at scale.
- The standard is maintained by the Object Management Group and serves as the default transport for modern robot middleware. Its data-centric, peer-to-peer architecture provides interoperability across vendors and supports demanding domains such as autonomous vehicles, industrial control, and aerospace.
- ### Mechanisms
- Data-centric publish-subscribe: components exchange typed samples through named topics.
- Automatic discovery: publishers and subscribers find and match each other without central brokers.
- Quality-of-service contracts: per-topic policies tune reliability, latency, durability, and history.
- Global data space: a shared logical model of all distributed data the system holds.
- Vendor interoperability: a common wire and behaviour standard lets implementations interwork.
- ### Applications
- Carrying sensor, command, and state messages in the [[Robot Operating System]].
- Providing deterministic buses for [[Autonomous Vehicle]] and industrial control stacks.
- Connecting [[Sensor Fusion]] and [[Robot Control]] components in real time.
- Underpinning resilient [[Distributed Systems]] that need configurable delivery guarantees.
- ### Relationships
- supports:: [[Real-Time Communication]]
- supports:: [[Robot Operating System]]
- supports:: [[Interoperability]]
- uses:: [[Quality of Service]]
- uses:: [[Message Broker]]
- requires:: [[Real-Time Systems]]
- requires:: [[Quality of Service]]
- enables:: [[Autonomous Vehicle]]
- enables:: [[Distributed Systems]]
- implements:: [[Middleware]]
- relatedTo:: [[ROS]]
- relatedTo:: [[Robot Control]]
- relatedTo:: [[Sensor Fusion]]
- partOf:: [[Distributed Systems]]
- bridgesTo:: [[Robotics]]
- ### Provenance
- updated:: 2026-06-15
