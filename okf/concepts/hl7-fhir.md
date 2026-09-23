---
okf_version: "0.2"
type: Class
title: HL7 FHIR
resource: urn:ngm:class:hl7-fhir
domain: artificial-intelligence
description: HL7 FHIR (Fast Healthcare Interoperability Resources) is a standard developed by Health Level Seven International for the electronic exchange of healthcare information. It models clinical and administrative data as modular Resources accessed through a RESTful API using JSON or XML representations, combining a defined data model with web-native interaction. It has become the dominant modern standar
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:interoperability
requires:
  - urn:ngm:class:rest-api
enables:
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:data-exchange
  - urn:ngm:class:healthcare-technology
dependsOn:
  - urn:ngm:class:interoperability
implements:
  - urn:ngm:class:interoperability
bridgesTo:
  - urn:ngm:class:rest-api
uses:
  - urn:ngm:class:rest-api
  - urn:ngm:class:xml
supports:
  - urn:ngm:class:healthcare-records
  - urn:ngm:class:electronic-health-record
standardizedBy:
  - urn:ngm:class:semantic-interoperability
relatedTo:
  - urn:ngm:class:healthcare-technology
  - urn:ngm:class:semantic-interoperability
  - urn:ngm:class:healthcare-records
---

# HL7 FHIR

HL7 FHIR (Fast Healthcare Interoperability Resources) is a standard developed by Health Level Seven International for the electronic exchange of healthcare information. It models clinical and administrative data as modular Resources accessed through a RESTful API using JSON or XML representations, combining a defined data model with web-native interaction. It has become the dominant modern standard for healthcare interoperability, enabling exchange between electronic health records, apps and analytics systems.
