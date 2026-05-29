public:: true

# BIP Process
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bip-process",
  "@type": "Page",
  "vc:slug": "bip-process",
  "title": "BIP Process",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bip-process",
  "@type": "Class",
  "label": "BIP Process",
  "definition": "The Bitcoin Improvement Proposal (BIP) process is the standardised social and technical workflow by which proposed changes to the Bitcoin protocol, best practices, and informational standards are drafted, reviewed, debated, and either accepted or rejected by the Bitcoin developer community. It defines the lifecycle of a proposal from Draft through Proposed, Final, Active, Withdrawn, or Rejected, providing a structured mechanism for decentralised protocol governance without a centralised authority.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:bitcoin-improvement-proposals", "label": "Bitcoin Improvement Proposals"},
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:bitcoin-core", "label": "Bitcoin Core"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bip-327", "label": "BIP-327"},
      {"@id": "urn:ngm:class:bip-342", "label": "BIP-342"},
      {"@id": "urn:ngm:class:nakamoto-coefficient", "label": "Nakamoto Coefficient"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The BIP process is Bitcoin's open, community-managed framework for proposing and standardising changes to the protocol and its ecosystem. Modelled loosely on Python's PEP process and the IETF RFC process, it requires a BIP to be authored and submitted to the bitcoin-dev mailing list, assigned a number by a BIP editor, iterated through community review, and ultimately determined to reach consensus based on widespread adoption rather than any formal vote. BIPs encompass Standards Track proposals (consensus-layer changes, APIs, and networking), Informational BIPs (guidelines and general information), and Process BIPs (governance and workflow changes), enabling [[Bitcoin Improvement Proposals]] to cover the full breadth of protocol evolution.

- ### Relationships
  - The BIP process [[enables]] [[Bitcoin Improvement Proposals]] as the tangible output of the process and [[enables]] [[Nakamoto Consensus]] by providing the community deliberation mechanism through which safe consensus-layer changes are identified and implemented. It [[uses]] [[Bitcoin Core]] as the reference implementation against which consensus BIPs are validated and in which activation logic is coded. It is [[relatedTo]] [[BIP-327]] and [[BIP-342]] as examples of Standards Track BIPs that successfully navigated the process, and [[relatedTo]] [[Nakamoto Coefficient]] as a measure of how centralised the informal governance process may become in practice.

- ### Content
  - The BIP process was established by Amir Taaki in 2011 via BIP-1, which defined the process itself, modelled on Python Enhancement Proposals. Luke Dashjr updated the governance documentation in BIP-2 (2016) to reflect how the process had evolved in practice. The process deliberately avoids formal voting or a central committee, relying instead on social consensus demonstrated by miner signalling, node operator adoption, and developer agreement. This design reflects Bitcoin's founding philosophy of decentralisation and resistance to capture by any single party.

  - Technically, a Standards Track BIP progresses through Draft (initial proposal), Proposed (considered complete and ready for community consideration), and then either Final (widely deployed and not intended to change) or Active (a living document updated by community practice, such as BIP-1 itself). Consensus-layer BIPs—soft forks—additionally require an activation mechanism. Historic methods include IsSuperMajority (used for BIP-66), BIP-9 versionbits (used for Segwit), and BIP-8 with configurable LOT (lock-in on timeout) used in the debate over Taproot. Speedy Trial (BIP-91-derived) was ultimately used for Taproot activation (block 709,632).

  - The ecosystem supporting the BIP process consists of the bitcoin-dev mailing list (now hosted on groups.io after the Linux Foundation discontinued hosting), the BIP repository on GitHub (github.com/bitcoin/bips), and informal coordination through IRC (Libera.chat #bitcoin-core-dev), Twitter/X, and developer conferences. BIP editors (historically Gavin Andresen, Luke Dashjr, and currently a rotating set of contributors) are responsible for assigning numbers and maintaining metadata but do not gate proposals on technical merit.

  - As of 2024–2025 the BIP process faces tensions between its deliberately slow, consensus-requiring nature and market pressure for new features. High-profile proposals including OP_CHECKTEMPLATEVERIFY (BIP-119), OP_CAT (BIP-347), and LNHANCE (a bundle of opcodes for Lightning improvements) have been in extended community debate, illustrating the difficulty of achieving soft-fork consensus without a central arbiter. Some contributors advocate for a more structured evaluation framework, whilst others consider the current resistance to change a safety feature. The process remains the central legitimising mechanism for Bitcoin protocol development.

