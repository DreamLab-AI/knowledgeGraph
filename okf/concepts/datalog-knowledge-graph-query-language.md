---
okf_version: "0.2"
type: Class
title: Datalog Knowledge Graph Query Language
resource: urn:ngm:class:datalog-knowledge-graph-query-language
domain: infrastructure
description: Queries, in the Logseq context, are structured Datalog or advanced query expressions embedded in pages using the `#+BEGIN_QUERY` / `#+END_QUERY` syntax. They dynamically retrieve and display blocks or pages matching specified conditions—such as filtering private pages by the absence of a `#Public` tag—without modifying underlying data. In the broader NarrativeGoldmine ontology, Queries represent t
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:data-management
enables:
  - urn:ngm:class:information-retrieval
  - urn:ngm:class:semantic-search
uses:
  - urn:ngm:class:knowledge-graph
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:database-query
  - urn:ngm:class:semantic-web
  - urn:ngm:class:linked-data
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Datalog Knowledge Graph Query Language

Queries, in the Logseq context, are structured Datalog or advanced query expressions embedded in pages using the `#+BEGIN_QUERY` / `#+END_QUERY` syntax. They dynamically retrieve and display blocks or pages matching specified conditions—such as filtering private pages by the absence of a `#Public` tag—without modifying underlying data. In the broader NarrativeGoldmine ontology, Queries represent the retrieval-layer mechanism that surfaces knowledge from the graph at read time.
