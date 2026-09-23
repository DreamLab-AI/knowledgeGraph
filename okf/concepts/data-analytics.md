---
okf_version: "0.2"
type: Class
title: Data Analytics
resource: urn:ngm:class:data-analytics
domain: data
description: "Data Analytics is the systematic computational examination of raw data sets to uncover patterns, correlations, and actionable insights that support organisational decision-making. It spans four analytical tiers: descriptive analytics (summarising historical state), diagnostic analytics (identifying causes of past events), predictive analytics (forecasting future outcomes via statistical and machin"
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:data-management
hasPart:
  - urn:ngm:class:descriptive-analytics
  - urn:ngm:class:predictive-analytics
  - urn:ngm:class:prescriptive-analytics
  - urn:ngm:class:diagnostic-analytics
requires:
  - urn:ngm:class:data-integration
  - urn:ngm:class:data-quality-management
  - urn:ngm:class:data-governance
enables:
  - urn:ngm:class:business-intelligence
  - urn:ngm:class:decision-support
  - urn:ngm:class:real-time-analytics
  - urn:ngm:class:decision-support
dependsOn:
  - urn:ngm:class:data-processing
  - urn:ngm:class:cloud-computing
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:data-lake
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:statistical-modelling
  - urn:ngm:class:data-visualisation
relatedTo:
  - urn:ngm:class:big-data
  - urn:ngm:class:etl-pipeline
  - urn:ngm:class:data-engineering
  - urn:ngm:class:etl-pipeline
---

# Data Analytics

Data Analytics is the systematic computational examination of raw data sets to uncover patterns, correlations, and actionable insights that support organisational decision-making. It spans four analytical tiers: descriptive analytics (summarising historical state), diagnostic analytics (identifying causes of past events), predictive analytics (forecasting future outcomes via statistical and machine learning models), and prescriptive analytics (recommending optimal actions). Analytics pipelines ingest data from heterogeneous sources, apply transformation and enrichment steps, execute statistical or ML algorithms, and surface results through visualisations, dashboards, and automated alerts. As a discipline, data analytics integrates elements of statistics, computer science, domain knowledge, and data engineering to create measurable business and scientific value.
