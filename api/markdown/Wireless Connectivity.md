public:: true

# Wireless Connectivity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b7a51e6da29d50cb3325d50202bc09ca430e3c144fab7555b6c8859b0254a961",
  "@type": "Page",
  "vc:slug": "wireless-connectivity",
  "title": "Wireless Connectivity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:communication-protocol",
      "vc:label": "Communication Protocol"
    },
    {
      "@id": "urn:visionflow:linked:real-time-communication",
      "vc:label": "Real-Time Communication"
    },
    {
      "@id": "urn:visionflow:linked:internet-of-things",
      "vc:label": "Internet of Things"
    },
    {
      "@id": "urn:visionflow:linked:5-g",
      "vc:label": "5G"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Wireless Connectivity"
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
  "@id": "urn:ngm:class:wireless-connectivity",
  "@type": "Class",
  "label": "Wireless Connectivity",
  "definition": "Wireless connectivity is the transmission of data between devices over radio frequencies without physical cabling. It encompasses short-range links such as Wi-Fi and Bluetooth, medium-range technologies such as Zigbee and LoRa, and wide-area mobile networks such as 4G LTE and 5G NR, all governed by spectrum allocation and standardised protocol stacks.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:communication-protocol",
      "label": "Communication Protocol"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:wi-fi",
        "label": "Wi-Fi"
      },
      {
        "@id": "urn:ngm:class:bluetooth",
        "label": "Bluetooth"
      },
      {
        "@id": "urn:ngm:class:5-g",
        "label": "5G"
      },
      {
        "@id": "urn:ngm:class:lora",
        "label": "LoRa"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      },
      {
        "@id": "urn:ngm:class:radio-frequency-spectrum",
        "label": "Radio Frequency Spectrum"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:mobile-computing",
        "label": "Mobile Computing"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ieee-802-11",
        "label": "IEEE 802.11"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:3-gpp",
        "label": "3GPP"
      },
      {
        "@id": "urn:ngm:class:itu",
        "label": "ITU"
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
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-latency",
        "label": "Network Latency"
      },
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      },
      {
        "@id": "urn:ngm:class:mesh-network",
        "label": "Mesh Network"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:wireless-networking",
      "label": "Wireless Networking"
    },
    {
      "@id": "urn:ngm:class:wireless-communication",
      "label": "Wireless Communication"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:wireless-connectivity:199c0835573c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b7a51e6da29d50cb3325d50202bc09ca430e3c144fab7555b6c8859b0254a961"
  },
  "vc:resolutions": [
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:linked:communication-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Communication]]",
      "resolved": "urn:visionflow:linked:real-time-communication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Internet of Things]]",
      "resolved": "urn:visionflow:linked:internet-of-things",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[5G]]",
      "resolved": "urn:visionflow:linked:5-g",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Wireless connectivity is the transmission of data between devices over radio frequencies without physical cabling. It spans short-range links such as Wi-Fi and Bluetooth and wide-area mobile networks such as 5G.

- ### Semantic Classification
  - owl-class:: networking:WirelessConnectivity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[5G]]
  - requires:: [[Communication Protocol]]
  - enables:: [[Real-Time Communication]], [[Internet of Things]]

- ### Content
  - Wireless connectivity uses modulated radio signals to carry data, with standards governing frequency bands, modulation, access methods and security. Technologies range from personal-area links and local wireless networks to cellular systems covering wide geographic areas.
  - Reliable wireless links underpin mobile computing, sensor networks and many IoT deployments, where running cables is impractical. Performance depends on spectrum availability, interference, range and the protocol stack chosen for a given application.

- ### Current Landscape (2026)
  - Wi-Fi 7 (IEEE 802.11be, "Extremely High Throughput") was formally published on 22 July 2025 after Wi-Fi Alliance certification began in January 2024; it standardises Multi-Link Operation across 2.4/5/6 GHz, 320 MHz channels and 4096-QAM for theoretical single-band throughput up to ~23 Gbit/s.
  - Adoption is accelerating but still early: Ookla Speedtest data shows US Wi-Fi 7 router share rising roughly 300% year-on-year to 7.2% by Q1 2026 (from 1.8% in Q1 2025), with Charter's Spectrum the world's largest Wi-Fi 7 network (~24.9% of US samples) and 6 GHz usage up 62% to 13.8% of US samples; globally it remains under 2%.
  - Wi-Fi 8 (IEEE 802.11bn, "Ultra High Reliability") is in draft (D1.0 consolidated in 2025, TGbn formed November 2023), targeting 25% gains in throughput at low SINR, tail latency and packet loss rather than peak speed; first chipsets appeared in late 2025 with early prototype access points expected at MWC 2026 and final publication projected around 2028.
  - On the cellular side, 3GPP froze Release 19 (5G-Advanced) functionally in September 2025 with ASN.1/OpenAPI freeze by December 2025, adding AI/ML-assisted RAN, ambient IoT, advanced RedCap and NTN enhancements; Release 20 began in 2025 combining further 5G-Advanced work with the first formal 6G studies, and the Release 21 6G timeline was set for finalisation by June 2026 with first specifications targeted for 2028.
  - Satellite direct-to-cell (D2C/D2D) moved from trials to commercial reality: T-Mobile and SpaceX Starlink launched nationwide "T-Satellite" messaging in July 2025 (over 650 D2C satellites in orbit, ~60 supported phone models, expanding to apps like WhatsApp by October 2025), enabled by 3GPP NTN (Releases 17-19) and the FCC's 2024 Supplemental Coverage from Space framework.
  - Europe's first direct-to-device service, Virgin Media O2's "O2 Satellite" powered by Starlink, went live in February 2026, lifting UK landmass coverage from 89% to 95%; AST SpaceMobile, backed by AT&T, Verizon, Vodafone and Orange, is targeting genuine broadband-grade D2C via its large BlueBird phased-array satellites with initial US service in 2026.
  - Open challenges as of 2026: D2C throughput remains below ~1 Mbps with no indoor coverage and shared beam capacity (a complement, not substitute, for terrestrial networks); 6 GHz Standard Power and global spectrum harmonisation lag (Latin America real-world 6 GHz use near 0.1%); and most Wi-Fi users and client devices still cannot exploit Wi-Fi 7's full capabilities.

- ### References
  - 1. Ofinno (2026). 2025 Retrospective on Cellular, Wi-Fi, and Video Compression Standards and What We're Watching in 2026. https://ofinno.com/standards-readout/2025-retrospective-on-cellular-wi-fi-and-video-compression-standards-and-what-were-watching-in-2026/
  - 2. ZDNET (2026). Wi-Fi 7 adoption in the US quadrupled in a year - is it time to upgrade? https://www.zdnet.com/home-and-office/networking/wifi-7-adoption-in-us-quadrupled-in-year-time-to-upgrade/
  - 3. Wireless Broadband Alliance (2026). Wireless Broadband Alliance Reveals its Wi-Fi Predictions for 2026 and Beyond. https://wballiance.com/wireless-broadband-alliance-reveals-its-wi-fi-predictions-for-2026-and-beyond/
  - 4. 3GPP (2025). Release 20 - Milestones and endorsed deadlines. https://www.3gpp.org/specifications-technologies/releases/release-20
  - 5. Consultant Alliance (2026). Satellite Internet on Your Smartphone: How Direct-to-Cell Works in 2026. https://www.consultant-alliance.com/2026/07/satellite-internet-on-your-smartphone-how-direct-to-cell-works-in-2026/
  - 6. Private LTE and 5G (2026). Direct-to-Device Satellite: How D2D Is Becoming a Complementary Connectivity Layer. https://www.privatelteand5g.com/direct-to-device-satellite-how-d2d-is-becoming-a-complementary-connectivity-layer/

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
