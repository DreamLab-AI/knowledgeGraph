public:: true

# iso tc 307
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f0419131baf3a179ea14d21385081b481ba6d2d502b2c2bca13c5c92a245a9ba",
  "@type": "Page",
  "vc:slug": "iso-tc-307",
  "title": "iso tc 307",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iso-tc-307",
  "@type": "Class",
  "label": "ISO TC 307",
  "definition": "ISO/TC 307 is the ISO technical committee established in 2016 with a mandate to develop international standards for blockchain and distributed ledger technologies, covering terminology (ISO 22739), reference architecture, security and privacy, smart contract interactions, identity, and governance frameworks. The committee coordinates with other bodies including IEEE, ITU, and national standards organisations to ensure interoperability of DLT systems and provides normative vocabulary that underpins regulatory and procurement language in blockchain-related initiatives worldwide.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"},
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:digital-identity-standards", "label": "Digital Identity Standards"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - ISO/TC 307 is the ISO technical committee established in 2016 with a mandate to develop international standards for blockchain and distributed ledger technologies, covering terminology (ISO 22739), reference architecture, security and privacy, smart contract interactions, identity, and governance frameworks. The committee coordinates with other bodies including IEEE, ITU, and national standards organisations to ensure interoperability of DLT systems and provides normative vocabulary that underpins regulatory and procurement language in blockchain-related initiatives worldwide.

- ### Semantic Classification
  - owl-class:: iso-tc-307:ISO TC 307
  - owl-role:: Concept

- ### Relationships
  - standardizedBy [[Blockchain Governance]]
  - enables [[Distributed Ledger Technology]]
  - enables [[Blockchain Interoperability]]
  - relatedTo [[Smart Contract]]
  - relatedTo [[Digital Identity Standards]]
  - relatedTo [[Blockchain]]

- ### Content
  ISO/TC 307 was established after a resolution at the ISO General Assembly in 2016, with Australia as the secretariat holder. It operates through working groups covering overlapping aspects of DLT standardisation: WG 1 (Foundations—terminology and concepts), WG 2 (Security, privacy, and identity), WG 3 (Smart contracts and their applications), WG 4 (Data governance), WG 5 (Blockchain and DLT governance), and WG 7 (Interoperability).

  The committee's flagship output is ISO 22739 (Blockchain and distributed ledger technologies — Vocabulary), which provides normative definitions for terms including "blockchain", "distributed ledger", "smart contract", "node", and "consensus mechanism". Unambiguous shared vocabulary is a prerequisite for regulators, procurement authorities, and standards-referencing legislation to describe DLT requirements without technical ambiguity. ISO/TC 307 also produced ISO/TR 23455 (Smart contracts in blockchain and DLT systems) and is developing standards for security assurance frameworks applicable to permissioned and permissionless ledgers.

  The committee liaises with ISO/TC 68 (Financial services) for CBDC and payment DLT applications, ISO/TC 46 (Information and documentation) for archival blockchain use cases, and ISO/IEC JTC 1/SC 27 for cryptographic security alignment. Blockchain Interoperability standards under development aim to specify cross-chain communication protocols, which are increasingly relevant as enterprise blockchain deployments must exchange data and assets across Hyperledger Fabric, Ethereum, and permissioned Corda networks. Digital Identity Standards are developed in parallel with W3C DID specifications, with TC 307 providing the ISO-registered normative framework.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
