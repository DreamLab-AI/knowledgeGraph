public:: true

# Customer Data Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e64264581dae9869f02c24faa75a7b26aa1a7351922f87f84b21f870dcedfe2f",
  "@type": "Page",
  "vc:slug": "customer-data-platform",
  "title": "Customer Data Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-integration",
      "vc:label": "Data Integration"
    },
    {
      "@id": "urn:visionflow:linked:data-management",
      "vc:label": "Data Management"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Customer Data Platform"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:customer-data-platform",
  "@type": "Class",
  "label": "Customer Data Platform",
  "definition": "A Customer Data Platform (CDP) is a packaged software system that ingests first-party customer data from disparate online and offline sources, resolves fragmented identifiers into persistent, unified customer profiles, and exposes those profiles via APIs to downstream marketing, analytics, and personalisation systems. Unlike data warehouses or CRM systems, a CDP is marketer-managed, real-time capable, and purpose-built for identity resolution and audience activation. CDPs enforce consent and privacy preferences at the profile level, making them a key architectural component for compliant, data-driven customer engagement.",
  "domain": "data",
  "maturity": "established",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:identity-resolution",
        "label": "Identity Resolution"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:audience-segmentation",
        "label": "Audience Segmentation"
      },
      {
        "@id": "urn:ngm:class:personalisation",
        "label": "Personalisation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:unified-customer-profile",
        "label": "Unified Customer Profile"
      },
      {
        "@id": "urn:ngm:class:data-ingestion-pipeline",
        "label": "Data Ingestion Pipeline"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:event-streaming",
        "label": "Event Streaming"
      },
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:customer-relationship-management",
        "label": "Customer Relationship Management"
      },
      {
        "@id": "urn:ngm:class:data-warehouse",
        "label": "Data Warehouse"
      },
      {
        "@id": "urn:ngm:class:data-management-platform",
        "label": "Data Management Platform"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:predictive-analytics",
        "label": "Predictive Analytics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:data-protection-regulation",
        "label": "General Data Protection Regulation"
      },
      {
        "@id": "urn:ngm:class:master-data-management",
        "label": "Master Data Management"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cdp",
      "label": "CDP"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:customer-data-platform:050f71489820",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e64264581dae9869f02c24faa75a7b26aa1a7351922f87f84b21f870dcedfe2f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Integration]]",
      "resolved": "urn:visionflow:linked:data-integration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management]]",
      "resolved": "urn:visionflow:linked:data-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A **Customer Data Platform (CDP)** is a packaged software system that collects, unifies, and activates first-party [[Customer Data]] from disparate online and offline touchpoints. It resolves fragmented identifiers into persistent, [[Identity Resolution]]-backed profiles and exposes those profiles via real-time APIs to downstream systems handling [[Personalisation]], [[Audience Segmentation]], and [[Customer Journey Analytics]]. Unlike general [[Data Management]] infrastructure, a CDP is typically managed by marketing or operations teams without engineering involvement, and it embeds [[Consent Management]] to remain compliant with [[Privacy]] regulations such as [[General Data Protection Regulation]].

- ### Overview
  - CDPs emerged as a distinct product category in the mid-2010s in response to the fragmentation of customer identity across channels. As consumers interact through web, mobile, in-store, call centre, and connected-device touchpoints, each system generates its own customer records, leading to duplicated, inconsistent, and incomplete views of the customer.
  - A CDP addresses this by acting as a centralised, real-time [[Data Integration]] hub that:
    - Ingests behavioural, transactional, and demographic data from any source.
    - Applies [[Identity Resolution]] (probabilistic or deterministic matching) to stitch together records belonging to the same individual.
    - Maintains a persistent, updatable [[Unified Customer Profile]] keyed to a stable internal customer ID.
    - Exposes profiles and computed segments to activation channels (email, advertising, in-app messaging, customer service tools).
  - CDPs are distinguished from [[Data Warehouse]] systems by their emphasis on identity-resolved, marketing-actionable profiles rather than analytical aggregates, and from [[Data Management Platform]] systems (DMPs) by their use of first-party, persistent data rather than third-party, cookie-based anonymous audience data.
  - The rise of [[Privacy]] regulation (GDPR, CCPA, LGPD) significantly elevated the importance of CDPs because they provide a single location to enforce [[Consent Management]] preferences across all downstream systems.

- ### Key Components
  - #### Data Ingestion Layer
    - Collects data via SDKs, server-side event streams ([[Event Streaming]]), batch file uploads, and pre-built connectors.
    - Supports real-time (sub-second latency) and batch ingestion paths.
    - Normalises heterogeneous schemas into a canonical event format.
    - Uses [[Extract Transform Load]] patterns for batch sources and streaming pipelines for real-time sources.
  - #### Identity Resolution Engine
    - Merges records across channels using deterministic rules (e-mail match, login ID) and probabilistic scoring (device fingerprint, behavioural similarity).
    - Produces a stable, vendor-neutral customer ID (the "golden record").
    - Manages identity graphs that link multiple anonymous identifiers (cookies, device IDs, advertising IDs) to a single known profile.
    - Cross-device and cross-channel stitching is a primary differentiator among CDP vendors.
  - #### Unified Customer Profile Store
    - Persists the merged profile including attributes, event history, computed traits, and audience memberships.
    - Supports low-latency reads (for real-time personalisation) and bulk reads (for batch segmentation).
    - Profile schemas are typically flexible/schemaless to accommodate arbitrary attribute sets from different sources.
  - #### Audience Segmentation and Activation
    - Provides visual [[Audience Builder]] tools enabling non-technical users to define rule-based or [[Machine Learning]]-driven segments.
    - Pushes segment membership to downstream activation channels via native integrations or [[API Gateway]] calls.
    - Supports [[Real-Time Marketing]] use cases such as next-best-action triggers.
  - #### Consent and Privacy Layer
    - Stores per-customer consent state and propagates opt-out signals to downstream systems.
    - Integrates with Consent Management Platforms (CMPs) and supports [[General Data Protection Regulation]] data subject requests (access, deletion, portability).
    - Enforces data retention policies and [[Data Governance]] rules at the profile level.
  - #### Analytics and Insights
    - Provides [[Customer Journey Analytics]] dashboards, funnel analysis, and cohort reporting.
    - Integrates with [[Predictive Analytics]] and [[Machine Learning]] models to enrich profiles with propensity scores, churn risk, and lifetime value estimates.

- ### Applications / Use Cases
  - **Omnichannel Personalisation**: Delivering consistent, contextually relevant experiences across web, email, mobile push, and in-store based on a unified real-time profile.
  - **Audience Activation**: Syncing high-value customer segments to paid media platforms (Google Ads, Meta) for lookalike targeting, suppression lists, or retargeting, replacing third-party DMP audiences with first-party data.
  - **Churn Prevention**: Using [[Predictive Analytics]] models scored against CDP profiles to identify at-risk customers and trigger retention campaigns automatically.
  - **Customer Journey Orchestration**: Mapping multi-touch interaction sequences and coordinating responses across channels in real time to improve conversion rates.
  - **Privacy Compliance Automation**: Executing GDPR or CCPA deletion and portability requests by locating all profile data in one place and propagating removals to downstream systems.
  - **Product Recommendation Engines**: Feeding enriched behavioural histories from the CDP into collaborative filtering or deep learning recommendation models.
  - **B2B Account-Based Marketing**: Aggregating contact-level data into account-level profiles to support enterprise sales and marketing alignment.
  - **Customer Service Enrichment**: Surfacing real-time profile context (recent purchases, open issues, segment membership) to call-centre agents to improve resolution speed.

- ### Relationships
  - requires:: [[Data Integration]]
  - requires:: [[Identity Resolution]]
  - requires:: [[Consent Management]]
  - requires:: [[Data Governance]]
  - enables:: [[Audience Segmentation]]
  - enables:: [[Personalisation]]
  - enables:: [[Customer Journey Analytics]]
  - enables:: [[Real-Time Marketing]]
  - hasPart:: [[Unified Customer Profile]]
  - hasPart:: [[Data Ingestion Pipeline]]
  - hasPart:: [[Audience Builder]]
  - uses:: [[Extract Transform Load]]
  - uses:: [[Event Streaming]]
  - uses:: [[API Gateway]]
  - contrastsWith:: [[Customer Relationship Management]]
  - contrastsWith:: [[Data Warehouse]]
  - contrastsWith:: [[Data Management Platform]]
  - standardizedBy:: [[Customer Data Platform Institute]]
  - bridges-to:: [[Machine Learning]]
  - bridges-to:: [[Predictive Analytics]]
  - relatedTo:: [[Privacy]]
  - relatedTo:: [[General Data Protection Regulation]]
  - relatedTo:: [[Master Data Management]]

- ### Standards & Context
  - The **Customer Data Platform Institute** (CDPI), founded by David Raab, maintains the canonical definition distinguishing CDPs from DMPs, CRMs, and data warehouses. It publishes an annual landscape report tracking vendors.
  - **RealCDP Certification**: A vendor certification programme run by the CDPI requiring platforms to meet functional requirements for first-party data ingestion, unified profiles, and system openness.
  - **[[General Data Protection Regulation]] (GDPR)** and **California Consumer Privacy Act (CCPA)** are the primary regulatory frameworks shaping CDP architecture, particularly around consent propagation, data subject rights, and retention limits.
  - **OpenCDP**: An emerging initiative toward open standards for CDP data interchange, addressing vendor lock-in concerns as CDP adoption matures.
  - Integration standards used within CDPs include **JSON Schema** for event payloads, **OpenID Connect / OAuth 2.0** for identity federation, and **Apache Avro / Parquet** for batch data exchange.
  - CDPs increasingly overlap with [[Composable Architecture]] trends (the "Composable CDP"), where organisations assemble CDP capabilities from modular cloud-native components (warehouse, [[Event Streaming]], semantic layer) rather than deploying a monolithic packaged system.
  - Regulatory pressure on third-party cookies has accelerated CDP adoption as brands seek to leverage first-party identity assets, positioning the CDP as critical infrastructure for the post-cookie advertising ecosystem.

- ### Provenance
  - sources:: Customer Data Platform Institute (cdpinstitute.org); Gartner Magic Quadrant for Customer Data Platforms; vendor documentation (Segment, mParticle, Tealium, Salesforce Data Cloud, Adobe Real-Time CDP)
  - updated:: 2026-06-13
