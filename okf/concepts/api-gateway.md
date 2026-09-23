---
okf_version: "0.2"
type: Class
title: API Gateway
resource: urn:ngm:class:api-gateway
domain: infrastructure
description: Infrastructure component serving as the unified northbound entry point for client requests into a Distributed System|distributed or Microservices|microservices backend, providing cross-cutting policy enforcement (request routing across hundreds-to-thousands of upstream services, authentic...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:policy-enforcement-point
  - urn:ngm:class:middleware
  - urn:ngm:class:reverse-proxy
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:cloud-native-component
hasPart:
  - urn:ngm:class:request-router
  - urn:ngm:class:authentication-handler
  - urn:ngm:class:rate-limiter
  - urn:ngm:class:tls-terminator
  - urn:ngm:class:request-transformer
  - urn:ngm:class:response-cache
  - urn:ngm:class:distributed-tracing-collector
  - urn:ngm:class:access-log-emitter
  - urn:ngm:class:plugin-runtime
  - urn:ngm:class:health-checker
requires:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:service-discovery
  - urn:ngm:class:identity-provider
  - urn:ngm:class:access-control-system
  - urn:ngm:class:configuration-store
  - urn:ngm:class:observability-pipeline
enables:
  - urn:ngm:class:api-management
  - urn:ngm:class:microservices
  - urn:ngm:class:multi-tenancy
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:api-management
  - urn:ngm:class:backend-for-frontend
  - urn:ngm:class:graphql-federation
  - urn:ngm:class:strangler-fig-pattern
dependsOn:
  - urn:ngm:class:http
  - urn:ngm:class:http-protocol
  - urn:ngm:class:tls
  - urn:ngm:class:tcp-ip
  - urn:ngm:class:dns
  - urn:ngm:class:service-discovery
implements:
  - urn:ngm:class:circuit-breaker
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:rate-limiting
  - urn:ngm:class:oidc
  - urn:ngm:class:jwt
  - urn:ngm:class:mtls
  - urn:ngm:class:bulkhead-pattern
  - urn:ngm:class:retry-pattern
  - urn:ngm:class:token-bucket-algorithm
contrastsWith:
  - urn:ngm:class:enterprise-service-bus
  - urn:ngm:class:load-balancer
  - urn:ngm:class:service-mesh
  - urn:ngm:class:reverse-proxy
  - urn:ngm:class:cdn
uses:
  - urn:ngm:class:open-api-specification
  - urn:ngm:class:open-telemetry
  - urn:ngm:class:prometheus
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:asyncapi
  - urn:ngm:class:protobuf
  - urn:ngm:class:w3c-trace-context
supports:
  - urn:ngm:class:g-rpc
  - urn:ngm:class:graph-ql
  - urn:ngm:class:mqtt
  - urn:ngm:class:rest
  - urn:ngm:class:server-sent-events
  - urn:ngm:class:web-socket
  - urn:ngm:class:webhook
standardizedBy:
  - urn:ngm:class:cncf
  - urn:ngm:class:cncf
  - urn:ngm:class:ietf
  - urn:ngm:class:kubernetes-gateway-api
  - urn:ngm:class:openapi-initiative
relatedTo:
  - urn:ngm:class:api-management
  - urn:ngm:class:cdn
  - urn:ngm:class:ingress-controller
  - urn:ngm:class:service-mesh
  - urn:ngm:class:web-application-firewall
  - urn:ngm:class:identity-aware-proxy
  - urn:ngm:class:ai-gateway
---

# API Gateway

Infrastructure component serving as the unified northbound entry point for client requests into a Distributed System|distributed or Microservices|microservices backend, providing cross-cutting policy enforcement (request routing across hundreds-to-thousands of upstream services, authentic...
