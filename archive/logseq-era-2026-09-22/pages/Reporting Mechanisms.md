public:: true

# Reporting Mechanisms
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reporting-mechanisms",
  "@type": "Page",
  "vc:slug": "reporting-mechanisms",
  "title": "Reporting Mechanisms",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reporting-mechanisms",
  "@type": "Class",
  "label": "Reporting Mechanisms",
  "definition": "Reporting mechanisms are the user-facing tools and processes through which people flag illegal content, abuse, or policy violations to a platform or authority. They are a mandated component of content-moderation regimes, requiring accessible channels, acknowledgement, and traceable handling of notices. Well-designed mechanisms balance ease of reporting against abuse of the reporting system itself.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:metaverse-governance-and-safeguarding", "label": "Metaverse governance and safeguarding"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:community-standards", "label": "Community Standards"},
      {"@id": "urn:ngm:class:digital-services-act", "label": "Digital Services Act"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Reporting mechanisms are the channels users employ to flag harmful content, required to enforce [[Community Standards]] and to comply with the [[Digital Services Act]].
- ### Content
  - Compliant mechanisms provide clear notice forms, confirmation of receipt, defined turnaround times, and routes to appeal moderation decisions. They generate the evidence trail regulators expect under notice-and-action regimes, while safeguards such as rate limiting and prioritisation guard against coordinated misuse.
