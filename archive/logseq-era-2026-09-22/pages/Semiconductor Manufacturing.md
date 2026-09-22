public:: true

# Semiconductor Manufacturing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:semiconductor-manufacturing",
  "@type": "Page",
  "title": "Semiconductor Manufacturing",
  "vc:slug": "semiconductor-manufacturing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:semiconductor-manufacturing",
  "@type": "Class",
  "label": "Semiconductor Manufacturing",
  "definition": "Semiconductor manufacturing is the multi-stage industrial process that fabricates integrated circuits on silicon wafers through cycles of deposition, photolithographic patterning, etching, doping, and metallisation in cleanroom fabs. It transforms electronic designs into physical chips at nanometre feature sizes and is the foundation of all modern computing hardware. The capital-intensive supply chain spans wafer production, fabrication, packaging, and test.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    },
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:integrated-circuit",
        "label": "Integrated Circuit"
      },
      {
        "@id": "urn:ngm:class:wafer-fabrication",
        "label": "Wafer Fabrication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cpu-computing",
        "label": "CPU Computing"
      },
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:semiconductor",
        "label": "Semiconductor"
      },
      {
        "@id": "urn:ngm:class:nanotechnology",
        "label": "Nanotechnology"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:computer-architecture",
        "label": "Computer Architecture"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:foundry",
        "label": "Foundry"
      },
      {
        "@id": "urn:ngm:class:chip",
        "label": "Chip"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:hardware",
        "label": "Hardware"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
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
  - [[Semiconductor Manufacturing]] fabricates [[Integrated Circuit]]s on silicon wafers through repeated deposition, lithography, etching, and doping in cleanroom fabs.
  - It turns electronic designs into physical [[Semiconductor]] devices at nanometre scale.
  - It is the industrial foundation that enables [[CPU Computing]] and all modern compute [[Hardware]].
- ### Overview
  - Front-end-of-line processing builds transistors directly in the silicon; back-end-of-line forms the metal interconnect stack.
  - Photolithography projects circuit patterns onto photoresist, which is developed and etched to define features.
  - The process is iterative across hundreds of steps, each adding or patterning a thin material layer with extreme precision.
- ### Key aspects
  - Cleanroom fabrication with sub-nanometre defect control.
  - Photolithography (including EUV) defining ever-smaller feature sizes.
  - Iterative deposition, etch, implant, and planarisation cycles.
  - A capital-intensive, globally distributed [[Supply Chain]].
- ### Mechanisms
  - Thin-film deposition (CVD, ALD, sputtering) building material layers.
  - Photoresist coating, exposure, and development to transfer patterns.
  - Plasma and wet etching to remove unmasked material.
  - Ion implantation and annealing to set dopant profiles.
- ### Applications
  - Producing the processors behind [[CPU Computing]] and [[GPU Computing]].
  - Memory, sensors, power, and RF devices across electronics.
  - Custom accelerators supporting [[Hardware Acceleration]].
  - The hardware substrate for entire [[Computer Architecture]] roadmaps.
- ### Relationships
  - hasPart:: [[Integrated Circuit]]
  - hasPart:: [[Wafer Fabrication]]
  - enables:: [[CPU Computing]]
  - enables:: [[Hardware Acceleration]]
  - requires:: [[Semiconductor]]
  - requires:: [[Nanotechnology]]
  - dependsOn:: [[Supply Chain]]
  - bridgesTo:: [[Computer Architecture]]
  - uses:: [[Foundry]]
  - uses:: [[Chip]]
  - supports:: [[GPU Computing]]
  - relatedTo:: [[Hardware]]
  - partOf:: [[Supply Chain]]
- ### Provenance
  - inferenceRule:: GapMaterialisation
  - attributedTo:: did:nostr:ontology-mesh
  - updated:: 2026-06-15
