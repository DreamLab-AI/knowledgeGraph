public:: true

# Trust Model
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:trust-model", "@type":"Page", "title":"Trust Model", "vc:slug":"trust-model", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:trust-model",
  "@type":"Class",
  "label":"Trust Model",
  "definition":"A trust model is a formal description of which entities are trusted, for what, and on what basis within a security or identity system. It defines the roots of trust, the relationships through which trust is delegated or transitively established, and the assumptions an adversary cannot violate. Trust models range from centralised certificate hierarchies to decentralised webs of trust and zero-trust architectures, and they directly shape how authentication and authorisation are designed.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:security","label":"Security"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:trust-establishment","label":"Trust Establishment"}],
    "requires":[{"@id":"urn:ngm:class:trust-anchor","label":"Trust Anchor"},{"@id":"urn:ngm:class:authentication","label":"Authentication"}],
    "hasPart":[{"@id":"urn:ngm:class:trust-anchor","label":"Trust Anchor"}],
    "enables":[{"@id":"urn:ngm:class:authorisation","label":"Authorisation"},{"@id":"urn:ngm:class:authentication","label":"Authentication"}],
    "uses":[{"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"},{"@id":"urn:ngm:class:cryptographic-proof","label":"Cryptographic Proof"}],
    "supports":[{"@id":"urn:ngm:class:zero-trust-architecture","label":"Zero-Trust Architecture"}],
    "dependsOn":[{"@id":"urn:ngm:class:trust","label":"Trust"}],
    "contrastsWith":[{"@id":"urn:ngm:class:web-of-trust","label":"Web of Trust"},{"@id":"urn:ngm:class:decentralised-trust","label":"Decentralised Trust"}],
    "relatedTo":[{"@id":"urn:ngm:class:threat-model","label":"Threat Model"},{"@id":"urn:ngm:class:risk-assessment","label":"Risk Assessment"},{"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A trust model describes which entities are trusted, for what, and on what basis. It fixes [[Trust Anchor]] roots and delegation rules, implementing [[Trust Establishment]] to support [[Authentication]] and [[Authorisation]]; contrast the [[Web of Trust]] with centralised hierarchies.
- ### Overview
- Every security system rests on assumptions about who can be believed; the trust model makes those assumptions explicit so they can be reasoned about and defended.
- It specifies roots of trust and the relationships through which trust propagates, whether by certificate hierarchy, peer endorsement or continuous verification.
- The choice of trust model determines how authentication, authorisation and revocation are designed, and what an adversary must compromise to break the system.
- ### Mechanisms
- Roots and anchors: the entities trusted without further proof.
- Delegation and transitivity: how trust extends beyond the roots.
- Verification: proofs checked against the model's assumptions.
- Revocation: withdrawing trust when assumptions fail.
- ### Applications
- Public-key infrastructures and certificate hierarchies.
- Decentralised identity and web-of-trust systems.
- Zero-trust architectures that verify continuously.
- ### Relationships
- implements:: [[Trust Establishment]]
- requires:: [[Trust Anchor]]
- requires:: [[Authentication]]
- hasPart:: [[Trust Anchor]]
- enables:: [[Authorisation]]
- enables:: [[Authentication]]
- uses:: [[Certificate Authority]]
- uses:: [[Cryptographic Proof]]
- supports:: [[Zero-Trust Architecture]]
- dependsOn:: [[Trust]]
- contrastsWith:: [[Web of Trust]]
- contrastsWith:: [[Decentralised Trust]]
- relatedTo:: [[Threat Model]]
- relatedTo:: [[Risk Assessment]]
- relatedTo:: [[Identity Verification]]
- ### Provenance
- updated:: 2026-06-15
