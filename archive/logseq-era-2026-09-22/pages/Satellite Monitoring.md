public:: true

# Satellite Monitoring
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:satellite-monitoring",
  "@type": "Page",
  "vc:slug": "satellite-monitoring",
  "title": "Satellite Monitoring",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:satellite-monitoring",
  "@type": "Class",
  "label": "Satellite Monitoring",
  "definition": "Satellite monitoring is the use of orbital remote-sensing platforms to observe and measure conditions on the Earth's surface over time. In sustainability and supply-chain contexts it supports verification of deforestation, land use, emissions plumes, and facility activity using multispectral, radar, and thermal imagery. The resulting geospatial data feeds carbon accounting, compliance, and ethical-sourcing assessments.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:carbon-footprint-measurement", "label": "Carbon Footprint Measurement"},
      {"@id": "urn:ngm:class:ethical-sourcing", "label": "Ethical Sourcing"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Satellite monitoring applies orbital remote sensing to verify environmental and supply-chain claims, forming part of [[Carbon Footprint Measurement]] and a data source for [[Ethical Sourcing]].
- ### Content
  - Modern systems combine optical, synthetic-aperture-radar, and hyperspectral sensors with revisit cadences of hours to days. Machine-learning pipelines classify land cover and detect change, providing auditable, independent evidence that complements self-reported corporate sustainability and provenance data.
