
An open-source software-defined storage platform that provides object, block, and file storage from a single self-healing cluster of commodity servers, using the CRUSH algorithm to place data deterministically without a central metadata bottleneck, and protecting data through replication or erasure coding; widely deployed beneath OpenStack and Kubernetes as exabyte-scale storage infrastructure.

- ### Semantic Classification

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
  - Release cadence of roughly one major version per year (recent lines include Reef, Squid, and Tentacle)
  - Deployed via cephadm containers or the Rook Kubernetes operator; contrasted in this graph with simpler single-protocol systems (MinIO for object, GlusterFS for file) that trade Ceph's generality for operational simplicity

  ## Current Landscape

  - **Tentacle is the current stable line**: Ceph v20.2.0 "Tentacle" — the 20th stable release — was published on 18 November 2025, with the v20.2.2 minor release following on 16 June 2026 (adding Rocky 10 support). Clusters must first upgrade to Reef (18.2.z) or Squid (19.2.z) before moving to Tentacle.
  - **Squid remains widely deployed**: the 19th stable series (latest 19.2.4, initial release 26 September 2024) continues to receive backport releases such as v19.2.3, and is the recommended baseline for clusters not yet on Tentacle.
  - **Governance**: Ceph remains an open-source project under the Ceph Foundation (a directed fund of the Linux Foundation), with IBM (via its Red Hat acquisition) as the principal commercial steward following IBM's absorption of the Red Hat storage portfolio.
  - **Deployment defaults**: cephadm-based container orchestration fully automates rolling upgrades, and the Rook operator remains the standard route for running Ceph as Kubernetes-native persistent storage via CSI.

  **Sources**:
  - https://ceph.io/en/news/blog/2025/v20-2-0-tentacle-released/
  - https://docs.ceph.com/en/latest/releases/

