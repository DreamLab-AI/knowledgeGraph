---
okf_version: "0.2"
type: Class
title: Credential Schema
resource: urn:ngm:class:credential-schema
domain: blockchain
description: "A Credential Schema is a machine-readable, versioned specification — typically expressed in JSON Schema or a JSON-LD vocabulary — that defines the mandatory and optional claims, data types, cardinality constraints, and value ranges permissible within a Verifiable Credential. Schemas function as a binding contract between credential issuers, holders, and verifiers: the issuer populates claims in co"
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:decentralised-identity
hasPart:
  - urn:ngm:class:credential-definition
  - urn:ngm:class:claim-mapping
requires:
  - urn:ngm:class:verifiable-data-registry
  - urn:ngm:class:decentralised-identifier
enables:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:interoperability
implements:
  - urn:ngm:class:sd-jwt-vc
  - urn:ngm:class:anon-creds
  - urn:ngm:class:mdoc
contrastsWith:
  - urn:ngm:class:credential-format-standard
  - urn:ngm:class:access-control-policy
bridgesTo:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:json-data-interchange-format-schema
  - urn:ngm:class:json-ld
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:semantic-web-linked-data-standard
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:open-id-foundation
  - urn:ngm:class:hyperledger-aries
partOf:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:trust-framework
relatedTo:
  - urn:ngm:class:metadata-schema
  - urn:ngm:class:ontology
  - urn:ngm:class:schema-registry
  - urn:ngm:class:credential-governance
---

# Credential Schema

A Credential Schema is a machine-readable, versioned specification — typically expressed in JSON Schema or a JSON-LD vocabulary — that defines the mandatory and optional claims, data types, cardinality constraints, and value ranges permissible within a Verifiable Credential. Schemas function as a binding contract between credential issuers, holders, and verifiers: the issuer populates claims in conformance with a declared schema, the holder's identity wallet stores schema metadata alongside the credential, and the verifier resolves and validates the credential's structure against the schema before applying trust policy decisions. Schemas are published at stable, resolvable URIs and are referenced from the credentialSchema property defined in the W3C Verifiable Credentials Data Model; in AnonCreds ecosystems they are written to a Verifiable Data Registry, making them tamper-evident and globally discoverable.
