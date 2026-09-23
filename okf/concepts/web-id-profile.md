---
okf_version: "0.2"
type: Class
title: WebID Profile
resource: urn:ngm:class:web-id-profile
domain: infrastructure
description: A WebID Profile is an RDF document accessible at a dereferenceable HTTP URI that describes a person or agent, linking their identity to cryptographic keys, social contacts, and access control preferences, thereby enabling decentralised authentication and authorisation on the web without a centralised identity provider. The profile uses vocabularies such as FOAF and vCard to express identity attrib
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:digital-identity
requires:
  - urn:ngm:class:rdf
  - urn:ngm:class:solid
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralized-identity-did
relatedTo:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:solid-pod
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:personal-data-store
---

# WebID Profile

A WebID Profile is an RDF document accessible at a dereferenceable HTTP URI that describes a person or agent, linking their identity to cryptographic keys, social contacts, and access control preferences, thereby enabling decentralised authentication and authorisation on the web without a centralised identity provider. The profile uses vocabularies such as FOAF and vCard to express identity attributes, and the WebID-TLS and WebID-OIDC protocols use it to authenticate agents by verifying control of the URI through certificate or token proofs. WebID Profiles are a foundational component of the Solid decentralised web platform, where they serve as the entry point for discovering a user's data pods and access control rules. They embody the self-sovereign principle that identity should be controlled by the individual rather than delegated to a platform.
