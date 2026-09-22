public:: true

# Electronic Design Automation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ccd3c14a7fb43b4e058b3fa88692f3276a8cfd0646c8b7e624f3110e26717691",
  "@type": "Page",
  "vc:slug": "electronic-design-automation",
  "title": "Electronic Design Automation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cad-software",
      "vc:label": "CAD Software"
    },
    {
      "@id": "urn:visionflow:linked:asic",
      "vc:label": "ASIC"
    },
    {
      "@id": "urn:visionflow:linked:sat-solving",
      "vc:label": "Sat Solving"
    },
    {
      "@id": "urn:visionflow:linked:automated-design",
      "vc:label": "Automated Design"
    },
    {
      "@id": "urn:visionflow:linked:semiconductor",
      "vc:label": "Semiconductor"
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
  "@id": "urn:ngm:class:electronic-design-automation",
  "@type": "Class",
  "label": "Electronic Design Automation",
  "definition": "Electronic design automation (EDA) is the category of software tools used to design, simulate, verify, and physically lay out electronic systems such as integrated circuits and printed circuit boards. Modern chips containing tens of billions of transistors cannot be designed by hand, so EDA tools perform logic synthesis, placement and routing, timing and power analysis, and formal verification, drawing heavily on combinatorial optimisation and SAT solving. The market is dominated by Synopsys, Cadence, and Siemens EDA, making the sector a strategic chokepoint in the semiconductor supply chain.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:cad-software",
    "label": "CAD Software"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:automated-design",
        "label": "Automated Design"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asic",
        "label": "ASIC"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sat-solving",
        "label": "SAT Solving"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:semiconductor",
        "label": "Semiconductor"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "Electronic design automation (EDA) is the category of software tools used to design, simulate, verify, and physically lay out electronic systems such as integrated circuits and printed circuit boards. Modern chips containing tens of billions of transistors cannot be designed by hand, so EDA tools perform logic synthesis, placement and routing, timing and power analysis, and formal verification, drawing heavily on combinatorial optimisation and SAT solving. The market is dominated by Synopsys, Cadence, and Siemens EDA, making the sector a strategic chokepoint in the semiconductor supply chain."

- ### Semantic Classification
  - owl-class:: infrastructure:ElectronicDesignAutomation
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[CAD Software]]
  - enables:: [[ASIC]]
  - uses:: [[Sat Solving]]
  - related-to:: [[Semiconductor]]

- ### Content

  ## Definition

  **Electronic design automation (EDA)** is the software industry that makes modern chip design possible. A leading-edge processor contains tens of billions of transistors; no human team could place, connect, and verify them manually. EDA tools automate the flow from abstract description to manufacturable silicon: designers write behaviour in a hardware description language (Verilog, VHDL, or higher-level languages such as Chisel), and toolchains synthesise that description into logic gates, map gates onto a target technology, place and route them on the die, and verify at every stage that timing, power, and functional correctness constraints hold.

  The canonical flow divides into front-end and back-end. The front end covers specification, register-transfer-level (RTL) design, simulation, and functional verification — the last consuming the majority of engineering effort on large projects, using constrained-random simulation, emulation, and formal methods. The back end covers logic synthesis, floorplanning, placement, clock-tree synthesis, routing, and sign-off analyses (static timing, power integrity, design-rule checking) against the foundry's process design kit. Each step is a hard combinatorial problem; EDA is one of the largest industrial consumers of algorithms from [[Sat Solving]], SMT solving, graph partitioning, and simulated annealing, and formal equivalence checking rests directly on SAT.

  Three vendors — Synopsys, Cadence, and Siemens EDA (formerly Mentor Graphics) — control most of the roughly $15-20 billion market, and their tools sit upstream of every [[ASIC]] and processor shipped. This concentration gives EDA geopolitical weight: US export controls have restricted advanced-node EDA licences to Chinese customers, and access to EDA is as strategically sensitive as access to lithography. The field is also an early adopter of machine learning for design-space exploration, with reinforcement-learning placement (Google's AlphaChip work) and ML-guided synthesis now appearing in commercial flows.

  ## Technical Details

  - **Abstraction ladder**: system level → RTL → gate level → transistor level → layout (GDSII/OASIS handed to the foundry).
  - **Verification arsenal**: logic simulation, hardware emulation, formal property checking (model checking, SAT/SMT), equivalence checking, and post-silicon validation.
  - **Physical design objectives**: simultaneous optimisation of timing (setup/hold slack), power (dynamic and leakage), and area — the "PPA" triad — under increasingly restrictive design rules at advanced nodes.
  - **Open-source flows**: OpenROAD, Yosys, and the OpenLane flow now support complete RTL-to-GDSII for mature nodes, underpinning academic tape-outs and efforts such as Google/Efabless open MPW shuttles.

  ## Current Landscape

  - **Consolidation**: Synopsys completed its $35 billion acquisition of simulation vendor Ansys on 17 July 2025, expanding its addressable market to a stated $31 billion; China's SAMR granted conditional approval on 14 July 2025, requiring divestment of Ansys's optics/photonics simulation business and non-discriminatory supply to Chinese customers.
  - **Export-control whiplash (2025)**: in late May 2025 the US Commerce Department ordered Synopsys, Cadence, and Siemens EDA to halt EDA software sales to China — a market worth over 10% of their revenue, where the three held a combined ~82% share (Morgan Stanley) — then rescinded the restrictions in early July 2025 following a US–China trade truce, with all three vendors restoring access. Advanced-node (sub-14/16nm GAAFET-class) EDA restrictions from the 2022–2023 controls remain a separate, narrower regime.
  - **AI in the flow**: reinforcement-learning placement (Google's AlphaChip lineage) and ML-guided synthesis and verification are now embedded in commercial flows, with all major vendors shipping AI copilots and design-space-exploration products.

  **Sources**:
  - https://news.synopsys.com/2025-07-17-Synopsys-Completes-Acquisition-of-Ansys
  - https://www.reuters.com/world/china/china-grants-conditional-approval-synopsys-acquire-ansys-2025-07-14/
  - https://www.reuters.com/world/china/chip-design-software-firms-rise-us-lifts-curbs-china-exports-2025-07-03/
  - https://www.caixinglobal.com/2025-07-15/china-approves-synopsysansys-merger-with-eight-conditions-amid-post-sanctions-rebound-102341171.html
