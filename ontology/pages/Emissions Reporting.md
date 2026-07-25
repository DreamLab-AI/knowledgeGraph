public:: true

# Emissions Reporting

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:emissions-reporting", "@type": "Page", "title": "Emissions Reporting", "vc:slug": "emissions-reporting", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:emissions-reporting",
  "@type": "Class",
  "label": "Emissions Reporting",
  "definition": "Emissions reporting is the structured disclosure of an organisation's greenhouse gas output across defined scopes and reporting periods, typically following standards such as the GHG Protocol. It converts underlying carbon accounting data into public or regulatory filings that stakeholders and auditors can verify. Frameworks such as the Crypto Climate Accord require signatories to publish emissions reporting to demonstrate progress toward stated climate commitments.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-compliance",
      "label": "Regulatory Compliance"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      }
    ],
    "enables": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Emissions reporting is the structured disclosure of an organisation's greenhouse gas output across defined scopes and reporting periods, typically following standards such as the GHG Protocol. It converts underlying carbon accounting data into public or regulatory filings that stakeholders and auditors can verify. Frameworks such as the Crypto Climate Accord require signatories to publish emissions reporting to demonstrate progress toward stated climate commitments.
- ### Relationships
	- requires:: [[Carbon Accounting]]
	- partOf:: [[Regulatory Compliance]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
