public:: true

# version control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:347eb54edd53901fb327252c8a9f375864431dfa15a1291e88ab1402c2dcc044",
  "@type": "Page",
  "vc:slug": "version-control",
  "title": "version control",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:version-control",
  "@type": "Class",
  "label": "Version Control",
  "definition": "Version control is a methodology and toolset for systematically tracking, managing, and auditing changes to files and artefacts over time, enabling multiple contributors to develop concurrently on isolated branches and integrate their work through well-defined merge strategies. Distributed version control systems such as Git maintain a full directed-acyclic-graph (DAG) history locally on every node, supporting offline operation, cryptographically signed commits, and fine-grained blame and bisect operations. Version control underpins modern software delivery practices including continuous integration, infrastructure-as-code, dataset lineage, and MLOps pipelines by providing immutable, content-addressed snapshots of any evolving asset.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:source-control",
      "label": "Source Control"
    },
    {
      "@id": "urn:ngm:class:revision-control",
      "label": "Revision Control"
    },
    {
      "@id": "urn:ngm:class:scm",
      "label": "Source Code Management"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:git",
        "label": "Git"
      },
      {
        "@id": "urn:ngm:class:commit",
        "label": "Commit"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:code-review",
        "label": "Code Review"
      },
      {
        "@id": "urn:ngm:class:infrastructure-as-code",
        "label": "Infrastructure as Code"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-augmented-software-engineering",
        "label": "AI-Augmented Software Engineering"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      },
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hashing"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:file-system",
        "label": "File System"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-provenance",
        "label": "Data Provenance"
      },
      {
        "@id": "urn:ngm:class:knowledge-management",
        "label": "Knowledge Management"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:data-versioning",
        "label": "Dataset Versioning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Version control is a methodology and toolset for systematically tracking, managing, and auditing changes to files and digital artefacts over time, enabling multiple contributors to develop concurrently on isolated [[Branching Strategy]] branches and integrate their work through well-defined merge strategies. Distributed version control systems such as [[Git]] maintain a complete [[Directed Acyclic Graph]] history locally on every node, supporting offline operation, cryptographically signed commits, and fine-grained blame and bisect operations. Version control underpins modern software delivery practices including [[Continuous Integration]], [[Infrastructure as Code]], [[Dataset Versioning]], and [[MLOps]] pipelines by providing immutable, content-addressed snapshots of any evolving asset.

- ### Overview
  - Version control (also called source control or [[Revision Control]]) is one of the foundational practices of professional software development, solving the problem of managing change across time, teams, and distributed repositories.
  - **Why it matters**
    - Without version control, coordinating parallel contributions from multiple engineers is brittle and error-prone, forcing serialised edits or manual patching. VCS transforms change management into a structured, auditable process.
    - The complete history of every change provides an implicit [[Audit Trail]], enabling forensic investigation of bugs, regulatory compliance, and intellectual-property attribution.
    - Branching and tagging allow teams to maintain multiple stable release lines simultaneously while continuing active development — the foundation of long-term software maintenance.
  - **How it works**
    - A VCS stores a repository: a directed graph of snapshots (commits), each identified by a content-derived cryptographic hash (SHA-256 in modern Git). Each commit records the author, timestamp, commit message, and a pointer to its parent commit(s), forming an immutable chain.
    - Branches are lightweight named references (pointers) to commits, allowing divergent lines of development that can later be merged, rebased, or cherry-picked.
    - Remote repositories (hosted on services such as GitHub, GitLab, or Bitbucket) act as shared synchronisation points; contributors push local commits and pull remote changes, with conflicts resolved through merge or rebase operations.

- ### Key Components
  - **Repository**
    - The primary storage unit — a self-contained directory (`.git/` in Git) holding all object data, references, and configuration. Can be local or hosted on a remote [[Code Hosting Platform]].
  - **Commit**
    - An immutable, content-addressed snapshot of the entire tracked file tree at a point in time. Every commit carries: tree hash, parent hash(es), author metadata, and a free-text message. Git commits are signed with SHA-1 (legacy) or SHA-256.
  - **[[Branching Strategy]]**
    - Branches isolate features, fixes, or experiments from the main line. Common strategies include trunk-based development (short-lived branches merged frequently), GitFlow (long-lived feature and release branches), and GitHub Flow (branch-per-feature with pull request merge gates).
  - **Merge and [[Merge Conflict Resolution]]**
    - Integrating divergent histories produces a merge commit with two or more parents. Three-way merges compare the common ancestor with both branch tips to automatically reconcile non-overlapping changes. Conflicting hunks must be resolved manually.
  - **Rebase**
    - An alternative to merging that replays commits from a branch onto a new base, producing a linear history. Useful for clean, bisectable histories; destructive if applied to shared branches (rewrites SHAs).
  - **Tag**
    - A named, optionally GPG-signed pointer to a specific commit, conventionally used to mark release versions (semantic versioning: `v1.2.3`). Lightweight vs annotated tags differ in metadata depth.
  - **Hook**
    - Scripts executed automatically at lifecycle events (pre-commit, post-merge, pre-push). Used to enforce [[Code Review]] policies, run linters, execute [[Continuous Integration]] gates, or sign commits.
  - **Submodule / Subtree**
    - Mechanisms for embedding one Git repository inside another, enabling modular dependency management. Used extensively in monorepo and multi-component architectures.

- ### Version Control Paradigms
  - **Local VCS**
    - Simple patch-based systems (RCS) storing diffs on a single machine. No collaboration support. Largely obsolete.
  - **Centralised VCS (CVCS)**
    - Single-server model (SVN, CVS, Perforce). All contributors check out from and commit to one canonical server. Simple to administer but creates a single point of failure and requires network access for most operations. See [[Centralised Version Control]].
  - **Distributed VCS (DVCS)**
    - Every clone is a full repository (Git, Mercurial, Darcs). Enables offline work, faster local operations, and more flexible branching. Dominant model in modern software development.
  - **Content-Addressable Storage**
    - Git's object store uses [[Cryptographic Hashing]] (SHA-1 transitioning to SHA-256) to address every object — blobs, trees, commits, and tags — by hash. This guarantees integrity: any corruption changes the hash and breaks the chain.

- ### Applications and Use Cases
  - **Software Development**
    - The canonical use case. Every professional software team uses VCS to coordinate development, enforce quality gates through pull-request workflows, and maintain release history. Open-source projects on GitHub use fork-and-PR workflows enabling thousands of contributors.
  - **[[Infrastructure as Code]]**
    - Terraform, Ansible, Kubernetes manifests, and cloud configuration stored in Git repositories bring infrastructure changes through the same review, rollback, and audit mechanisms as application code. This is the foundation of GitOps.
  - **[[MLOps]] and AI Pipelines**
    - Model training is inherently experimental. [[Dataset Versioning]] tools (DVC, LakeFS, Delta Lake) extend Git semantics to large binary artefacts, enabling reproducible experiments where code, data, and model weights are versioned together. [[Data Lineage]] is preserved across pipeline runs.
  - **Scientific Computing and Research**
    - Computational research workflows (Jupyter notebooks, R scripts, simulation configs) benefit from VCS for reproducibility. Researchers increasingly commit data analysis scripts alongside papers, enabling peer review of methods.
  - **Documentation and Knowledge Management**
    - Technical documentation (Markdown, reStructuredText, LaTeX) stored in Git repositories enables collaborative authoring, change tracking, and automated publishing via CI pipelines. Static site generators consume Git-managed content directly.
  - **3D Content and Digital Assets**
    - In game development and VFX pipelines, VCS tracks scene files, shader code, and configuration. Binary-capable tools (Git LFS, Perforce Helix Core) handle large mesh and texture assets alongside code, supporting multi-discipline team collaboration.
  - **Regulatory and Compliance Contexts**
    - Financial services, healthcare, and aviation software must demonstrate change traceability. Signed commits with GPG keys, combined with mandatory code review histories, provide auditable evidence chains satisfying SOC 2, ISO 27001, and FDA 21 CFR Part 11 requirements.

- ### Relationships
  - hasPart:: [[Git]]
  - hasPart:: [[Branching Strategy]]
  - hasPart:: [[Merge Conflict Resolution]]
  - hasPart:: [[Commit]]
  - enables:: [[Collaboration]]
  - enables:: [[Continuous Integration]]
  - enables:: [[Code Review]]
  - enables:: [[Infrastructure as Code]]
  - supports:: [[AI-Augmented Software Engineering]]
  - supports:: [[MLOps]]
  - supports:: [[DevOps]]
  - requires:: [[Cryptographic Hashing]]
  - requires:: [[Distributed Systems]]
  - dependsOn:: [[File System]]
  - dependsOn:: [[Network Protocol]]
  - relatedTo:: [[Data Provenance]]
  - relatedTo:: [[Knowledge Management]]
  - relatedTo:: [[Code Generation]]
  - relatedTo:: [[Audit Trail]]
  - relatedTo:: [[Dataset Versioning]]
  - contrastsWith:: [[Centralised Version Control]]
  - bridges-to:: [[Data Lineage]]
  - bridges-to:: [[Blockchain]]

- ### Standards and Context
  - **Git** — Created by Linus Torvalds in 2005 for Linux kernel development; now the de-facto standard distributed VCS with near-universal adoption in open-source and enterprise software.
  - **Semantic Versioning (SemVer)** — Convention for tagging release commits as `MAJOR.MINOR.PATCH`, widely adopted as the versioning grammar for [[Open Source Software]] packages and APIs.
  - **OpenSSF Best Practices** — The Open Source Security Foundation recommends signed commits, branch protection rules, and mandatory code review as security hygiene for public repositories.
  - **SLSA (Supply-chain Levels for Software Artefacts)** — A Google-originated framework requiring provenance attestation for build artefacts; version-controlled build definitions are a prerequisite for higher SLSA levels.
  - **GitOps** — An operational model (formalised by Weaveworks) where the desired state of infrastructure and applications is declared in Git; automated operators reconcile live state to match, making VCS the single source of truth for deployments.
  - **RFC 9116 (security.txt)** — Recommends version-controlled security disclosure policies stored in source repositories, illustrating how VCS extends into organisational governance artefacts.
  - **IETF / IEEE** — No single IETF RFC governs Git; the protocol is documented in the Git transfer protocol specification and implemented by libgit2 and JGit. IEEE Std 12207 (software lifecycle processes) implicitly requires change management consistent with VCS practices.

- ### Key Tools and Ecosystem
  - **[[Git]]** — Dominant DVCS; open source; C implementation; ecosystem includes GitHub, GitLab, Gitea, Bitbucket, and Azure DevOps.
  - **Subversion (SVN)** — Leading CVCS; still used in some enterprise and embedded-software contexts where binary asset handling or centralised access control is preferred.
  - **Perforce Helix Core** — Commercial CVCS favoured in game development and automotive industries for handling large binary assets alongside source.
  - **Mercurial (Hg)** — DVCS similar in design to Git; used historically by Mozilla and Facebook; largely superseded by Git in new projects.
  - **DVC (Data Version Control)** — Git extension adding versioned storage of large data files and ML model artefacts in remote object stores (S3, GCS, Azure Blob).
  - **LakeFS** — Git-like branching and committing for data lakes (Parquet, Delta, ORC), enabling zero-copy [[Dataset Versioning]] at petabyte scale.

- ### Provenance
  - sources:: Git Documentation (git-scm.com); Pro Git (Chacon & Straub, CC BY-NC-SA); OpenSSF Best Practices; SLSA Framework; GitOps Principles (OpenGitOps)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
