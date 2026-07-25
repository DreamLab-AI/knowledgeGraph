public:: true

# Credential Exchange

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:credential-exchange", "@type":"Page", "title":"Credential Exchange", "vc:slug":"credential-exchange", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:credential-exchange",
  "@type":"Class",
  "label":"Credential Exchange",
  "definition":"Credential exchange is the protocol-governed flow by which verifiable credentials are issued to, held by and presented from a digital identity wallet to relying parties. It defines how issuers offer credentials, how holders store and selectively disclose them, and how verifiers request and validate proofs. It is a foundational interaction pattern of decentralised and self-sovereign identity systems.",
  "domain":"security",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:digital-identity-standards","label":"Digital Identity Standards"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:self-sovereign-identity","label":"Self Sovereign Identity"}],
    "supports":[{"@id":"urn:ngm:class:verifiable-credentials","label":"Verifiable Credentials"}],
    "hasPart":[{"@id":"urn:ngm:class:credential-issuance","label":"Credential Issuance"},{"@id":"urn:ngm:class:presentation-exchange","label":"Presentation Exchange"}],
    "uses":[{"@id":"urn:ngm:class:selective-disclosure","label":"Selective Disclosure"},{"@id":"urn:ngm:class:decentralised-identifier","label":"Decentralised Identifier"}],
    "partOf":[{"@id":"urn:ngm:class:digital-identity-standards","label":"Digital Identity Standards"}],
    "implements":[{"@id":"urn:ngm:class:verifiable-credentials","label":"Verifiable Credentials"}],
    "dependsOn":[{"@id":"urn:ngm:class:decentralised-identifier","label":"Decentralised Identifier"}],
    "requires":[{"@id":"urn:ngm:class:digital-wallet","label":"Digital Wallet"},{"@id":"urn:ngm:class:trust-framework","label":"Trust Framework"}],
    "contrastsWith":[{"@id":"urn:ngm:class:oauth","label":"OAuth"}],
    "bridgesTo":[{"@id":"urn:ngm:class:zero-knowledge-proof","label":"Zero Knowledge Proof"}],
    "relatedTo":[{"@id":"urn:ngm:class:authentication","label":"Authentication"},{"@id":"urn:ngm:class:did-document","label":"DID Document"},{"@id":"urn:ngm:class:trust-framework","label":"Trust Framework"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Credential exchange is the set of protocols and message flows that move [[Verifiable Credentials]] between issuers, holders and verifiers. It governs how a credential is offered and accepted, how a [[Digital Wallet]] stores it, and how a holder later presents proofs to a relying party.
- It underpins [[Self Sovereign Identity]] by letting individuals control which attributes they reveal, using [[Selective Disclosure]] and [[Decentralised Identifier]] mechanisms rather than centralised account federation.
- ### Overview
- The exchange has three roles: issuers who attest claims, holders who store credentials, and verifiers who request and check presentations.
- Issuance flows deliver a signed credential to the holder's wallet, anchored to the issuer's [[DID Document]].
- Presentation flows, often following a [[Presentation Exchange]] request, let the holder assemble and prove a subset of claims to a verifier.
- A [[Trust Framework]] establishes which issuers and schemas a verifier should accept, providing the governance layer above the cryptographic protocol.
- ### Mechanisms
- Credential offer and acceptance: issuer proposes, holder consents and receives the credential.
- Storage: the wallet retains credentials and associated keys under holder control.
- Proof request: verifier specifies required attributes and acceptable issuers.
- Selective disclosure: holder reveals only the requested attributes, optionally via [[Zero Knowledge Proof]] for predicates.
- Verification: verifier validates signatures, status and trust before granting access.
- ### Applications
- Digital identity wallets for travel, finance and government services.
- Privacy-preserving age and eligibility checks via selective disclosure.
- Cross-organisation [[Authentication]] without centralised identity providers.
- Reusable, portable credentials across relying parties.
- ### Relationships
- subClassOf:: [[Digital Identity Standards]]
- enables:: [[Self Sovereign Identity]]
- supports:: [[Verifiable Credentials]]
- hasPart:: [[Credential Issuance]]
- hasPart:: [[Presentation Exchange]]
- uses:: [[Selective Disclosure]]
- uses:: [[Decentralised Identifier]]
- partOf:: [[Digital Identity Standards]]
- implements:: [[Verifiable Credentials]]
- dependsOn:: [[Decentralised Identifier]]
- requires:: [[Digital Wallet]]
- requires:: [[Trust Framework]]
- contrastsWith:: [[OAuth]]
- bridgesTo:: [[Zero Knowledge Proof]]
- relatedTo:: [[Authentication]]
- relatedTo:: [[DID Document]]
- relatedTo:: [[Trust Framework]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
