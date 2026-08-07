public:: true

# Z Wave

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:z-wave", "@type":"Page", "title":"Z Wave", "vc:slug":"z-wave", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:z-wave",
  "@type": "Class",
  "label": "Z Wave",
  "definition": "Z-Wave is a low-power wireless communication protocol designed specifically for home automation and smart home devices, operating in the sub-GHz frequency band (868 MHz in Europe, 908 MHz in North America). It uses a mesh networking topology where each device can relay signals, extending range and improving reliability throughout a building. Z-Wave supports up to 232 nodes per network and is governed by the Z-Wave Alliance, which maintains interoperability standards across manufacturers.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    },
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:zigbee",
        "label": "Zigbee"
      },
      {
        "@id": "urn:ngm:class:bluetooth-low-energy",
        "label": "Bluetooth Low Energy"
      },
      {
        "@id": "urn:ngm:class:thread-protocol",
        "label": "Thread Protocol"
      },
      {
        "@id": "urn:ngm:class:wi-fi",
        "label": "Wi-Fi"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:mesh-networking",
        "label": "Mesh Networking"
      },
      {
        "@id": "urn:ngm:class:wireless-protocol",
        "label": "Wireless Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:aes-encryption",
        "label": "AES Encryption"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-home",
        "label": "Smart Home"
      },
      {
        "@id": "urn:ngm:class:home-automation",
        "label": "Home Automation"
      },
      {
        "@id": "urn:ngm:class:iot-device",
        "label": "IoT Device"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lpwan",
        "label": "LPWAN"
      },
      {
        "@id": "urn:ngm:class:industrial-io-t",
        "label": "Industrial IoT"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
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
  - [[Z Wave]] is a [[wireless protocol]] operating in the sub-GHz band, forming [[mesh networking]] topologies for [[smart home]] and [[home automation]] use cases.
  - Governed by the Z-Wave Alliance, it prioritises interoperability across device manufacturers and supports up to 232 nodes per network.
  - Its sub-GHz operation gives it better wall-penetration characteristics compared to 2.4 GHz protocols such as [[Zigbee]] and [[Wi-Fi]].

- ### Overview
  - Z-Wave emerged in the early 2000s and became one of the dominant smart home wireless standards.
  - The protocol uses source routing where the controller calculates paths through the mesh.
  - Security S2 framework (introduced 2017) provides AES-128 encryption and protects against replay and man-in-the-middle attacks.
  - Silicon Labs acquired the Z-Wave IP portfolio and now serves as the primary chipset vendor.

- ### Key aspects
  - Sub-GHz frequency: 868 MHz (EU), 908 MHz (US), 919 MHz (AU) — avoids congested 2.4 GHz band.
  - Mesh range: up to ~30 metres per hop, typically 4 hops maximum.
  - Low power consumption enabling battery-operated sensors and actuators.
  - Mandatory interoperability certification by Z-Wave Alliance.
  - Z-Wave Long Range (ZWAVE-LR) extends coverage to over 1 km.

- ### Mechanisms
  - Nodes act as repeaters in the mesh, relaying packets on behalf of other nodes.
  - Network Management Interface (NMI) standardises controller APIs.
  - S2 security framework uses Elliptic Curve Diffie-Hellman for key exchange and AES-128-CCM for message encryption.
  - SmartStart provisioning via QR code simplifies device onboarding.

- ### Applications
  - Lighting control and scene management in residential and commercial buildings.
  - Door locks, garage openers, and access control systems.
  - HVAC and thermostat control.
  - Security sensors: door/window sensors, motion detectors, smoke alarms.
  - Energy monitoring and smart plugs.

- ### Relationships
  - contrastsWith:: [[Zigbee]]
  - contrastsWith:: [[Bluetooth Low Energy]]
  - contrastsWith:: [[Thread Protocol]]
  - implements:: [[Mesh Networking]]
  - implements:: [[Wireless Protocol]]
  - uses:: [[Encryption]]
  - enables:: [[Smart Home]]
  - enables:: [[Home Automation]]
  - relatedTo:: [[Lpwan]]
  - relatedTo:: [[Industrial IoT]]
  - standardizedBy:: [[Standards]]

- ### Provenance
  - updated:: 2026-06-15
