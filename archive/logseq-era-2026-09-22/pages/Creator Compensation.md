public:: true

# Creator Compensation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:creator-compensation",
  "@type": "Page",
  "vc:slug": "creator-compensation",
  "title": "Creator Compensation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:creator-compensation",
  "@type": "Class",
  "label": "Creator Compensation",
  "definition": "Creator compensation refers to the economic mechanisms by which content creators are paid for their work, including royalties, revenue sharing, tipping, and tokenised ownership rights. In blockchain contexts it is often automated through smart contracts that distribute proceeds on primary sale and secondary resale. It is central to sustainable creator economies and to debates over fair value capture on digital platforms.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:creator-royalty-token", "label": "Creator Royalty Token"}, {"@id": "urn:ngm:class:royalty-mechanism", "label": "Royalty Mechanism"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Creator compensation is the set of economic arrangements that reward creators for their content and ongoing usage of it. It is enabled by instruments such as the [[Creator Royalty Token]] and by on-chain [[Royalty Mechanism]] designs.
- ### Content
  - On-chain models encode payout splits and resale royalties directly into smart contracts, enabling programmable, transparent distribution to multiple stakeholders. Enforcement of secondary-sale royalties remains contested across marketplaces, motivating standards and protocol-level approaches to guarantee creator earnings.
