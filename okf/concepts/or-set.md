---
okf_version: "0.2"
type: Class
title: OR-Set
resource: urn:ngm:class:or-set
domain: data
description: An OR-Set (Observed-Remove Set) is a conflict-free replicated data type (CRDT) that supports concurrent add and remove operations on a set while guaranteeing eventual consistency across replicas. Each added element is tagged with a unique identifier so that concurrent adds and removes resolve deterministically, with adds winning over concurrent removes of unobserved tags. It is a foundational stru
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-data-structure
relatedTo:
  - urn:ngm:class:crdt
  - urn:ngm:class:collaborative-systems-modality-whiteboard
---

# OR-Set

An OR-Set (Observed-Remove Set) is a conflict-free replicated data type (CRDT) that supports concurrent add and remove operations on a set while guaranteeing eventual consistency across replicas. Each added element is tagged with a unique identifier so that concurrent adds and removes resolve deterministically, with adds winning over concurrent removes of unobserved tags. It is a foundational structure for collaborative applications that must merge edits without central coordination.
