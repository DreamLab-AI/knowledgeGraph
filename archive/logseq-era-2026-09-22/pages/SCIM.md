public:: true

# SCIM

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:scim", "@type":"Page", "title":"SCIM", "vc:slug":"scim", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:scim",
  "@type":"Class",
  "label":"SCIM",
  "definition":"SCIM (System for Cross-domain Identity Management) is an open standard that defines a common schema and a RESTful protocol for automating the exchange of user and group identity information between identity providers and service providers. It lets organisations create, update, deactivate and deprovision accounts across applications without bespoke integrations. SCIM is widely used to automate user lifecycle management in enterprise single sign-on and cloud deployments.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:identity-management","label":"Identity Management"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:identity-management","label":"Identity Management"}],
    "uses":[{"@id":"urn:ngm:class:rest-api","label":"REST API"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards","label":"Standards"}],
    "supports":[{"@id":"urn:ngm:class:single-sign-on","label":"Single Sign-On"},{"@id":"urn:ngm:class:identity-federation","label":"Identity Federation"}],
    "enables":[{"@id":"urn:ngm:class:access-control","label":"Access Control"}],
    "requires":[{"@id":"urn:ngm:class:authentication","label":"Authentication"},{"@id":"urn:ngm:class:authorization","label":"Authorisation"}],
    "dependsOn":[{"@id":"urn:ngm:class:directory-service","label":"Directory Service"}],
    "contrastsWith":[{"@id":"urn:ngm:class:oauth","label":"OAuth"}],
    "relatedTo":[{"@id":"urn:ngm:class:identity-management","label":"Identity Management"},{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - **SCIM** (System for Cross-domain Identity Management) is an open standard for automating the provisioning and synchronisation of user identities between systems.
  - It is a concrete protocol within [[Identity Management]], defining both a common identity schema and a [[REST API]] for acting on it.
  - SCIM lets an identity provider create, update and deactivate accounts in downstream applications automatically as people join, change roles or leave.
  - It complements authentication standards such as [[OAuth]] and SAML, which handle login rather than account lifecycle.
- ### Overview
  - Before SCIM, connecting an identity source to each application required bespoke, brittle integrations; SCIM replaces these with a uniform interface.
  - The standard specifies resource types (notably User and Group), a JSON representation, and HTTP operations for create, read, update, delete and search.
  - Identity providers act as SCIM clients, pushing changes to service providers that expose SCIM endpoints.
  - SCIM underpins automated user lifecycle management in enterprise [[Single Sign-On]] and cloud estates.
- ### Key aspects
  - **Common schema** — a standard set of attributes for users and groups, extensible for organisation-specific needs.
  - **RESTful protocol** — predictable HTTP verbs over a [[REST API]] make implementation and debugging straightforward.
  - **Lifecycle automation** — joiner, mover and leaver events flow automatically, closing the gap that leaves orphaned accounts after departures.
  - **Interoperability** — being a published standard, SCIM is implemented across many identity providers and SaaS applications.
  - **Security alignment** — automated deprovisioning reduces the attack surface left by stale credentials, reinforcing [[Access Control]].
- ### Mechanisms
  - A SCIM client authenticates to a SCIM service provider, often using [[OAuth]] bearer tokens.
  - Identity changes detected in a [[Directory Service]] are translated into SCIM operations against each connected application.
  - Group membership changes propagate to keep entitlements consistent, supporting [[Authorisation]] decisions downstream.
  - Idempotent operations and filtering allow reliable reconciliation of large user populations.
- ### Applications
  - Automated onboarding and offboarding of employees across SaaS portfolios.
  - Synchronising entitlements with [[Identity Federation]] and [[Single Sign-On]] deployments.
  - Reducing manual administration and audit risk in large organisations.
  - Closing security gaps by ensuring leavers lose access promptly.
- ### Relationships
  - implements:: [[Identity Management]]
  - uses:: [[REST API]]
  - standardizedBy:: [[Standards]]
  - supports:: [[Single Sign-On]]
  - supports:: [[Identity Federation]]
  - enables:: [[Access Control]]
  - requires:: [[Authentication]]
  - requires:: [[Authorisation]]
  - dependsOn:: [[Directory Service]]
  - contrastsWith:: [[OAuth]]
  - relatedTo:: [[Identity Management]]
  - relatedTo:: [[Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
