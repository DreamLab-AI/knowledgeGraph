public:: true

# Bluetooth Low Energy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bluetooth-low-energy",
  "@type": "Page",
  "vc:slug": "bluetooth-low-energy",
  "title": "Bluetooth Low Energy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bluetooth-low-energy",
  "@type": "Class",
  "label": "Bluetooth Low Energy",
  "definition": "Bluetooth Low Energy (BLE) is the formal designation of the low-power wireless communication mode introduced in the Bluetooth 4.0 Core Specification (2010), standardised by the Bluetooth SIG, enabling battery-constrained devices to communicate over short ranges (typically 10–100 m) using duty-cycled radio bursts with peak currents measured in milliamps. It defines a complete protocol stack from physical layer through application profiles, and has become the dominant short-range radio for wearable, medical, industrial, and IoT devices.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:internet-of-things",
      "label": "Internet of Things"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bluetooth-sig",
        "label": "Bluetooth SIG"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:bluetooth-le",
        "label": "Bluetooth LE"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sensor-technology",
        "label": "Sensor Technology"
      },
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      },
      {
        "@id": "urn:ngm:class:asset-tracking",
        "label": "Asset Tracking"
      },
      {
        "@id": "urn:ngm:class:wearable-computing",
        "label": "Wearable Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      },
      {
        "@id": "urn:ngm:class:mesh-networking",
        "label": "Mesh Networking"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zigbee",
        "label": "Zigbee"
      },
      {
        "@id": "urn:ngm:class:thread-protocol",
        "label": "Thread Protocol"
      },
      {
        "@id": "urn:ngm:class:near-field-communication",
        "label": "Near Field Communication"
      },
      {
        "@id": "urn:ngm:class:ultra-wideband",
        "label": "Ultra Wideband"
      },
      {
        "@id": "urn:ngm:class:matter-protocol",
        "label": "Matter Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:wi-fi",
        "label": "Wi-Fi"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ble",
      "label": "BLE"
    },
    {
      "@id": "urn:ngm:class:bluetooth-4-0-le",
      "label": "Bluetooth 4.0 LE"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Bluetooth Low Energy]] is the complete wireless protocol mode defined within the Bluetooth specification for ultra-low-power operation, encompassing physical layer choices (LE 1M, LE 2M, LE Coded), link-layer state machines, the Logical Link Control and Adaptation Protocol (L2CAP), the Security Manager, the Generic Attribute Profile (GATT), and a library of standard profiles covering health, fitness, home automation, and industrial applications. Distinct from Classic Bluetooth (BR/EDR), it is standardised and continuously evolved by the [[Bluetooth SIG]]. In common usage, [[Bluetooth Low Energy]] and [[Bluetooth LE]] are synonymous; the former is the specification-level term.

- ### Relationships
  - [[Bluetooth Low Energy]] is standardised by the [[Bluetooth SIG]] and encompasses [[Bluetooth LE]] as its radio mode. It enables [[Sensor Technology]] deployments by providing a low-cost, low-power path from sensor to smartphone or gateway. The GATT profile system provides built-in [[Service Discovery]] so hosts can enumerate a device's capabilities without prior knowledge. It coexists with [[Zigbee]] and [[Thread Protocol]] in the 2.4 GHz band, often combined in multi-radio IoT hubs. [[Near Field Communication]] is complementary for tap-to-pair use cases, while BLE handles ongoing data streaming.

- ### Content
  - The specification history of Bluetooth Low Energy tracks the gradual power optimisation of short-range wireless since the original Bluetooth 1.0 (1999). Nokia's Wibree (2006) demonstrated that a separate, simpler radio could achieve the coin-cell longevity needed for medical implants and sports sensors. After Nokia donated Wibree to the Bluetooth SIG, it was folded into Bluetooth 4.0 (June 2010) as a distinct mode, the BLE radio sharing the 2.4 GHz ISM band with Classic Bluetooth but using a completely separate channel plan and packet format.

  - The BLE protocol stack is layered: the physical layer handles modulation (GFSK at 1 Mbit/s by default), the link layer manages advertising, scanning, and connection state machines, and L2CAP provides channel multiplexing. The Attribute Protocol (ATT) defines a simple client–server model for reading and writing typed data items (attributes), and GATT organises attributes into services and characteristics with defined UUIDs. The Security Manager Protocol enables pairing, bonding, and encryption negotiation. The Generic Access Profile standardises device roles (peripheral, central, broadcaster, observer) and advertising data formats.

  - Application domains include healthcare (continuous glucose monitors, hearing aids, ECG patches), fitness (heart rate straps, cycling cadence sensors), logistics (asset tags, smart labels), building automation (occupancy sensors, smart locks, lighting controllers), and consumer electronics (wireless earbuds, keyboards, mice). The [[Embedded Systems]] ecosystems supporting BLE include Nordic Semiconductor's nRF Connect SDK, Zephyr RTOS, and vendor-specific stacks from Silicon Labs, Texas Instruments, and STMicroelectronics.

  - Bluetooth 5.3 and 5.4 (2021–2023) added enhanced attribute protocol (EATT) for parallel GATT transactions, periodic advertising with responses (PAwR) enabling one-to-many downlink commands (useful for electronic shelf labels and mesh sensors), and Bluetooth LE Audio based on the LC3 codec with Auracast public broadcast. The forthcoming Bluetooth 6.0 specification (anticipated 2025) introduces channel sounding for high-accuracy distance measurement, targeting sub-decimetre asset-tracking without separate UWB hardware. Bluetooth Low Energy is now a foundational radio technology for every major smart-home and industrial IoT platform.

