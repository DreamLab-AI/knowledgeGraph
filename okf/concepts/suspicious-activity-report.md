---
okf_version: "0.2"
type: Class
title: Suspicious Activity Report
resource: urn:ngm:class:suspicious-activity-report
domain: finance
description: A Suspicious Activity Report (SAR) is a formal regulatory filing through which a financial institution notifies a national financial intelligence unit of transactions or behaviours that may indicate money laundering, terrorist financing, fraud, or other financial crime. SARs are mandated under anti-money-laundering frameworks and must be submitted within prescribed deadlines whenever staff or moni
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:regulatory-compliance
requires:
  - urn:ngm:class:transaction-monitoring
  - urn:ngm:class:customer-due-diligence
  - urn:ngm:class:audit-trail
enables:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:sanctions-screening
dependsOn:
  - urn:ngm:class:kyc
uses:
  - urn:ngm:class:risk-based-approach
supports:
  - urn:ngm:class:basel-iii
standardizedBy:
  - urn:ngm:class:fatf
partOf:
  - urn:ngm:class:aml
  - urn:ngm:class:regulatory-compliance
relatedTo:
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:compliance
  - urn:ngm:class:financial-services
---

# Suspicious Activity Report

A Suspicious Activity Report (SAR) is a formal regulatory filing through which a financial institution notifies a national financial intelligence unit of transactions or behaviours that may indicate money laundering, terrorist financing, fraud, or other financial crime. SARs are mandated under anti-money-laundering frameworks and must be submitted within prescribed deadlines whenever staff or monitoring systems form a reasonable suspicion. The report documents the parties, accounts, transaction patterns, and the analyst's narrative rationale, while strict confidentiality (tipping-off prohibitions) prevents disclosure to the subject.
