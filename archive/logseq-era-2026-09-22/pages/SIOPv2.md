public:: true

# SIOPv2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:siopv2",
  "@type": "Page",
  "vc:slug": "siopv2",
  "title": "SIOPv2",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:siopv2",
  "@type": "Class",
  "label": "SIOPv2",
  "definition": "SIOPv2 (Self-Issued OpenID Provider v2) is an OpenID Foundation specification that extends OpenID Connect so a user's own wallet acts as the identity provider, authenticating with self-issued and decentralised identifiers rather than a third-party server. It lets relying parties verify a subject controls a DID and, paired with OpenID for Verifiable Presentations, accept verifiable credentials. It is a key protocol for decentralised, wallet-centric digital identity.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"}, {"@id": "urn:ngm:class:distributed-identity", "label": "Distributed Identity"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - SIOPv2 (Self-Issued OpenID Provider v2) extends OpenID Connect so a user's wallet, not a central server, issues identity assertions bound to a decentralised identifier. It is implemented by a [[Digital Identity Wallet]] and is a building block of [[Distributed Identity]].
- ### Content
  - The holder presents a self-issued ID token signed by keys associated with their DID, which the relying party resolves and verifies without a hosted provider. Combined with OpenID4VP, SIOPv2 enables selective disclosure of verifiable credentials, supporting privacy-preserving, user-controlled authentication flows.
