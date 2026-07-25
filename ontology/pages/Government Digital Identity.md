public:: true

# Government Digital Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:government-digital-identity",
  "@type": "Page",
  "vc:slug": "government-digital-identity",
  "title": "Government Digital Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:government-digital-identity",
  "@type": "Class",
  "label": "Government Digital Identity",
  "definition": "Government digital identity is a state-issued or state-recognised electronic identity that citizens and residents use to prove who they are when accessing public and private services online. It provides identity proofing and authentication backed by authoritative government records, often within a national trust framework. It increasingly draws on verifiable credentials and decentralised identity standards to give users portable, privacy-preserving credentials.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"}, {"@id": "urn:ngm:class:hyperledger-indy", "label": "Hyperledger Indy"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Government digital identity is a state-backed electronic identity for accessing services; credentials are commonly held in a [[Digital Identity Wallet]] and may be issued over decentralised-identity platforms such as [[Hyperledger Indy]].
- ### Content
  - Schemes vary from centralised national ID systems to federated and user-centric models built on W3C verifiable credentials and decentralised identifiers. Design priorities include high-assurance proofing, inclusion and accessibility, data minimisation, and resistance to surveillance and exclusion. Cross-border interoperability, exemplified by the EU eIDAS framework and digital identity wallets, is a growing focus for public-sector identity.
