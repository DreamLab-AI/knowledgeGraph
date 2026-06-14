public:: true

# Semiconductor Fabrication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4eaa9a51768cd7c722b97380ff6a6a508de1a73b1059a8dac60e2dda34fc704d",
  "@type": "Page",
  "vc:slug": "semiconductor-fabrication",
  "title": "Semiconductor Fabrication",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computer-science",
      "vc:label": "Computer Science"
    },
    {
      "@id": "urn:visionflow:linked:energy-consumption",
      "vc:label": "Energy Consumption"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Semiconductor Fabrication"
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
  "@id": "urn:ngm:class:semiconductor-fabrication",
  "@type": "Class",
  "label": "Semiconductor Fabrication",
  "definition": "Semiconductor fabrication is the industrial process by which integrated circuits and discrete semiconductor devices are constructed on crystalline silicon or compound semiconductor wafers through iterative cycles of deposition, photolithography, etching, doping, and planarisation. Each process generation, characterised by a technology node (e.g. 7 nm, 3 nm, 2 nm), defines achievable feature sizes and transistor densities, directly determining the computational density and power efficiency of the resulting chips. Fabrication occurs in ISO Class 1–5 cleanrooms to suppress particle contamination, with yield management and statistical process control being critical disciplines. The field bridges materials science, quantum mechanics, chemical engineering, and precision metrology to produce the foundational hardware layer for all digital computing, AI accelerators, communications infrastructure, and embedded systems.",
  "domain": "infrastructure",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Infra Computing And Cloud"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:photolithography",
        "label": "Photolithography"
      },
      {
        "@id": "urn:ngm:class:chemical-vapour-deposition",
        "label": "Chemical Vapour Deposition"
      },
      {
        "@id": "urn:ngm:class:ion-implantation",
        "label": "Ion Implantation"
      },
      {
        "@id": "urn:ngm:class:chemical-mechanical-planarisation",
        "label": "Chemical Mechanical Planarisation"
      },
      {
        "@id": "urn:ngm:class:atomic-layer-deposition",
        "label": "Atomic Layer Deposition"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cleanroom",
        "label": "Cleanroom"
      },
      {
        "@id": "urn:ngm:class:silicon-wafer",
        "label": "Silicon Wafer"
      },
      {
        "@id": "urn:ngm:class:extreme-ultraviolet-lithography",
        "label": "Extreme Ultraviolet Lithography"
      },
      {
        "@id": "urn:ngm:class:process-control",
        "label": "Process Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:integrated-circuit",
        "label": "Integrated Circuit"
      },
      {
        "@id": "urn:ngm:class:microprocessor",
        "label": "Microprocessor"
      },
      {
        "@id": "urn:ngm:class:memory-chip",
        "label": "Memory Chip"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      },
      {
        "@id": "urn:ngm:class:rare-earth-materials",
        "label": "Rare Earth Materials"
      },
      {
        "@id": "urn:ngm:class:energy-consumption",
        "label": "Energy Consumption"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:jedec",
        "label": "JEDEC"
      },
      {
        "@id": "urn:ngm:class:semi-standards",
        "label": "SEMI Standards"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:printed-circuit-board-assembly",
        "label": "Printed Circuit Board Assembly"
      },
      {
        "@id": "urn:ngm:class:additive-manufacturing",
        "label": "Additive Manufacturing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence-hardware",
        "label": "Artificial Intelligence Hardware"
      },
      {
        "@id": "urn:ngm:class:quantum-computing",
        "label": "Quantum Computing"
      },
      {
        "@id": "urn:ngm:class:neuromorphic-computing",
        "label": "Neuromorphic Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:moores-law",
        "label": "Moore's Law"
      },
      {
        "@id": "urn:ngm:class:technology-node",
        "label": "Technology Node"
      },
      {
        "@id": "urn:ngm:class:yield-management",
        "label": "Yield Management"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:wafer-fabrication",
      "label": "Wafer Fabrication"
    },
    {
      "@id": "urn:ngm:class:chip-manufacturing",
      "label": "Chip Manufacturing"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:semiconductor-fabrication:3ad36ea794f8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4eaa9a51768cd7c722b97380ff6a6a508de1a73b1059a8dac60e2dda34fc704d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Science]]",
      "resolved": "urn:visionflow:linked:computer-science",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Energy Consumption]]",
      "resolved": "urn:visionflow:linked:energy-consumption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - Semiconductor fabrication is the industrial process by which [[Integrated Circuit]]s, [[Microprocessor]]s, [[Memory Chip]]s, and other solid-state devices are built upon crystalline [[Silicon Wafer]]s (or compound semiconductor substrates) through iterative cycles of thin-film deposition, [[Photolithography]], etching, [[Ion Implantation]], and [[Chemical Mechanical Planarisation]]. Each successive [[Technology Node]] — characterised by a minimum feature size such as 7 nm, 3 nm, or 2 nm — determines transistor density, switching speed, and power efficiency. The entire discipline rests upon extraordinarily precise [[Process Control]], contamination suppression via [[Cleanroom]] environments, and tight integration with a global [[Supply Chain]] for specialised chemicals, gases, photomasks, and capital equipment.

- ### Overview
  - Semiconductor fabrication (also called wafer fabrication or chip manufacturing) transforms a blank semiconductor substrate into a densely patterned monolithic device containing billions of transistors and kilometres of metal interconnect, all within a die area measured in square millimetres.
  - The process is inherently iterative: a single advanced chip may require over 1,000 individual process steps spanning weeks of continuous cleanroom operation.
  - It is one of the most capital-intensive industries in existence; a single leading-edge fabrication facility (fab) requires tens of billions of dollars of investment and years to construct.
  - The discipline is governed by [[Moore's Law]], the empirical observation that transistor density doubles roughly every two years, which has driven continuous node shrinkage and process innovation for decades.
  - Fabrication output directly enables the global digital economy — processors for [[Cloud Computing]], [[AI Accelerators]] for [[Machine Learning]] workloads, [[Memory Chip]]s for data storage, and [[Power Electronics]] for energy conversion all originate from the fab.

- ### Key Processes and Components
  - **[[Photolithography]]** — the patterning step in which UV or [[Extreme Ultraviolet Lithography]] (EUV) light exposes a photosensitive resist layer through a photomask, defining transistor gate geometries and metal interconnect layers. EUV at 13.5 nm wavelength is mandatory for sub-7 nm patterning.
  - **[[Chemical Vapour Deposition]] (CVD)** — gas-phase reactions deposit thin films of dielectrics (SiO₂, Si₃N₄, high-k oxides), polysilicon, and metals onto the wafer surface.
  - **[[Atomic Layer Deposition]] (ALD)** — self-limiting surface chemistry deposits films one atomic monolayer at a time, enabling conformal coverage in high-aspect-ratio structures at advanced nodes.
  - **[[Ion Implantation]]** — dopant atoms (boron, phosphorus, arsenic) are accelerated into the silicon lattice to tailor the local carrier concentration and define p-type and n-type regions.
  - **Etching** — wet chemical etching or dry plasma ([[Reactive Ion Etching]]) selectively removes material to realise the patterned structure. Etch selectivity between materials is a critical parameter.
  - **[[Chemical Mechanical Planarisation]] (CMP)** — abrasive slurry polishing restores surface flatness after deposition, essential for maintaining focus in subsequent lithography steps.
  - **[[Diffusion and Annealing]]** — thermal treatments activate implanted dopants, repair lattice damage, and drive controlled dopant redistribution.
  - **Metallisation and Interconnect** — multiple layers of copper or tungsten wiring (back-end-of-line, BEOL) connect transistors into functional circuits, separated by low-k dielectric insulators.
  - **[[Yield Management]]** — statistical process control, defect inspection (optical and e-beam), and parametric testing ensure that acceptable dice per wafer remain economically viable.
  - **[[Packaging and Assembly]]** — singulated dice are wire-bonded or flip-chip mounted into protective packages; advanced packaging (3D stacking, chiplets) increasingly blurs the fab/packaging boundary.

- ### Applications and Use Cases
  - **[[Microprocessor]] and [[CPU]] production** — CPUs for personal computers, servers, and embedded systems are the archetype semiconductor fabrication product, driving node advancement since the 1970s.
  - **[[GPU]] and [[AI Accelerators]]** — massively parallel compute dies for [[Deep Learning]] training and inference are now the primary revenue driver for leading-edge nodes.
  - **[[DRAM]] and [[NAND Flash]] memory** — memory chips manufactured in dedicated fabs underpin [[Data Centre]] storage and [[Edge Computing]] devices.
  - **[[Radio Frequency]] and communications** — RF front-end chips, 5G modem SoCs, and optical transceivers for [[Telecommunications Infrastructure]] require specialised process flavours (SiGe BiCMOS, III-V compound semiconductors).
  - **[[Power Electronics]]** — wide-bandgap semiconductors (SiC, GaN) fabricated in specialised fabs enable high-efficiency power conversion for [[Electric Vehicle]]s and grid infrastructure.
  - **[[MEMS]] (Micro-Electro-Mechanical Systems)** — sensors (accelerometers, gyroscopes, microphones) for smartphones and [[IoT Devices]] are fabricated using modified silicon processes.
  - **[[Photonics]]** — silicon photonics and compound semiconductor lasers are fabricated for optical interconnect and LiDAR applications in [[Autonomous Vehicles]].
  - **[[Quantum Computing]] substrates** — superconducting qubit chips (Josephson junctions) are fabricated using adapted cleanroom processes on silicon or sapphire wafers.

- ### Relationships
  - hasPart:: [[Photolithography]]
  - hasPart:: [[Chemical Vapour Deposition]]
  - hasPart:: [[Ion Implantation]]
  - hasPart:: [[Chemical Mechanical Planarisation]]
  - hasPart:: [[Atomic Layer Deposition]]
  - requires:: [[Cleanroom]]
  - requires:: [[Silicon Wafer]]
  - requires:: [[Extreme Ultraviolet Lithography]]
  - requires:: [[Process Control]]
  - enables:: [[Integrated Circuit]]
  - enables:: [[Microprocessor]]
  - enables:: [[Memory Chip]]
  - enables:: [[GPU]]
  - dependsOn:: [[Supply Chain]]
  - dependsOn:: [[Rare Earth Materials]]
  - dependsOn:: [[Energy Consumption]]
  - standardizedBy:: [[JEDEC]]
  - standardizedBy:: [[SEMI Standards]]
  - contrastsWith:: [[Printed Circuit Board Assembly]]
  - contrastsWith:: [[Additive Manufacturing]]
  - bridges-to:: [[Artificial Intelligence Hardware]]
  - bridges-to:: [[Quantum Computing]]
  - bridges-to:: [[Neuromorphic Computing]]
  - relatedTo:: [[Moore's Law]]
  - relatedTo:: [[Technology Node]]
  - relatedTo:: [[Yield Management]]

- ### Standards and Governance Context
  - **SEMI Standards** — the global industry association SEMI publishes specifications covering wafer dimensions (SEMI M1), chemical purity (SEMI C-series), equipment interfaces (SEMI E-series), and safety protocols. These are the primary equipment interoperability standards.
  - **JEDEC** — defines electrical and mechanical standards for [[Memory Chip]]s and packages (DDR SDRAM, LPDDR, HBM), which constrain fabrication process targets for memory-specific nodes.
  - **ITRS / IRDS (International Roadmap for Devices and Systems)** — the successor to the ITRS roadmap, maintained under IEEE, projects technology requirements for transistors, memory, interconnects, and packaging across a 15-year horizon; it coordinates R&D priorities across the global ecosystem.
  - **Export Controls** — semiconductor fabrication equipment and technology are subject to stringent national export regulations (e.g. US EAR controls on EUV lithography systems, advanced deposition tools). These regulations directly shape the geopolitical structure of the global fab ecosystem.
  - **Environmental Regulation** — fabs consume large volumes of ultrapure water, specialty gases (some with high global-warming potential), and chemicals subject to environmental regulation under frameworks such as the EU REACH and US EPA rules. [[Energy Consumption]] and water recycling are active sustainability domains.
  - **Geopolitical and Supply Chain Standards** — the CHIPS Act (US, 2022), European Chips Act (2023), and analogous national programmes impose requirements on fab localisation, security vetting of supply chains, and technology transfer restrictions, reshaping where advanced nodes can be manufactured.

- ### Key Industry Actors and Ecosystem
  - **Integrated Device Manufacturers (IDMs)** — companies such as Intel and Samsung both design and fabricate chips in-house.
  - **Pure-play Foundries** — TSMC (Taiwan), Samsung Foundry (South Korea), and GlobalFoundries manufacture chips exclusively for external customers (fabless designers).
  - **Fabless Designers** — companies such as NVIDIA, AMD, Qualcomm, and Apple design chips but outsource fabrication entirely to foundries.
  - **Equipment Vendors** — ASML (lithography), Applied Materials, Lam Research, and Tokyo Electron (deposition and etch) supply the capital equipment that defines process capability.
  - **Materials Suppliers** — Shin-Etsu and Sumco (silicon wafers), JSR and Shin-Etsu Chemical (photoresists), Air Liquide and Air Products (process gases) form the upstream material ecosystem.
  - The concentration of leading-edge capacity in a small number of foundries in East Asia creates structural [[Supply Chain]] fragility with significant implications for [[Critical Infrastructure]] and national security.

- ### Provenance
  - sources:: SEMI Standards documentation; IEEE IRDS roadmap; TSMC technology briefings; Mack, C. A. "Fundamental Principles of Optical Lithography" (Wiley, 2007); Jaeger, R. C. "Introduction to Microelectronic Fabrication" (Prentice Hall).
  - updated:: 2026-06-13
