public:: true

# LoRa
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:lora", "@type":"Page", "title":"LoRa", "vc:slug":"lora", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lora",
  "@type": "Class",
  "label": "LoRa",
  "definition": "LoRa is a long-range, low-power wireless modulation technology that uses chirp spread-spectrum signalling to transmit small amounts of data over distances of several kilometres on unlicensed sub-gigahertz radio bands. It trades data rate for range and energy efficiency, enabling battery-powered devices to operate for years. LoRa provides the physical layer beneath the LoRaWAN networking protocol used in wide-area sensor deployments. It is a foundational technology for low-power wide-area Internet-of-things connectivity.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:chirp-spread-spectrum",
        "label": "Chirp Spread Spectrum"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:spread-spectrum",
        "label": "Spread Spectrum"
      },
      {
        "@id": "urn:ngm:class:radio-frequency",
        "label": "Radio Frequency"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:lo-ra-wan",
        "label": "LoRaWAN"
      },
      {
        "@id": "urn:ngm:class:iot-device",
        "label": "IoT Device"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:low-power-wide-area-network",
        "label": "Low-Power Wide-Area Network"
      },
      {
        "@id": "urn:ngm:class:energy-efficiency",
        "label": "Energy Efficiency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:sensor-networks",
        "label": "Sensor Network"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:unlicensed-spectrum",
        "label": "Unlicensed Spectrum"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cellular-network",
        "label": "Cellular Network"
      },
      {
        "@id": "urn:ngm:class:wi-fi",
        "label": "Wi-Fi"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:long-range-radio",
      "label": "Long Range Radio"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - LoRa is a long-range, low-power radio technology defined as a [[Network Protocol]] physical layer using [[Chirp Spread Spectrum]] over [[Radio Frequency]] bands to underpin a [[Low-Power Wide-Area Network]] for the [[Internet of Things]].

- ### Overview
  - LoRa, short for long range, is a physical-layer modulation scheme that transmits small payloads across many kilometres while drawing very little power. It operates on unlicensed sub-gigahertz spectrum, varying by region, and tolerates weak signals well below the noise floor.
  - It deliberately sacrifices throughput for range and battery life, making it well suited to dispersed sensors that send infrequent, compact messages. The LoRaWAN protocol stacks media access and networking above the LoRa physical layer.

- ### Mechanisms
  - Chirp spread spectrum encodes data as frequency sweeps that are robust to interference and multipath.
  - A configurable spreading factor trades data rate against range and receiver sensitivity.
  - Adaptive data-rate schemes optimise airtime and energy per device across a network.
  - Star-of-stars topologies route device messages through gateways to a central network server.

- ### Applications
  - Smart metering for utilities such as water, gas and electricity.
  - Agricultural and environmental sensor networks across large areas.
  - Asset tracking and logistics where infrequent location updates suffice.
  - Smart-city infrastructure monitoring including parking and waste.

- ### Relationships
  - subClassOf:: [[Network Protocol]]
  - hasPart:: [[Chirp Spread Spectrum]]
  - uses:: [[Spread Spectrum]]
  - uses:: [[Radio Frequency]]
  - supports:: [[LoRaWAN]]
  - supports:: [[IoT Device]]
  - enables:: [[Low-Power Wide-Area Network]]
  - enables:: [[Energy Efficiency]]
  - relatedTo:: [[Internet of Things]]
  - relatedTo:: [[Sensor Network]]
  - dependsOn:: [[Unlicensed Spectrum]]
  - contrastsWith:: [[Cellular Network]]
  - contrastsWith:: [[Wi-Fi]]
  - bridgesTo:: [[Edge Computing]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
