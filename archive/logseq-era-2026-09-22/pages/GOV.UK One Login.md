public:: true

# GOV.UK One Login
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gov-uk-one-login",
  "@type": "Page",
  "vc:slug": "gov-uk-one-login",
  "title": "GOV.UK One Login",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gov-uk-one-login",
  "@type": "Class",
  "label": "GOV.UK One Login",
  "definition": "GOV.UK One Login is the UK government's single sign-on and identity-verification service that lets people access central-government digital services with one account. It combines authentication with identity proofing to a defined assurance level, replacing a fragmented landscape of departmental logins. It is a national digital-identity infrastructure aligned with emerging standards for verifiable credentials and digital identity.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"}, {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - GOV.UK One Login is the UK's unified government sign-on and identity-proofing service; it supports identity assurance that can underpin [[Verifiable Credentials]] and relates to [[Decentralized Identifiers]] as the public sector explores user-controlled identity.
- ### Content
  - The service provides account creation, multi-factor authentication, and identity verification using documents and biometrics to meet government assurance standards. It aims to give departments a reusable, accessible identity layer while reducing duplication and fraud. Its roadmap intersects with wider digital-identity trust frameworks and the potential use of credentials held in citizen wallets.
