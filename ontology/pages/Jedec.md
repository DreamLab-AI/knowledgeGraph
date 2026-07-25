public:: true

# Jedec

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:jedec",
  "@type": "Page",
  "title": "Jedec",
  "vc:slug": "jedec",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:jedec",
  "@type": "Class",
  "label": "Jedec",
  "definition": "JEDEC (the JEDEC Solid State Technology Association) is the global standards body that develops open specifications for semiconductor memory and packaging. It defines the electrical, mechanical and timing standards for technologies such as DRAM, DDR5, HBM and NAND flash, ensuring components from different manufacturers interoperate. JEDEC standards underpin the memory subsystems of virtually all modern computing infrastructure.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee-standards",
        "label": "IEEE Standards"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      },
      {
        "@id": "urn:ngm:class:open-standard",
        "label": "Open Standard"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:hardware-component",
        "label": "Hardware Component"
      },
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:reliability-engineering",
        "label": "Reliability Engineering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:standardisation",
        "label": "Standardisation"
      },
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cloud-infrastructure",
        "label": "Cloud Infrastructure"
      },
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      },
      {
        "@id": "urn:ngm:class:semiconductor-manufacturing",
        "label": "Semiconductor Manufacturing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:protocol-standard",
        "label": "Protocol Standard"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:hardware-design",
        "label": "Hardware Design"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ieee-standards",
      "label": "IEEE Standards"
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
  - [[JEDEC]] is the open [[Standards]] organisation governing semiconductor [[Memory Module]] and [[Hardware Component]] specifications, enabling cross-vendor [[Interoperability]].
- ### Overview
  - Founded as the Joint Electron Device Engineering Council, JEDEC now operates as the JEDEC Solid State Technology Association under the umbrella of industry consortia.
  - It publishes royalty-free standards developed through committee consensus among memory manufacturers, foundries and system integrators.
  - JEDEC specifications cover signalling, timing, command sets, packaging form factors and reliability test methods (JESD documents).
  - By fixing electrical and mechanical interfaces, JEDEC allows DRAM, flash and emerging memory parts from competing vendors to be drop-in compatible.
- ### Key aspects
  - DDR (double data rate) SDRAM generations: DDR3, DDR4 and DDR5 timing and voltage standards.
  - High Bandwidth Memory (HBM) stacked-die specifications for accelerators and GPUs.
  - NAND flash interface and Universal Flash Storage (UFS) command standards.
  - JESD reliability and qualification test methods for solder, temperature cycling and data retention.
  - Module form factors such as DIMM, SO-DIMM and embedded MultiMediaCard layouts.
- ### Applications
  - Memory modules in servers, laptops and mobile devices that must interoperate across suppliers.
  - Accelerator and GPU memory stacks (HBM) standardised for AI and HPC workloads.
  - Solid-state storage controllers conforming to flash interface standards.
  - Data-centre procurement relying on second-source compatibility to avoid supply lock-in.
- ### Relationships
  - standardizedBy:: [[IEEE Standards]]
  - implements:: [[Standards]]
  - implements:: [[Open Standard]]
  - supports:: [[Hardware Component]]
  - supports:: [[Data Centre]]
  - supports:: [[Supply Chain]]
  - enables:: [[Interoperability]]
  - enables:: [[Reliability Engineering]]
  - requires:: [[Standardisation]]
  - requires:: [[Quality Assurance]]
  - relatedTo:: [[Cloud Infrastructure]]
  - relatedTo:: [[Network Architecture]]
  - relatedTo:: [[Semiconductor Manufacturing]]
  - contrastsWith:: [[Protocol Standard]]
  - bridgesTo:: [[Hardware Design]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
