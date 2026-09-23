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
---

# Live Co-authoring

Live Co-authoring is the capability that allows multiple users to edit the same document or artifact concurrently, with changes propagated to all participants in near real time. It relies on conflict-resolution mechanisms such as operational transformation or CRDTs to merge simultaneous edits without data loss. Platforms such as Google Docs, Microsoft 365, and Notion use live co-authoring as their primary collaborative editing model.
