iri:: http://narrativegoldmine.com/infrastructure#ZeroKnowledgeProofZKP
uri:: urn:visionclaw:concept:infrastructure:zero-knowledge-proof-zkp
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:zero-knowledge-proof-zkp
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Zero-Knowledge Proof (ZKP)
content-hash:: sha256-12-29a2bf768932
legacy-term-id:: 20211
status:: draft
maturity:: mature
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - A cryptographic protocol that enables one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any information beyond the validity of the statement itself.

- ### Semantic Classification
  - owl-class:: infrastructure:ZeroKnowledgeProof
  - owl-role:: Process
  - owl-inferred:: infrastructure:VirtualProcess
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[Middleware Layer]]

- ### Relationships
  - has-part:: [[zk-SNARKs]], [[zk-STARKs]], [[Bulletproofs]], [[PLONK]], [[Interactive ZKP]], [[Non-Interactive ZKP]]
  - is-part-of:: [[Privacy-Preserving Protocol]], [[Cryptographic Verification System]]
  - requires:: [[Cryptographic Hash Function]], [[Polynomial Commitment Scheme]], [[Elliptic Curve Cryptography]]
  - enables:: [[Private Authentication]], [[Confidential Transactions]], [[Verifiable Computation]], [[Privacy-Preserving Identity]]
  - depends-on:: [[Computational Complexity Theory]], [[Number Theory]], [[Algebraic Circuits]]

- ### Content
  Zero-Knowledge Proof (ZKP) — content pending enrichment.

- ### Provenance
  - sources:: [[OMA3 + Reed Smith]]
  - migration-date:: 2026-04-26T00:00:00Z
