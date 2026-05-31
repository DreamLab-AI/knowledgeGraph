public:: true

# Two-Tier Distribution Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:two-tier-distribution-model",
  "@type": "Page",
  "vc:slug": "two-tier-distribution-model",
  "title": "Two-Tier Distribution Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:two-tier-distribution-model",
  "@type": "Class",
  "label": "Two-Tier Distribution Model",
  "definition": "The two-tier distribution model is the architecture commonly proposed for central bank digital currencies in which the central bank issues the digital currency but commercial banks and licensed intermediaries handle distribution, wallets, and customer service. This preserves the central bank's monetary authority while leveraging existing financial institutions for onboarding, compliance, and the user-facing layer.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cbdc-frameworks", "label": "CBDC Frameworks"}, {"@id": "urn:ngm:class:cbdcs", "label": "CBDCs"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An architecture where the central bank issues digital currency while commercial banks and intermediaries handle distribution and customer-facing services. It is the dominant design implemented within [[CBDC Frameworks]] and most [[CBDCs]].
- ### Content
  - The model separates issuance from distribution so that central banks avoid taking on retail customer relationships, KYC, and dispute handling at scale. It mirrors the existing structure of physical cash and bank deposits, easing integration with payment rails while keeping intermediaries as the regulated, consumer-facing tier.
