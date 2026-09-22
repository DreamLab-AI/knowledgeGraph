public:: true

# Section 508
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:section-508",
  "@type": "Page",
  "vc:slug": "section-508",
  "title": "Section 508",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:section-508",
  "@type": "Class",
  "label": "Section 508",
  "definition": "Section 508 is an amendment to the US Rehabilitation Act requiring federal agencies to make their electronic and information technology accessible to people with disabilities. Its 2017 refresh harmonised the technical requirements with the WCAG 2.0 Level AA success criteria. It functions as an enforceable procurement and compliance standard for accessibility in US government IT.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Section 508 is the US federal legal standard that operationalises [[Accessibility]] requirements for government information technology by referencing WCAG success criteria.
- ### Content
  - Compliance is assessed through accessibility conformance reports such as the VPAT, and applies to web content, software, hardware, and documentation procured or developed by federal agencies. By aligning with WCAG, Section 508 effectively makes recognised web-accessibility guidelines legally binding within its jurisdiction.
