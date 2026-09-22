public:: true

# Hardware Description Language
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hardware-description-language", "@type":"Page", "title":"Hardware Description Language", "vc:slug":"hardware-description-language", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hardware-description-language",
  "@type": "Class",
  "label": "Hardware Description Language",
  "definition": "A hardware description language (HDL) is a specialised programming language used to describe the structure, behaviour and timing of digital electronic circuits at varying levels of abstraction. HDLs allow engineers to specify logic at the register-transfer level, which synthesis tools then translate into gate-level netlists for fabrication or for configuring reconfigurable devices such as FPGAs. The two dominant HDLs are Verilog and VHDL, complemented by higher-level and verification-oriented variants. By capturing concurrency and precise timing semantics, HDLs make digital designs simulatable, verifiable and reproducible before any silicon is committed.",
  "domain": "infrastructure",
  "maturity": "established",
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
    "enables": [
      {
        "@id": "urn:ngm:class:fpga",
        "label": "FPGA"
      },
      {
        "@id": "urn:ngm:class:asic",
        "label": "ASIC"
      },
      {
        "@id": "urn:ngm:class:system-on-chip",
        "label": "System-on-Chip"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:hardware-accelerator",
        "label": "Hardware Accelerator"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-logic",
        "label": "Digital Logic"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:inference-hardware",
        "label": "Inference Hardware"
      },
      {
        "@id": "urn:ngm:class:hardware-accelerator",
        "label": "Hardware Accelerator"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
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
- A [[Hardware Description Language]] (HDL) is a specialised language for describing the structure and behaviour of digital circuits, sitting between abstract logic and physical [[FPGA]] or [[ASIC]] implementations.
- HDLs capture concurrency and timing, distinguishing them from sequential software languages, and feed into synthesis flows that target reconfigurable or fixed silicon.
- They underpin the entire digital design pipeline, from specification through simulation to fabrication, supporting [[Embedded Systems]] and [[Hardware Accelerator]] development.
- ### Overview
- HDLs emerged to manage the growing complexity of integrated circuits, replacing manual schematic capture with text-based, version-controllable descriptions.
- The two predominant languages are Verilog and VHDL; both express designs at the register-transfer level, where data movement between registers and the combinational logic between them is specified explicitly.
- Synthesis tools compile HDL into gate-level netlists, after which place-and-route maps the design onto a device. For FPGAs the result is a bitstream; for ASICs it is a mask set.
- Simulation and formal verification operate directly on HDL, allowing functional correctness and timing to be validated long before silicon exists.
- ### Mechanisms
- Behavioural modelling describes what a circuit does using procedural constructs, while structural modelling instantiates and wires together components.
- Register-transfer-level (RTL) descriptions are the synthesisable subset most designers target, balancing expressiveness with predictable hardware mapping.
- Concurrency is intrinsic: every described block executes in parallel, mirroring physical hardware rather than a single instruction stream.
- Testbenches, themselves written in HDL, drive stimuli and check responses during simulation.
- ### Applications
- Configuring [[FPGA]] devices for low-latency AI inference, signal processing and prototyping.
- Designing [[ASIC]] and [[System-on-Chip]] products for high-volume, power-efficient deployment.
- Building custom [[Hardware Accelerator]] datapaths for cryptography, networking and machine learning.
- Developing [[Embedded Systems]] control logic where deterministic timing is required.
- ### Relationships
- enables:: [[FPGA]]
- enables:: [[ASIC]]
- enables:: [[System-on-Chip]]
- supports:: [[Hardware Accelerator]]
- supports:: [[Embedded Systems]]
- uses:: [[Digital Logic]]
- partOf:: [[Infrastructure]]
- relatedTo:: [[GPU]]
- relatedTo:: [[Inference Hardware]]
- contrastsWith:: [[GPU]]
- bridgesTo:: [[Embedded Systems]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
