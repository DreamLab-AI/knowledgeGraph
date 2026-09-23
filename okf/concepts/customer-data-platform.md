---
okf_version: "0.2"
type: Class
title: Customer Data Platform
resource: urn:ngm:class:customer-data-platform
domain: data
description: A Customer Data Platform (CDP) is a packaged software system that ingests first-party customer data from disparate online and offline sources, resolves fragmented identifiers into persistent, unified customer profiles, and exposes those profiles via APIs to downstream marketing, analytics, and personalisation systems. Unlike data warehouses or CRM systems, a CDP is marketer-managed, real-time capa
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:unified-customer-profile
  - urn:ngm:class:data-ingestion
  - urn:ngm:class:data-ingestion
  - urn:ngm:class:audience-builder
requires:
  - urn:ngm:class:data-integration
  - urn:ngm:class:identity-resolution
  - urn:ngm:class:consent-management
  - urn:ngm:class:data-governance
enables:
  - urn:ngm:class:audience-segmentation
  - urn:ngm:class:personalisation
  - urn:ngm:class:customer-journey-analytics
  - urn:ngm:class:real-time-marketing
contrastsWith:
  - urn:ngm:class:customer-relationship-management
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-management-platform
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:predictive-analytics
uses:
  - urn:ngm:class:event-streaming
  - urn:ngm:class:api-gateway
  - urn:ngm:class:extract-transform-load
standardizedBy:
  - urn:ngm:class:customer-data-platform-institute
relatedTo:
  - urn:ngm:class:privacy
  - urn:ngm:class:data-protection-regulation
  - urn:ngm:class:master-data-management
  - urn:ngm:class:data-protection-regulation
---

# Customer Data Platform

A Customer Data Platform (CDP) is a packaged software system that ingests first-party customer data from disparate online and offline sources, resolves fragmented identifiers into persistent, unified customer profiles, and exposes those profiles via APIs to downstream marketing, analytics, and personalisation systems. Unlike data warehouses or CRM systems, a CDP is marketer-managed, real-time capable, and purpose-built for identity resolution and audience activation. CDPs enforce consent and privacy preferences at the profile level, making them a key architectural component for compliant, data-driven customer engagement.
