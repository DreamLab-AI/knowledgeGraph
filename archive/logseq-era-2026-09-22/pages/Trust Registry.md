public:: true

# Trust Registry

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:trust-registry", "@type":"Page", "title":"Trust Registry", "vc:slug":"trust-registry", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:trust-registry",
  "@type":"Class",
  "label":"Trust Registry",
  "definition":"A trust registry is an authoritative, queryable record that lists which issuers, verifiers, and credential types are recognised as trustworthy within a given governance framework. It allows a relying party to programmatically determine whether a presented verifiable credential comes from an accredited source and remains valid. Trust registries underpin scalable decentralised identity ecosystems by providing the machine-readable basis for trust decisions.",
  "domain":"security",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:trust-framework","label":"Trust Framework"}],
  "relations":{
    "relatedTo":[{"@id":"urn:ngm:class:did","label":"DID"},{"@id":"urn:ngm:class:decentralized-identity","label":"Decentralized Identity"},{"@id":"urn:ngm:class:verifiable-credentials","label":"Verifiable Credentials"},{"@id":"urn:ngm:class:digital-identity","label":"Digital Identity"}],
    "supports":[{"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"},{"@id":"urn:ngm:class:credential-issuance","label":"Credential Issuance"}],
    "partOf":[{"@id":"urn:ngm:class:governance-framework","label":"Governance Framework"}],
    "uses":[{"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}],
    "enables":[{"@id":"urn:ngm:class:identity-verification","label":"Identity Verification"}],
    "dependsOn":[{"@id":"urn:ngm:class:trust-anchor","label":"Trust Anchor"}],
    "implements":[{"@id":"urn:ngm:class:trust-framework","label":"Trust Framework"}],
    "bridgesTo":[{"@id":"urn:ngm:class:self-sovereign-identity","label":"Self-Sovereign Identity"}],
    "requires":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"}],
    "contrastsWith":[{"@id":"urn:ngm:class:certificate-authority","label":"Certificate Authority"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A **Trust Registry** is an authoritative, machine-readable list of accredited issuers, verifiers, and credential types within a [[Governance Framework]], enabling a relying party to check whether a presented credential comes from a recognised source. It extends the [[Trust Framework]] concept and is central to [[Decentralized Identity]] and [[DID]]-based ecosystems.
	- By anchoring trust decisions to a queryable registry rather than to hard-coded lists, it supports scalable [[Identity Verification]] and [[Credential Issuance]] across organisational boundaries.
- ### Overview
	- In a decentralised identity system, a verifier receiving a verifiable credential must answer two questions: is the signature valid, and is the issuer actually authorised to make this claim? Cryptography answers the first; the trust registry answers the second.
	- A trust registry publishes, in a standard interoperable format, which decentralised identifiers are authorised to issue or verify particular credential schemas, often with accreditation chains back to a root governance authority. Relying parties query it at verification time and may cache results.
	- Trust registries generalise the role historically played by a [[Certificate Authority]] in public-key infrastructure, but operate over decentralised identifiers and credential types rather than only X.509 certificates, and they encode governance rules explicitly.
- ### Key aspects
	- Lists authorised issuers and verifiers keyed by decentralised identifier and credential type.
	- Encodes accreditation chains rooted in a [[Trust Anchor]] and a governing authority.
	- Exposes a standard query and resolution interface for automated trust decisions.
	- Supports status, revocation, and authorisation scoping so trust can be narrowed or withdrawn.
	- Interoperates across ecosystems through shared registry protocols and governance documents.
- ### Applications
	- National and sectoral digital identity wallets verifying that a credential issuer is government-accredited.
	- Supply-chain and professional-qualification ecosystems confirming issuer legitimacy.
	- Cross-border verification where a relying party trusts a registry rather than each individual issuer.
	- Bridging legacy [[Certificate Authority]] trust into [[Self-Sovereign Identity]] deployments.
- ### Relationships
	- relatedTo:: [[DID]]
	- relatedTo:: [[Decentralized Identity]]
	- relatedTo:: [[Verifiable Credentials]]
	- relatedTo:: [[Digital Identity]]
	- supports:: [[Identity Verification]]
	- supports:: [[Credential Issuance]]
	- partOf:: [[Governance Framework]]
	- uses:: [[Certificate Authority]]
	- enables:: [[Identity Verification]]
	- requires:: [[Interoperability]]
	- dependsOn:: [[Trust Anchor]]
	- implements:: [[Trust Framework]]
	- contrastsWith:: [[Certificate Authority]]
	- bridgesTo:: [[Self-Sovereign Identity]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
