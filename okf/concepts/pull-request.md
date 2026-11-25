---
okf_version: "0.2"
type: Class
title: Pull Request
resource: urn:ngm:class:pull-request
domain: distributed-collaboration
description: A pull request is a proposal to merge a set of changes from one branch into another, packaged so that collaborators can review, discuss, and verify the work before it is integrated. It bundles a diff, a description, and a thread of review comments, and typically triggers automated checks that must pass before merge. Pull requests are the central unit of collaboration in distributed version control
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:code-review
hasPart:
  - urn:ngm:class:commit
  - urn:ngm:class:peer-review
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:git
enables:
  - urn:ngm:class:collaboration
  - urn:ngm:class:quality-assurance
uses:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:code-review
supports:
  - urn:ngm:class:workflow-automation
  - urn:ngm:class:audit
partOf:
  - urn:ngm:class:software-development
relatedTo:
  - urn:ngm:class:git
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:peer-review
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Pull Request

A pull request is a proposal to merge a set of changes from one branch into another, packaged so that collaborators can review, discuss, and verify the work before it is integrated. It bundles a diff, a description, and a thread of review comments, and typically triggers automated checks that must pass before merge. Pull requests are the central unit of collaboration in distributed version control workflows, making change proposals visible, reviewable, and auditable.
