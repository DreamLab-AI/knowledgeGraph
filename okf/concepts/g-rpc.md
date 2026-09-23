---
okf_version: "0.2"
type: Class
title: gRPC
resource: urn:ngm:class:g-rpc
domain: infrastructure
description: gRPC (gRPC Remote Procedure Call) is an open-source, high-performance remote procedure call framework developed by Google and released in 2015, built on HTTP/2 transport and Protocol Buffers as the interface definition language and serialisation format. It supports four communication patterns—unary, server-streaming, client-streaming, and bidirectional streaming—enabling efficient, strongly typed,
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:communication-protocol
requires:
  - urn:ngm:class:protocol-buffer
  - urn:ngm:class:http2
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:distributed-system
  - urn:ngm:class:realtime-communication
  - urn:ngm:class:service-mesh
  - urn:ngm:class:microservices
implements:
  - urn:ngm:class:remote-procedure-call
contrastsWith:
  - urn:ngm:class:rest-api
  - urn:ngm:class:graph-ql
  - urn:ngm:class:web-socket
bridgesTo:
  - urn:ngm:class:mobile-computing
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:cloud-native-applications
  - urn:ngm:class:kubernetes
  - urn:ngm:class:envoy-proxy
supports:
  - urn:ngm:class:load-balancing
standardizedBy:
  - urn:ngm:class:cncf
relatedTo:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:api-standard
  - urn:ngm:class:api-gateway
  - urn:ngm:class:mutual-tls
---

# gRPC

gRPC (gRPC Remote Procedure Call) is an open-source, high-performance remote procedure call framework developed by Google and released in 2015, built on HTTP/2 transport and Protocol Buffers as the interface definition language and serialisation format. It supports four communication patterns—unary, server-streaming, client-streaming, and bidirectional streaming—enabling efficient, strongly typed, low-latency communication between services in polyglot distributed systems. gRPC generates client and server stubs in over a dozen programming languages from a single .proto service definition, making it the dominant choice for internal microservices communication in cloud-native architectures. Its binary encoding and multiplexed HTTP/2 connections deliver significantly lower overhead than REST/JSON at high throughput.
