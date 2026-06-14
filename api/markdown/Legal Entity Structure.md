public:: true

# Legal Entity Structure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:legal-entity-structure",
  "@type": "Page",
  "vc:slug": "legal-entity-structure",
  "title": "Legal Entity Structure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:legal-entity-structure",
  "@type": "Class",
  "label": "Legal Entity Structure",
  "definition": "A legal entity structure is the organisational arrangement of incorporated bodies, subsidiaries, foundations, and operating companies through which an organisation conducts business and holds assets. It determines liability boundaries, tax treatment, governance rights, and regulatory obligations across jurisdictions. In crypto and DAO contexts it often pairs on-chain governance with off-chain foundations or LLCs to obtain legal personality.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-legal-and-regulatory", "label": "Legal and Regulatory"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cross-border-compliance", "label": "Cross Border Compliance"}, {"@id": "urn:ngm:class:treasury-management", "label": "Treasury Management"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A legal entity structure organises incorporated bodies and their relationships, shaping the liability and tax boundaries that [[Cross-Border Compliance]] navigates and that [[Treasury Management]] requires to hold and deploy funds.
- ### Content
  - Common patterns include holding companies with operating subsidiaries, foundation-plus-LLC stacks for protocols, and special-purpose vehicles for asset isolation. The chosen structure governs where profits are taxed, which regulators have jurisdiction, and how governance authority maps to legal control.
