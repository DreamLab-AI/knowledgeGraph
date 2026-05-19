schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#InfrastructureDomain
legacy_uri:: urn:visionclaw:concept:infrastructure:infrastructure-domain
public:: true

# Infrastructure Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:191918864633a7a550d1e43cfe5bf8d5c305b3e7dc3b62af3fdb7c522f0fe26f",
  "@type": "Page",
  "vc:slug": "infrastructure-domain",
  "title": "Infrastructure Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:configuration-management",
      "vc:label": "ConfigurationManagement"
    },
    {
      "@id": "urn:visionflow:linked:container-orchestration",
      "vc:label": "ContainerOrchestration"
    },
    {
      "@id": "urn:visionflow:linked:critical-infrastructure",
      "vc:label": "CriticalInfrastructure"
    },
    {
      "@id": "urn:visionflow:linked:data-center-infrastructure",
      "vc:label": "DataCenterInfrastructure"
    },
    {
      "@id": "urn:visionflow:linked:database-component",
      "vc:label": "DatabaseComponent"
    },
    {
      "@id": "urn:visionflow:linked:infrastructure-as-code",
      "vc:label": "InfrastructureAsCode"
    },
    {
      "@id": "urn:visionflow:linked:itservice-management",
      "vc:label": "ITServiceManagement"
    },
    {
      "@id": "urn:visionflow:linked:security-infrastructure",
      "vc:label": "SecurityInfrastructure"
    },
    {
      "@id": "urn:visionflow:linked:server-component",
      "vc:label": "ServerComponent"
    },
    {
      "@id": "urn:visionflow:linked:server-infrastructure",
      "vc:label": "ServerInfrastructure"
    },
    {
      "@id": "urn:visionflow:linked:storage-component",
      "vc:label": "StorageComponent"
    },
    {
      "@id": "urn:visionflow:linked:virtualization",
      "vc:label": "Virtualization"
    },
    {
      "@id": "urn:visionflow:owl:class:cloud-infrastructure",
      "vc:label": "CloudInfrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:network-infrastructure",
      "vc:label": "NetworkInfrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:network-topology",
      "vc:label": "NetworkTopology"
    },
    {
      "@id": "urn:visionflow:owl:class:networkcomponent",
      "vc:label": "Networkcomponent"
    },
    {
      "@id": "urn:visionflow:owl:class:ngm-domain",
      "vc:label": "NGM Domain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-8121cf9b2ec2"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#InfrastructureDomain"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-7002"
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
      "vc:value": "Infrastructure Domain"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:infrastructure-domain"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:infrastructure-domain"
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
    "@id": "urn:visionflow:page:191918864633a7a550d1e43cfe5bf8d5c305b3e7dc3b62af3fdb7c522f0fe26f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:infrastructure-domain",
  "@type": "Class",
  "label": "Infrastructure Domain",
  "definition": "The Infrastructure Domain provides an ontological framework for ICT infrastructure configuration items, resources, and resource groups common across IT service management systems.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:infrastructure-domain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:191918864633a7a550d1e43cfe5bf8d5c305b3e7dc3b62af3fdb7c522f0fe26f"
  },
  "vc:resolutions": [
    {
      "raw": "[[ConfigurationManagement]]",
      "resolved": "urn:visionflow:linked:configuration-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[ContainerOrchestration]]",
      "resolved": "urn:visionflow:linked:container-orchestration",
      "kind": "StubLink"
    },
    {
      "raw": "[[CriticalInfrastructure]]",
      "resolved": "urn:visionflow:linked:critical-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[DataCenterInfrastructure]]",
      "resolved": "urn:visionflow:linked:data-center-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[DatabaseComponent]]",
      "resolved": "urn:visionflow:linked:database-component",
      "kind": "StubLink"
    },
    {
      "raw": "[[InfrastructureAsCode]]",
      "resolved": "urn:visionflow:linked:infrastructure-as-code",
      "kind": "StubLink"
    },
    {
      "raw": "[[ITServiceManagement]]",
      "resolved": "urn:visionflow:linked:itservice-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[SecurityInfrastructure]]",
      "resolved": "urn:visionflow:linked:security-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[ServerComponent]]",
      "resolved": "urn:visionflow:linked:server-component",
      "kind": "StubLink"
    },
    {
      "raw": "[[ServerInfrastructure]]",
      "resolved": "urn:visionflow:linked:server-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[StorageComponent]]",
      "resolved": "urn:visionflow:linked:storage-component",
      "kind": "StubLink"
    },
    {
      "raw": "[[Virtualization]]",
      "resolved": "urn:visionflow:linked:virtualization",
      "kind": "StubLink"
    },
    {
      "raw": "[[CloudInfrastructure]]",
      "resolved": "urn:visionflow:owl:class:cloud-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkInfrastructure]]",
      "resolved": "urn:visionflow:owl:class:network-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkTopology]]",
      "resolved": "urn:visionflow:owl:class:network-topology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Networkcomponent]]",
      "resolved": "urn:visionflow:owl:class:networkcomponent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NGM Domain]]",
      "resolved": "urn:visionflow:owl:class:ngm-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:191918864633a7a550d1e43cfe5bf8d5c305b3e7dc3b62af3fdb7c522f0fe26f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The Infrastructure Domain provides an ontological framework for ICT infrastructure configuration items, resources, and resource groups common across IT service management systems. It encompasses network components, server infrastructure, data centers, software systems, databases, hardware components, and security configurations that enable network connectivity, communication, and computing services.

- ### Semantic Classification
  - owl-class:: infrastructure:InfrastructureDomain
  - owl-role:: Domain
  - belongs-to-domain:: [[NGM Domain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content

  - ### Subdomains
  - [[NetworkInfrastructure]] - IP addressing, network segments, DNS domains
  - [[ServerInfrastructure]] - Compute resources and virtualization
  - [[DataCenterInfrastructure]] - Physical facility and hosting
  - [[CloudInfrastructure]] - Cloud computing services and resources
  - [[SecurityInfrastructure]] - Firewalls, certificates, access control

  #### Related Concepts
  - [[ConfigurationManagement]] - CMDB and configuration items
  - [[ITServiceManagement]] - ITSM practices and frameworks
  - [[NetworkTopology]] - Network design and connectivity
  - [[Virtualization]] - Resource abstraction and pooling
  - [[ContainerOrchestration]] - Container deployment and management
  - [[InfrastructureAsCode]] - Automated provisioning
  - [[CriticalInfrastructure]] - Essential services and systems

  - ### Key Components
  - [[Networkcomponent]] - Routers, switches, firewalls
  - [[ServerComponent]] - Physical and virtual servers
  - [[StorageComponent]] - Data storage systems
  - [[DatabaseComponent]] - Database management systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
