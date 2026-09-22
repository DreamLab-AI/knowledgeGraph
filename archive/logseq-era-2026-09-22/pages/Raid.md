public:: true

# Raid

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:raid",
  "@type": "Page",
  "title": "Raid",
  "vc:slug": "raid",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:raid",
  "@type": "Class",
  "label": "Raid",
  "definition": "RAID (Redundant Array of Independent Disks) is a data storage virtualisation technology that combines multiple physical drives into one or more logical units to improve performance, capacity, or fault tolerance. Different RAID levels trade off redundancy, write performance and usable capacity using techniques such as striping, mirroring and parity. It protects against individual drive failure but is complementary to, not a substitute for, backups.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-storage",
      "label": "Data Storage"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      },
      {
        "@id": "urn:ngm:class:block-storage",
        "label": "Block Storage"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:erasure-coding",
        "label": "Erasure Coding"
      },
      {
        "@id": "urn:ngm:class:distributed-storage",
        "label": "Distributed Storage"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:erasure-coding",
        "label": "Erasure Coding"
      },
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:block-storage",
        "label": "Block Storage"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:redundant-array-of-independent-disks",
      "label": "Redundant Array of Independent Disks"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - RAID (Redundant Array of Independent Disks) is a data storage virtualisation technology that combines multiple physical drives into one or more logical units to improve performance, capacity, or fault tolerance. Different RAID levels trade off redundancy, write performance and usable capacity using techniques such as striping, mirroring and parity. It protects against individual drive failure but is complementary to, not a substitute for, backups.
  - [[Data Storage]] [[Fault Tolerance]] [[Redundancy]] [[Erasure Coding]]
- ### Overview
  - RAID was introduced to deliver enterprise-grade reliability and throughput from arrays of inexpensive commodity drives instead of single high-cost disks.
  - Common levels include RAID 0 (striping, no redundancy), RAID 1 (mirroring), RAID 5 (single parity), RAID 6 (dual parity) and nested levels such as RAID 10.
  - Arrays can be implemented in hardware controllers, firmware, or software volume managers, each with distinct performance and rebuild characteristics.
- ### Mechanisms
  - Striping distributes data blocks across drives to parallelise reads and writes for higher throughput.
  - Mirroring duplicates data across drives so a copy survives a single-drive failure.
  - Parity stores computed redundancy information allowing reconstruction of lost data after a drive failure.
  - Rebuild operations reconstruct a replaced drive's contents from surviving members, during which the array is more vulnerable.
- ### Applications
  - Database and virtualisation servers requiring sustained I/O with resilience to disk failure.
  - Network-attached storage and storage area networks in enterprise data centres.
  - Workstations handling large media files where throughput and uptime matter.
- ### Relationships
  - partOf:: [[Data Storage]]
  - supports:: [[Fault Tolerance]]
  - supports:: [[High Availability]]
  - supports:: [[Data Integrity]]
  - uses:: [[Redundancy]]
  - uses:: [[Block Storage]]
  - requires:: [[Data Storage]]
  - contrastsWith:: [[Erasure Coding]]
  - contrastsWith:: [[Distributed Storage]]
  - enables:: [[High Availability]]
  - relatedTo:: [[Erasure Coding]]
  - relatedTo:: [[Redundancy]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
