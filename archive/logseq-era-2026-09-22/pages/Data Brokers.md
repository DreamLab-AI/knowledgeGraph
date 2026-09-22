public:: true

# Data Brokers
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-brokers",
  "@type": "Page",
  "vc:slug": "data-brokers",
  "title": "Data Brokers",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-brokers",
  "@type": "Class",
  "label": "Data Brokers",
  "definition": "Data brokers are firms that collect, aggregate, enrich and resell personal and behavioural data about individuals, typically without a direct relationship with those individuals. They assemble profiles from public records, online tracking and commercial sources for marketing, scoring and risk uses. They are a focal point of privacy regulation and surveillance concern because their trade can enable pervasive monitoring and profiling.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-society-surveillance", "label": "Digital Society Surveillance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data brokers aggregate and resell personal and behavioural data into profiles, forming a key component of [[Digital Society Surveillance]] and a focus of privacy regulation.
- ### Content
  - Brokers fuse public records, purchase histories and online tracking signals into segmented profiles sold for advertising, identity verification and risk scoring. Their opacity and scale raise consent, accuracy and surveillance concerns that data-protection regimes increasingly seek to regulate.
