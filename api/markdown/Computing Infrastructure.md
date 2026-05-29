public:: true

# Computing Infrastructure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b02b52d0f017dd97d2cb36a50b6c88a877c3213911d607a31927e7ab665a6cf0",
  "@type": "Page",
  "vc:slug": "computing-infrastructure",
  "title": "Computing Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure-domain",
      "vc:label": "InfrastructureDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:technology-domain",
      "vc:label": "Technology Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-7033"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Computing Infrastructure"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:computing-infrastructure",
  "@type": "Class",
  "label": "Computing Infrastructure",
  "definition": "Computing infrastructure encompasses the physical and virtual resources required for building, running, and delivering applications and services, including servers, storage systems, networking equipment, power systems, and cooling facilities housed in data centres. It provides the foundational capacity that IT systems require to process, store, and transmit digital data. Modern computing infrastructure increasingly extends from on-premises hardware into cloud-hosted and edge environments, and is a prerequisite for AI workloads, distributed applications, and spatial computing platforms.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:storage-infrastructure", "label": "Storage Infrastructure"},
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:networking-infrastructure", "label": "Networking Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:digital-infrastructure", "label": "Digital Infrastructure"},
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"},
      {"@id": "urn:ngm:class:orchestration", "label": "Orchestration"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:sustainability", "label": "Sustainability"},
      {"@id": "urn:ngm:class:power-management", "label": "Power Management"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:computing-infrastructure:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b02b52d0f017dd97d2cb36a50b6c88a877c3213911d607a31927e7ab665a6cf0"
  },
  "vc:resolutions": [
    {
      "raw": "[[InfrastructureDomain]]",
      "resolved": "urn:visionflow:owl:class:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technology Domain]]",
      "resolved": "urn:visionflow:owl:class:technology-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Computing infrastructure encompasses the physical and virtual resources required for building, running, and delivering applications and services, including servers, storage systems, networking equipment, power systems, and cooling facilities housed in data centers. It provides the foundational computing capacity that IT systems require to process, store, and transmit digital data.

- ### Semantic Classification
  - owl-class:: infrastructure:ComputingInfrastructure
  - owl-role:: Infrastructure
  - belongs-to-domain:: [[InfrastructureDomain]], [[Technology Domain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content

  ## Core Components

  ### Computing Resources
  - **Servers**: Physical and virtualized machines providing processing, memory, local storage, and network connectivity
  - **CPUs/GPUs**: Processing units for general and specialized computing tasks
  - **Memory**: RAM and cache systems for active data processing

  ### Storage Infrastructure
  - **Block Storage**: Direct-attached and SAN-based storage systems
  - **Object Storage**: Scalable storage for unstructured data
  - **Network-Attached Storage (NAS)**: File-level data storage

  ### Network Infrastructure
  - **Routers and Switches**: Traffic routing and local network connectivity
  - **Firewalls**: Security perimeter control
  - **Load Balancers**: Traffic distribution across servers

  ### Power Infrastructure
  - **Uninterruptible Power Supplies (UPS)**: Immediate backup power
  - **Power Distribution Units (PDUs)**: Power management to rack equipment
  - **Backup Generators**: Extended power during outages

  ### Cooling Systems
  - **Air-Based Cooling**: Traditional CRAC/CRAH units
  - **Liquid Cooling**: Direct-to-chip and immersion cooling
  - **Hybrid Systems**: Combined air and liquid approaches

  ## Data Center Types

  | Type | Description |
  |------|-------------|
  | On-Premises | Owned and operated by the organization |
  | Colocation | Leased space in third-party facilities |
  | Cloud | Operated by providers (AWS, Azure, Google Cloud) |
  | Hybrid | Combined on-premises, colocation, and cloud |

  ## Industry Trends (2024)
  - Data center consumption estimated at ~415 TWh (1.5% of global power)
  - Annual growth rate of 12-15%
  - AI workloads driving demand for specialized GPU/TPU infrastructure
  - Increased focus on energy efficiency and sustainable operations

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
