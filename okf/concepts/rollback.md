---
okf_version: "0.2"
type: Class
title: Rollback
resource: urn:ngm:class:rollback
domain: infrastructure
description: "Rollback is the operation of restoring a system, workspace, or agent to a previously captured good state, discarding the changes made since that point after an error, failed action, or unwanted outcome. It depends on the earlier capture of restorable state — a checkpoint, a snapshot, or a version-control commit — and on the changes since being either reversible or discardable. In autonomous-agent "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:error-recovery
  - urn:ngm:class:errorrecovery
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:versioncontrol
uses:
  - urn:ngm:class:checkpointing
partOf:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:fault-tolerance
relatedTo:
  - urn:ngm:class:checkpoint-recovery
  - urn:ngm:class:checkpointrecovery
---

# Rollback

Rollback is the operation of restoring a system, workspace, or agent to a previously captured good state, discarding the changes made since that point after an error, failed action, or unwanted outcome. It depends on the earlier capture of restorable state — a checkpoint, a snapshot, or a version-control commit — and on the changes since being either reversible or discardable. In autonomous-agent orchestration, rollback lets a supervisor undo a subagent's destructive or incorrect edits and retry from a known-safe baseline, turning risky irreversible automation into a recoverable, bounded-blast-radius process.
