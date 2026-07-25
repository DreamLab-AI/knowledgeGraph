public:: true
alias:: PowerSupply

# Power Supply
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7debf069170b6cd342dc80a492a5bffdc0087116fd6bcced7511b7aa7455526a",
  "@type": "Page",
  "vc:slug": "power-supply",
  "title": "Power Supply",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:continuous-operation",
      "vc:label": "Continuous Operation"
    },
    {
      "@id": "urn:visionflow:linked:system-reliability",
      "vc:label": "System Reliability"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "Technology Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-7026"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Power Supply"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:power-supply",
  "@type": "Class",
  "label": "Power Supply",
  "definition": "A power supply unit (PSU) is an internal hardware component that converts alternating current (AC) from mains electricity into regulated low-voltage direct current (DC) required by computing equipment's internal components including motherboard, CPU, GPU, and storage devices. In data centre contexts, power supply systems include redundant PSUs, uninterruptible power supplies (UPS), and power distribution units (PDUs) organised in hierarchical redundancy tiers.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:hardware-component",
    "label": "Hardware Component"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:voltage-regulator",
        "label": "Voltage Regulator"
      },
      {
        "@id": "urn:ngm:class:rectifier",
        "label": "Rectifier"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      },
      {
        "@id": "urn:ngm:class:server",
        "label": "Server"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:mains-electricity",
        "label": "Mains Electricity"
      },
      {
        "@id": "urn:ngm:class:cooling-system",
        "label": "Cooling System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reliability",
        "label": "System Reliability"
      },
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:power-distribution-unit",
        "label": "Power Distribution Unit"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:80-plus-certification",
        "label": "80 PLUS Certification"
      },
      {
        "@id": "urn:ngm:class:atx-standard",
        "label": "ATX Standard"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:power-distribution-unit",
        "label": "Power Distribution Unit"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:energy-efficiency",
        "label": "Energy Efficiency"
      },
      {
        "@id": "urn:ngm:class:power-management",
        "label": "Data Centre Power Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:power-usage-effectiveness",
        "label": "Power Usage Effectiveness"
      },
      {
        "@id": "urn:ngm:class:generator",
        "label": "Generator"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:psu",
      "label": "PSU"
    },
    {
      "@id": "urn:ngm:class:power-supply-unit",
      "label": "Power Supply Unit"
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
  "@id": "urn:visionflow:annotation:link-resolutions:power-supply:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7debf069170b6cd342dc80a492a5bffdc0087116fd6bcced7511b7aa7455526a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Continuous Operation]]",
      "resolved": "urn:visionflow:linked:continuous-operation",
      "kind": "StubLink"
    },
    {
      "raw": "[[System Reliability]]",
      "resolved": "urn:visionflow:linked:system-reliability",
      "kind": "StubLink"
    },
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technology Domain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A power supply unit (PSU) is an internal hardware component that converts alternating current (AC) from mains electricity into regulated low-voltage direct current (DC) required by computing equipment's internal components including motherboard, CPU, GPU, and storage devices. In data center contexts, power supply systems include redundant PSUs, uninterruptible power supplies (UPS), and power distribution units (PDUs).

- ### Semantic Classification
  - owl-class:: infrastructure:PowerSupply
  - owl-role:: Hardware
  - belongs-to-domain:: [[InfrastructureDomain]], [[Technology Domain]]

- ### Relationships
  - enables:: [[Continuous Operation]], [[System Reliability]]

- ### Content

  ## PSU Functions

  ### Primary Functions
  - **AC to DC Conversion**: Converts mains AC (110V/220V) to DC voltages (3.3V, 5V, 12V)
  - **Voltage Regulation**: Maintains stable, consistent power delivery
  - **Power Distribution**: Routes appropriate voltages to system components
  - **Protection**: Overvoltage, overcurrent, and short-circuit protection

  ### DC Output Rails
  | Rail | Typical Use |
  |------|-------------|
  | +12V | CPU, GPU, drives, fans |
  | +5V | USB ports, SATA drives, some components |
  | +3.3V | RAM, chipsets, some peripherals |
  | -12V | Legacy components |
  | +5VSB | Standby power for wake functions |

  ## Server and Data Center Power

  ### Server PSU Characteristics
  - Designed for 24/7 continuous operation
  - Higher efficiency ratings (90%+ typical)
  - Hot-swappable capability
  - Redundant configurations

  ### Redundancy Models
  | Configuration | Description |
  |---------------|-------------|
  | N+1 | One spare PSU for failover |
  | 2N | Fully redundant, two independent power paths |
  | 2N+1 | Full redundancy plus one spare |

  ### Data Center Power Hierarchy
  1. **Utility Power**: Main grid connection
  2. **UPS Systems**: Battery backup for immediate protection
  3. **Generators**: Extended backup during prolonged outages
  4. **PDUs**: Power distribution to racks and equipment
  5. **Server PSUs**: Final conversion for IT equipment

  ## PSU vs PDU

  | Aspect | PSU | PDU |
  |--------|-----|-----|
  | Location | Inside computing device | In data center rack |
  | Function | AC-DC conversion | Power distribution |
  | Scope | Single device | Multiple devices |
  | Features | Voltage regulation | Monitoring, switching, load balancing |

  ## Efficiency Standards

  ### 80 PLUS Certification Levels
  | Certification | Efficiency at 50% Load |
  |---------------|------------------------|
  | 80 PLUS | 80% |
  | Bronze | 85% |
  | Silver | 88% |
  | Gold | 90% |
  | Platinum | 92% |
  | Titanium | 94% |

  Efficiency differences of 2% can significantly impact energy costs in large-scale data centers.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
