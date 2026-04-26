iri:: http://narrativegoldmine.com/blockchain#NonRepudiation
uri:: urn:visionclaw:concept:blockchain:non-repudiation
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:non-repudiation
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Non-Repudiation
content-hash:: sha256-stub-007
status:: stub
maturity:: emerging
quality-score:: 0.35
authority-score:: 0.6
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - [[Non-Repudiation]] is a cryptographic security property ensuring that the originator of a message or transaction cannot credibly deny their authorship or participation, enforced through [[Digital Signature]] mechanisms that create mathematically unforgeable evidence of intent and authorisation.

- ### Semantic Classification
  - owl-class:: blockchain:NonRepudiation
  - owl-role:: Object
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Security Property]], [[Accountability Mechanism]], [[Legal Framework]]
  - requires:: [[Digital Signature]], [[Public Key Infrastructure]], [[Cryptographic Hash]]
  - enables:: [[Accountability]], [[Dispute Resolution]], [[Transaction Verification]]
  - bridges-to:: [[Traditional Legal Signature]], [[Regulatory Compliance]]

- ### Content

  Non-repudiation provides the cryptographic foundation for accountability in trustless blockchain environments. When a user signs a transaction with their private key, they create unforgeable mathematical evidence of their participation. No later claim—"my account was hacked," "I didn't authorise this," "the network is lying"—can override the cryptographic proof, as the private key alone could generate that specific signature.

  This property transforms blockchain from permissionless-but-unaccountable networks into systems where every action carries attribution. It enables smart contract disputes to be resolved through cryptographic evidence, permits regulatory authorities to trace transactions to originating parties, and creates a permanent audit trail suitable for legal proceedings.

  Non-repudiation achieves its cryptographic guarantees only when private keys remain genuinely secret. If attackers compromise private keys, they can create signatures indistinguishable from legitimate owner authorisation, breaking non-repudiation guarantees. Private key management security is therefore non-negotiable for maintaining accountability.

- ### Provenance
  - sources:: [[Digital Signature]], [[Public Key Infrastructure]]
  - migration-date:: 2026-04-26T00:00:00Z
