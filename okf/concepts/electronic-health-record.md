---
okf_version: "0.2"
type: Class
title: Electronic Health Record
resource: urn:ngm:class:electronic-health-record
domain: artificial-intelligence
description: "An electronic health record (EHR) is a longitudinal digital record of a patient's health information maintained across care episodes and, increasingly, across providers. It consolidates demographics, diagnoses, medications, results and clinical notes into a structured, queryable store that supports care delivery, decision support and analytics. EHRs depend on interoperability standards and strong "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:healthcare-records
hasPart:
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:audit-trail
requires:
  - urn:ngm:class:interoperability
  - urn:ngm:class:data-privacy
enables:
  - urn:ngm:class:telemedicine
  - urn:ngm:class:clinical-decision-support
dependsOn:
  - urn:ngm:class:privacy-by-design
bridgesTo:
  - urn:ngm:class:telemedicine
uses:
  - urn:ngm:class:hl7-fhir
  - urn:ngm:class:data-interoperability
supports:
  - urn:ngm:class:medical-imaging
standardizedBy:
  - urn:ngm:class:hl7-fhir
  - urn:ngm:class:hipaa
partOf:
  - urn:ngm:class:healthcare-records
relatedTo:
  - urn:ngm:class:hipaa
  - urn:ngm:class:medical-imaging
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Electronic Health Record

An electronic health record (EHR) is a longitudinal digital record of a patient's health information maintained across care episodes and, increasingly, across providers. It consolidates demographics, diagnoses, medications, results and clinical notes into a structured, queryable store that supports care delivery, decision support and analytics. EHRs depend on interoperability standards and strong privacy controls to be shared safely between systems.
