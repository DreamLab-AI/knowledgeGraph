public:: true

# AluVM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:alu-vm",
  "@type": "Page",
  "vc:slug": "alu-vm",
  "title": "AluVM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:alu-vm",
  "@type": "Class",
  "label": "AluVM",
  "definition": "A purely functional, register-based virtual machine designed for deterministic execution of smart-contract validation logic within client-side validated Bitcoin protocol layers, notably the RGB Protocol. AluVM operates without mutable global state, using a RISC-like instruction set that guarantees bounded execution time and reproducible results across heterogeneous computing environments. Its architecture is specifically optimised for the constraints of client-side validation, where contract logic must execute identically across all validating parties without access to a shared blockchain state machine.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:virtual-machine", "label": "Virtual Machine"}],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:rgb-protocol", "label": "RGB Protocol"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:bitcoin-script", "label": "Bitcoin Script"},
      {"@id": "urn:ngm:class:taproot", "label": "Taproot"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rgb-and-client-side-validation", "label": "RGB and Client Side Validation"},
      {"@id": "urn:ngm:class:layer-2-solutions", "label": "Layer 2 Solutions"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[AluVM]] is a register-based, purely functional [[Virtual Machine]] whose primary design goal is deterministic contract validation within the [[RGB Protocol]] ecosystem on Bitcoin. Unlike account-based virtual machines such as the EVM, AluVM maintains no persistent mutable state between executions; each validation run is self-contained, accepting inputs and producing a boolean pass or fail result alongside cryptographic commitments. This design makes it compatible with the client-side validation paradigm central to [[RGB and Client Side Validation]], where contract state is held off-chain by token owners rather than replicated globally.

- ### Relationships
  - AluVM directly implements the execution semantics required by the [[RGB Protocol]], serving as the scripting engine for RGB contract validation. It anchors contract commitments to the Bitcoin blockchain via [[Taproot]] outputs, inheriting Bitcoin's security guarantees without requiring a separate blockchain. [[Bitcoin Script]] provides the anchor mechanism on-chain, while AluVM handles the richer contract logic off-chain. The VM is a key component enabling [[Layer 2 Solutions]] that preserve Bitcoin's security model whilst adding programmability.

- ### Content
  - AluVM was designed by Maxim Orlovsky at Pandora Prime and LNP/BP Standards Association as part of the broader effort to bring client-side validated smart contracts to Bitcoin without compromising Bitcoin's auditability or introducing a global shared execution environment. The design was first specified circa 2021–2022 in conjunction with the RGB v0.10 protocol rewrite, which sought to place RGB on rigorous formal foundations.

  - The instruction set architecture (ISA) of AluVM is intentionally minimal and RISC-like, comprising arithmetic, logical, control-flow, and cryptographic primitive instructions. All registers are fixed-width integers or field elements; there are no heap allocations or unbounded loops, ensuring every program halts in bounded time. The determinism guarantee is enforced at the ISA level: every instruction's semantics are fully specified with no undefined behaviour, making independent implementations interoperable by construction.

  - AluVM integrates with the broader RGB stack through the Strict Encoding library and the Contractum high-level language, which compiles to AluVM bytecode. Contract developers write business logic in Contractum and target AluVM as the execution backend, analogously to how Solidity targets the EVM. The LNP/BP Standards Association publishes the AluVM specification as an open standard and maintains a reference implementation in Rust.

  - By 2024–2025, AluVM is in active use within the RGB v0.11 protocol, which supports issuance of fungible and non-fungible assets on Bitcoin. The virtual machine has been deployed to support [[Taproot Assets]] and related Bitcoin-native asset protocols. Interest from Lightning Network developers in using AluVM for payment channel script extensions has grown, though standardisation work for such integrations remains ongoing. The VM's formal specification has attracted academic interest as a case study in deterministic contract execution for UTXO-based systems.

