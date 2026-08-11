public:: true

# IoT Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9d1ef618e3adece935cf0c169d952354e487798dfe8ab092f47acfa33be6f68a",
  "@type": "Page",
  "vc:slug": "iot-platform",
  "title": "IoT Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:cloud-computing", "vc:label": "Cloud Computing"},
    {"@id": "urn:visionflow:linked:internet-of-things", "vc:label": "Internet of Things"},
    {"@id": "urn:visionflow:linked:mqtt", "vc:label": "MQTT"},
    {"@id": "urn:visionflow:linked:smart-home-automation", "vc:label": "Smart Home Automation"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iot-platform",
  "@type": "Class",
  "label": "IoT Platform",
  "definition": "A managed software layer that connects fleets of physical devices to applications and analytics, providing device provisioning and identity, secure bidirectional messaging, telemetry ingestion, rule-based event processing, over-the-air updates, and digital twin state management, so that organisations can operate heterogeneous sensor and actuator networks at scale without building the connectivity, security, and data-pipeline plumbing themselves.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:cloud-computing",
    "label": "Cloud Computing"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:telemetry", "label": "Telemetry"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:mqtt", "label": "MQTT"},
      {"@id": "urn:ngm:class:message-broker", "label": "Message Broker"},
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event Driven Architecture"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:smart-home-automation", "label": "Smart Home Automation"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A managed software layer that connects fleets of physical devices to applications and analytics, providing device provisioning and identity, secure bidirectional messaging, telemetry ingestion, rule-based event processing, over-the-air updates, and digital twin state management, so that organisations can operate heterogeneous sensor and actuator networks at scale without building the connectivity, security, and data-pipeline plumbing themselves."

- ### Semantic Classification
  - owl-class:: infrastructure:IoTPlatform
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Cloud Computing]]
  - part-of:: [[Internet of Things]]
  - uses:: [[MQTT]], [[Message Broker]]
  - enables:: [[Smart Home Automation]], [[Digital Twin]]

- ### Content

  ## Definition

  An **IoT platform** is the middleware tier of the [[Internet of Things]] stack: it sits between constrained devices at the network edge and the business applications that consume their data. Its core responsibilities are device lifecycle management (registration, authentication, credential rotation, decommissioning), reliable bidirectional messaging, ingestion and buffering of high-volume telemetry, and the routing of events into storage, analytics, and automation systems.

  Most platforms are delivered as cloud services — AWS IoT Core and Azure IoT Hub being the canonical surviving examples, Google Cloud IoT Core having been retired in August 2023 — though self-hosted and open-source options such as ThingsBoard, Eclipse Kapua, and Home Assistant serve on-premises and domestic deployments. They typically speak lightweight publish–subscribe protocols such as [[MQTT]] and CoAP towards devices, and expose HTTP, AMQP, or Kafka-compatible interfaces towards the enterprise, with an internal [[Message Broker]] mediating between the two worlds in an event-driven architecture.

  A distinguishing feature of the modern platform is the **digital twin** or device shadow: a cloud-side document mirroring each device's reported and desired state. Applications write to the twin rather than the device, and the platform reconciles state when connectivity allows — essential for battery-powered or intermittently connected hardware. Combined with rules engines and over-the-air update channels, this lets a small operations team manage millions of endpoints.

  ## Technical Details

  - **Connectivity layer**: protocol adapters (MQTT, MQTT-SN, CoAP, LwM2M, HTTP), TLS termination, X.509 or token-based device identity.
  - **Ingestion and routing**: broker clusters partition telemetry streams; rules engines filter, enrich, and fan events out to time-series databases, stream processors, and serverless functions.
  - **Device management**: fleet registries, grouping and tagging, remote configuration, firmware over-the-air (FOTA) with staged rollouts and rollback.
  - **Edge integration**: gateway runtimes (AWS Greengrass, Azure IoT Edge) push filtering, inference, and local control loops to [[Edge Computing]] nodes, reducing latency and backhaul cost.
  - **Security posture**: per-device least-privilege policies, anomaly detection on traffic patterns, and audit logging are baseline expectations, since compromised device fleets are a favoured botnet substrate.

  In this knowledge graph the IoT platform is the bridging artefact through which event-driven architectures and message brokers reach the physical world, and the component that [[Smart Home Automation]] systems such as Home Assistant instantiate at domestic scale.

  ## Current Landscape

  - **Hyperscaler consolidation**: Google Cloud IoT Core was retired on 16 August 2023 (announced August 2022 with a one-year migration window), and IBM Watson IoT Platform was discontinued shortly afterwards, leaving AWS IoT Core and Azure IoT Hub as the only hyperscaler-native IoT platforms.
  - **GCP's replacement is partners, not product**: Google now directs IoT customers to third-party platforms running on its infrastructure, notably ClearBlade; "GCP IoT" in practice means a self-hosted broker (EMQX, HiveMQ) plus Pub/Sub rather than a managed service.
  - **Microsoft's stack keeps growing**: Azure IoT Operations was added in 2025, extending the Azure IoT Hub / IoT Edge / Digital Twins family to Arc-managed Kubernetes at the edge.
  - **Open-source consolidation**: self-hosted deployments have converged on ThingsBoard (full-stack platform), Balena (container fleet operations), and broker-centric builds on EMQX or HiveMQ; edge runtimes have narrowed to Azure IoT Edge, AWS Greengrass, Open Horizon (LF Edge), and KubeEdge (CNCF).
  - **Vendor longevity is now a first-order selection criterion**: two hyperscaler platform shutdowns within eighteen months forced unplanned fleet migrations and pushed buyers towards exit-strategy assessments (standard protocols, exportable device registries) before committing.

  **Sources**:
  - https://hubble.com/community/comparisons/aws-iot-vs-azure-iot-vs-google-cloud-iot-honest-comparison/
  - https://thingsboard.io/google-iot-core-alternative/
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC12389921/
  - https://cio.economictimes.indiatimes.com/news/internet-of-things/google-cloud-to-disband-iot-core-service-from-aug-2023/93650130
