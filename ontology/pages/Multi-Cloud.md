public:: true

# Multi-Cloud
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9fa96b721dfec7d53686422acbc8872c15841d41275a968c140dd1081fd48b46",
  "@type": "Page",
  "vc:slug": "multi-cloud",
  "title": "Multi-Cloud",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cloud-computing",
      "vc:label": "Cloud Computing"
    },
    {
      "@id": "urn:visionflow:linked:hybrid-cloud",
      "vc:label": "Hybrid Cloud"
    },
    {
      "@id": "urn:visionflow:linked:cloud-infrastructure",
      "vc:label": "Cloud Infrastructure"
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
  "@id": "urn:ngm:class:multi-cloud",
  "@type": "Class",
  "label": "Multi-Cloud",
  "definition": "A cloud deployment strategy in which an organisation consumes services from two or more independent public cloud providers — such as AWS, Azure, and Google Cloud — distributing workloads to avoid vendor lock-in, satisfy data-residency and regulatory requirements, exploit provider-specific strengths, and improve resilience against provider-wide outages, at the cost of increased operational complexity, duplicated tooling, and cross-cloud egress charges.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:cloud-computing",
    "label": "Cloud Computing"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:cloud-infrastructure",
        "label": "Cloud Infrastructure"
      },
      {
        "@id": "urn:ngm:class:infrastructure-as-a-service",
        "label": "Infrastructure as a Service"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:hybrid-cloud",
        "label": "Hybrid Cloud"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A cloud deployment strategy in which an organisation consumes services from two or more independent public cloud providers — such as AWS, Azure, and Google Cloud — distributing workloads to avoid vendor lock-in, satisfy data-residency and regulatory requirements, exploit provider-specific strengths, and improve resilience against provider-wide outages, at the cost of increased operational complexity, duplicated tooling, and cross-cloud egress charges."

- ### Semantic Classification
  - owl-class:: infrastructure:MultiCloud
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Cloud Computing]]
  - uses:: [[Cloud Infrastructure]]
  - contrasts-with:: [[Hybrid Cloud]]

- ### Content

  ## Definition

  **Multi-cloud** is the deliberate use of two or more independent public cloud providers within a single organisation's estate. Unlike [[Hybrid Cloud]], which combines private (on-premises) infrastructure with a public cloud, multi-cloud is purely about plurality among public providers: a firm might run analytics on Google Cloud for BigQuery, core services on AWS, and Microsoft-adjacent workloads on Azure. The two strategies are orthogonal and frequently combined — a hybrid, multi-cloud estate is now the norm in large enterprises.

  The motivations are commercial and regulatory as much as technical. Distributing spend across providers strengthens negotiating positions and avoids lock-in to proprietary services; regulators in finance (for example the UK PRA and the EU's DORA regulation) explicitly push firms to demonstrate exit plans and reduce concentration risk on a single hyperscaler; data-residency rules may force particular workloads onto providers with in-country regions. Resilience is a further driver: a control-plane failure at one provider need not take down the whole business.

  The costs are real. Each provider has distinct identity models, networking primitives, managed services, and billing semantics, so teams either standardise on a lowest-common-denominator (typically Kubernetes plus infrastructure-as-code) or maintain duplicated expertise. Cross-cloud data transfer incurs egress fees, and consistent security posture across heterogeneous platforms is one of the hardest problems in cloud governance.

  ## Current Landscape

  Surveys by Flexera and Gartner have consistently reported that the large majority of enterprises operate multi-cloud in some form, though often accidentally — through acquisitions or team-level choices — rather than by design. The tooling ecosystem has matured around the pattern: Terraform and OpenTofu for provider-agnostic provisioning, Kubernetes and its distributions for a portable runtime layer, Crossplane for control-plane abstraction, and cost-management platforms for unified billing visibility. Hyperscalers themselves now ship multi-cloud management planes (Azure Arc, Google Anthos, AWS EKS Anywhere), tacitly acknowledging that single-provider estates are the exception. The open question for most organisations is not whether to be multi-cloud but how much workload portability is worth engineering for, given that the deepest provider value lies precisely in the non-portable managed services.

  - **Flexera 2025 State of the Cloud**: 86% of organisations reported running multi-cloud and 70% a hybrid strategy (at least one public and one private cloud), using on average 2.4 public cloud providers.
  - **Flexera 2026 State of the Cloud**: hybrid cloud rose to 73% of organisations, with multi-cloud adoption continuing to grow — "often unintentionally". Only ~21% of cloud workloads have been repatriated to on-premises, and over half of enterprise/SMB workloads now run in public cloud.
  - **Regulatory pressure**: the EU's Digital Operational Resilience Act (DORA), in force since January 2025, sharpens concentration-risk and exit-plan expectations for financial firms, reinforcing multi-cloud and multi-provider strategies.

  **Sources**:
  - https://www.softwareone.com/en-us/blog/articles/2025/05/14/flexera-2025-state-of-the-cloud-recap
  - https://www.flexera.com/blog/finops/flexera-2026-state-of-the-cloud-report-the-convergence-of-cloud-and-value/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
