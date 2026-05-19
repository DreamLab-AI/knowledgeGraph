schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#ComputingInfrastructure
legacy_uri:: urn:visionclaw:concept:infrastructure:computing-infrastructure
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Blockchain]] (bc), [[AI Agent System]] (ai), or [[Digital Twin]] (mv)"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-52bdcc87f584"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#ComputingInfrastructure"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-7033"
    },
    {
      "vc:key": "maturity",
      "vc:value": "reviewed"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Computing Infrastructure"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:computing-infrastructure"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:computing-infrastructure"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b02b52d0f017dd97d2cb36a50b6c88a877c3213911d607a31927e7ab665a6cf0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "definition": "Computing infrastructure encompasses the physical and virtual resources required for building, running, and delivering applications and services, including servers, storage systems, networking equipment, power systems, and cooling facilities housed in data centers.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b02b52d0f017dd97d2cb36a50b6c88a877c3213911d607a31927e7ab665a6cf0@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
