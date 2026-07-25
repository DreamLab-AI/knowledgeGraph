public:: true

# Threat Intelligence Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:threat-intelligence-platform",
  "@type": "Page",
  "vc:slug": "threat-intelligence-platform",
  "title": "Threat Intelligence Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:threat-intelligence-platform",
  "@type": "Class",
  "label": "Threat Intelligence Platform",
  "definition": "A threat intelligence platform (TIP) is a security system that aggregates, normalises, and correlates indicators of compromise and adversary intelligence from multiple feeds into an actionable, queryable repository. It enriches and scores indicators, manages their lifecycle, and distributes them to detection and response tooling. A TIP turns raw threat data into context that defenders can use to anticipate, detect, and block attacks.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cyber-security-and-cryptography", "label": "Cyber Security and Cryptography"},
      {"@id": "urn:ngm:class:threat-surface-map", "label": "Threat Surface Map"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A threat intelligence platform aggregates and correlates indicators of compromise into actionable intelligence, a key tool within [[Cyber Security and Cryptography]] operations and an input to a [[Threat Surface Map]].
- ### Content
  - A TIP ingests structured and unstructured feeds, often via standards such as STIX and TAXII, deduplicates and enriches indicators with context like geolocation and prior sightings, and assigns confidence and severity scores. It then pushes curated intelligence to SIEMs, firewalls, and endpoint tools and supports analyst workflows for investigation and attribution. The value lies in collapsing fragmented, high-volume threat data into prioritised, machine-consumable signals that shorten detection and response time.
