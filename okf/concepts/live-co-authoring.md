---
okf_version: "0.2"
type: Class
title: Live Co-authoring
resource: urn:ngm:class:live-co-authoring
domain: distributed-collaboration
description: Live Co-authoring is the capability that allows multiple users to edit the same document or artifact concurrently, with changes propagated to all participants in near real time. It relies on conflict-resolution mechanisms such as operational transformation or CRDTs to merge simultaneous edits without data loss. Platforms such as Google Docs, Microsoft 365, and Notion use live co-authoring as their
maturity: established
quality: 0.7
is-a:
  - urn:ngm:class:dc-workspace-tools
enables:
  - urn:ngm:class:shared-cursors
  - urn:ngm:class:document-comments
relatedTo:
  - urn:ngm:class:version-history
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Live Co-authoring

Live Co-authoring is the capability that allows multiple users to edit the same document or artifact concurrently, with changes propagated to all participants in near real time. It relies on conflict-resolution mechanisms such as operational transformation or CRDTs to merge simultaneous edits without data loss. Platforms such as Google Docs, Microsoft 365, and Notion use live co-authoring as their primary collaborative editing model.
