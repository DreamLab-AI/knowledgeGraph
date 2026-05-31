public:: true

# Revenue Threshold
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:revenue-threshold",
  "@type": "Page",
  "vc:slug": "revenue-threshold",
  "title": "Revenue Threshold",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:revenue-threshold",
  "@type": "Class",
  "label": "Revenue Threshold",
  "definition": "A revenue threshold is a regulatory trigger that applies obligations only to entities whose annual revenue exceeds a defined monetary level. In AI legislation such thresholds scope rules to large developers, exempting smaller firms to reduce compliance burden while targeting actors with the greatest capacity and impact. The threshold value is a key parameter determining who falls within a law's reach.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:california-ai-bill", "label": "California AI Bill"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A revenue threshold scopes regulatory obligations to entities above a defined annual revenue, a parameter used by the [[California AI Bill]] to target large developers.
- ### Content
  - By tying applicability to revenue, lawmakers concentrate compliance duties on well-resourced firms while shielding startups. The chosen figure directly shapes the regulated population and is often paired with compute or capability thresholds.
