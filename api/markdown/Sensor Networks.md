```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4a8cc6da1c4215bf5e0e59aba53d03074890148e8f1269b4d2bd57e0aa86384e",
  "@type": "Page",
  "vc:slug": "sensor-networks",
  "title": "Sensor Networks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:sensors",
      "vc:label": "Sensors"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-wireless-sensor-network",
      "vc:label": "https://en.wikipedia.org/wiki/Wireless_sensor_network"
    },
    {
      "@id": "urn:visionflow:linked:https-www-nist-gov",
      "vc:label": "https://www.nist.gov/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Sensor Networks"
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
  "@id": "urn:ngm:class:sensor-networks",
  "@type": "Class",
  "label": "Sensor Networks",
  "definition": "Sensor networks are distributed collections of sensor nodes that collect, process and communicate measurements about their environment.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sensors",
      "label": "Sensors"
    },
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

- ### Definition
  - Sensor networks are distributed collections of sensor nodes that collect, process and communicate measurements about their environment.

- ### Semantic Classification
  - owl-class:: robotics:SensorNetworks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sensors]]
  - bridges-to:: [[Distributed Systems]]
  - enables:: [[Sensor Fusion]]

- ### Content
  - Sensor networks consist of spatially distributed nodes equipped with sensing, processing and communication capabilities. Nodes cooperate to monitor physical conditions such as temperature, motion or location and relay data to collection points.
  - Wireless sensor networks emphasise low power consumption and self-organising topologies. They are applied in environmental monitoring, industrial automation and robotics, where aggregated readings inform perception and control.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Wireless_sensor_network]], [[https://www.nist.gov/]]
  - migration-date:: 2026-05-29T00:00:00Z
