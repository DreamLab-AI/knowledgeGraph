---
okf_version: "0.2"
type: Class
title: Envoy Proxy
resource: urn:ngm:class:envoy-proxy
domain: infrastructure
description: "Envoy is a high-performance, open-source edge and service proxy designed for cloud-native applications, originally built at Lyft and graduated under the CNCF. It provides L3/L4 and L7 traffic management, dynamic configuration via the xDS APIs, observability, and resilience features such as retries, circuit breaking, and rate limiting. Envoy is the default data plane for many service meshes, where "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:reverse-proxy
hasPart:
  - urn:ngm:class:circuit-breaker
  - urn:ngm:class:rate-limiting
enables:
  - urn:ngm:class:traffic-management
  - urn:ngm:class:load-balancing
dependsOn:
  - urn:ngm:class:kubernetes
implements:
  - urn:ngm:class:reverse-proxy
uses:
  - urn:ngm:class:http
  - urn:ngm:class:mutual-tls
supports:
  - urn:ngm:class:observability
  - urn:ngm:class:telemetry
  - urn:ngm:class:api-gateway
standardizedBy:
  - urn:ngm:class:cncf
  - urn:ngm:class:cncf
partOf:
  - urn:ngm:class:service-mesh
relatedTo:
  - urn:ngm:class:microservices
  - urn:ngm:class:infrastructure
---

# Envoy Proxy

Envoy is a high-performance, open-source edge and service proxy designed for cloud-native applications, originally built at Lyft and graduated under the CNCF. It provides L3/L4 and L7 traffic management, dynamic configuration via the xDS APIs, observability, and resilience features such as retries, circuit breaking, and rate limiting. Envoy is the default data plane for many service meshes, where it runs as a sidecar alongside each workload.
