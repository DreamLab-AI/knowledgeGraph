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
  "definition": "MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol standardised as ISO/IEC 20922 and OASIS MQTT 5.0, designed for constrained devices and low-bandwidth or unreliable networks with minimal protocol overhead. Clients connect to a central broker that routes messages hierarchically by topic string; publishers post payloads to topic endpoints and subscribers receive all messages matching wildcard-capable topic filters. MQTT defines three quality-of-service levels—at most once (QoS 0), at least once (QoS 1), and exactly once (QoS 2)—enabling integrators to balance delivery guarantees against network and compute cost across heterogeneous deployments spanning embedded microcontrollers to cloud-scale brokers.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:sensor-data",
        "label": "Sensor Data"
      },
      {
        "@id": "urn:ngm:class:real-time-streaming",
        "label": "Real-Time Data Streaming"
      },
      {
        "@id": "urn:ngm:class:telemetry-and-analytics",
        "label": "Telemetry & Analytics"
      },
      {
        "@id": "urn:ngm:class:event-driven-architecture",
        "label": "Event Driven Architecture"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      },
      {
        "@id": "urn:ngm:class:tcp-ip",
        "label": "TCP/IP"
      },
      {
        "@id": "urn:ngm:class:web-sockets",
        "label": "WebSockets"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS/SSL"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:message-broker",
        "label": "Message Broker"
      },
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Publish-Subscribe Pattern"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Publish-Subscribe Pattern"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:industrial-io-t",
        "label": "Industrial IoT"
      },
      {
        "@id": "urn:ngm:class:smart-home-automation",
        "label": "Smart Home Automation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:oasis",
        "label": "OASIS Open"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:amqp",
        "label": "AMQP"
      },
      {
        "@id": "urn:ngm:class:co-ap",
        "label": "CoAP"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ros-2",
        "label": "ROS 2"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Machine Learning Inference"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-serialization",
        "label": "Data Serialisation"
      },
      {
        "@id": "urn:ngm:class:scada",
        "label": "SCADA"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:message-queuing-telemetry-transport",
      "label": "Message Queuing Telemetry Transport"
    }
  ],
  "qualityScore": 0.75,
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - MQTT (Message Queuing Telemetry Transport) is a lightweight [[Publish-Subscribe Pattern]] messaging protocol standardised as [[ISO/IEC 20922]] and OASIS MQTT 5.0, designed for constrained devices and unreliable networks with minimal protocol overhead. Clients connect to a central [[Message Broker]] that routes messages hierarchically by topic string; publishers post payloads to named topic endpoints and subscribers receive all messages matching their subscribed topic filters, including wildcard patterns using `+` (single-level) and `#` (multi-level) characters. Three [[Quality of Service]] levels—at most once, at least once, and exactly once—allow integrators to balance delivery guarantees against network and compute cost, making MQTT the dominant [[Communication Protocol]] for [[Internet of Things]] deployments worldwide.

- ### Overview
  - MQTT was originally designed in 1999 by Andy Stanford-Clark (IBM) and Arlen Nipper (Cirrus Link) for monitoring oil pipelines via satellite links with limited bandwidth and intermittent connectivity. Its binary-encoded fixed header can be as small as two bytes, making it far more bandwidth-efficient than HTTP-based polling for high-frequency [[Telemetry and Analytics]] from large numbers of concurrent sensors.
  - The broker architecture fundamentally decouples producers from consumers: an [[Embedded Systems]] sensor publishing temperature readings need not know which cloud services, dashboards, or analytics engines consume that data. This decoupling is the core advantage over point-to-point [[REST API]] or [[HTTP]] approaches in [[Distributed Systems]] contexts.
  - MQTT operates primarily over [[TCP/IP]] for reliable delivery, with [[WebSockets]] transport enabling browser-based clients. [[TLS/SSL]] wraps the connection for security. MQTT 5.0 (2019) extended the protocol with user-defined properties, subscription identifiers, message expiry intervals, shared subscriptions, and reason codes for error diagnostics—capabilities absent in the widely deployed MQTT 3.1.1.
  - The protocol is now standardised by [[OASIS Open]] and adopted by [[ISO/IEC 20922]], cementing its position as the canonical lightweight messaging layer in [[Internet of Things]] architecture.

- ### Key Components
  - **Broker** — the central server (e.g. Eclipse Mosquitto, [[EMQX]], HiveMQ, VerneMQ) that receives all messages from publishing clients and forwards them to matching subscribers. Brokers implement access control, message persistence, clustering, and monitoring.
  - **Topics** — hierarchical UTF-8 strings (e.g. `sensors/building-a/floor-3/temperature`) that act as routing addresses. Wildcard characters `+` and `#` in subscription filters enable bulk subscriptions across namespaces, supporting [[Event-Driven Architecture]] at scale.
  - **Quality of Service (QoS) Levels**
    - QoS 0 — "at most once": fire-and-forget; no acknowledgement; lowest overhead.
    - QoS 1 — "at least once": acknowledged delivery; duplicates possible on retry.
    - QoS 2 — "exactly once": four-part handshake; guaranteed single delivery; highest overhead.
  - **Retained Messages** — the broker stores the last published message on a topic and immediately delivers it to new subscribers, enabling devices to receive the current state on first connect without waiting for the next publish cycle.
  - **Last Will and Testament (LWT)** — a message pre-registered with the broker that is published automatically if a client disconnects unexpectedly, enabling presence detection and fault alerting in [[Internet of Things]] fleets.
  - **Persistent Sessions** — the broker buffers QoS 1/2 messages for offline clients and delivers them upon reconnection, critical for intermittently connected [[Embedded Systems]] devices.
  - **MQTT 5.0 Enhancements** — session expiry intervals, message expiry, topic aliases, request/response patterns, shared subscriptions, and flow control via receive maximum property.
  - **Authentication & Authorisation** — username/password at connect time (MQTT 3.1.1), enhanced authentication via SASL-like exchange (MQTT 5.0), [[TLS/SSL]] mutual authentication, and broker-level ACL (access control list) per topic.

- ### Applications and Use Cases
  - **Industrial IoT (IIoT)** — MQTT combined with [[Sparkplug B]] (a payload encoding specification from Cirrus Link) provides a standardised topic namespace and payload structure for [[SCADA]], MES, and [[Digital Twin]] systems. Sparkplug B defines birth, death, and data messages that enable automatic device discovery and state reconciliation.
  - **Smart Home Automation** — home automation platforms such as Home Assistant and OpenHAB use MQTT as their primary device integration layer, enabling hundreds of sensors and actuators (lights, locks, thermostats, motion detectors) to communicate through a local broker. [[Smart Home Automation]] integrations rely on MQTT for low-latency command-response cycles.
  - **Connected Vehicles and Telematics** — MQTT's low overhead suits [[Vehicle Telematics]] applications where ECUs and telematics control units transmit GPS position, engine diagnostics, and driver behaviour metrics over cellular networks with variable quality.
  - **Healthcare Monitoring** — wearable and implantable medical devices use MQTT to stream vital signs (heart rate, glucose, SpO2) to cloud platforms for remote patient monitoring, leveraging QoS 1 delivery to ensure data is not lost during brief network disruptions.
  - **Agriculture** — soil moisture, temperature, humidity, and irrigation actuator status are collected from field sensors via MQTT brokers running on [[Edge Computing]] gateways before aggregation to cloud analytics.
  - **Robotics Integration** — MQTT bridges allow sensor data from resource-constrained microcontrollers to be forwarded into [[ROS 2]]'s DDS-based message bus, enabling lightweight edge hardware to participate in full robotic software stacks without running a full DDS stack.
  - **Machine Learning at the Edge** — [[Real-Time Data Streaming]] via MQTT feeds [[Machine Learning Inference]] pipelines deployed at the edge, enabling anomaly detection, predictive maintenance, and quality control without round-trips to the cloud.
  - **Energy Management** — smart meters, solar inverters, and battery management systems report consumption and generation data via MQTT to energy management platforms, supporting demand response and grid balancing.

- ### Mechanisms and Protocol Detail
  - **Connection Lifecycle** — clients initiate a TCP connection, send a CONNECT packet with client ID, optional credentials, LWT, and clean-session flag; the broker responds with CONNACK including a return/reason code and session-present flag.
  - **Topic Filtering and Routing** — brokers maintain subscription trees (typically trie structures) for efficient O(log n) or O(1) matching of incoming PUBLISH packets to subscriber sets across potentially millions of concurrent connections.
  - **Flow Control (MQTT 5.0)** — the receive maximum property limits in-flight QoS 1/2 messages, preventing fast publishers from overwhelming slow consumers without requiring application-level backpressure.
  - **Shared Subscriptions** — allow multiple clients to subscribe to the same topic as a load-balanced group (prefixed `$share/<group>/`), enabling horizontal scaling of consumer services without broker-side changes.
  - **Broker Clustering** — production deployments use clustered brokers (EMQX, HiveMQ) with distributed topic registries and [[Horizontal Scaling]] via shared-nothing or shared-state architectures, supporting millions of concurrent MQTT connections per cluster.

- ### Relationships
  - enables:: [[Internet of Things]]
  - enables:: [[Sensor Data]]
  - enables:: [[Real-Time Data Streaming]]
  - enables:: [[Telemetry and Analytics]]
  - enables:: [[Event-Driven Architecture]]
  - uses:: [[Communication Protocol]]
  - uses:: [[TCP/IP]]
  - uses:: [[WebSockets]]
  - uses:: [[TLS/SSL]]
  - requires:: [[Message Broker]]
  - requires:: [[Publish-Subscribe Pattern]]
  - dependsOn:: [[Network Infrastructure]]
  - dependsOn:: [[Embedded Systems]]
  - implements:: [[Publish-Subscribe Pattern]]
  - supports:: [[Edge Computing]]
  - supports:: [[Industrial IoT]]
  - supports:: [[Smart Home Automation]]
  - supports:: [[Vehicle Telematics]]
  - standardizedBy:: [[OASIS Open]]
  - standardizedBy:: [[ISO/IEC 20922]]
  - contrastsWith:: [[AMQP]]
  - contrastsWith:: [[CoAP]]
  - contrastsWith:: [[HTTP]]
  - contrastsWith:: [[STOMP]]
  - bridges-to:: [[ROS 2]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Machine Learning Inference]]
  - relatedTo:: [[Sparkplug B]]
  - relatedTo:: [[Data Serialisation]]
  - relatedTo:: [[SCADA]]

- ### Comparison with Related Protocols
  - **vs [[AMQP]]** — AMQP (Advanced Message Queuing Protocol) is a heavier, feature-rich protocol designed for enterprise message queuing with routing keys, exchanges, and transaction support; MQTT favours minimal overhead and is better suited to constrained devices. AMQP is preferred when complex routing logic or guaranteed transactionality is required.
  - **vs [[CoAP]]** — CoAP (Constrained Application Protocol) operates over UDP, making it better suited than MQTT for true packet-level constraints (e.g. LoRa, 6LoWPAN), but lacks MQTT's broker-mediated decoupling and persistent session model.
  - **vs [[HTTP]]** — HTTP request-response polling is stateless and far more verbose; MQTT's persistent connection and push model dramatically reduces latency and bandwidth for high-frequency updates from large device fleets.
  - **vs [[STOMP]]** — STOMP (Streaming Text Oriented Messaging Protocol) is a text-based protocol compatible with many brokers but with higher per-message overhead than MQTT's binary encoding; it lacks QoS levels natively.
  - **vs [[DDS]]** — Data Distribution Service is a peer-to-peer middleware standard used heavily in robotics ([[ROS 2]]) and defence; it offers richer QoS policies and discovery but requires more processing and memory than MQTT, making MQTT preferable for constrained edge nodes.

- ### Standards and Context
  - **OASIS MQTT 3.1.1** (2014) — widely deployed baseline version; standardised by [[OASIS Open]].
  - **ISO/IEC 20922** (2016) — [[ISO/IEC 20922]] adopted MQTT 3.1.1 as an international standard, broadening its use in regulated industries.
  - **OASIS MQTT 5.0** (2019) — major revision adding reason codes, user properties, shared subscriptions, message expiry, topic aliases, and enhanced authentication. See [[OASIS Open]].
  - **Sparkplug B** (Eclipse Foundation, 2019+) — payload encoding and topic namespace specification layered on MQTT for [[SCADA]] and [[Industrial IoT]] interoperability; defines structured Protobuf payloads and lifecycle messages (NBIRTH, DBIRTH, NDATA, NDEATH).
  - **MQTT-SN** — MQTT for Sensor Networks; a UDP-based variant designed for non-TCP networks such as Zigbee and 6LoWPAN, extending MQTT's reach to the most constrained wireless sensor networks.
  - Security considerations: MQTT 3.1.1 transmits credentials in plaintext without transport-layer security; production deployments mandate [[TLS/SSL]] (port 8883) and broker-level ACLs. MQTT 5.0's enhanced authentication supports OAuth 2.0 and Kerberos SASL mechanisms.
  - Governing bodies: [[OASIS Open]], Eclipse Foundation (Eclipse Mosquitto, Eclipse Paho client libraries), [[ISO/IEC 20922]].

- ### Current Landscape (2026)
  - MQTT over QUIC has become the headline protocol evolution, replacing the TCP transport with QUIC/UDP (RFC 9000) for single round-trip connection setup, no head-of-line blocking and seamless connection migration across Wi-Fi/cellular handovers; it is documented as an OASIS Technical Note and EMQX remains the first and, as of 2026, effectively the only major broker with production support (NanoMQ also ships it), with Mosquitto and VerneMQ still in development.
  - The OASIS MQTT Technical Committee is shaping post-5.0 work informally branded MQTT 5.1 and beyond, targeting subscription filters, batch publishing and MQTT-SN for ultra-constrained devices, alongside exploratory efforts such as MQTT/RT (real-time peer-to-peer for robotics/autonomous systems) and MQTT Streams (built-in replay, persistence and deduplication).
  - The broker market in 2026 consolidates around EMQX (Erlang, proven 100M concurrent connections on a 23-node cluster, v6.2.0 released April 2026, and now under BSL 1.1 since v5.9.0), Eclipse Mosquitto (lightweight C edge broker, ~v2.0.22, commercialised as Cedalo/Pro Mosquitto), HiveMQ (Java, enterprise/Sparkplug backbone) and the fast-growing NanoMQ for edge/gateway workloads.
  - MCP over MQTT and A2A over MQTT emerged in 2025-2026 as EMQX-led profiles carrying the Model Context Protocol and agent-to-agent traffic over the broker, adding service registration/discovery, load balancing and centralised broker-based authentication for edge AI agents.
  - Broker-native transport is being positioned as a security answer to HTTP-native agent flaws: after the Starlette/FastAPI "BadHost" vulnerability (CVE-2026-48710) exposed large fleets of MCP servers, EMQX argued that outbound MQTT clients with zero inbound ports and topic-based ACLs eliminate the URL-spoofing and header-parser attack surface of HTTP listeners.
  - Sparkplug 3.0 (Eclipse Sparkplug Working Group, Eclipse Tahu) has formalised the IIoT payload and state-management specification, tightening MQTT 5.0 session semantics (Clean Start vs Clean Session) and driving MQTT+Sparkplug as the Unified Namespace standard competing with OPC UA Pub/Sub (IEC 62541-14).
  - Security remains the frontier: plaintext MQTT on port 1883 and unauthenticated public brokers persist, and audits through 2025-2026 repeatedly found large numbers of exposed MCP/broker endpoints with no authentication, keeping TLS 1.3, mutual auth and strict topic ACLs the central operational challenge.

- ### References
  - 1. EMQ (EMQX) (2025). MQTT Trends for 2025 and Beyond: Powering the Future of AI and IoT. https://www.emqx.com/en/blog/mqtt-trends-for-2025-and-beyond
  - 2. EMQ (EMQX) (2026). A Comprehensive Comparison of Open Source MQTT Brokers in 2026. https://www.emqx.com/en/blog/a-comprehensive-comparison-of-open-source-mqtt-brokers-in-2023
  - 3. ASP Wiki (2026). MQTT and Sparkplug for Industrial IoT — Deep Dive (incl. MQTT over QUIC 2025). https://wiki.aspotomasyon.com/article/mqtt-sparkplug-industrial-iot-deep-dive
  - 4. EMQX Enterprise Docs (2026). MCP over MQTT — Overview. https://docs.emqx.com/en/emqx/latest/emqx-ai/mcp-over-mqtt/overview.html
  - 5. EMQTech / EMQ (2026). Fixing AI Agent Security with MQTT Broker Architecture (Starlette BadHost, CVE-2026-48710). https://www.linkedin.com/posts/emqtech_cybersecurity-aiagents-badhost-activity-7470913136435331072-Hzgx

- ### Provenance
  - sources:: OASIS MQTT 5.0 specification; ISO/IEC 20922:2016; Eclipse Foundation MQTT resources; Sparkplug B specification (Eclipse Foundation); EMQX documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
