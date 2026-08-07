public:: true

# Integrated Circuit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:72c32cf618f86eda0d45ca076bd906d467bb5ad3a0d0f077d039bee4ec3a714a",
  "@type": "Page",
  "vc:slug": "integrated-circuit",
  "title": "Integrated Circuit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hardware",
      "vc:label": "Hardware"
    },
    {
      "@id": "urn:visionflow:linked:semiconductor-manufacturing",
      "vc:label": "Semiconductor Manufacturing"
    },
    {
      "@id": "urn:visionflow:linked:cpu-computing",
      "vc:label": "CPU Computing"
    },
    {
      "@id": "urn:visionflow:linked:field-programmable-gate-array",
      "vc:label": "Field-Programmable Gate Array"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:integrated-circuit",
  "@type": "Class",
  "label": "Integrated Circuit",
  "definition": "An integrated circuit (IC) is a set of electronic circuits — transistors, resistors, capacitors and their interconnections — fabricated as a single monolithic device on a wafer of semiconductor material, usually silicon. By miniaturising and mass-producing complete circuits photolithographically, ICs made computation cheap, fast and reliable, enabling microprocessors, memory, FPGAs and application-specific chips; transistor density doubled roughly every two years in the trend described by Moore's Law, underpinning the whole of modern digital infrastructure.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:hardware",
    "label": "Hardware"
  },
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:semiconductor-manufacturing",
        "label": "Semiconductor Manufacturing"
      },
      {
        "@id": "urn:ngm:class:semiconductor",
        "label": "Semiconductor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cpu-computing",
        "label": "CPU Computing"
      },
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:field-programmable-gate-array",
        "label": "Field-Programmable Gate Array"
      },
      {
        "@id": "urn:ngm:class:asic",
        "label": "ASIC"
      },
      {
        "@id": "urn:ngm:class:moore-s-law",
        "label": "Moore's Law"
      },
      {
        "@id": "urn:ngm:class:computer-hardware",
        "label": "Computer Hardware"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "An integrated circuit (IC) is a set of electronic circuits — transistors, resistors, capacitors and their interconnections — fabricated as a single monolithic device on a wafer of semiconductor material, usually silicon. By miniaturising and mass-producing complete circuits photolithographically, ICs made computation cheap, fast and reliable, enabling microprocessors, memory, FPGAs and application-specific chips; transistor density doubled roughly every two years in the trend described by Moore's Law, underpinning the whole of modern digital infrastructure."

- ### Semantic Classification
  - owl-class:: infrastructure:IntegratedCircuit
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Hardware]]
  - depends-on:: [[Semiconductor Manufacturing]]
  - enables:: [[CPU Computing]]
  - related-to:: [[Moore's Law]]

- ### Content

  ## Definition

  An **integrated circuit** places an entire electronic circuit on one piece of semiconductor. Before its invention, circuits were assembled from discrete components hand-wired together — the "tyranny of numbers" that limited how complex electronics could become. Jack Kilby at Texas Instruments demonstrated the first monolithic circuit in 1958; Robert Noyce at Fairchild independently devised the planar silicon version in 1959 whose photolithographic interconnects made mass production practical. Layering patterned regions of doped [[Semiconductor]], insulating oxide and metal interconnect, a modern IC integrates from a handful to over a hundred billion transistors on dies typically a few hundred square millimetres, packaged with pins or solder balls for mounting on circuit boards.

  ICs are conventionally classed by function — digital logic (microprocessors, microcontrollers, memory), analogue (amplifiers, regulators, RF), and mixed-signal (data converters, systems-on-chip) — and by design approach: standard commodity parts, [[Field-Programmable Gate Array]] devices configurable after manufacture, and [[ASIC]] designs fixed at fabrication for one application. Complexity has scaled through the eras of SSI, MSI, LSI and VLSI to today's systems-on-chip combining CPU cores, GPUs, neural accelerators, modems and memory controllers on a single die, the substrate of everything from smartphones to the data-centre hardware behind [[CPU Computing]] and [[GPU Computing]].

  ## Technical Details

  Fabrication is the province of [[Semiconductor Manufacturing]]: hundreds of photolithography, etch, deposition, implantation and polishing steps executed in cleanrooms, with extreme-ultraviolet (EUV) lithography now defining features a few nanometres across at the leading nodes (5nm, 3nm, 2nm) operated by TSMC, Samsung and Intel. The economics follow [[Moore's Law]] — Gordon Moore's 1965 observation that transistor counts double roughly every two years — though its cadence has slowed as physics and cost intervene; the industry increasingly compensates with 3D structures (FinFET, gate-all-around transistors, 3D NAND), chiplet-based packaging and heterogeneous integration rather than raw shrinkage alone. Design itself depends on electronic design automation (EDA) toolchains for synthesis, place-and-route and verification, with fabless design houses relying on foundries — a division of labour that has made advanced ICs one of the most concentrated and geopolitically sensitive supply chains in the world, addressed by measures such as the US CHIPS Act and the EU Chips Act.
