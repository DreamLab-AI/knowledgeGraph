public:: true

# Multi-Tenancy

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:multi-tenancy", "@type":"Page", "title":"Multi-Tenancy", "vc:slug":"multi-tenancy", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:multi-tenancy",
  "@type":"Class",
  "label":"Multi-Tenancy",
  "definition":"Multi-tenancy is a software architecture in which a single instance of an application or platform serves many independent customers, called tenants, while keeping each tenant's data, configuration, and behaviour logically isolated. It maximises resource utilisation and operational efficiency by sharing compute, storage, and code across tenants, relying on isolation boundaries to preserve privacy and prevent interference. It is foundational to software-as-a-service and to shared cloud infrastructure such as container orchestration platforms.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}],
    "enables":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}],
    "implements":[{"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}],
    "supports":[{"@id":"urn:ngm:class:kubernetes","label":"Kubernetes"},{"@id":"urn:ngm:class:service-discovery","label":"Service Discovery"}],
    "requires":[{"@id":"urn:ngm:class:security","label":"Security"},{"@id":"urn:ngm:class:privacy","label":"Privacy"}],
    "uses":[{"@id":"urn:ngm:class:kubernetes","label":"Kubernetes"}],
    "dependsOn":[{"@id":"urn:ngm:class:security","label":"Security"}],
    "relatedTo":[{"@id":"urn:ngm:class:observability","label":"Observability"},{"@id":"urn:ngm:class:privacy","label":"Privacy"}],
    "bridgesTo":[{"@id":"urn:ngm:class:kubernetes","label":"Kubernetes"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Multi-Tenancy]] is an architecture in which one instance of an application serves many isolated customers, a core pattern of [[Cloud Computing]].
- Each tenant's data and configuration are kept logically separate while sharing compute and code, which raises efficiency but elevates the importance of [[Security]] and [[Privacy]].
- It underpins shared platforms such as [[Kubernetes]] clusters and the [[Service Discovery]] fabrics that route tenant traffic.
- ### Overview
- Multi-tenancy trades per-customer isolation for shared efficiency: a single deployment amortises infrastructure, patching, and operations across the whole customer base.
- Tenants are distinguished by identifiers that scope every request, query, and resource, with isolation enforced at the data, network, and runtime layers.
- The principal engineering challenge is preventing one tenant from affecting another's performance, security, or data, the so-called noisy-neighbour and data-leakage risks.
- ### Key aspects
- Tenant isolation: logical separation of data, configuration, and state across customers.
- Shared resources: common compute, storage, and code reduce cost and operational overhead.
- Customisation: per-tenant configuration and feature flags without forking the codebase.
- Quotas and fairness: resource limits prevent any tenant from starving others.
- Security and privacy: strong access control and encryption keep tenant boundaries enforceable.
- ### Applications
- Software-as-a-service products serving thousands of customer organisations from one platform.
- Shared Kubernetes clusters partitioned by namespace and network policy.
- Managed databases and message buses serving many applications.
- Platform-as-a-service offerings hosting independent customer workloads.
- ### Relationships
- partOf:: [[Cloud Computing]]
- enables:: [[Cloud Computing]]
- implements:: [[Cloud Computing]]
- supports:: [[Kubernetes]]
- supports:: [[Service Discovery]]
- requires:: [[Security]]
- requires:: [[Privacy]]
- uses:: [[Kubernetes]]
- dependsOn:: [[Security]]
- relatedTo:: [[Observability]]
- relatedTo:: [[Privacy]]
- bridgesTo:: [[Kubernetes]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
