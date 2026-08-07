public:: true

# Ceph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bbbd1d8e85dff20497f7f9d1cf29ceeccb3f849aa8f6b4ba8ea3148491388958",
  "@type": "Page",
  "vc:slug": "ceph",
  "title": "Ceph",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-storage",
      "vc:label": "Distributed Storage"
    },
    {
      "@id": "urn:visionflow:linked:erasure-coding",
      "vc:label": "Erasure Coding"
    },
    {
      "@id": "urn:visionflow:linked:storage-infrastructure",
      "vc:label": "Storage Infrastructure"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ceph",
  "@type": "Class",
  "label": "Ceph",
  "definition": "An open-source software-defined storage platform that provides object, block, and file storage from a single self-healing cluster of commodity servers, using the CRUSH algorithm to place data deterministically without a central metadata bottleneck, and protecting data through replication or erasure coding; widely deployed beneath OpenStack and Kubernetes as exabyte-scale storage infrastructure.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:distributed-storage",
    "label": "Distributed Storage"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:storage-infrastructure",
        "label": "Storage Infrastructure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:erasure-coding",
        "label": "Erasure Coding"
      },
      {
        "@id": "urn:ngm:class:replication",
        "label": "Replication"
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
        "@id": "urn:ngm:class:distributed-file-system",
        "label": "Distributed File System"
      },
      {
        "@id": "urn:ngm:class:object-storage",
        "label": "Object Storage"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "An open-source software-defined storage platform that provides object, block, and file storage from a single self-healing cluster of commodity servers, using the CRUSH algorithm to place data deterministically without a central metadata bottleneck, and protecting data through replication or erasure coding; widely deployed beneath OpenStack and Kubernetes as exabyte-scale storage infrastructure."

- ### Semantic Classification
  - owl-class:: infrastructure:Ceph
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Distributed Storage]]
  - part-of:: [[Storage Infrastructure]]
  - uses:: [[Erasure Coding]]
  - related-to:: [[Distributed File System]]

- ### Content

  ## Definition

  **Ceph** is an open-source, software-defined storage system that unifies the three major storage paradigms — object, block, and file — on a single cluster of commodity hardware. It originated in Sage Weil's 2006 doctoral work at UC Santa Cruz and is now governed by the Ceph Foundation under the Linux Foundation, with Red Hat/IBM among its principal commercial stewards. All services are built on **RADOS** (Reliable Autonomic Distributed Object Store): the RADOS Gateway (RGW) exposes S3- and Swift-compatible [[Object Storage]], RBD provides virtual block devices for hypervisors and containers, and CephFS is a POSIX-compliant [[Distributed File System]].

  Ceph's distinguishing design choice is the **CRUSH** (Controlled Replication Under Scalable Hashing) algorithm: instead of consulting a central allocation table, any client computes deterministically where each object lives from the cluster map and a hierarchy of failure domains (host, rack, room, site). This removes the metadata bottleneck and single point of failure typical of earlier architectures, and lets placement policy express fault-tolerance intent — for example, "no two replicas in the same rack". Data durability comes from n-way [[Replication]] (typically 3x) or [[Erasure Coding]] (e.g. k=8, m=3 profiles), which cuts raw-capacity overhead from 200% to around 40% at the cost of higher reconstruction I/O. Object Storage Daemons (OSDs) continuously scrub, rebalance, and self-heal, so hardware failure is treated as routine rather than exceptional.

  Ceph became the de facto storage backbone of OpenStack clouds (backing Cinder, Glance, and Nova) and entered the Kubernetes ecosystem through the Rook operator and CSI drivers, providing persistent volumes for stateful workloads. Monitors (MONs) maintain cluster-map consensus via Paxos, and the BlueStore backend writes directly to raw devices, bypassing a filesystem layer for consistency and performance.

  ## Technical Details

  **Core daemons**:
  - **MON**: cluster membership and map consensus (Paxos quorum, typically 3 or 5)
  - **OSD**: one per disk; stores objects, handles replication, recovery, scrubbing
  - **MGR**: metrics, orchestration modules, dashboard
  - **MDS**: metadata server for CephFS (dynamic subtree partitioning)
  - **RGW**: HTTP gateway for S3/Swift object APIs

  **Data path**: objects map to placement groups (PGs) by hash; CRUSH maps PGs to OSD sets across failure domains; clients write to the primary OSD, which fans out to replicas or erasure-coded shards before acknowledging.

  **Operational profile**:
  - Scales from a few nodes to multi-petabyte and exabyte-class clusters (CERN runs Ceph at tens of petabytes for LHC computing)
  - Release cadence of roughly one major version per year (recent lines include Quincy, Reef, and Squid)
  - Deployed via cephadm containers or the Rook Kubernetes operator; contrasted in this graph with simpler single-protocol systems (MinIO for object, GlusterFS for file) that trade Ceph's generality for operational simplicity
