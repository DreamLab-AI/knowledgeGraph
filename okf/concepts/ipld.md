---
okf_version: "0.2"
type: Class
title: IPLD
resource: urn:ngm:class:ipld
domain: infrastructure
description: IPLD (InterPlanetary Linked Data) is a data model and set of specifications for building content-addressed, hash-linked data structures that interoperate across distributed systems. It defines how to represent linked data as directed acyclic graphs whose edges are content identifiers (CIDs), allowing any hash-linked structure — Git commits, blockchain blocks, IPFS files — to be traversed through a
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:content-addressing
enables:
  - urn:ngm:class:data-availability
uses:
  - urn:ngm:class:merkle-dag
  - urn:ngm:class:merkle-tree
relatedTo:
  - urn:ngm:class:ipfs
  - urn:ngm:class:linked-data
---

# IPLD

IPLD (InterPlanetary Linked Data) is a data model and set of specifications for building content-addressed, hash-linked data structures that interoperate across distributed systems. It defines how to represent linked data as directed acyclic graphs whose edges are content identifiers (CIDs), allowing any hash-linked structure — Git commits, blockchain blocks, IPFS files — to be traversed through a common addressing scheme. IPLD provides the data layer beneath IPFS and Filecoin, decoupling the logical structure of data from the protocol used to store or transport it.
