public:: true
alias:: OPC-UA

# OPC UA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:opc-ua",
  "@type": "Page",
  "vc:slug": "opc-ua",
  "title": "OPC UA",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:opc-ua",
  "@type": "Class",
  "label": "OPC UA",
  "definition": "OPC Unified Architecture (OPC UA) is an open, platform-independent, service-oriented communication standard developed by the OPC Foundation for secure and reliable data exchange in industrial automation and the Industrial Internet of Things. It provides a unified information model that merges process data, alarms, historical data, and device metadata into a single addressable namespace accessible via TCP binary or HTTPS transport, replacing the earlier COM/DCOM-based OPC Classic specifications with a cross-platform, scalable architecture.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:opc-ua-address-space", "label": "OPC UA Address Space"},
      {"@id": "urn:ngm:class:opc-ua-information-model", "label": "OPC UA Information Model"},
      {"@id": "urn:ngm:class:opc-ua-pubsub", "label": "OPC UA PubSub"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:industry-4-0", "label": "Industry 4.0"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:x-509-certificate", "label": "X.509 Certificate"},
      {"@id": "urn:ngm:class:tcp-ip", "label": "TCP/IP"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:industrial-automation", "label": "Industrial Automation"},
      {"@id": "urn:ngm:class:industrial-io-t", "label": "Industrial IoT"},
      {"@id": "urn:ngm:class:real-time-monitoring", "label": "Real-Time Monitoring"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:smart-manufacturing", "label": "Smart Manufacturing"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:service-oriented-architecture", "label": "Service-Oriented Architecture"},
      {"@id": "urn:ngm:class:publish-subscribe-pattern", "label": "Publish-Subscribe Pattern"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:semantic-interoperability", "label": "Semantic Interoperability"},
      {"@id": "urn:ngm:class:mqtt", "label": "MQTT"},
      {"@id": "urn:ngm:class:open-standard", "label": "Open Standard"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:opc-foundation", "label": "OPC Foundation"},
      {"@id": "urn:ngm:class:iec", "label": "IEC"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:modbus", "label": "Modbus"},
      {"@id": "urn:ngm:class:profinet", "label": "PROFINET"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"},
      {"@id": "urn:ngm:class:control-system", "label": "Control System"},
      {"@id": "urn:ngm:class:programmable-logic-controller", "label": "Programmable Logic Controller"},
      {"@id": "urn:ngm:class:scada", "label": "SCADA"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:opc-unified-architecture", "label": "OPC Unified Architecture"},
    {"@id": "urn:ngm:class:iec-62541-opc-ua", "label": "IEC 62541 OPC UA"}
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
  - OPC UA is the dominant open [[Interoperability Standard]] for industrial data exchange, providing a vendor-neutral, platform-independent communication layer that exposes machine and process data through a rich [[Semantic Interoperability]] information model spanning [[Industrial Automation]] systems through to cloud analytics.

- ### Relationships
  - OPC UA sits at the integration boundary between field-level devices and enterprise systems, enabling [[Industrial IoT]] by exposing [[Sensor]] and [[Control System]] data through a unified address space. Its publish-subscribe extension (OPC UA PubSub) integrates with [[MQTT]] brokers for scalable cloud-to-edge messaging. The semantic information model is the basis for [[Digital Twin]] population, allowing device capabilities and process variables to be replicated into virtual representations. The standard's [[Open Standard]] governance through the OPC Foundation ensures multi-vendor [[Semantic Interoperability]], while [[Real-Time Monitoring]] platforms consume OPC UA data streams for condition monitoring and predictive maintenance.

- ### Content
  - OPC (OLE for Process Control) Classic emerged in the mid-1990s to address the fragmentation of proprietary industrial protocols, but relied on Microsoft COM/DCOM, limiting its applicability to Windows environments and creating firewall traversal problems. The OPC Foundation began work on OPC UA in 2003, publishing the IEC 62541 standard series in 2010. OPC UA addressed the platform limitation by adopting TCP/IP binary transport and HTTPS, making it deployable on embedded controllers, Linux servers, and cloud platforms alike.

  - OPC UA's architecture separates the information model from the transport layer. The address space is an object graph of nodes — variables, methods, objects, and data types — each with attributes and references, enabling rich semantic description of industrial assets. Security is first-class: every connection authenticates with X.509 certificates and supports message signing and encryption at the session layer. Companion specifications extend the core model for specific industries and machine types, including robotics (OPC UA for Robotics), machine tools (OPC UA for Machine Tools / umati), and manufacturing execution systems.

  - OPC UA is the de facto integration backbone of Industry 4.0 and smart manufacturing initiatives. It enables horizontal integration across heterogeneous machines on a production floor and vertical integration from PLCs to MES and ERP systems without custom middleware. The OPC UA PubSub profile, introduced in version 1.04, adds broker-based messaging via MQTT and AMQP, enabling high-fan-out data distribution to cloud analytics platforms and digital twin engines with minimal latency.

  - From 2023 through 2025, OPC UA adoption has expanded beyond traditional discrete and process manufacturing into energy, building automation, and healthcare equipment. The umati (universal machine technology interface) initiative has connected thousands of machine tools globally using OPC UA. TSN (Time-Sensitive Networking) integration at the Ethernet layer now enables deterministic, low-latency OPC UA communication for motion control applications, positioning OPC UA as the convergence point for IT and OT networks in next-generation industrial facilities.