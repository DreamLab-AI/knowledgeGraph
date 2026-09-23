---
okf_version: "0.2"
type: Class
title: Onem2M
resource: urn:ngm:class:oneM2M
domain: infrastructure
description: oneM2M is a global standards initiative that defines a common service layer for machine-to-machine and Internet of Things communication, enabling interoperable connection of devices, applications, and platforms across vertical industries. Developed by a partnership of regional standards bodies including ETSI, it specifies a horizontal middleware exposing reusable capabilities such as data manageme
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:io-t-infrastructure
hasPart:
  - urn:ngm:class:service-layer
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:io-t
implements:
  - urn:ngm:class:service-layer
uses:
  - urn:ngm:class:rest
  - urn:ngm:class:co-ap
  - urn:ngm:class:mqtt
supports:
  - urn:ngm:class:smart-city
  - urn:ngm:class:io-t
standardizedBy:
  - urn:ngm:class:etsi
partOf:
  - urn:ngm:class:io-t-infrastructure
relatedTo:
  - urn:ngm:class:standards
  - urn:ngm:class:interoperability
---

# Onem2M

oneM2M is a global standards initiative that defines a common service layer for machine-to-machine and Internet of Things communication, enabling interoperable connection of devices, applications, and platforms across vertical industries. Developed by a partnership of regional standards bodies including ETSI, it specifies a horizontal middleware exposing reusable capabilities such as data management, device management, security, and discovery through a RESTful resource model. By abstracting these common functions, oneM2M reduces fragmentation and lets IoT solutions span domains like smart cities, transport, and energy.
