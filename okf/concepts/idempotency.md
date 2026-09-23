---
okf_version: "0.2"
type: Class
title: Idempotency
resource: urn:ngm:class:idempotency
domain: infrastructure
description: Idempotency is the property of an operation whereby applying it multiple times produces the same result as applying it once. In distributed systems and APIs it is essential for safe retries, ensuring that duplicated requests caused by network failures do not corrupt state or cause unintended side effects. Idempotency is commonly enforced via idempotency keys, deterministic merge functions, or natu
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
enables:
  - urn:ngm:class:fault-tolerance
relatedTo:
  - urn:ngm:class:crdt
---

# Idempotency

Idempotency is the property of an operation whereby applying it multiple times produces the same result as applying it once. In distributed systems and APIs it is essential for safe retries, ensuring that duplicated requests caused by network failures do not corrupt state or cause unintended side effects. Idempotency is commonly enforced via idempotency keys, deterministic merge functions, or naturally commutative state updates.
