---
okf_version: "0.2"
type: Class
title: Data Management Platform
resource: urn:ngm:class:data-management-platform
domain: data
description: A data management platform is a centralised system for collecting, organising, segmenting, and activating large volumes of data drawn from multiple sources so that it can be used for analytics, audience targeting, and decision-making. Historically associated with advertising, where it aggregated and anonymised audience data for campaign targeting, the term also denotes broader enterprise platforms
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data
hasPart:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-warehouse
requires:
  - urn:ngm:class:consent-management
enables:
  - urn:ngm:class:programmatic-advertising
dependsOn:
  - urn:ngm:class:data
contrastsWith:
  - urn:ngm:class:customer-data-platform
uses:
  - urn:ngm:class:data-integration
supports:
  - urn:ngm:class:data-governance
  - urn:ngm:class:advertising
partOf:
  - urn:ngm:class:data-integration
relatedTo:
  - urn:ngm:class:synthetic-data-generator
  - urn:ngm:class:data-warehouse
---

# Data Management Platform

A data management platform is a centralised system for collecting, organising, segmenting, and activating large volumes of data drawn from multiple sources so that it can be used for analytics, audience targeting, and decision-making. Historically associated with advertising, where it aggregated and anonymised audience data for campaign targeting, the term also denotes broader enterprise platforms that unify data pipelines, storage, and governance. It is closely related to, but distinct from, customer data platforms and data warehouses.
