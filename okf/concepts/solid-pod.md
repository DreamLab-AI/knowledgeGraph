---
okf_version: "0.2"
type: Class
title: Solid Pod
resource: urn:ngm:class:solid-pod
domain: infrastructure
description: A Solid Pod (Personal Online Data store) is a W3C Linked Data Platform-compliant personal data vault that gives individuals and organisations sovereign control over their own data by hosting it at a user-chosen location and exposing it through a standards-based access control layer (WAC or ACP), ...
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:data-management
  - urn:ngm:class:infra-network-and-comms
  - urn:ngm:class:personal-data-store
  - urn:ngm:class:linked-data-platform-resource
hasPart:
  - urn:ngm:class:access-control-policy
  - urn:ngm:class:ldp-container
  - urn:ngm:class:rdf
  - urn:ngm:class:access-control
  - urn:ngm:class:web-id-profile
  - urn:ngm:class:access-control
  - urn:ngm:class:access-control-policy
  - urn:ngm:class:rdf
requires:
  - urn:ngm:class:http-protocol
  - urn:ngm:class:rdf-data-model
  - urn:ngm:class:turtle
  - urn:ngm:class:webid-decentralised-identity-uri
  - urn:ngm:class:turtle
enables:
  - urn:ngm:class:data-sovereignty
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:personal-data-store
  - urn:ngm:class:personal-data-store
  - urn:ngm:class:agent-personalisation
dependsOn:
  - urn:ngm:class:css-community-solid-server
  - urn:ngm:class:node-solid-server
  - urn:ngm:class:inrupt-pod-spaces
implements:
  - urn:ngm:class:w-3-c-linked-data-platform
  - urn:ngm:class:solid
  - urn:ngm:class:web-access-control
  - urn:ngm:class:solid
  - urn:ngm:class:web-access-control
bridgesTo:
  - urn:ngm:class:did-nostr-identity
  - urn:ngm:class:verifiable-credential-surface
  - urn:ngm:class:nostr-protocol
partOf:
  - urn:ngm:class:decentralised-web
  - urn:ngm:class:solid
  - urn:ngm:class:solid
  - urn:ngm:class:decentralised-web
---

# Solid Pod

A Solid Pod (Personal Online Data store) is a W3C Linked Data Platform-compliant personal data vault that gives individuals and organisations sovereign control over their own data by hosting it at a user-chosen location and exposing it through a standards-based access control layer (WAC or ACP), ...
