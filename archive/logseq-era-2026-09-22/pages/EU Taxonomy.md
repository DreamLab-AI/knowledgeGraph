public:: true

# EU Taxonomy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eu-taxonomy",
  "@type": "Page",
  "vc:slug": "eu-taxonomy",
  "title": "EU Taxonomy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eu-taxonomy",
  "@type": "Class",
  "label": "EU Taxonomy",
  "definition": "The EU Taxonomy is a classification system that defines which economic activities count as environmentally sustainable under European Union law. It sets technical screening criteria across climate and environmental objectives so that investors, companies, and regulators apply a common definition of green activity. The taxonomy underpins sustainable-finance disclosure and ESG reporting by preventing greenwashing through standardised criteria.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:sustainable-finance", "label": "Sustainable Finance"}, {"@id": "urn:ngm:class:esg-reporting", "label": "ESG Reporting"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The EU Taxonomy is a legal classification standard for environmentally sustainable activities, used by [[Sustainable Finance]] and implemented through [[ESG Reporting]].
- ### Content
  - It applies technical screening criteria across six environmental objectives to determine taxonomy-alignment. By giving investors and issuers a shared definition of "green", it anchors disclosure regimes and curbs greenwashing.
