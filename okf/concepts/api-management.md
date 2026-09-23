---
okf_version: "0.2"
type: Class
title: API Management
resource: urn:ngm:class:api-management
domain: infrastructure
description: API Management is the discipline and tooling concerned with designing, publishing, documenting, securing, monitoring, and analysing application programming interfaces throughout their lifecycle. It provides a centralised control plane that governs how internal and external consumers discover and consume backend services, enforcing policies such as authentication, rate-limiting, and traffic shaping
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:technology-infrastructure
hasPart:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:authentication-service
  - urn:ngm:class:monitoring-system
  - urn:ngm:class:developer-portal
requires:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:api-integration
  - urn:ngm:class:api-monetisation
dependsOn:
  - urn:ngm:class:load-balancer
  - urn:ngm:class:service-discovery
implements:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:open-api-specification
contrastsWith:
  - urn:ngm:class:service-mesh
  - urn:ngm:class:enterprise-service-bus
bridgesTo:
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:graph-ql
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:json-data-interchange-format-web-token
supports:
  - urn:ngm:class:rest-api
  - urn:ngm:class:api-versioning
standardizedBy:
  - urn:ngm:class:api-standard
  - urn:ngm:class:openapi-initiative
partOf:
  - urn:ngm:class:cloud-native-architecture
relatedTo:
  - urn:ngm:class:container-orchestration
---

# API Management

API Management is the discipline and tooling concerned with designing, publishing, documenting, securing, monitoring, and analysing application programming interfaces throughout their lifecycle. It provides a centralised control plane that governs how internal and external consumers discover and consume backend services, enforcing policies such as authentication, rate-limiting, and traffic shaping at a gateway layer. Modern API management platforms combine developer portals, analytics dashboards, and policy engines to ensure reliability, security, and business alignment across distributed service ecosystems.
