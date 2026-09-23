---
okf_version: "0.2"
type: Class
title: Crowdsourcing
resource: urn:ngm:class:crowdsourcing
domain: machine-learning
description: Crowdsourcing is the practice of obtaining contributions, labour or judgements from a large distributed group of people, typically through an open call mediated by an online platform. In machine learning it is widely used to collect, label and validate training data by decomposing work into microtasks distributed across many contributors. Effective crowdsourcing combines incentive design with qual
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-collection
hasPart:
  - urn:ngm:class:incentive-mechanism
  - urn:ngm:class:quality-control
requires:
  - urn:ngm:class:quality-control
  - urn:ngm:class:reputation-system
enables:
  - urn:ngm:class:training
  - urn:ngm:class:machine-learning-discipline
dependsOn:
  - urn:ngm:class:distributed-computing
contrastsWith:
  - urn:ngm:class:distributed-computing
bridgesTo:
  - urn:ngm:class:collective-intelligence
uses:
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:consensus
supports:
  - urn:ngm:class:data-collection
partOf:
  - urn:ngm:class:data-collection
relatedTo:
  - urn:ngm:class:incentive-mechanism
  - urn:ngm:class:reputation-system
---

# Crowdsourcing

Crowdsourcing is the practice of obtaining contributions, labour or judgements from a large distributed group of people, typically through an open call mediated by an online platform. In machine learning it is widely used to collect, label and validate training data by decomposing work into microtasks distributed across many contributors. Effective crowdsourcing combines incentive design with quality-control mechanisms to aggregate noisy individual inputs into reliable results.
