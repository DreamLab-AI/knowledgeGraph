public:: true

# ALPR Networks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:alpr-networks",
  "@type": "Page",
  "vc:slug": "alpr-networks",
  "title": "ALPR Networks",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:alpr-networks",
  "@type": "Class",
  "label": "ALPR Networks",
  "definition": "ALPR Networks are interconnected systems of Automatic License Plate Recognition cameras that capture, read, timestamp, and geotag vehicle plates at scale across roads, lots, and checkpoints. Aggregated across many cameras and operators, the resulting databases reconstruct vehicle movement histories and enable mass location tracking. They are a prominent component of contemporary surveillance infrastructure and a focal point of privacy and civil-liberties concern.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-society-surveillance", "label": "Digital Society Surveillance"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - ALPR Networks are linked Automatic License Plate Recognition camera systems that log vehicle plates with time and location. They are a building block of [[Digital Society Surveillance]], turning isolated sightings into persistent movement records.
- ### Content
  - Each node performs detection, character recognition, and metadata tagging, while a backend correlates reads across cameras and operators. The privacy impact comes from aggregation: linking sparse sightings reconstructs travel patterns, and shared commercial and law-enforcement databases extend reach far beyond any single jurisdiction.
