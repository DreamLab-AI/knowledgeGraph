---
okf_version: "0.2"
type: Class
title: Data Federation
resource: urn:ngm:class:data-federation
domain: data
description: "Data federation is a data integration technique that presents multiple distributed and heterogeneous data sources as a single virtual database queryable in place, without physically moving or copying the data. A federation engine decomposes queries, pushes work to source systems and combines results on the fly. It enables real-time unified access and is a core mechanism behind data virtualization "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:data-virtualization
  - urn:ngm:class:data-integration-interface
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Data Federation

Data federation is a data integration technique that presents multiple distributed and heterogeneous data sources as a single virtual database queryable in place, without physically moving or copying the data. A federation engine decomposes queries, pushes work to source systems and combines results on the fly. It enables real-time unified access and is a core mechanism behind data virtualization and integration interfaces.
