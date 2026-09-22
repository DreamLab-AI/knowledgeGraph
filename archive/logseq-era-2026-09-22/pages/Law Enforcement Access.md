public:: true

# Law Enforcement Access
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:law-enforcement-access",
  "@type": "Page",
  "vc:slug": "law-enforcement-access",
  "title": "Law Enforcement Access",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:law-enforcement-access",
  "@type": "Class",
  "label": "Law Enforcement Access",
  "definition": "Law enforcement access refers to the legally authorised mechanisms by which police and regulatory authorities obtain data, records or information held by service providers for investigation and prosecution. In financial and crypto contexts it covers lawful requests for customer and transaction information under court orders, subpoenas or statutory disclosure rules such as the FATF Travel Rule. It sits at the intersection of compliance obligations and privacy safeguards.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:travel-rule", "label": "Travel Rule"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Law enforcement access is the lawful provision of data to authorities for investigation; it is enabled and supported by the [[Travel Rule]], which mandates that originator and beneficiary information accompany regulated transfers.
- ### Content
  - Frameworks balance investigatory needs against due process and privacy through warrant requirements, data-minimisation and oversight. In crypto-asset markets, Travel Rule information sharing and exchange recordkeeping create the data trails that, under appropriate legal authority, support tracing of illicit flows while constraining indiscriminate surveillance.
