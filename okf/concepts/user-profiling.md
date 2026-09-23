---
okf_version: "0.2"
type: Class
title: User Profiling
resource: urn:ngm:class:user-profiling
domain: artificial-intelligence
description: User profiling is the construction of a structured model of an individual or segment from observed attributes, behaviours and interaction history, used to predict preferences, intent or risk. Profiles aggregate explicit data such as stated preferences with implicit signals such as clicks, dwell time and purchases, and may be updated continuously as new behaviour is observed. Because profiles conce
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:behavioural-analytics
hasPart:
  - urn:ngm:class:recommendation-system
requires:
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:behavioural-analytics
enables:
  - urn:ngm:class:personalisation
  - urn:ngm:class:recommendation-system
bridgesTo:
  - urn:ngm:class:recommendation-system
uses:
  - urn:ngm:class:behavioural-analytics
  - urn:ngm:class:data-preprocessing
supports:
  - urn:ngm:class:predictive-personalization
partOf:
  - urn:ngm:class:behavioural-analytics
relatedTo:
  - urn:ngm:class:personalisation
  - urn:ngm:class:predictive-personalization
---

# User Profiling

User profiling is the construction of a structured model of an individual or segment from observed attributes, behaviours and interaction history, used to predict preferences, intent or risk. Profiles aggregate explicit data such as stated preferences with implicit signals such as clicks, dwell time and purchases, and may be updated continuously as new behaviour is observed. Because profiles concern people, their construction raises consent, fairness and privacy obligations that constrain what may be collected and inferred.
