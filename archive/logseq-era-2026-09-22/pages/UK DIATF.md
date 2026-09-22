public:: true

# UK DIATF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:uk-diatf",
  "@type": "Page",
  "vc:slug": "uk-diatf",
  "title": "UK DIATF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:uk-diatf",
  "@type": "Class",
  "label": "UK DIATF",
  "definition": "The UK Digital Identity and Attributes Trust Framework (DIATF) is a government-published set of rules and standards that digital-identity providers must meet to be certified as trustworthy. It defines requirements for security, privacy, fraud management, and inclusion so that certified identity and attribute services can be relied upon across public and private sectors.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}, {"@id": "urn:ngm:class:digital-identity-wallet", "label": "Digital Identity Wallet"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A UK Government trust framework setting certification rules for digital-identity and attribute providers covering security, privacy, fraud, and inclusion. It governs [[Identity Verification]] services and underpins trust in a [[Digital Identity Wallet]].
- ### Content
  - DIATF certification is granted against the framework's rules by approved conformity-assessment bodies, allowing relying parties to accept identities without bespoke vetting. The framework supports interoperability between certified providers and is a pillar of the UK's wider digital-identity legislation and ecosystem.
