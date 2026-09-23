---
okf_version: "0.2"
type: Class
title: Join-Semilattice
resource: urn:ngm:class:join-semilattice
domain: data
description: A join-semilattice is a partially ordered set in which every pair of elements has a least upper bound (join), making the join operation associative, commutative and idempotent. These algebraic properties guarantee that repeated or reordered merges converge to a unique value. The structure is the mathematical foundation for state-based conflict-free replicated data types.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-data-structure
relatedTo:
  - urn:ngm:class:crdt
---

# Join-Semilattice

A join-semilattice is a partially ordered set in which every pair of elements has a least upper bound (join), making the join operation associative, commutative and idempotent. These algebraic properties guarantee that repeated or reordered merges converge to a unique value. The structure is the mathematical foundation for state-based conflict-free replicated data types.
