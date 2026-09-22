public:: true

# First Party Data
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:first-party-data",
  "@type": "Page",
  "title": "First Party Data",
  "vc:slug": "first-party-data",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:first-party-data",
  "@type": "Class",
  "label": "First Party Data",
  "definition": "First party data is information a company collects directly from its own customers, users or audience through owned channels such as websites, apps, purchase records and CRM systems, with the subject's knowledge or consent. It is distinguished from second-party data (another party's first-party data, shared by agreement) and third-party data (aggregated from external sources without a direct relationship). Its direct provenance makes it more accurate, more compliant with privacy regulation, and increasingly central to marketing and personalisation as third-party cookies are phased out.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data",
      "label": "Data"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:audience-segmentation",
        "label": "Audience Segmentation"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - First party data is information a company collects directly from its own customers, users or audience through owned channels such as websites, apps, purchase records and CRM systems, with the subject's knowledge or consent.
  - It is a subclass of [[Data]].
- ### Content
  - First party data is information a company collects directly from its own customers, users or audience through owned channels such as websites, apps, purchase records and CRM systems, with the subject's knowledge or consent. It is distinguished from second-party data (another party's first-party data, shared by agreement) and third-party data (aggregated from external sources without a direct relationship). Its direct provenance makes it more accurate, more compliant with privacy regulation, and increasingly central to marketing and personalisation as third-party cookies are phased out.
