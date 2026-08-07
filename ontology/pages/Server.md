public:: true

# Server
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b3eacd33433b31b5252351032c9b3e7a2e7aa7738d5decdf0dd6c62680853c06",
  "@type": "Page",
  "vc:slug": "server",
  "title": "Server",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:hardware", "vc:label": "Hardware"},
    {"@id": "urn:visionflow:linked:data-centre", "vc:label": "Data Centre"},
    {"@id": "urn:visionflow:linked:computing-infrastructure", "vc:label": "Computing Infrastructure"},
    {"@id": "urn:visionflow:linked:power-supply", "vc:label": "Power Supply"},
    {"@id": "urn:visionflow:linked:operating-system", "vc:label": "Operating System"},
    {"@id": "urn:visionflow:linked:cloud-computing", "vc:label": "Cloud Computing"},
    {"@id": "urn:visionflow:linked:networking", "vc:label": "Networking"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:server",
  "@type": "Class",
  "label": "Server",
  "definition": "A computer system engineered to provide services — computation, storage, or content — to other machines over a network, typically built for sustained load, remote management, and high availability with error-correcting memory, redundant power supplies, and hot-swappable storage. Racked in their thousands inside data centres, servers are the physical substrate of cloud computing, and the term equally names the software process that answers client requests in the client-server model.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:hardware",
    "label": "Hardware"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:data-centre", "label": "Data Centre"},
      {"@id": "urn:ngm:class:computing-infrastructure", "label": "Computing Infrastructure"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:power-supply", "label": "Power Supply"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:operating-system", "label": "Operating System"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:networking", "label": "Networking"}
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
  - "A computer system engineered to provide services — computation, storage, or content — to other machines over a network, typically built for sustained load, remote management, and high availability with error-correcting memory, redundant power supplies, and hot-swappable storage. Racked in their thousands inside data centres, servers are the physical substrate of cloud computing, and the term equally names the software process that answers client requests in the client-server model."

- ### Semantic Classification
  - owl-class:: infrastructure:Server
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Hardware]]
  - part-of:: [[Data Centre]]
  - has-part:: [[Power Supply]]
  - enables:: [[Cloud Computing]]

- ### Content

  ## Definition

  A **server** is the answering half of the client-server model: a machine (or process) that waits for requests over a network and fulfils them — serving web pages, executing database queries, storing files, brokering messages, or running the inference and rendering workloads that underpin this graph's AI and spatial-computing systems. The word covers both the physical [[Hardware]] and the software daemon; a single physical server routinely hosts dozens of logical servers through virtualisation and containers.

  Server hardware differs from consumer computing in its bias towards sustained, unattended operation. Typical features include multi-socket Xeon or EPYC processors (and increasingly Arm parts such as Graviton and NVIDIA Grace), error-correcting (ECC) memory, redundant hot-swappable [[Power Supply]] units and fans, NVMe storage arrays, out-of-band management controllers (BMC/IPMI, iDRAC, iLO) for lights-out administration, and high-bandwidth network interfaces from 25 to 800 Gb/s. Form factors span 1U/2U rack units, blades, and open-standard designs from the Open Compute Project; GPU servers for AI training add 4-8 accelerators with their own interconnect fabrics and multi-kilowatt power draw.

  Aggregation is what gives servers their significance: racked and networked by the thousand inside a [[Data Centre]], provisioned by orchestration software, and rented by the second, they become the elastic pool that [[Cloud Computing]] abstracts into instances, functions, and managed services. The engineering agenda has accordingly shifted from the single machine to the fleet — failure is handled by replication rather than repair, capacity by horizontal scaling, and efficiency by driving utilisation and power effectiveness across the whole facility, with liquid cooling spreading as AI-class racks exceed 100 kW.

  ## Technical Details

  - **Roles**: web/application servers (nginx, Apache), database servers (PostgreSQL, MySQL), file and object storage, mail, DNS, game and real-time media servers, GPU inference/training nodes.
  - **Operating systems**: Linux dominates the installed base; Windows Server persists in enterprise directories and .NET estates; the [[Operating System]] is increasingly wrapped by hypervisors (KVM, ESXi) and Kubernetes.
  - **Reliability vocabulary**: availability tiers expressed in "nines"; redundancy patterns N+1 and 2N for power and cooling; RAID/erasure coding for storage; live migration for maintenance.
  - **Management plane**: PXE/Redfish provisioning, infrastructure-as-code (Terraform, Ansible), telemetry and remote KVM via the BMC — itself a notable attack surface requiring firmware hygiene.
  - **Trends**: heterogeneous compute (GPUs, DPUs/SmartNICs offloading [[Networking]] and storage), Arm adoption for performance-per-watt, confidential-computing enclaves, and rack-scale liquid cooling for AI density.
