public:: true

# Data Centre
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-centre",
  "@type": "Page",
  "vc:slug": "data-centre",
  "title": "Data Centre",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-centre",
  "@type": "Class",
  "label": "Data Centre",
  "definition": "A data centre is a dedicated facility that houses computing, storage and networking infrastructure together with the power, cooling and physical security needed to operate them reliably. It provides the consolidated environment for hosting servers, cloud services and high-performance workloads such as AI training. Its energy and power demands make efficiency, measured through metrics like PUE, a central operational and sustainability concern.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computing-infrastructure", "label": "Computing Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:energy-and-power", "label": "Energy and Power"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A data centre is a purpose-built facility housing compute, storage and network hardware along with the [[Energy and Power]] and cooling systems required to keep them running reliably.
- ### Content
  - Facilities are engineered for redundancy across power, cooling and connectivity, with tiered availability classifications. Because cooling and electricity dominate operating cost and environmental impact, efficiency metrics such as power usage effectiveness drive design and sustainability efforts.
