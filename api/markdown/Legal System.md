public:: true

# Legal System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:legal-system",
  "@type": "Page",
  "vc:slug": "legal-system",
  "title": "Legal System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:legal-system",
  "@type": "Class",
  "label": "Legal System",
  "definition": "A legal system is the institutional framework of laws, courts, enforcement bodies, and procedures through which a jurisdiction creates, interprets, and applies binding rules. Major traditions include common law, civil law, and religious or customary systems, each differing in sources of authority and precedent. Legal systems define the jurisdictional context within which digital and property rights are recognised and enforced.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Legal and Regulatory"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-jurisdiction", "label": "Digital Jurisdiction"}, {"@id": "urn:ngm:class:virtual-property-right", "label": "Virtual Property Right"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A legal system is the institutional apparatus of laws and courts in a jurisdiction; it is the broader whole of which [[Digital Jurisdiction]] and [[Virtual Property Right]] form constituent concerns.
- ### Content
  - Differences between common-law precedent and civil-law codification shape how novel digital constructs are litigated. Conflicts of laws and enforcement reach determine whether rights asserted in virtual environments translate into actionable remedies.
