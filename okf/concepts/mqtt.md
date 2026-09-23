---
okf_version: "0.2"
type: Class
title: MQTT
resource: urn:ngm:class:mqtt
domain: infrastructure
description: MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol standardised as ISO/IEC 20922 and OASIS MQTT 5.0, designed for constrained devices and low-bandwidth or unreliable networks with minimal protocol overhead. Clients connect to a central broker that routes messages hierarchically by topic string; publishers post payloads to topic endpoints and subscriber
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:infra-network-and-comms
requires:
  - urn:ngm:class:message-broker
  - urn:ngm:class:publish-subscribe-pattern
enables:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:sensor-data
  - urn:ngm:class:real-time-streaming
  - urn:ngm:class:telemetry-and-analytics
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:real-time-streaming
  - urn:ngm:class:telemetry-and-analytics
dependsOn:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:embedded-systems
implements:
  - urn:ngm:class:publish-subscribe-pattern
contrastsWith:
  - urn:ngm:class:amqp
  - urn:ngm:class:co-ap
  - urn:ngm:class:http
  - urn:ngm:class:stomp
bridgesTo:
  - urn:ngm:class:ros-2
  - urn:ngm:class:digital-twin
  - urn:ngm:class:inference
  - urn:ngm:class:inference
uses:
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:tcp-ip
  - urn:ngm:class:web-sockets
  - urn:ngm:class:tls
  - urn:ngm:class:tls
supports:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:smart-home-automation
  - urn:ngm:class:vehicle-telematics
standardizedBy:
  - urn:ngm:class:oasis
  - urn:ngm:class:oasis
  - urn:ngm:class:iso-iec-20922
relatedTo:
  - urn:ngm:class:data-serialization
  - urn:ngm:class:scada
  - urn:ngm:class:sparkplug-b
  - urn:ngm:class:data-serialization
---

# MQTT

MQTT (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol standardised as ISO/IEC 20922 and OASIS MQTT 5.0, designed for constrained devices and low-bandwidth or unreliable networks with minimal protocol overhead. Clients connect to a central broker that routes messages hierarchically by topic string; publishers post payloads to topic endpoints and subscribers receive all messages matching wildcard-capable topic filters. MQTT defines three quality-of-service levels—at most once (QoS 0), at least once (QoS 1), and exactly once (QoS 2)—enabling integrators to balance delivery guarantees against network and compute cost across heterogeneous deployments spanning embedded microcontrollers to cloud-scale brokers.
