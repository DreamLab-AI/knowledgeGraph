public:: true

# Thread Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:thread-protocol",
  "@type": "Page",
  "vc:slug": "thread-protocol",
  "title": "Thread Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:thread-protocol",
  "@type": "Class",
  "label": "Thread Protocol",
  "definition": "Thread is an IPv6-based, low-power wireless mesh networking protocol designed for IoT devices in home and commercial environments, using IEEE 802.15.4 as its radio layer and providing self-healing, self-configuring mesh topology with native IP routing, secure device commissioning, and no single point of failure. Thread is managed by the Thread Group and forms the network and transport foundation for the Matter smart-home application protocol.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ieee-802-15-4",
      "label": "IEEE 802.15.4"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:openthread",
        "label": "OpenThread"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ieee-802-15-4",
        "label": "IEEE 802.15.4"
      },
      {
        "@id": "urn:ngm:class:6lowpan",
        "label": "6LoWPAN"
      },
      {
        "@id": "urn:ngm:class:ipv6",
        "label": "IPv6"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:matter-protocol",
        "label": "Matter Protocol"
      },
      {
        "@id": "urn:ngm:class:smart-home-automation",
        "label": "Smart Home Automation"
      },
      {
        "@id": "urn:ngm:class:industrial-io-t",
        "label": "Industrial IoT"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "AES-128 Encryption"
      },
      {
        "@id": "urn:ngm:class:dtls",
        "label": "DTLS"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:mesh-networking",
        "label": "Mesh Networking"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:network-layer",
        "label": "Network Layer"
      },
      {
        "@id": "urn:ngm:class:co-ap",
        "label": "CoAP"
      },
      {
        "@id": "urn:ngm:class:udp",
        "label": "UDP"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:low-power-device",
        "label": "Low-Power Device"
      },
      {
        "@id": "urn:ngm:class:device-commissioning",
        "label": "Device Commissioning"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:thread-group",
        "label": "Thread Group"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:zigbee",
        "label": "Zigbee"
      },
      {
        "@id": "urn:ngm:class:z-wave",
        "label": "Z-Wave"
      },
      {
        "@id": "urn:ngm:class:bluetooth-mesh",
        "label": "Bluetooth Mesh"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:local-area-network",
        "label": "Local Area Network"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mesh-routing-software",
        "label": "Mesh Routing Software"
      },
      {
        "@id": "urn:ngm:class:wireless-radio",
        "label": "Wireless Radio"
      },
      {
        "@id": "urn:ngm:class:home-area-network",
        "label": "Home Area Network"
      },
      {
        "@id": "urn:ngm:class:building-automation",
        "label": "Building Automation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:thread-1-3",
      "label": "Thread 1.3"
    },
    {
      "@id": "urn:ngm:class:openthread-protocol",
      "label": "OpenThread Protocol"
    }
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
  - Thread is a royalty-free, IPv6-native mesh protocol operating on the 2.4 GHz ISM band via the [[IEEE 802.15.4]] physical and MAC layers. Unlike [[Zigbee]], which uses a proprietary network layer, Thread runs standard 6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks) and UDP/CoAP transport, making Thread devices directly addressable on IP networks. The mesh self-heals around node failures, and a Thread Border Router bridges the mesh to the local IP LAN and internet. Thread commissioning uses out-of-band credential exchange and the DTLS-based Thread Commissioning protocol to cryptographically authenticate new devices. [[Matter Protocol]] mandates Thread as its primary low-power network transport.

- ### Relationships
  - Thread is the network substrate over which [[Matter Protocol]] application messages flow for battery-powered devices. It contrasts with [[Zigbee]], which occupies the same radio layer but uses a different, non-IP network stack. [[Mesh Routing Software]] components (OpenThread, the reference implementation) handle routing table management, leader election, and partition recovery. Thread Border Routers bridge Thread meshes to [[Network Layer]] IP infrastructure.

- ### Content
  - Thread was developed by a consortium including ARM, Apple, Google/Nest, Samsung, and others, with the Thread Group formed in 2014 and Thread 1.0 specification released in 2015. The protocol addressed limitations of ZigBee Home Automation, particularly the lack of native IP and the complexity of non-IP bridging. Apple's HomeKit and Google's Nest thermostat were among the first commercial deployments, embedding Thread radios in hubs and border routers.

  - Architecturally, Thread nodes adopt roles including Leader (mesh routing table manager), Router (full routing participant), Reed (Router Eligible End Device), End Device, and Sleepy End Device. Leaders are elected dynamically via a REED promotion algorithm. The mesh uses link-state routing (a simplified OSPF-like protocol) with Mesh Local EID (ML-EID) addressing, enabling stable device addressing independent of border router DHCP. Security uses AES-128-CCM* for link-layer encryption and DTLS for commissioning sessions.

  - OpenThread, the open-source Thread implementation maintained by Google and contributed to the Thread Group, is the reference stack integrated into Nordic Semiconductor, Silicon Labs, NXP, and TI system-on-chip platforms. Thread Border Routers are available as standalone devices (OTBR on Raspberry Pi) and are embedded in Apple HomePod mini, Apple TV 4K, Google Nest Hub (2nd gen), and Amazon Echo (4th gen), providing ubiquitous border routing infrastructure in consumer smart-home environments.

  - By 2024–2025, Thread's adoption has accelerated significantly due to Matter's selection of Thread as the mandatory radio for battery-powered Matter devices. Apple, Google, Amazon, and Samsung all ship Thread border routers in mainstream products. Thread 1.4 introduced Extended Pan ID and other improvements. The ecosystem of Thread-certified chips from Nordic, Espressif (ESP-H2), and Silicon Labs is expanding, and Thread is increasingly deployed in commercial building automation, industrial IoT, and healthcare asset tracking alongside its consumer smart-home origins.

