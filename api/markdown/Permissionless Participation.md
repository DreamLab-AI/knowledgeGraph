public:: true

# Permissionless Participation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:permissionless-participation",
  "@type": "Page",
  "vc:slug": "permissionless-participation",
  "title": "Permissionless Participation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:permissionless-participation",
  "@type": "Class",
  "label": "Permissionless Participation",
  "definition": "Permissionless participation is the property of a network whereby any actor may join, transact, validate, or contribute without requesting approval from a central authority. It is a defining characteristic of public blockchains, where open access to running nodes and proposing or validating blocks underpins censorship resistance and decentralisation. The property is enforced by economic and cryptographic mechanisms rather than identity vetting.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}, {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Permissionless participation lets anyone join and validate a network without gatekeeping, a property enabled by the design of a [[Blockchain Protocol]] and its [[Consensus Mechanism]].
- ### Content
  - In permissionless systems, Sybil resistance is achieved through costly signals such as proof-of-work hashing or proof-of-stake bonding rather than identity checks, so open entry does not compromise security. This openness maximises decentralisation and censorship resistance but constrains throughput and finality compared with permissioned designs that restrict the validator set.
