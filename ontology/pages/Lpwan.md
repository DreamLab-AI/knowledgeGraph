public:: true

# Lpwan

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:lpwan", "@type":"Page", "title":"Lpwan", "vc:slug":"lpwan", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lpwan",
  "@type": "Class",
  "label": "Lpwan",
  "definition": "Low-Power Wide-Area Network (LPWAN) is a class of wireless communication technologies designed to transmit small amounts of data over long distances at very low power consumption, enabling battery-operated IoT devices to operate for years on a single charge. LPWAN technologies trade high data rates for extended range and deep indoor penetration, covering areas from a few kilometres to tens of kilometres per base station. Major LPWAN variants include LoRaWAN, Sigfox, NB-IoT, and LTE-M, each suited to different deployment and regulatory environments.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    },
    {
      "@id": "urn:ngm:class:wireless-communication",
      "label": "Wireless Communication"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zigbee",
        "label": "Zigbee"
      },
      {
        "@id": "urn:ngm:class:z-wave",
        "label": "Z Wave"
      },
      {
        "@id": "urn:ngm:class:wireless-protocol",
        "label": "Wireless Protocol"
      },
      {
        "@id": "urn:ngm:class:mesh-networking",
        "label": "Mesh Networking"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:radio-frequency",
        "label": "Radio Frequency"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:iot-device",
        "label": "IoT Device"
      },
      {
        "@id": "urn:ngm:class:industrial-io-t",
        "label": "Industrial IoT"
      },
      {
        "@id": "urn:ngm:class:smart-agriculture",
        "label": "Smart Agriculture"
      },
      {
        "@id": "urn:ngm:class:asset-tracking",
        "label": "Asset Tracking"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:wi-fi",
        "label": "Wi-Fi"
      },
      {
        "@id": "urn:ngm:class:bluetooth-low-energy",
        "label": "Bluetooth Low Energy"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:lo-ra-wan",
        "label": "LoRaWAN"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:sensor-networks",
        "label": "Sensor Network"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Lpwan]] (Low-Power Wide-Area Network) is a category of [[wireless protocol]] technologies optimised for long-range, low-bandwidth, low-power [[IoT Device]] connectivity.
  - Key variants include [[LoRaWAN]] (unlicensed spectrum), Sigfox, [[NB-IoT]], and LTE-M (licensed cellular spectrum).
  - LPWAN enables battery-operated endpoints to transmit small telemetry payloads over distances from 2 km (urban) to 40 km (rural line-of-sight).

- ### Overview
  - LPWAN emerged as a solution to the gap between short-range personal area networks (e.g. Zigbee, Bluetooth) and high-power cellular networks.
  - The unlicensed LPWAN variants (LoRa, Sigfox) operate in ISM bands and are community/commercially deployed; licensed variants (NB-IoT, LTE-M) use cellular spectrum managed by mobile operators.
  - Duty-cycle restrictions in unlicensed bands limit throughput but enable coexistence.

- ### Key aspects
  - Data rates: typically 0.3 kbps to 50 kbps, far lower than Wi-Fi or cellular.
  - Range: 2–15 km urban, up to 50 km rural for LoRa gateways.
  - Battery life: years to decades depending on transmission frequency.
  - Star-of-stars or star topology (not mesh) for most variants.
  - Deep building penetration due to sub-GHz frequencies.

- ### Mechanisms
  - Chirp Spread Spectrum (CSS) modulation in LoRa for interference resilience.
  - Narrowband (200 kHz) transmission in NB-IoT using LTE cellular infrastructure.
  - Downlink acknowledgements and adaptive data rate optimise power use.
  - End-to-end AES-128 encryption in LoRaWAN network and application layers.

- ### Applications
  - Smart metering for electricity, gas, and water utilities.
  - Agricultural soil moisture, weather, and livestock tracking sensors.
  - Smart city infrastructure: parking sensors, waste bin fill-level, street lighting.
  - Cold-chain logistics and asset tracking.
  - Predictive maintenance sensors in industrial plant.

- ### Relationships
  - relatedTo:: [[Zigbee]]
  - relatedTo:: [[Z Wave]]
  - relatedTo:: [[Wireless Protocol]]
  - uses:: [[Encryption]]
  - enables:: [[IoT Device]]
  - enables:: [[Industrial IoT]]
  - enables:: [[Asset Tracking]]
  - contrastsWith:: [[Bluetooth Low Energy]]
  - hasPart:: [[LoRaWAN]]
  - supports:: [[Sensor Network]]
  - supports:: [[Edge Computing]]

- ### Provenance
  - updated:: 2026-06-15
