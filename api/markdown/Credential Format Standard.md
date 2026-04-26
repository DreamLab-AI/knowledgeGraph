iri:: http://narrativegoldmine.com/infrastructure#CredentialFormatStandard
uri:: urn:visionclaw:concept:infrastructure:credential-format-standard
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:credential-format-standard
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Credential Format Standard
content-hash:: sha256-12-65b10fa8e774
legacy-term-id:: MV-9834
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Technical specifications defining the structure, encoding, and cryptographic verification methods for digital credentials, enabling secure issuance, storage, and verification of identity documents, certifications, and attestations across different platforms and systems through interoperable formats like W3C Verifiable Credentials.

- ### Semantic Classification
  - owl-class:: infrastructure:CredentialFormatStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[DID Nostr Identity]]
  - is-subclass-of:: [[Identity Standards]]
  - requires:: [[Cryptographic Proofs]], [[Standards Body]], [[Issuer Infrastructure]]
  - enables:: [[Credential Verification]], [[Identity Portability]], [[Trust Interoperability]]

- ### Content

  - ## Technical Details
  - **W3C Verifiable Credentials 2.0** (Published May 2025):
		- Cryptographically secure, privacy-respecting, machine-verifiable
		- Extensible data model for identity credentials, university certificates, etc.
		- Three-party ecosystem: issuers, holders, verifiers
  - **Core Components**:
		- Subject and issuer identification
		- Claims/attributes about the subject
		- Cryptographic proofs for integrity
		- JSON-LD serialization for linked data
		- Decentralized Identifiers (DIDs) for unique identification
  - **EU Digital Identity Integration**:
		- European Commission assessing W3C VCDM v2.0 by December 2025
		- Comparison with ISO mDL (mobile Driver License) format
  - **Advantages**: Tamper-resistant, instantly verifiable, issued by anyone, verified by everyone
  - ## Applications
  - Digital driver licenses
  - Educational certificates
  - Professional certifications
  - Healthcare credentials
  - Government identity documents

- ### Provenance
  - sources:: [[W3C Verifiable Credentials]], [[ISO mDL]], [[DID]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T14:15:00Z
