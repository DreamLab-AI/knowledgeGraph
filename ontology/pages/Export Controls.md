public:: true

# Export Controls
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:export-controls",
  "@type": "Page",
  "vc:slug": "export-controls",
  "title": "Export Controls",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:export-controls",
  "@type": "Class",
  "label": "Export Controls",
  "definition": "Export controls are government-imposed legal restrictions on the cross-border transfer of specified goods, software, technology, and technical knowledge, typically for national-security, foreign-policy, or non-proliferation reasons. In the AI domain they increasingly govern advanced semiconductors, high-performance compute, and associated design tools, restricting which jurisdictions and entities may receive cutting-edge hardware. Compliance regimes such as the US EAR and the Wassenaar Arrangement define controlled-item lists, licensing requirements, and end-use screening.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:competition-in-ai", "label": "Competition in AI"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Export controls are statutory restrictions on the international transfer of sensitive goods, software, and technology, and have become central to [[Competition in AI]] through limits on advanced compute and semiconductor exports. They form part of the broader [[AI Governance]] and [[Regulatory Compliance]] landscape.
- ### Content
  - Modern AI-relevant export-control regimes target high-end GPUs, chip-fabrication equipment, and model weights above defined capability thresholds, requiring licences, end-use certificates, and entity-list screening. They shape global supply chains and strategic positioning, but raise enforcement challenges given the dual-use nature and digital portability of AI artefacts.
