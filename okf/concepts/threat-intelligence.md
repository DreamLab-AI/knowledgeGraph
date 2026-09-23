---
okf_version: "0.2"
type: Class
title: Threat Intelligence
resource: urn:ngm:class:threat-intelligence
domain: security
description: Threat intelligence is the disciplined process of collecting, processing, analysing, and disseminating information about adversaries, their capabilities, intentions, and tactics in order to enable organisations to make informed defensive and strategic decisions. It transforms raw threat data — indicators of compromise, malware signatures, actor profiles, campaign timelines — into contextualised, a
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:cybersecurity
hasPart:
  - urn:ngm:class:threat-actor
  - urn:ngm:class:indicators-of-compromise
  - urn:ngm:class:threat-actor
  - urn:ngm:class:vulnerability-intelligence
  - urn:ngm:class:malware-analysis
requires:
  - urn:ngm:class:open-source-intelligence
  - urn:ngm:class:data-aggregation
enables:
  - urn:ngm:class:network-security
  - urn:ngm:class:incident-response
  - urn:ngm:class:security-operations-centre
  - urn:ngm:class:risk-management
dependsOn:
  - urn:ngm:class:data-collection
  - urn:ngm:class:threat-modelling
implements:
  - urn:ngm:class:stix-taxii
  - urn:ngm:class:mitre-att-ck-framework
contrastsWith:
  - urn:ngm:class:vulnerability-management
bridgesTo:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:graph-database
supports:
  - urn:ngm:class:security-information-and-event-management
  - urn:ngm:class:endpoint-detection-and-response
standardizedBy:
  - urn:ngm:class:oasis
  - urn:ngm:class:mitre-corporation
  - urn:ngm:class:oasis
partOf:
  - urn:ngm:class:information-security
relatedTo:
  - urn:ngm:class:threat-hunting
  - urn:ngm:class:dark-web-monitoring
  - urn:ngm:class:information-sharing-and-analysis-centre
---

# Threat Intelligence

Threat intelligence is the disciplined process of collecting, processing, analysing, and disseminating information about adversaries, their capabilities, intentions, and tactics in order to enable organisations to make informed defensive and strategic decisions. It transforms raw threat data — indicators of compromise, malware signatures, actor profiles, campaign timelines — into contextualised, actionable knowledge tailored to a specific audience. Intelligence is typically classified by time horizon and consumer: strategic intelligence informs executive risk decisions, operational intelligence guides incident response planning, and tactical intelligence feeds real-time detection and blocking systems. Sharing platforms such as STIX/TAXII and ISACs enable cross-organisational distribution of finished intelligence to raise collective defensive posture.
