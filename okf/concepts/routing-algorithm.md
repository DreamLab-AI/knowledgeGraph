---
okf_version: "0.2"
type: Class
title: Routing Algorithm
resource: urn:ngm:class:routing-algorithm
domain: blockchain
description: A routing algorithm is a procedure that determines the path along which data, messages, or value should travel from a source to a destination across a network of interconnected nodes. It typically models the network as a graph and selects routes by optimising criteria such as shortest path, lowest cost, available capacity, or reliability, while adapting to changing topology and link state. In bloc
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:lightning-network
dependsOn:
  - urn:ngm:class:network-topology
  - urn:ngm:class:graph-theory
implements:
  - urn:ngm:class:payment-routing
  - urn:ngm:class:dijkstra-algorithm
bridgesTo:
  - urn:ngm:class:hashed-timelock-contract
uses:
  - urn:ngm:class:gossip-protocol
  - urn:ngm:class:onion-routing
supports:
  - urn:ngm:class:payment-channel
partOf:
  - urn:ngm:class:network-protocol
relatedTo:
  - urn:ngm:class:mesh-network
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:distributed-systems
---

# Routing Algorithm

A routing algorithm is a procedure that determines the path along which data, messages, or value should travel from a source to a destination across a network of interconnected nodes. It typically models the network as a graph and selects routes by optimising criteria such as shortest path, lowest cost, available capacity, or reliability, while adapting to changing topology and link state. In blockchain payment networks such as the Lightning Network, routing algorithms find viable multi-hop paths across payment channels, balancing fees, liquidity, and privacy through techniques like source routing and onion encryption.
