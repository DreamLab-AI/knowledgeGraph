public:: true

# Commit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9505cacb7c710ed17125fcc6cb3669e8ddca6c8cd8af6a31f6b3cd64604c3098",
  "@type": "Page",
  "vc:slug": "commit",
  "title": "Commit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:version-control", "vc:label": "Version Control"},
    {"@id": "urn:visionflow:linked:git", "vc:label": "Git"},
    {"@id": "urn:visionflow:linked:cryptographic-hash", "vc:label": "Cryptographic Hash"},
    {"@id": "urn:visionflow:linked:directed-acyclic-graph", "vc:label": "Directed Acyclic Graph"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:commit",
  "@type": "Class",
  "label": "Commit",
  "definition": "The atomic unit of change in a version control system: an immutable, uniquely identified snapshot of a project's tracked content together with metadata — author, timestamp, descriptive message, and references to one or more parent commits — so that the full set of commits forms a directed acyclic graph recording the project's history; in Git each commit is content-addressed by a cryptographic hash of its tree and parents, making history tamper-evident and enabling branching, merging, reverting, and precise attribution of every line of a codebase.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:data-structure",
    "label": "Data Structure"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:git", "label": "Git"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"},
      {"@id": "urn:ngm:class:directed-acyclic-graph", "label": "Directed Acyclic Graph"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The atomic unit of change in a version control system: an immutable, uniquely identified snapshot of a project's tracked content together with metadata — author, timestamp, descriptive message, and references to one or more parent commits — so that the full set of commits forms a directed acyclic graph recording the project's history; in Git each commit is content-addressed by a cryptographic hash of its tree and parents, making history tamper-evident and enabling branching, merging, reverting, and precise attribution of every line of a codebase."

- ### Semantic Classification
  - owl-class:: infrastructure:Commit
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Data Structure]]
  - part-of:: [[Version Control]], [[Git]]
  - uses:: [[Cryptographic Hash]], [[Directed Acyclic Graph]]

- ### Content

  ## Definition

  A **commit** is the fundamental record of [[Version Control]]: a durable, addressable snapshot of a project at a moment in time, bound to metadata describing who made the change, when, and why. Everything else a version control system offers — branches, merges, diffs, blame, bisection, reverts, pull requests — is derived structure over the set of commits and the parent links between them.

  In [[Git]], a commit object contains a pointer to a *tree* (the recursive snapshot of directories and file contents, each stored as a content-addressed blob), zero or more parent commit identifiers, author and committer identities with timestamps, and the commit message. The commit's own identifier is a [[Cryptographic Hash]] (SHA-1, migrating to SHA-256) over exactly this content. Because parents are included in the hash, commits chain into a Merkle structure: altering any historical commit changes its hash and every descendant's, so history is tamper-evident and two repositories can verify they share identical history by comparing single identifiers.

  The parent links make the whole history a [[Directed Acyclic Graph]]. Linear development produces a chain; branching produces divergence; a merge commit, with two or more parents, joins lines of work back together. This DAG is what enables distributed collaboration — every clone holds the full graph, and synchronisation is exchange of missing nodes — and what tools like `git bisect` (binary search over the graph for a regression) and `git blame` (per-line attribution) traverse.

  ## Technical Details

  - **Anatomy (Git)**: `commit → tree → {blobs, subtrees}`, plus `parent*`, `author`, `committer`, message; inspectable with `git cat-file -p <hash>`.
  - **Content addressing**: identical content always yields identical object identifiers, deduplicating storage and making integrity checking free; the scheme is shared with Merkle-tree systems such as blockchains and IPFS, which independently rediscovered the same construction.
  - **Immutability in practice**: commits are never edited — "amending" or rebasing writes new commits and moves branch pointers; unreachable commits are eventually garbage-collected. Signed commits (GPG/SSH) add cryptographic attribution on top of integrity.
  - **Craft conventions**: atomic commits (one logical change), imperative-mood messages with explanatory bodies, and machine-readable schemes such as Conventional Commits (`feat:`, `fix:`) that drive changelog and semantic-version automation; commit granularity and hygiene are what make review, bisection, and revert practical on large codebases.
  - **Beyond code**: the commit model now versions infrastructure definitions, documents, datasets (DVC, LakeFS), and machine-learning experiments — anywhere an auditable, revertible history of snapshots is worth its storage cost.

  ## Current Landscape

  - **SHA-256 transition accelerating**: Git's SHA-256 object format, introduced experimentally in 2.29 (October 2020) and de-flagged as experimental in Git 2.42 (2023), gained substantial transport-layer and verification plumbing in Git 2.51 (August 2025), including gitk and git-gui support; builds with `WITH_BREAKING_CHANGES` now default new repositories to SHA-256.
  - **Git 3.0 targeted for late 2026**: the project plans to flip the default hash for new repositories from SHA-1 to SHA-256 at the 3.0 boundary, alongside a production-ready reftable reference backend; existing SHA-1 repositories will continue to work.
  - **Interoperability design**: SHA-256 repositories can carry a `compatObjectFormat = sha1` bidirectional object-name mapping, letting users address objects by either identifier and allowing lossless conversion; a `gpgsig-sha256` commit field permits signing in either or both algorithms.
  - **Ecosystem is the bottleneck**: as of early 2026, GitHub and Bitbucket do not host SHA-256 repositories; GitLab's Gitaly and Forgejo support them, with go-git and libgit2 experimental — the chief reason SHA-1 remains the practical default.
  - **Commit conventions industrialised**: Conventional Commits-style machine-readable messages remain the basis of automated changelog and semantic-versioning pipelines, and commit signing (GPG/SSH, plus Sigstore's gitsign) is increasingly enforced by organisational policy for supply-chain attribution.

  **Sources**:
  - https://git-scm.com/docs/hash-function-transition
  - https://www.helpnetsecurity.com/2025/08/19/git-2-51-sha-256/
  - https://www.deployhq.com/blog/git-3-0-on-the-horizon-what-git-users-need-to-know-about-the-next-major-release
  - https://about.gitlab.com/blog/sha256-support-in-gitaly/
