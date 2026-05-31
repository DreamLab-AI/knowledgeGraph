public:: true

# Credential Portability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:credential-portability",
  "@type": "Page",
  "vc:slug": "credential-portability",
  "title": "Credential Portability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:credential-portability",
  "@type": "Class",
  "label": "Credential Portability",
  "definition": "Credential portability is the property that lets a holder carry verifiable credentials across providers, platforms, and jurisdictions without re-issuance or vendor lock-in. It relies on open standards such as W3C Verifiable Credentials and decentralised identifiers so that issuers, holders, and verifiers interoperate. It is a foundational capability for user-controlled digital identity and trust frameworks.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:trust-framework", "label": "Trust Framework"}, {"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Credential portability is the ability to move verifiable credentials freely between systems and verifiers without reliance on a single issuer. It is enabled by a [[Trust Framework]] and held in a [[Digital Identity Wallet]].
- ### Content
  - Portability depends on standardised credential formats, cryptographic proofs, and agreed governance so that a credential issued in one context is trusted in another. It reduces lock-in and re-verification cost while preserving holder control, but requires shared schemas, revocation infrastructure, and aligned legal recognition across domains.
