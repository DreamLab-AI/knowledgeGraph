public:: true

# Data Redundancy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-redundancy",
  "@type": "Page",
  "vc:slug": "data-redundancy",
  "title": "Data Redundancy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-redundancy",
  "@type": "Class",
  "label": "Data Redundancy",
  "definition": "Data redundancy is the deliberate storage of duplicate or recoverable copies of data so that information survives hardware failure, corruption or loss. Implemented through replication, mirroring, RAID and erasure or forward-error-correction codes, it trades extra capacity for durability and availability. It is a foundational reliability technique in storage systems and distributed infrastructure.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-computing-and-cloud", "label": "Infrastructure Computing and Cloud"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:data-storage", "label": "Data Storage"},
      {"@id": "urn:ngm:class:forward-error-correction", "label": "Forward Error Correction"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data redundancy stores recoverable duplicate copies so information survives failure, implemented in [[Data Storage]] through replication, RAID and codes such as [[Forward Error Correction]].
- ### Content
  - Approaches range from full replication and mirroring to space-efficient erasure coding that reconstructs lost shards from parity. The design balances storage overhead and write cost against the durability and availability targets the system must meet.
