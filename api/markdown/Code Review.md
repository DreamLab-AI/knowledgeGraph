public:: true

# Code Review
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fc7e4360ef4a816d38ac6ee676f5dd3ab7736a5f43c4e1de94a763f4d24c417c",
  "@type": "Page",
  "vc:slug": "code-review",
  "title": "Code Review",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:version-control",
      "vc:label": "Version Control"
    },
    {
      "@id": "urn:visionflow:linked:software-development",
      "vc:label": "Software Development"
    },
    {
      "@id": "urn:visionflow:linked:software-testing",
      "vc:label": "Software Testing"
    },
    {
      "@id": "urn:visionflow:linked:software-engineering",
      "vc:label": "Software Engineering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Code Review"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:code-review",
  "@type": "Class",
  "label": "Code Review",
  "definition": "Code review is the systematic, human-led examination of proposed source code changes by one or more reviewers other than the original author, intended to detect defects, enforce coding standards, and disseminate architectural knowledge across a development team. It is most commonly performed asynchronously via pull requests or merge requests in version-controlled repositories, augmented by automated static analysis, linting, and continuous integration checks. Effective code review functions as both a quality gate and a collaborative learning mechanism, reducing the cost of defects by catching them before integration into the main codebase. It is a foundational practice in professional software engineering, distributed-collaboration workflows, and secure development lifecycles.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:pull-request",
        "label": "Pull Request"
      },
      {
        "@id": "urn:ngm:class:coding-standards",
        "label": "Coding Standards"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:software-quality-assurance",
        "label": "Software Quality Assurance"
      },
      {
        "@id": "urn:ngm:class:knowledge-sharing",
        "label": "Knowledge Sharing"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:secure-development-lifecycle",
        "label": "Secure Development Lifecycle"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:software-development",
        "label": "Software Development"
      },
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:static-analysis",
        "label": "Static Analysis"
      },
      {
        "@id": "urn:ngm:class:diff-algorithm",
        "label": "Diff Algorithm"
      },
      {
        "@id": "urn:ngm:class:inline-commenting",
        "label": "Inline Commenting"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:pair-programming",
        "label": "Pair Programming"
      },
      {
        "@id": "urn:ngm:class:formal-inspection",
        "label": "Formal Inspection"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:software-testing",
        "label": "Software Testing"
      },
      {
        "@id": "urn:ngm:class:technical-debt-management",
        "label": "Technical Debt Management"
      },
      {
        "@id": "urn:ngm:class:code-maintainability",
        "label": "Code Maintainability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:collaborative-workflow",
        "label": "Collaborative Workflow"
      },
      {
        "@id": "urn:ngm:class:source-code-management",
        "label": "Source Code Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agile-development",
        "label": "Agile Development"
      },
      {
        "@id": "urn:ngm:class:open-source-development",
        "label": "Open Source Development"
      },
      {
        "@id": "urn:ngm:class:refactoring",
        "label": "Refactoring"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:automated-code-review",
        "label": "Automated Code Review"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:peer-code-review",
      "label": "Peer Code Review"
    },
    {
      "@id": "urn:ngm:class:code-inspection",
      "label": "Code Inspection"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:code-review:717d32bb32db",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fc7e4360ef4a816d38ac6ee676f5dd3ab7736a5f43c4e1de94a763f4d24c417c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Version Control]]",
      "resolved": "urn:visionflow:linked:version-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Development]]",
      "resolved": "urn:visionflow:linked:software-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Testing]]",
      "resolved": "urn:visionflow:linked:software-testing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Engineering]]",
      "resolved": "urn:visionflow:linked:software-engineering",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Code review is the systematic, human-led examination of proposed source code changes by one or more peers other than the original author, intended to detect defects, enforce [[Coding Standards]], and disseminate architectural knowledge across a team. It sits at the intersection of [[Software Quality Assurance]], [[Knowledge Sharing]], and [[Collaborative Workflow]], and forms a foundational practice within both [[Software Engineering]] and [[DevOps]] pipelines. Modern code review is most commonly performed asynchronously via [[Pull Request]] mechanisms in [[Version Control]] platforms such as GitHub, GitLab, and Bitbucket, augmented by [[Static Analysis]], linting, and [[Continuous Integration]] automation.

- ### Overview
  - Code review emerged from formal inspection techniques developed in the 1970s (Fagan inspections) and has since evolved into a lightweight, tool-assisted, asynchronous practice that is near-universal in professional [[Software Development]].
  - The central value proposition is asymmetric: a reviewer with fresh context finds defects that the original author — who carries too much implicit knowledge — will miss. The earlier a defect is caught, the cheaper it is to fix.
  - Modern platforms surface diffs, allow inline comments, enforce approval workflows, and integrate status checks from [[Continuous Integration]] pipelines, making review a natural checkpoint before code reaches the main branch.
  - Beyond defect detection, review acts as a real-time [[Knowledge Sharing]] mechanism, normalises [[Code Maintainability]] expectations, and surfaces design concerns that tests cannot catch.
  - AI-assisted review tools (LLM-backed bots, [[Automated Code Review]]) are increasingly integrated into pull request workflows, using [[Large Language Model]] capabilities to flag style violations, security issues, and logic errors at scale.

- ### Key Components
  - **Review trigger** — typically a [[Pull Request]] or merge request opened against a target branch in a [[Source Code Management]] platform.
  - **Diff view** — the visual rendering of changes, powered by [[Diff Algorithm]] logic, that allows reviewers to navigate additions, deletions, and context lines efficiently.
  - **Inline commenting** — [[Inline Commenting]] on specific lines or hunks allows reviewers to attach feedback directly to the relevant change rather than in a separate document.
  - **Approval workflow** — a gating mechanism requiring a minimum number of approvals (e.g. CODEOWNERS rules in GitHub) before the [[Pull Request]] may be merged.
  - **Reviewer assignment** — manual or automated selection of reviewers based on file ownership, domain expertise, or round-robin rotation policies.
  - **Checklists and templates** — structured prompts (pull request description templates, review checklists) that standardise what reviewers look for, covering correctness, security, performance, and adherence to [[Coding Standards]].
  - **Automated pre-checks** — [[Static Analysis]], linting, type-checking, unit test execution, and security scanning run via [[Continuous Integration]] before or alongside human review.
  - **Resolution tracking** — mechanisms to mark comments as resolved, request changes, or dismiss stale reviews, maintaining a clear audit trail.

- ### Mechanisms
  - **Asynchronous review** — reviewers read and comment in their own time, enabling distributed teams across time zones to collaborate without synchronous scheduling.
  - **Synchronous / pair review** — a reviewer walks through the diff together with the author in real time; this overlaps with [[Pair Programming]] and is faster for complex or high-risk changes.
  - **Tool-assisted review** — [[Static Analysis]] tools (SonarQube, ESLint, Semgrep) generate automated comments, reducing reviewer burden for mechanical concerns and freeing humans for design and logic review.
  - **LLM-assisted review** — [[Large Language Model]] integrations (GitHub Copilot review, CodeRabbit, Sourcegraph Cody) provide natural-language summaries, flag potential bugs, and suggest alternative implementations, complementing human judgement.
  - **Over-the-shoulder review** — lightweight informal review where one developer watches another make a change; common in small teams or for low-risk patches.
  - **Fagan inspection** — a heavyweight [[Formal Inspection]] technique with defined roles (author, moderator, reader, recorder, inspector), entry/exit criteria, and defect logging; the historical ancestor of modern lightweight review.

- ### Applications / Use Cases
  - **Open source contribution pipelines** — [[Open Source Development]] projects such as the Linux kernel, CPython, and major npm packages use review workflows to gatekeep contributions from external contributors and maintain quality without direct employment relationships.
  - **Enterprise feature development** — large organisations use review workflows tied to [[Agile Development]] sprints; PRs map to user stories and are reviewed by teammates before sprint close.
  - **Security-critical systems** — in the [[Secure Development Lifecycle]] (SDL / OWASP SAMM), mandatory review by a security engineer is a control for classes of vulnerability (injection, authentication flaws, cryptographic misuse).
  - **Regulatory compliance** — financial and healthcare software subject to SOX, PCI-DSS, or ISO 13485 uses code review audit trails as evidence of change control and separation of duties.
  - **Onboarding acceleration** — new engineers receive review feedback that rapidly transfers project-specific conventions and accelerates ramp-up, acting as structured [[Knowledge Sharing]].
  - **[[Technical Debt Management]]** — review gates prevent addition of quick-fix shortcuts that compound over time; reviewers can flag [[Refactoring]] opportunities before patterns harden.
  - **AI model training pipelines** — ML engineering teams apply code review to data preprocessing scripts, model training code, and evaluation harnesses to prevent data leakage and reproducibility failures.
  - **Infrastructure-as-code** — [[DevOps]] teams review Terraform, Helm charts, and Kubernetes manifests through the same pull request workflow used for application code, treating infrastructure changes with the same quality discipline.

- ### Relationships
  - subClassOf:: [[Software Engineering]]
  - partOf:: [[Software Development]]
  - partOf:: [[DevOps]]
  - requires:: [[Version Control]]
  - requires:: [[Pull Request]]
  - requires:: [[Coding Standards]]
  - enables:: [[Software Quality Assurance]]
  - enables:: [[Knowledge Sharing]]
  - enables:: [[Continuous Integration]]
  - enables:: [[Secure Development Lifecycle]]
  - uses:: [[Static Analysis]]
  - uses:: [[Diff Algorithm]]
  - uses:: [[Inline Commenting]]
  - supports:: [[Software Testing]]
  - supports:: [[Technical Debt Management]]
  - supports:: [[Code Maintainability]]
  - dependsOn:: [[Collaborative Workflow]]
  - dependsOn:: [[Source Code Management]]
  - contrastsWith:: [[Pair Programming]]
  - contrastsWith:: [[Formal Inspection]]
  - relatedTo:: [[Agile Development]]
  - relatedTo:: [[Open Source Development]]
  - relatedTo:: [[Refactoring]]
  - bridges-to:: [[Automated Code Review]]
  - bridges-to:: [[Large Language Model]]

- ### Standards & Context
  - **OWASP SAMM (Software Assurance Maturity Model)** — defines code review as a core security practice within the Verification function; maturity levels span ad-hoc review to security-specialist mandatory review.
  - **ISO/IEC 12207** — the software lifecycle standard that frames verification and validation activities, within which peer review is a recognised technique.
  - **NIST SP 800-218 (SSDF)** — the Secure Software Development Framework identifies review of code for security vulnerabilities as a required practice (PW.2).
  - **Google Engineering Practices** — Google's publicly documented code review guidelines cover review speed norms, reviewer responsibilities, and the principle that any reviewer can approve any change but domain owners must be consulted for architectural decisions.
  - **Conventional Commits / Semantic PR titles** — many teams enforce structured commit and PR title conventions (enforced via [[Continuous Integration]] checks) to make code review history navigable and to automate [[Changelog]] generation.
  - **CODEOWNERS** — a GitHub/GitLab convention that maps file paths to mandatory reviewers, automating reviewer assignment and enforcing ownership policies.
  - **Branch protection rules** — platform-level enforcement (requiring review approvals, passing [[Continuous Integration]] checks, no force-pushes) that makes the code review gate technically mandatory rather than merely procedural.

- ### Provenance
  - sources:: Google Engineering Practices documentation; OWASP SAMM v2; NIST SP 800-218; Fagan (1976) "Design and Code Inspections to Reduce Errors in Program Development"; SmartBear "State of Code Review" industry surveys
  - updated:: 2026-06-13
