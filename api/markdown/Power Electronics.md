public:: true

# Power Electronics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d314fa7544861e16b55b17c618196bcdc66cbbf0e7b3a408d15072f3bfdcca7b",
  "@type": "Page",
  "vc:slug": "power-electronics",
  "title": "Power Electronics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:motor-driver",
      "vc:label": "Motor Driver"
    },
    {
      "@id": "urn:visionflow:linked:electric-motor",
      "vc:label": "Electric Motor"
    },
    {
      "@id": "urn:visionflow:linked:battery-management-system",
      "vc:label": "Battery Management System"
    },
    {
      "@id": "urn:visionflow:linked:servo-motor",
      "vc:label": "Servo Motor"
    },
    {
      "@id": "urn:visionflow:linked:embedded-systems",
      "vc:label": "Embedded Systems Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Power Electronics"
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
  "@id": "urn:ngm:class:power-electronics",
  "@type": "Class",
  "label": "Power Electronics",
  "definition": "Power electronics is the engineering discipline concerned with the conversion and control of electrical power using switching semiconductor devices such as MOSFETs, IGBTs and SiC transistors, central to motor drives, power supplies, inverters and energy management systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:embedded-systems",
    "label": "Embedded Systems"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:inverter",
        "label": "Inverter"
      },
      {
        "@id": "urn:ngm:class:rectifier",
        "label": "Rectifier"
      },
      {
        "@id": "urn:ngm:class:dc-dc-converter",
        "label": "DC-DC Converter"
      },
      {
        "@id": "urn:ngm:class:gate-driver",
        "label": "Gate Driver"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:switching-semiconductor",
        "label": "Switching Semiconductor"
      },
      {
        "@id": "urn:ngm:class:thermal-management",
        "label": "Thermal Management"
      },
      {
        "@id": "urn:ngm:class:electromagnetic-compatibility",
        "label": "Electromagnetic Compatibility"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "Motor Driver"
      },
      {
        "@id": "urn:ngm:class:electric-motor",
        "label": "Electric Motor"
      },
      {
        "@id": "urn:ngm:class:servo-motor",
        "label": "Servo Motor"
      },
      {
        "@id": "urn:ngm:class:variable-frequency-drive",
        "label": "Variable Frequency Drive"
      },
      {
        "@id": "urn:ngm:class:wireless-power-transfer",
        "label": "Wireless Power Transfer"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:pulse-width-modulation",
        "label": "Pulse Width Modulation"
      },
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:mosfet",
        "label": "MOSFET"
      },
      {
        "@id": "urn:ngm:class:igbt",
        "label": "IGBT"
      },
      {
        "@id": "urn:ngm:class:silicon-carbide",
        "label": "Silicon Carbide"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:battery-management-system",
        "label": "Battery Management System"
      },
      {
        "@id": "urn:ngm:class:renewable-energy-integration",
        "label": "Renewable Energy Integration"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee-standards",
        "label": "IEEE Standards"
      },
      {
        "@id": "urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems",
        "label": "IEC 61800"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Linear Power Supply"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:electric-vehicle",
        "label": "Electric Vehicle"
      },
      {
        "@id": "urn:ngm:class:smart-grid",
        "label": "Smart Grid"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:energy-harvesting",
        "label": "Energy Harvesting"
      },
      {
        "@id": "urn:ngm:class:microcontroller",
        "label": "Microcontroller"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:power-conversion-electronics",
      "label": "Power Conversion Electronics"
    },
    {
      "@id": "urn:ngm:class:electronic-power-control",
      "label": "Electronic Power Control"
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
  "@id": "urn:visionflow:annotation:link-resolutions:power-electronics:0882f0601c67",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d314fa7544861e16b55b17c618196bcdc66cbbf0e7b3a408d15072f3bfdcca7b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Motor Driver]]",
      "resolved": "urn:visionflow:linked:motor-driver",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Electric Motor]]",
      "resolved": "urn:visionflow:linked:electric-motor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Battery Management System]]",
      "resolved": "urn:visionflow:linked:battery-management-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Servo Motor]]",
      "resolved": "urn:visionflow:linked:servo-motor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embedded Systems Domain]]",
      "resolved": "urn:visionflow:linked:embedded-systems",
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
  - Power electronics is the engineering discipline concerned with the conversion and control of electrical power using switching semiconductor devices, central to motor drives, power supplies and energy systems.

- ### Semantic Classification
  - owl-class:: robotics:PowerElectronics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Embedded Systems Domain]]
  - bridges-to:: [[Battery Management System]], [[Servo Motor]]
  - enables:: [[Motor Driver]], [[Electric Motor]]
  - hasPart:: [[Inverter]], [[Rectifier]], [[DC-DC Converter]], [[Gate Driver]]
  - requires:: [[Switching Semiconductor]], [[Thermal Management]], [[Electromagnetic Compatibility]]
  - enables:: [[Variable Frequency Drive]], [[Wireless Power Transfer]]
  - dependsOn:: [[Pulse Width Modulation]], [[Feedback Control]]
  - uses:: [[MOSFET]], [[IGBT]], [[Silicon Carbide]]
  - supports:: [[Renewable Energy Integration]]
  - standardizedBy:: [[IEEE Standards]], [[IEC 61800]]
  - contrastsWith:: [[Linear Power Supply]]
  - bridgesTo:: [[Robotics]], [[Electric Vehicle]], [[Smart Grid]]
  - relatedTo:: [[Energy Harvesting]], [[Microcontroller]]

- ### Content
  - Power electronics uses switching converters such as inverters, rectifiers and DC-DC stages to transform voltage, current and frequency efficiently, controlling the flow of electrical energy with minimal loss. Switching devices are modulated to shape output waveforms for the load.
  - In robotics it underpins motor drives, battery management and power supply regulation, directly affecting actuator performance, efficiency and thermal behaviour. Reliable power conversion is a prerequisite for electric actuation in mobile and articulated robots.

- ### Current Landscape (2026)
  - The wide-bandgap (SiC/GaN) transition has moved firmly into the mainstream: IDTechEx's April 2026 outlook projects the power electronics market growing at roughly 10% CAGR to over US$65bn by 2036, with SiC taking the majority share and GaN scaling rapidly, driven by data centres, EVs and renewables.
  - 800V HVDC data-centre power distribution became the defining architectural shift of 2025-2026: NVIDIA's next-generation "AI factory" / Kyber rack-scale platforms (for Rubin-class GPUs, targeting 1MW-plus racks) moved to 800VDC, with Navitas selected (May 2025) to supply 100V/650V GaN and 650V-6.5kV GeneSiC devices, and PSU modules climbing from 3.3kW silicon to 12kW GaN units at up to ~98% efficiency.
  - Vertical GaN (vGaN) emerged as a genuine challenger to SiC above 1.2kV: onsemi unveiled vGaN in late 2025 and signed a December 2025 deal with GlobalFoundries for 200mm eMode 650V GaN-on-silicon (sampling H1 2026), while Power Integrations detailed 1250V and 1700V PowiGaN at the 2025 OCP Global Summit, showing a single 1250V switch beating stacked 650V GaN and 1200V SiC.
  - Wafer-scale manufacturing hit key milestones: Wolfspeed, STMicroelectronics and Infineon completed the move to 200mm (8-inch) SiC production in 2025 (Wolfspeed opened 200mm wafers to the wider market), Infineon pioneered 300mm (12-inch) GaN-on-silicon yielding ~2.3x more chips per wafer, and China's Tiancheng Semiconductor announced a 14-inch SiC single crystal in March 2026.
  - Single-stage/bidirectional topologies advanced with Navitas production-releasing the first 650V bidirectional GaNFast ICs (PCIM 2025, May), enabling two-stage-to-single-stage conversion for EV onboard chargers, solar inverters and energy storage; the Changan Qiyuan E07 is set to be among the first EVs deploying GaN in the onboard charger (Navitas-supplied) in 2026.
  - New product waves in 2025-2026 include Infineon's CoolSiC MOSFET 1200V G2 (May 2025) and CoolSiC JFET portfolio (June 2026), plus Wolfspeed's Generation 4 SiC power modules (May 2026); the market remains concentrated, with Infineon leading at over 19% share and the top five (Infineon, TI, STMicroelectronics, Wolfspeed, Mitsubishi Electric) holding around 61% in 2025.
  - Consolidation and IP disputes intensified: ABB agreed to acquire French SiC power-conversion firm Advantics (closing expected Q4 2026), VIS licensed TSMC's 650V/80V GaN processes (January 2026), and Wolfspeed filed a patent-infringement suit against Navitas over core GaN and SiC IP, reportedly seeking a US sales ban.
  - Open challenges as of 2026 remain high SiC wafer/substrate costs and yield-limited scalability, thermal management and advanced packaging for rising power densities, evolving isolation and test standards for high-voltage bidirectional GaN, and the still-unsettled competition between SiC and vertical GaN for 800V automotive traction.

- ### References
  - 1. IDTechEx / Semiconductor Today (2026). Power electronics market to grow at 10% CAGR to over $65bn by 2036. https://www.semiconductor-today.com/features/PDF/semiconductor-today-apr-2026-Power-electronics.pdf
  - 2. Power Electronics News (2026). Wide Bandgap Monthly Insights - July 2026 (Navitas-Magnachip SiC, ABB-Advantics, Wolfspeed v Navitas). https://www.powerelectronicsnews.com/wide-bandgap-monthly-insights-july-2026/
  - 3. Semiconductor Today (2025). Navitas supporting 800VDC power architecture for NVIDIA's next-gen AI factory computing. https://www.semiconductor-today.com/news_items/2025/oct/navitas-151025.shtml
  - 4. GlobalFoundries (2025). onsemi to Develop Next-Generation GaN Power Devices with GlobalFoundries. https://gf.com/news-and-events/news/onsemi-to-develop-next-generation-gan-power-devices-with-globalfoundries/
  - 5. IDTechEx (2025). Key Power Electronics Trends of 2025 and Beyond. https://www.idtechex.com/en/research-article/key-power-electronics-trends-of-2025-and-beyond/33912
  - 6. Global Market Insights (2026). Wide Bandgap Semiconductors Market Size & Share, 2026-2035. https://www.gminsights.com/industry-analysis/wide-bandgap-semiconductors-market

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
