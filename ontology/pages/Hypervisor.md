public:: true

# Hypervisor

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hypervisor", "@type":"Page", "title":"Hypervisor", "vc:slug":"hypervisor", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:hypervisor",
  "@type":"Class",
  "label":"Hypervisor",
  "definition":"A hypervisor, or virtual machine monitor, is system software that creates and runs virtual machines by abstracting and partitioning a host's physical CPU, memory, and I/O resources. Type 1 (bare-metal) hypervisors run directly on hardware, while Type 2 (hosted) hypervisors run atop a conventional operating system. By isolating multiple guest operating systems on shared hardware, the hypervisor is the foundational technology of server virtualisation and cloud computing.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:virtualisation","label":"Virtualisation"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:virtual-machine","label":"Virtual Machine"},{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}],
    "requires":[{"@id":"urn:ngm:class:hardware-abstraction","label":"Hardware Abstraction"},{"@id":"urn:ngm:class:memory-management","label":"Memory Management"}],
    "uses":[{"@id":"urn:ngm:class:hardware-abstraction","label":"Hardware Abstraction"}],
    "manages":[{"@id":"urn:ngm:class:virtual-machine","label":"Virtual Machine"}],
    "supports":[{"@id":"urn:ngm:class:multi-tenancy","label":"Multi-Tenancy"},{"@id":"urn:ngm:class:cloud-infrastructure","label":"Cloud Infrastructure"}],
    "partOf":[{"@id":"urn:ngm:class:system-software","label":"System Software"}],
    "contrastsWith":[{"@id":"urn:ngm:class:containerisation","label":"Containerisation"}],
    "relatedTo":[{"@id":"urn:ngm:class:operating-system","label":"Operating System"},{"@id":"urn:ngm:class:snapshot","label":"Snapshot"},{"@id":"urn:ngm:class:trusted-execution-environment","label":"Trusted Execution Environment"}],
    "dependsOn":[{"@id":"urn:ngm:class:operating-system","label":"Operating System"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A **Hypervisor** is the [[Virtualisation]] software that creates and runs [[Virtual Machine]]s by partitioning a host's CPU, memory, and I/O.
- It uses [[Hardware Abstraction]] and [[Memory Management]] to isolate multiple guest [[Operating System]]s on shared hardware.
- It is the foundational technology of [[Cloud Computing]] and server consolidation.
- ### Overview
- The hypervisor sits between physical hardware and one or more guest operating systems, presenting each guest with the illusion of dedicated machine resources.
- Type 1 (bare-metal) hypervisors run directly on the host hardware for maximum performance and isolation, common in data centres and cloud platforms.
- Type 2 (hosted) hypervisors run as an application on top of a conventional operating system, convenient for development and desktop use.
- The hypervisor schedules virtual CPUs onto physical cores, virtualises memory through nested page tables, mediates device access, and enforces isolation so a fault or compromise in one guest does not affect others.
- Modern hypervisors exploit hardware virtualisation extensions to reduce overhead, and support live migration, snapshots, and dynamic resource allocation.
- ### Mechanisms
- CPU virtualisation: scheduling virtual CPUs and trapping privileged instructions.
- Memory virtualisation: nested or shadow page tables mapping guest to host memory.
- I/O virtualisation: emulated, para-virtualised, or pass-through device access.
- Isolation: strong boundaries between guests for security and fault containment.
- Lifecycle features: [[Snapshot]], cloning, and live migration of running guests.
- ### Applications
- Server consolidation, packing many [[Virtual Machine]]s onto fewer physical hosts.
- Public and private [[Cloud Infrastructure]] offering elastic compute.
- [[Multi-Tenancy]] isolation between customers on shared hardware.
- Secure workload separation, complementing a [[Trusted Execution Environment]].
- ### Relationships
- enables:: [[Virtual Machine]]
- enables:: [[Cloud Computing]]
- requires:: [[Hardware Abstraction]]
- requires:: [[Memory Management]]
- uses:: [[Hardware Abstraction]]
- manages:: [[Virtual Machine]]
- supports:: [[Multi-Tenancy]]
- supports:: [[Cloud Infrastructure]]
- partOf:: [[System Software]]
- contrastsWith:: [[Containerisation]]
- relatedTo:: [[Operating System]]
- relatedTo:: [[Snapshot]]
- relatedTo:: [[Trusted Execution Environment]]
- dependsOn:: [[Operating System]]
- ### Provenance
- updated:: 2026-06-15
- generatedAt:: 2026-06-15
- inferenceRule:: GapMaterialisation
