public:: true

# Non Volatile Memory

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:non-volatile-memory", "@type":"Page", "title":"Non Volatile Memory", "vc:slug":"non-volatile-memory", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:non-volatile-memory",
  "@type": "Class",
  "label": "Non Volatile Memory",
  "definition": "Non-volatile memory (NVM) is computer storage that retains its data after power is removed, in contrast to volatile memory such as DRAM and SRAM. It encompasses technologies including NAND and NOR flash, EEPROM, and emerging persistent-memory devices that combine byte-addressability with durability. NVM is fundamental to firmware storage, embedded systems, solid-state drives, and the bootstrapping of computing platforms.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hardware",
      "label": "Hardware"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:firmware",
        "label": "Firmware"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:sram",
        "label": "SRAM"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:power-management",
        "label": "Power Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:firmware",
        "label": "Firmware"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:microcontroller",
        "label": "Microcontroller"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:hardware",
        "label": "Hardware"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:memory",
        "label": "Memory"
      },
      {
        "@id": "urn:ngm:class:energy-efficiency",
        "label": "Energy Efficiency"
      },
      {
        "@id": "urn:ngm:class:io-t",
        "label": "IoT"
      },
      {
        "@id": "urn:ngm:class:reliability",
        "label": "Reliability"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
- Non-volatile memory (NVM) is a [[Hardware]] component that retains stored data when power is removed, distinguishing it from volatile [[Memory]] technologies such as [[SRAM]]. It is the durable substrate on which [[Firmware]] and boot images live, and underpins persistent storage in [[Embedded Systems]] across the computing stack.
- ### Overview
- NVM technologies span EEPROM, NOR flash, NAND flash, and emerging storage-class persistent memory. NOR flash offers random-access read suited to executing code in place, while NAND flash provides high-density block storage used in solid-state drives and removable media.
- Retention, endurance (program/erase cycles), and write latency are the defining engineering trade-offs. Wear-levelling and error-correction extend usable lifetime, balancing durability against cost and density.
- Persistent memory blurs the historical boundary between storage and working memory by offering byte-addressable, durable access at near-DRAM speeds, reshaping how systems checkpoint and recover state.
- ### Key aspects
- Data retention without power, measured in years at rated temperatures.
- Endurance limits expressed as program/erase cycle counts.
- Read/write asymmetry: reads are typically far faster than writes or erases.
- Block-oriented erase granularity in flash, requiring wear-levelling.
- Error-correcting codes to manage bit-rot and disturb effects.
- ### Applications
- Firmware and bootloader storage in [[Microcontroller]] and [[Embedded Systems]] designs.
- Solid-state drives and removable media for bulk persistent storage.
- Configuration and calibration data retention in [[IoT]] sensors and devices.
- Local caching and checkpointing for [[Edge Computing]] workloads.
- ### Relationships
- subClassOf:: [[Hardware]]
- partOf:: [[Embedded Systems]]
- hasPart:: [[Firmware]]
- contrastsWith:: [[SRAM]]
- uses:: [[Signal Processing]]
- requires:: [[Power Management]]
- enables:: [[Firmware]]
- supports:: [[Microcontroller]]
- supports:: [[Edge Computing]]
- dependsOn:: [[Hardware]]
- relatedTo:: [[Memory]]
- relatedTo:: [[Energy Efficiency]]
- relatedTo:: [[IoT]]
- relatedTo:: [[Reliability]]
- bridgesTo:: [[Edge Computing]]
- ### Provenance
- updated:: 2026-06-15
- generatedBy:: GapMaterialisation
- attributedTo:: did:nostr:ontology-mesh
