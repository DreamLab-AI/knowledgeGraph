---
okf_version: "0.2"
type: Class
title: Root Cause Analysis
resource: urn:ngm:class:root-cause-analysis
domain: infrastructure
description: Root cause analysis (RCA) is a structured problem-solving discipline that identifies the underlying origin of a fault, failure, or incident rather than merely treating its visible symptoms. In infrastructure and reliability engineering it traces a chain of contributing causes back to the conditions that, if corrected, would have prevented the event. RCA produces durable, systemic fixes and feeds l
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:incident-management
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:incident-reporting
  - urn:ngm:class:site-reliability-engineering
contrastsWith:
  - urn:ngm:class:incident-reporting
uses:
  - urn:ngm:class:fault-tree-analysis
  - urn:ngm:class:five-whys
  - urn:ngm:class:audit-trail
  - urn:ngm:class:distributed-tracing
supports:
  - urn:ngm:class:devops
partOf:
  - urn:ngm:class:incident-management
  - urn:ngm:class:post-incident-review
relatedTo:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:real-time-monitoring
  - urn:ngm:class:service-level-objective
---

# Root Cause Analysis

Root cause analysis (RCA) is a structured problem-solving discipline that identifies the underlying origin of a fault, failure, or incident rather than merely treating its visible symptoms. In infrastructure and reliability engineering it traces a chain of contributing causes back to the conditions that, if corrected, would have prevented the event. RCA produces durable, systemic fixes and feeds learning back into operational practice.
