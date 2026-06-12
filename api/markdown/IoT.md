public:: true

# IoT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:io-t",
  "@type": "Page",
  "vc:slug": "io-t",
  "title": "IoT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:io-t",
  "@type": "Class",
  "label": "IoT",
  "definition": "The Internet of Things (IoT) is the networked ecosystem of physical devices — from industrial sensors to consumer appliances — embedded with processors, software, and communication hardware that enables them to collect, exchange, and act upon data without direct human intervention. IoT extends digital connectivity and data processing capabilities to the physical world at scale.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:industrial-automation", "label": "IndustrialAutomation"},
      {"@id": "urn:ngm:class:supply-chain-management", "label": "Supply Chain Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - IoT (Internet of Things) refers to the broad class of networked physical objects — [[Sensor]] arrays, actuators, embedded microcontrollers, and connected appliances — that communicate over IP networks to aggregate data, trigger automated responses, and integrate with digital services. The term was coined by Kevin Ashton in 1999 in the context of RFID supply chains and has since expanded to encompass billions of endpoints spanning smart homes, industrial plant, transportation, agriculture, and healthcare. IoT is architecturally distinguished from conventional computing by resource-constrained devices, heterogeneous communication protocols, and massive deployment scale.

- ### Relationships
  - IoT systems are built upon [[Sensor]] hardware and [[Edge Computing]] infrastructure that preprocesses data at or near the source before forwarding summaries to cloud platforms. [[Sensor Fusion]] algorithms combine readings from multiple sensor modalities to derive richer inferences than individual sensors allow. IoT deployments enable [[IndustrialAutomation]] and [[Supply Chain Management]] by providing real-time physical-world visibility. [[Machine Learning Discipline]] pipelines trained on IoT telemetry streams support predictive maintenance, anomaly detection, and demand forecasting applications.

- ### Content
  - The theoretical basis for IoT predates the term: RFID tags for supply chain tracking were operational in the 1980s, and networked embedded systems existed in industrial control contexts throughout the 1990s. Kevin Ashton's 1999 coinage at Procter & Gamble linked RFID to the internet concept, and the phrase gained traction through ITU and Cisco publications in the mid-2000s. The proliferation of Wi-Fi, Zigbee, and later LPWAN standards (LoRaWAN, NB-IoT, LTE-M) enabled low-power wide-area deployments at consumer scale. By 2015, analyst estimates placed connected device counts in the tens of billions.

  - IoT architecture typically spans four tiers: the device layer (microcontroller-based sensors and actuators), the connectivity layer (MQTT, CoAP, HTTP/2 over cellular or local-area radio), the gateway/[[Edge Computing]] layer performing local aggregation and protocol translation, and the cloud or on-premises application layer for analytics and orchestration. Security is a persistent challenge: constrained devices often lack cryptographic hardware acceleration, firmware update mechanisms are frequently absent, and default credentials remain common. Protocol fragmentation across Zigbee, Z-Wave, Matter, and proprietary stacks complicates interoperability.

  - Industrial IoT (IIoT) segments — manufacturing, energy, logistics — command the largest per-device value and drive investment in deterministic networking (TSN), functional safety certification, and digital twin integration. Consumer IoT spans smart speakers, thermostats, and wearables, where voice and cloud integration define user experience. Agricultural IoT applies soil-moisture sensors, drone imagery, and satellite connectivity to precision farming. The Matter standard (released 2022, managed by the Connectivity Standards Alliance) represents an industry attempt at a unified application layer across major consumer ecosystems including Apple HomeKit, Google Home, and Amazon Alexa.

  - By 2024–2025, total IoT device counts exceed 15 billion active endpoints according to IoT Analytics estimates, with cellular IoT growth driven by NB-IoT and LTE-M deployments across asset tracking and smart metering. AI at the edge — running [[Machine Learning Discipline]] inference on microcontrollers — is maturing through frameworks such as TensorFlow Lite for Microcontrollers and Edge Impulse. Security regulation is tightening: the EU Cyber Resilience Act (2024) imposes mandatory vulnerability disclosure and patching obligations on IoT device manufacturers. Thread and Matter adoption in the smart-home sector is accelerating interoperability, while 5G network slicing promises sub-millisecond latency for industrial control applications.

