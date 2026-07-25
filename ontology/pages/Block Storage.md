public:: true

# Block Storage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:block-storage",
  "@type": "Page",
  "vc:slug": "block-storage",
  "title": "Block Storage",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:block-storage",
  "@type": "Class",
  "label": "Block Storage",
  "definition": "Block Storage is an infrastructure storage paradigm that presents raw fixed-size blocks of data to a host operating system or hypervisor, which then manages formatting, file system placement, and I/O scheduling directly. Unlike object storage or file storage, block storage exposes a low-level disk abstraction enabling high-performance, low-latency random read/write operations suitable for databases, virtual machine boot disks, and transactional workloads. Cloud providers implement block storage as network-attached volumes (e.g., AWS EBS, GCP Persistent Disk) that can be dynamically provisioned and attached to compute instances.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:storage-systems", "label": "Storage Systems"}],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:object-storage", "label": "Object Storage"},
      {"@id": "urn:ngm:class:distributed-storage", "label": "Distributed Storage"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:file-system", "label": "File System"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:database-system", "label": "Database System"},
      {"@id": "urn:ngm:class:persistent-storage", "label": "Persistent Storage"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-storage", "label": "Cloud Storage"},
      {"@id": "urn:ngm:class:data-storage-layer", "label": "Data Storage Layer"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Block Storage]] abstracts physical or network-attached media as a sequence of uniformly sized blocks (typically 512 bytes or 4 kB), presenting a logical volume to the operating system that behaves identically to a locally attached disk. The host installs any compatible [[File System]] (ext4, NTFS, XFS, ZFS) on this volume and manages directory structure, metadata, and caching independently from the storage back-end. This separation of concerns allows [[Block Storage]] to achieve sub-millisecond random I/O latency by avoiding the overhead of file-system semantics in the storage tier, making it the preferred backend for [[Database System]] deployments requiring ACID-compliant transactional workloads.

- ### Relationships
  - [[Block Storage]] is a subclass of [[Storage Systems]] that [[contrastsWith]] [[Object Storage]] (which carries metadata and uses HTTP APIs) and [[Distributed Storage]] (which distributes data across nodes for availability and scale). It is the preferred backing store for [[Database System]] and [[Persistent Storage]] use cases in cloud infrastructure. [[File System]] layers sit atop block storage volumes, and [[Cloud Storage]] services expose block storage as dynamically provisioned network volumes.

- ### Content
  - Block storage as an architectural concept predates cloud computing, rooted in Storage Area Networks (SANs) using Fibre Channel or iSCSI protocols that first appeared commercially in the late 1990s. Enterprise SANs allowed servers to treat remote RAID arrays as local disks, enabling centralised storage management and high availability through path redundancy. This model was foundational for early virtualisation platforms (VMware ESX) that required shared storage to support live virtual machine migration.

  - Technically, cloud block storage volumes are implemented as distributed replicated log-structured storage systems behind a network block device (NBD) or NVMe-oF protocol. AWS Elastic Block Store, for example, replicates each volume within an Availability Zone across multiple physical nodes using a proprietary consensus protocol; the abstraction presented to EC2 is a standard /dev/xvdX or /dev/nvme device. Volume types vary by performance tier: general-purpose SSDs (gp3) balance cost and IOPS, while provisioned IOPS SSDs (io2 Block Express) target databases requiring predictable, low-latency I/O at 256,000 IOPS.

  - The ecosystem includes cloud-native volume drivers for Kubernetes (Container Storage Interface — CSI), allowing stateful containerised workloads such as databases and message brokers to claim, mount, and release block volumes dynamically. Snapshots — point-in-time copy-on-write images of a volume — enable backup and cloning workflows. Volume encryption using platform-managed keys or customer-managed keys (CMKs via AWS KMS) satisfies data-at-rest requirements for regulated workloads.

  - As of 2024–2025, block storage continues to evolve with NVMe-over-Fabrics reducing latency to under 100 microseconds for local-zone deployments, and intelligent tiering moving cold data to cheaper media automatically. The rise of AI workloads requiring high-throughput sequential reads for checkpoint loading has pushed providers to offer higher-bandwidth volume options. Disaggregated storage architectures, separating compute and storage scaling independently, are displacing traditional instance-attached storage for almost all stateful cloud workloads.