public:: true

# GDPR Article 22 Compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gdpr-article-22-compliance",
  "@type": "Page",
  "vc:slug": "gdpr-article-22-compliance",
  "title": "GDPR Article 22 Compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gdpr-article-22-compliance",
  "@type": "Class",
  "label": "GDPR Article 22 Compliance",
  "definition": "GDPR Article 22 compliance concerns adherence to the EU General Data Protection Regulation provision that grants individuals the right not to be subject to decisions based solely on automated processing, including profiling, that produce legal or similarly significant effects. Compliance requires lawful bases, human oversight, the ability to contest decisions, and meaningful information about the logic involved. It is a key constraint on automated decision-making and policy enforcement systems.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:policy-enforcement", "label": "Policy Enforcement"}, {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - GDPR Article 22 compliance enforces individuals' rights regarding solely-automated decisions, standardising how [[Policy Enforcement]] systems must build in human oversight, contestability, and transparency.
- ### Content
  - The provision applies when automated processing alone produces legal or similarly significant effects, permitting it only under specific conditions such as explicit consent, contractual necessity, or authorising law with safeguards. Controllers must implement human review, allow data subjects to express their view and contest outcomes, and provide meaningful explanation. It interacts closely with broader AI governance and accountability obligations.
