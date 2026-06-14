public:: true

# Retention Policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:retention-policy",
  "@type": "Page",
  "vc:slug": "retention-policy",
  "title": "Retention Policy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:retention-policy",
  "@type": "Class",
  "label": "Retention Policy",
  "definition": "A retention policy is a set of governance rules that specify how long data records are kept and when they are archived or permanently deleted. It encodes legal, regulatory, and operational requirements such as minimum retention for audit and maximum retention for privacy compliance. Automated enforcement ensures consistent lifecycle management across storage systems.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:meeting-recording", "label": "Meeting Recording"}, {"@id": "urn:ngm:class:data-governance", "label": "Data Governance Domain"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A retention policy governs how long data is kept before archival or deletion, applied to artefacts such as [[Meeting Recording]] and forming part of the [[Data Governance Domain]].
- ### Content
  - Policies balance regulatory minimums against privacy mandates like data minimisation and right-to-erasure. Automated lifecycle rules trigger tiered storage, archival, and secure disposal so that retention is enforced uniformly rather than manually.
