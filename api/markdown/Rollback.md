
Rollback is the operation of restoring a system, workspace, or agent to a previously captured good state, discarding the changes made since that point after an error, failed action, or unwanted outcome. It depends on the earlier capture of restorable state — a checkpoint, a snapshot, or a version-control commit — and on the changes since being either reversible or discardable. In autonomous-agent orchestration, rollback lets a supervisor undo a subagent's destructive or incorrect edits and retry from a known-safe baseline, turning risky irreversible automation into a recoverable, bounded-blast-radius process.

- ### In Plain Terms
  - Rollback is the undo button for a system: when something goes wrong, you throw away everything done since a saved-good point and go back to it, so a mistake does not become permanent.

- ### Semantic Classification

- ### Content

  ## Definition

  **Rollback** is the act of reverting a system to a known-good earlier state and discarding the work performed since that state was captured. It is a fundamental recovery primitive: databases roll back aborted transactions, deployment systems roll back to the previous release when a new one fails its health checks, and version-controlled workspaces roll back to a prior commit when an edit proves wrong. In every case the mechanics rest on two preconditions — that a restorable prior state exists, and that the intervening changes can be either reversed or thrown away without corrupting the system.

  In agent orchestration rollback has become a first-class safety mechanism. Autonomous agents take irreversible-looking actions — editing files, mutating databases, running commands — and they sometimes get them wrong. Wrapping that work so that a checkpoint is taken before a risky step, and rolling back to it on failure, converts an otherwise brittle automation into one with a bounded blast radius: a supervisor can let a subagent attempt a task, verify the result, and cleanly discard the attempt if it is unacceptable, then retry with a revised plan.

  ## Mechanisms

  - **Checkpoint-and-restore.** Capture a snapshot of relevant state before a change; on failure, restore it. This is the direct relationship to [[Checkpointing]] and [[CheckpointRecovery]].
  - **Version-control revert.** For file-based work, a commit before the change gives a precise, inspectable point to return to, and the revert is a git operation rather than a bespoke snapshot. This is why durable rollback in code agents [[requires]] [[VersionControl]].
  - **Compensating actions.** Where state cannot be snapshotted (an external side effect such as an email or payment), rollback is approximated by running an inverse action that compensates for the original — the saga pattern in distributed systems.
  - **Transactional boundaries.** Grouping several changes into an all-or-nothing unit means a rollback restores a consistent state rather than a half-applied one.

  ## Rollback in Practice

  Effective rollback is defined as much by what it protects as by how it reverts. A good design keeps the window small (frequent checkpoints reduce lost work), makes the safe baseline explicit and verifiable, and distinguishes reversible operations from genuinely irreversible ones so the latter can be gated behind human approval. As a component of [[FaultTolerance]], rollback is the counterpart to forward recovery: rather than trying to repair a broken state in place, it returns to a state already known to be sound.

