public:: true

# Blockchain Identity

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:blockchain-identity", "@type":"Page", "title":"Blockchain Identity", "vc:slug":"blockchain-identity", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:blockchain-identity",
  "@type":"Class",
  "label":"Blockchain Identity",
  "definition":"Blockchain Identity is an approach to digital identity in which identifiers, credentials and attestations are anchored to a distributed ledger rather than a single central authority. It gives users cryptographic control over their identity through key pairs, enables verifiable claims that any party can check against on-chain or anchored data, and underpins self-sovereign identity models. By decentralising the registry of identifiers, it reduces reliance on intermediaries and supports portable, tamper-evident identity across services.",
  "domain":"security",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:decentralized-identity","label":"Decentralized Identity"}],
  "relations":{
    "bridgesTo":[{"@id":"urn:ngm:class:blockchain","label":"Blockchain"}],
    "partOf":[{"@id":"urn:ngm:class:decentralized-identity","label":"Decentralized Identity"}],
    "hasPart":[{"@id":"urn:ngm:class:decentralized-identifier","label":"Decentralized Identifier"},{"@id":"urn:ngm:class:verifiable-credentials","label":"Verifiable Credentials"}],
    "requires":[{"@id":"urn:ngm:class:public-key-infrastructure","label":"Public Key Infrastructure"},{"@id":"urn:ngm:class:distributed-ledger","label":"Distributed Ledger"}],
    "enables":[{"@id":"urn:ngm:class:self-sovereign-identity","label":"Self-Sovereign Identity"},{"@id":"urn:ngm:class:single-sign-on","label":"Single Sign-On"}],
    "dependsOn":[{"@id":"urn:ngm:class:did","label":"DID"}],
    "uses":[{"@id":"urn:ngm:class:zero-knowledge-proof","label":"Zero-Knowledge Proof"},{"@id":"urn:ngm:class:digital-certificate","label":"Digital Certificate"},{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "supports":[{"@id":"urn:ngm:class:authentication","label":"Authentication"},{"@id":"urn:ngm:class:access-control","label":"Access Control"},{"@id":"urn:ngm:class:privacy","label":"Privacy"}],
    "contrastsWith":[{"@id":"urn:ngm:class:identity-management","label":"Identity Management"}],
    "relatedTo":[{"@id":"urn:ngm:class:digital-identity","label":"Digital Identity"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Blockchain Identity]] anchors digital identifiers and credentials to a [[Distributed Ledger]] rather than a central registry, giving users cryptographic control through key pairs.
	- It builds on [[Decentralized Identity]] and [[Self-Sovereign Identity]] principles, using [[Decentralized Identifier]]s and [[Verifiable Credentials]] to express portable, tamper-evident claims.
	- The model removes single points of failure inherent in traditional [[Identity Management]] and lets relying parties verify claims against [[Blockchain]]-anchored data.
- ### Overview
	- Conventional identity systems store identity records in centralised databases controlled by a provider, which creates honeypots for attackers and forces users to trust intermediaries.
	- Blockchain Identity inverts this: the ledger holds only resolvable pointers and cryptographic proofs, while the actual credential data is held by the holder in a wallet.
	- An identifier is typically a [[Decentralized Identifier]] (DID) whose method describes how it is created, resolved and updated against a ledger or anchoring layer.
	- Issuers sign [[Verifiable Credentials]] that holders present to verifiers; the verifier checks signatures against the issuer's published keys without contacting the issuer.
	- This separation of issuance, holding and verification is the defining architectural pattern of the approach.
- ### Key aspects
	- Cryptographic control: identity is bound to private keys the user holds, not to an account a provider can revoke unilaterally.
	- Anchoring: identifiers and key states are anchored to a ledger so updates and revocations are auditable and tamper-evident.
	- Selective disclosure: [[Zero-Knowledge Proof]] techniques let holders prove attributes (e.g. age over 18) without revealing underlying data, strengthening [[Privacy]].
	- Interoperability: standardised DID and credential formats allow identities to move across services and ecosystems.
	- Recovery and key rotation: methods exist for rotating compromised keys and recovering control, a recognised usability challenge.
- ### Applications
	- Passwordless [[Authentication]] and [[Single Sign-On]] where a wallet replaces username/password flows.
	- Know-your-customer and reusable onboarding where verified credentials are presented once and reused.
	- Access control for decentralised applications, where on-chain identity gates permissions via [[Smart Contract]] logic.
	- Supply-chain and academic credentialing, where tamper-evident attestations follow goods or graduates.
	- Cross-border identity aligned with frameworks such as eIDAS-style trust services.
- ### Relationships
	- bridgesTo:: [[Blockchain]]
	- partOf:: [[Decentralized Identity]]
	- hasPart:: [[Decentralized Identifier]]
	- hasPart:: [[Verifiable Credentials]]
	- requires:: [[Public Key Infrastructure]]
	- requires:: [[Distributed Ledger]]
	- enables:: [[Self-Sovereign Identity]]
	- enables:: [[Single Sign-On]]
	- dependsOn:: [[DID]]
	- uses:: [[Zero-Knowledge Proof]]
	- uses:: [[Digital Certificate]]
	- uses:: [[Smart Contract]]
	- supports:: [[Authentication]]
	- supports:: [[Access Control]]
	- supports:: [[Privacy]]
	- contrastsWith:: [[Identity Management]]
	- relatedTo:: [[Digital Identity]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
