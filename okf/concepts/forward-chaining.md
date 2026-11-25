---
okf_version: "0.2"
type: Class
title: Forward Chaining
resource: urn:ngm:class:forward-chaining
domain: artificial-intelligence
description: A data-driven inference strategy for rule-based systems that starts from known facts and repeatedly applies rules whose conditions are satisfied, asserting their conclusions as new facts until no further rules fire or a goal is derived. Formalised as repeated application of modus ponens over a working memory, it is the recognise-act cycle at the heart of production systems, complete for definite-c
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:inference
contrastsWith:
  - urn:ngm:class:backward-chaining
uses:
  - urn:ngm:class:knowledge-representation
partOf:
  - urn:ngm:class:rule-based-systems
relatedTo:
  - urn:ngm:class:expert-systems
  - urn:ngm:class:inference-engine
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Forward Chaining

A data-driven inference strategy for rule-based systems that starts from known facts and repeatedly applies rules whose conditions are satisfied, asserting their conclusions as new facts until no further rules fire or a goal is derived. Formalised as repeated application of modus ponens over a working memory, it is the recognise-act cycle at the heart of production systems, complete for definite-clause knowledge bases, and efficiently implemented by pattern-matching algorithms such as Rete.
