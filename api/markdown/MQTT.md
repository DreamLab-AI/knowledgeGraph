public:: true

# mqtt
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:046adb88a188465c6ba56443392821e60e97d3806445ba0e9daea6fb7a94271e",
  "@type": "Page",
  "vc:slug": "mqtt",
  "title": "mqtt",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mqtt",
  "@type": "Class",
  "label": "MQTT",
  "definition": "MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol standardised as ISO/IEC 20922 and OASIS MQTT 5.0, designed for constrained devices and unreliable networks with minimal protocol overhead. Clients connect to a central broker that routes messages by topic; publishers post payloads to topic strings and subscribers receive all messages matching their subscribed topic filters. MQTT defines three quality-of-service levels—at most once, at least once, and exactly once—allowing integrators to balance message delivery guarantees against network and compute cost.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communications"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"},
      {"@id": "urn:ngm:class:sensor-data", "label": "Sensor Data"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"},
      {"@id": "urn:ngm:class:telemetry-and-analytics", "label": "Telemetry & Analytics"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol standardised as ISO/IEC 20922 and OASIS MQTT 5.0, designed for constrained devices and unreliable networks with minimal protocol overhead. Clients connect to a central broker that routes messages by topic; publishers post payloads to topic strings and subscribers receive all messages matching their subscribed topic filters. MQTT defines three quality-of-service levels—at most once, at least once, and exactly once—allowing integrators to balance message delivery guarantees against network and compute cost.

- ### Semantic Classification
  - owl-class:: mqtt:MQTT
  - owl-role:: Concept

- ### Relationships
  - enables [[Internet of Things]]
  - enables [[Sensor Data]]
  - uses [[Communication Protocol]]
  - relatedTo [[Edge Computing]]
  - relatedTo [[Embedded Systems]]
  - relatedTo [[Telemetry & Analytics]]

- ### Content
  - MQTT operates over TCP/IP (or WebSockets for browser clients) using a binary-encoded fixed header as small as two bytes, making it far more bandwidth-efficient than HTTP-based polling for high-frequency telemetry from thousands of concurrent sensors. The broker architecture decouples producers from consumers: an IoT sensor publishing temperature readings need not know which cloud services or dashboards consume that data. Brokers such as Eclipse Mosquitto, EMQX, and HiveMQ implement the MQTT specification and provide access control, persistence, and clustering.
  - MQTT 5.0 extended the protocol with user-defined properties, subscription identifiers, message expiry intervals, and reason codes for error diagnostics—capabilities absent in MQTT 3.1.1. Session expiry intervals and retained messages (which persist the last published value for a topic) support scenarios where devices connect intermittently and need to catch up on the latest state immediately upon reconnecting.
  - In industrial IoT (IIoT) contexts, MQTT is commonly combined with Sparkplug B, a payload encoding specification that defines a standard topic namespace and payload structure for SCADA and MES systems. For ROS 2-based robotic systems, MQTT bridges allow sensor data from constrained microcontrollers to be forwarded into the DDS-based ROS 2 message bus, enabling integration of lightweight edge hardware with full robotic software stacks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
