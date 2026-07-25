public:: true

# Attestation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:attestation", "@type":"Page", "title":"Attestation", "vc:slug":"attestation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:attestation",
  "@type":"Class",
  "label":"Attestation",
  "definition":"Attestation is the act of producing verifiable, signed evidence that a claim, state, or property is true, allowing a relying party to trust it without re-deriving it. In blockchain proof-of-stake consensus, validators broadcast attestations voting on the head of the chain and on checkpoints, and the aggregate of these signed votes drives finalisation. More broadly, remote attestation lets a trusted execution environment cryptographically prove its identity and integrity to a remote verifier. Attestations are typically cryptographic signatures over structured claims, and they underpin trust, accountability, and slashing-based security.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cryptographic-proof","label":"Cryptographic Proof"}],
  "relations":{
    "relatedTo":[
      {"@id":"urn:ngm:class:consensus","label":"Consensus"},
      {"@id":"urn:ngm:class:validator","label":"Validator"},
      {"@id":"urn:ngm:class:remote-attestation","label":"Remote Attestation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"},
      {"@id":"urn:ngm:class:cryptographic-proof","label":"Cryptographic Proof"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:cryptographic-proof","label":"Cryptographic Proof"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:finality","label":"Finality"},
      {"@id":"urn:ngm:class:economic-finality","label":"Economic Finality"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:validator","label":"Validator"},
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:proof-of-stake","label":"Proof of Stake"},
      {"@id":"urn:ngm:class:trusted-execution-environment","label":"Trusted Execution Environment"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:slashing","label":"Slashing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Attestation produces verifiable, signed evidence that a claim or state is true, so a relying party can trust it without re-deriving it. A specialisation of [[Cryptographic Proof]], it drives [[Consensus]] when [[Validator]] nodes vote, and underpins [[Remote Attestation]] of execution integrity.
- ### Overview
- An attestation binds a structured claim to a cryptographic signature, converting a subjective assertion into objectively checkable evidence.
- In proof-of-stake consensus, validators attest to the chain head and checkpoints; aggregating these votes yields finalisation and exposes equivocation to slashing.
- In trusted hardware, remote attestation lets an enclave prove its measured identity to a remote verifier.
- ### Mechanisms
- Validators sign a vote over a target block and checkpoint.
- Signatures are aggregated and counted against finalisation thresholds.
- Conflicting attestations are penalised via [[Slashing]].
- ### Applications
- Block finalisation in [[Proof of Stake]] networks.
- Integrity proofs from a [[Trusted Execution Environment]].
- Verifiable claims and credentials in identity systems.
- ### Relationships
- relatedTo:: [[Consensus]]
- relatedTo:: [[Validator]]
- relatedTo:: [[Remote Attestation]]
- uses:: [[Cryptography]]
- uses:: [[Cryptographic Proof]]
- hasPart:: [[Cryptographic Proof]]
- enables:: [[Finality]]
- enables:: [[Economic Finality]]
- requires:: [[Validator]]
- requires:: [[Cryptography]]
- supports:: [[Proof of Stake]]
- supports:: [[Trusted Execution Environment]]
- dependsOn:: [[Slashing]]
- ### Provenance
- updated:: 2026-06-15
