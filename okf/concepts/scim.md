---
okf_version: "0.2"
type: Class
title: SCIM
resource: urn:ngm:class:scim
domain: infrastructure
description: SCIM (System for Cross-domain Identity Management) is an open standard that defines a common schema and a RESTful protocol for automating the exchange of user and group identity information between identity providers and service providers. It lets organisations create, update, deactivate and deprovision accounts across applications without bespoke integrations. SCIM is widely used to automate user
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:identity-management
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorisation
  - urn:ngm:class:authorisation
enables:
  - urn:ngm:class:access-control
dependsOn:
  - urn:ngm:class:directory-service
implements:
  - urn:ngm:class:identity-management
contrastsWith:
  - urn:ngm:class:oauth
uses:
  - urn:ngm:class:rest-api
supports:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:identity-federation
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:identity-management
  - urn:ngm:class:infrastructure
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# SCIM

SCIM (System for Cross-domain Identity Management) is an open standard that defines a common schema and a RESTful protocol for automating the exchange of user and group identity information between identity providers and service providers. It lets organisations create, update, deactivate and deprovision accounts across applications without bespoke integrations. SCIM is widely used to automate user lifecycle management in enterprise single sign-on and cloud deployments.
