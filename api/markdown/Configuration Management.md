public:: true

# Configuration Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:configuration-management",
  "@type": "Page",
  "title": "Configuration Management",
  "vc:slug": "configuration-management",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:software-engineering", "vc:label": "Software Engineering"},
    {"@id": "urn:visionflow:linked:version-control", "vc:label": "Version Control"},
    {"@id": "urn:visionflow:linked:change-management", "vc:label": "Change Management"},
    {"@id": "urn:visionflow:linked:devops", "vc:label": "DevOps"},
    {"@id": "urn:visionflow:linked:continuous-integration", "vc:label": "Continuous Integration"},
    {"@id": "urn:visionflow:linked:infrastructure-as-code", "vc:label": "Infrastructure as Code"},
    {"@id": "urn:visionflow:linked:quality-assurance", "vc:label": "Quality Assurance"},
    {"@id": "urn:visionflow:linked:audit", "vc:label": "Audit"},
    {"@id": "urn:visionflow:linked:testing", "vc:label": "Testing"},
    {"@id": "urn:visionflow:linked:gitops", "vc:label": "GitOps"},
    {"@id": "urn:visionflow:linked:terraform", "vc:label": "Terraform"},
    {"@id": "urn:visionflow:linked:ansible", "vc:label": "Ansible"},
    {"@id": "urn:visionflow:linked:kubernetes", "vc:label": "Kubernetes"},
    {"@id": "urn:visionflow:linked:continuous-delivery", "vc:label": "Continuous Delivery"},
    {"@id": "urn:visionflow:linked:continuous-deployment", "vc:label": "Continuous Deployment"},
    {"@id": "urn:visionflow:linked:mlops", "vc:label": "MLOps"},
    {"@id": "urn:visionflow:linked:reproducibility", "vc:label": "Reproducibility"},
    {"@id": "urn:visionflow:linked:immutable-infrastructure", "vc:label": "Immutable Infrastructure"},
    {"@id": "urn:visionflow:linked:idempotency", "vc:label": "Idempotency"},
    {"@id": "urn:visionflow:linked:cloud-computing", "vc:label": "Cloud Computing"},
    {"@id": "urn:visionflow:linked:containerisation", "vc:label": "Containerisation"},
    {"@id": "urn:visionflow:linked:platform-engineering", "vc:label": "Platform Engineering"},
    {"@id": "urn:visionflow:linked:site-reliability-engineering", "vc:label": "Site Reliability Engineering"},
    {"@id": "urn:visionflow:linked:security-scanning", "vc:label": "Security Scanning"},
    {"@id": "urn:visionflow:linked:compliance", "vc:label": "Compliance"},
    {"@id": "urn:visionflow:linked:build-automation", "vc:label": "Build Automation"},
    {"@id": "urn:visionflow:linked:automated-testing", "vc:label": "Automated Testing"},
    {"@id": "urn:visionflow:linked:incident-response", "vc:label": "Incident Response"},
    {"@id": "urn:visionflow:linked:observability", "vc:label": "Observability"},
    {"@id": "urn:visionflow:linked:agile-software-development", "vc:label": "Agile Software Development"},
    {"@id": "urn:visionflow:linked:data-versioning", "vc:label": "Data Versioning"},
    {"@id": "urn:visionflow:linked:microservices", "vc:label": "Microservices"},
    {"@id": "urn:visionflow:linked:cloud-native", "vc:label": "Cloud Native"},
    {"@id": "urn:visionflow:linked:devsecops", "vc:label": "DevSecOps"},
    {"@id": "urn:visionflow:linked:docker", "vc:label": "Docker"},
    {"@id": "urn:visionflow:linked:software-delivery-lifecycle", "vc:label": "Software Delivery Lifecycle"},
    {"@id": "urn:visionflow:linked:disaster-recovery", "vc:label": "Disaster Recovery"},
    {"@id": "urn:visionflow:linked:automation", "vc:label": "Automation"},
    {"@id": "urn:visionflow:linked:policy-as-code", "vc:label": "Policy as Code"},
    {"@id": "urn:visionflow:linked:open-tofu", "vc:label": "OpenTofu"}
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:configuration-management",
  "@type": "Class",
  "label": "Configuration Management",
  "definition": "Configuration management is the engineering discipline of systematically establishing, recording, and maintaining the desired state of a system's components, settings, and dependencies throughout its lifecycle. It ensures that environments are reproducible and consistent by treating configuration as versioned, auditable artefacts rather than ad hoc manual changes. In modern practice it underpins infrastructure-as-code and continuous delivery, using declarative tools to converge machines and services to a defined state and to track every change for traceability and rollback.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:change-management",
        "label": "Change Management"
      },
      {
        "@id": "urn:ngm:class:configuration-management-database",
        "label": "Configuration Management Database"
      },
      {
        "@id": "urn:ngm:class:configuration-item",
        "label": "Configuration Item"
      },
      {
        "@id": "urn:ngm:class:baseline",
        "label": "Baseline"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:idempotency",
        "label": "Idempotency"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      },
      {
        "@id": "urn:ngm:class:disaster-recovery",
        "label": "Disaster Recovery"
      },
      {
        "@id": "urn:ngm:class:continuous-delivery",
        "label": "Continuous Delivery"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:quality-assurance",
        "label": "Quality Assurance"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:ansible",
        "label": "Ansible"
      },
      {
        "@id": "urn:ngm:class:terraform",
        "label": "Terraform"
      },
      {
        "@id": "urn:ngm:class:gitops",
        "label": "GitOps"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:change-management",
        "label": "Change Management"
      },
      {
        "@id": "urn:ngm:class:policy-as-code",
        "label": "Policy as Code"
      },
      {
        "@id": "urn:ngm:class:immutable-infrastructure",
        "label": "Immutable Infrastructure"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:software-engineering",
        "label": "Software Engineering"
      },
      {
        "@id": "urn:ngm:class:automation",
        "label": "Automation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      },
      {
        "@id": "urn:ngm:class:testing",
        "label": "Testing"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      },
      {
        "@id": "urn:ngm:class:site-reliability-engineering",
        "label": "Site Reliability Engineering"
      },
      {
        "@id": "urn:ngm:class:devsecops",
        "label": "DevSecOps"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:infrastructure-as-code",
        "label": "Infrastructure as Code"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:manual-administration",
        "label": "Manual Administration"
      }
    ]
  },
  "quality": 0.90,
  "provenance": {
    "attributedTo": "did:nostr:enrichment-swarm",
    "generatedAt": "2026-06-21T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:configuration-management:b7e3c291df40",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {"@id": "urn:visionflow:page:configuration-management"},
  "vc:resolutions": [
    {"raw": "[[Software Engineering]]", "resolved": "urn:ngm:class:software-engineering", "kind": "ResolvedLink"},
    {"raw": "[[Version Control]]", "resolved": "urn:ngm:class:version-control", "kind": "ResolvedLink"},
    {"raw": "[[Change Management]]", "resolved": "urn:ngm:class:change-management", "kind": "ResolvedLink"},
    {"raw": "[[DevOps]]", "resolved": "urn:ngm:class:devops", "kind": "ResolvedLink"},
    {"raw": "[[Continuous Integration]]", "resolved": "urn:ngm:class:continuous-integration", "kind": "ResolvedLink"},
    {"raw": "[[Infrastructure as Code]]", "resolved": "urn:ngm:class:infrastructure-as-code", "kind": "ResolvedLink"},
    {"raw": "[[Quality Assurance]]", "resolved": "urn:ngm:class:quality-assurance", "kind": "ResolvedLink"},
    {"raw": "[[Audit]]", "resolved": "urn:ngm:class:audit", "kind": "ResolvedLink"},
    {"raw": "[[Testing]]", "resolved": "urn:ngm:class:testing", "kind": "ResolvedLink"},
    {"raw": "[[GitOps]]", "resolved": "urn:ngm:class:gitops", "kind": "ResolvedLink"},
    {"raw": "[[Terraform]]", "resolved": "urn:ngm:class:terraform", "kind": "ResolvedLink"},
    {"raw": "[[Ansible]]", "resolved": "urn:ngm:class:ansible", "kind": "ResolvedLink"},
    {"raw": "[[Kubernetes]]", "resolved": "urn:ngm:class:kubernetes", "kind": "ResolvedLink"},
    {"raw": "[[Continuous Delivery]]", "resolved": "urn:ngm:class:continuous-delivery", "kind": "ResolvedLink"},
    {"raw": "[[Continuous Deployment]]", "resolved": "urn:ngm:class:continuous-deployment", "kind": "ResolvedLink"},
    {"raw": "[[MLOps]]", "resolved": "urn:ngm:class:mlops", "kind": "ResolvedLink"},
    {"raw": "[[Reproducibility]]", "resolved": "urn:ngm:class:reproducibility", "kind": "ResolvedLink"},
    {"raw": "[[Immutable Infrastructure]]", "resolved": "urn:ngm:class:immutable-infrastructure", "kind": "ResolvedLink"},
    {"raw": "[[Idempotency]]", "resolved": "urn:ngm:class:idempotency", "kind": "ResolvedLink"},
    {"raw": "[[Cloud Computing]]", "resolved": "urn:ngm:class:cloud-computing", "kind": "ResolvedLink"},
    {"raw": "[[Containerisation]]", "resolved": "urn:ngm:class:containerisation", "kind": "ResolvedLink"},
    {"raw": "[[Platform Engineering]]", "resolved": "urn:ngm:class:platform-engineering", "kind": "ResolvedLink"},
    {"raw": "[[Site Reliability Engineering]]", "resolved": "urn:ngm:class:site-reliability-engineering", "kind": "ResolvedLink"},
    {"raw": "[[Security Scanning]]", "resolved": "urn:ngm:class:security-scanning", "kind": "ResolvedLink"},
    {"raw": "[[Compliance]]", "resolved": "urn:ngm:class:compliance", "kind": "ResolvedLink"},
    {"raw": "[[Build Automation]]", "resolved": "urn:ngm:class:build-automation", "kind": "ResolvedLink"},
    {"raw": "[[Automated Testing]]", "resolved": "urn:ngm:class:automated-testing", "kind": "ResolvedLink"},
    {"raw": "[[Incident Response]]", "resolved": "urn:ngm:class:incident-response", "kind": "ResolvedLink"},
    {"raw": "[[Observability]]", "resolved": "urn:ngm:class:observability", "kind": "ResolvedLink"},
    {"raw": "[[Agile Software Development]]", "resolved": "urn:ngm:class:agile-software-development", "kind": "ResolvedLink"},
    {"raw": "[[Data Versioning]]", "resolved": "urn:ngm:class:data-versioning", "kind": "ResolvedLink"},
    {"raw": "[[Microservices]]", "resolved": "urn:ngm:class:microservices", "kind": "ResolvedLink"},
    {"raw": "[[Cloud Native]]", "resolved": "urn:ngm:class:cloud-native", "kind": "ResolvedLink"},
    {"raw": "[[DevSecOps]]", "resolved": "urn:ngm:class:devsecops", "kind": "ResolvedLink"},
    {"raw": "[[Docker]]", "resolved": "urn:ngm:class:docker", "kind": "ResolvedLink"},
    {"raw": "[[Software Delivery Lifecycle]]", "resolved": "urn:ngm:class:software-delivery-lifecycle", "kind": "ResolvedLink"},
    {"raw": "[[Disaster Recovery]]", "resolved": "urn:ngm:class:disaster-recovery", "kind": "ResolvedLink"},
    {"raw": "[[Automation]]", "resolved": "urn:ngm:class:automation", "kind": "ResolvedLink"},
    {"raw": "[[Policy as Code]]", "resolved": "urn:ngm:class:policy-as-code", "kind": "ResolvedLink"},
    {"raw": "[[OpenTofu]]", "resolved": "urn:ngm:class:open-tofu", "kind": "StubLink"}
  ],
  "prov:wasAttributedTo": {"@id": "did:nostr:enrichment-swarm"},
  "prov:generatedAtTime": {"@value": "2026-06-21T00:00:00Z", "@type": "xsd:dateTime"}
}
```

- ### Definition
  - Configuration management is the engineering discipline of systematically establishing, recording, and maintaining the desired state of a system's components, settings, and dependencies across its entire lifecycle, treating configuration as first-class versioned artefacts managed under [[Version Control]] rather than as ad hoc manual edits applied directly to running systems. As a sub-discipline of [[Software Engineering]], it addresses one of the most pervasive operational failure modes in computing — the *configuration drift* problem whereby the actual state of deployed systems silently diverges from their intended state as manual interventions accumulate over time, producing brittle, irreproducible environments where the "works on my machine" failure mode is endemic. Configuration management implements [[Change Management]] through a structured lifecycle: identification of all configuration items (CIs) that constitute a system; establishment of baselines capturing approved states; controlled change processes that record who changed what, when, and why; and formal [[Audit]] mechanisms that verify the live state against the declared baseline. In modern practice, configuration management has evolved beyond procedural record-keeping into [[Infrastructure as Code]] (IaC), a paradigm in which the desired system state is expressed as machine-readable declarative definitions — Ansible playbooks, Terraform modules, Puppet manifests, Chef cookbooks, or Pulumi programs — that tooling applies idempotently, converging actual systems to the declared desired state without side effects on repeated application. This convergence property, [[Idempotency]], is foundational: applying a configuration definition twice must produce the same result as applying it once, making configuration management safe to automate in [[Continuous Integration]] and [[Continuous Delivery]] pipelines. The discipline underpins [[DevOps]] culture by making infrastructure change as reviewable, testable, and traceable as application code, enabling reliable [[Disaster Recovery]], consistent multi-environment deployments (development, staging, production), and the [[Audit]] trails required for regulatory [[Compliance]] in financial services, healthcare, and government. In the [[MLOps]] domain, configuration management extends to model training environments, hyperparameter configurations, experiment reproducibility, and deployment pipeline definitions — all the non-code artefacts that determine whether an ML experiment can be recreated faithfully.

- ### Semantic Classification
  - owl-class:: infrastructure:ConfigurationManagement
  - owl-role:: EngineeringDiscipline | OperationalControl | QualityPractice
  - owl-inferred:: infrastructure:DevOpsFoundation, infrastructure:AuditableChangeControl
  - belongs-to-domain:: [[Software Engineering]]
  - implemented-in-layer:: [[DevOps]]

- ### Relationships
  - is-subclass-of:: [[Software Engineering]], [[Automation]]
  - has-part:: [[Version Control]], [[Change Management]], [[Idempotency]], [[Audit]], [[Baseline]], [[Policy as Code]], [[SBOM]]
  - requires:: [[Version Control]], [[Idempotency]], [[Audit]], [[Build Automation]]
  - enables:: [[Continuous Integration]], [[Continuous Delivery]], [[Continuous Deployment]], [[DevOps]], [[Reproducibility]], [[Disaster Recovery]], [[GitOps]], [[Infrastructure as Code]], [[Supply Chain Security]]
  - implements:: [[Change Management]], [[Immutable Infrastructure]], [[Policy as Code]], [[SLSA]], [[SBOM]]
  - depends-on:: [[Software Engineering]], [[Automation]], [[Agile Software Development]]
  - supports:: [[DevOps]], [[Quality Assurance]], [[Compliance]], [[MLOps]], [[Site Reliability Engineering]], [[Security Scanning]], [[Testing]], [[Observability]], [[DevSecOps]]
  - uses:: [[Version Control]], [[Ansible]], [[Terraform]], [[GitOps]], [[Docker]], [[Kubernetes]], [[OpenTofu]], [[Pulumi]], [[Argo CD]], [[Flux CD]], [[HashiCorp Vault]], [[Open Policy Agent]], [[Sigstore]], [[Chef]], [[Puppet]], [[Jenkins]]
  - contrasts-with:: [[Manual Administration]]
  - related-to:: [[Continuous Integration]], [[Testing]], [[Audit]], [[Site Reliability Engineering]], [[DevSecOps]], [[Platform Engineering]], [[Microservices]], [[Cloud Native]], [[Containerisation]], [[Cloud Computing]], [[Software Delivery Lifecycle]], [[Data Versioning]], [[Automated Testing]], [[Incident Response]], [[Supply Chain Security]], [[SBOM]]
  - bridges-to:: [[DevOps]], [[Infrastructure as Code]]

- ### Content

  ## Compositional Relationships (Components)
  ```
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:hasPart infra:VersionControl))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:hasPart infra:ChangeManagement))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:hasPart infra:ConfigurationManagementDatabase))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:hasPart infra:ConfigurationItem))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:hasPart infra:Baseline))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:hasPart infra:Idempotency))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:hasPart infra:Audit))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:hasPart infra:PolicyAsCode))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:hasPart infra:DriftDetection))
  ```

  ## Dependency Relationships
  ```
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:requires infra:VersionControl))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:requires infra:Idempotency))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:requires infra:Audit))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:requires infra:BuildAutomation))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:dependsOn infra:SoftwareEngineering))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:dependsOn infra:Automation))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:dependsOn infra:AgileMethodology))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:dependsOn infra:Containerisation))
  ```

  ## Capability Relationships
  ```
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:ContinuousIntegration))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:ContinuousDelivery))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:DevOps))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:Reproducibility))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:DisasterRecovery))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:GitOps))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:InfrastructureAsCode))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:Compliance))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:MLOps))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:enables infra:SiteReliabilityEngineering))
  ```

  ## Implementation Relationships
  ```
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:implements infra:ChangeManagement))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:implements infra:ImmutableInfrastructure))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:implements infra:PolicyAsCode))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:implements infra:DesiredStateConfiguration))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:implements infra:SecurityScanning))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:implements infra:AutomatedTesting))
  ```

  ## Reduction Relationships
  ```
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:reducesTo infra:ChangeControl))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:reducesTo infra:StateManagement))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:reducesTo infra:Versioning))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:reducesTo infra:AuditTrail))
  SubClassOf(infra:ConfigurationManagement
    ObjectSomeValuesFrom(infra:reducesTo infra:EnvironmentConsistency))
  ```

  ## About
  Configuration management as a formal discipline emerged from aerospace and defence engineering in the 1950s and 1960s, where military procurement programmes needed to track which version of hardware specifications, drawings, and software was installed in which physical system. The US Department of Defense's MIL-HDBK-61 established a systematic vocabulary of configuration items (CIs), baselines, change proposals (ECPs), and configuration audits that became the template for civilian practice. The landmark academic formalisation came from Bersoff, Henderson, and Siegel's 1980 textbook *Software Configuration Management: An Investment in Product Integrity*, and the IEEE 828 standard (first published 1983, most recently updated as IEEE 828-2012: *IEEE Standard for Configuration Management in Systems and Software Engineering*) gave the discipline a normative reference for [[Software Engineering]] practice.

  The transition to modern practice began in the 1990s with the proliferation of version control tools. Walter Tichy's RCS (Revision Control System, 1982) and the concurrent development of CVS made source code configuration management tractable for ordinary development teams. The distributed revision control revolution of the 2000s — Git (Linus Torvalds, 2005) — transformed [[Version Control]] into the indispensable backbone of virtually all software configuration management. Git's model of committing the full project tree as an immutable object graph, with cryptographically-linked history, solved the baseline and audit trail requirements of classical CM within a developer-native workflow.

  The application of configuration management to entire system environments — not just source code — gave rise to [[Infrastructure as Code]]. [[Puppet]] (2005), CFEngine (1993, precursor to modern IaC), [[Chef]] (2009), and [[Ansible]] (2012) brought desired-state configuration to server management: instead of applying changes manually over SSH, administrators wrote declarative resource definitions that tools applied convergently. [[Terraform]] (2014) extended this to cloud infrastructure provisioning, and [[GitOps]] formalised the pattern of using a Git repository as the single source of truth for cluster state, with automated operators ([[Flux CD]], [[Argo CD]]) continuously reconciling live state to the declared desired state.

  In the [[MLOps]] context, configuration management encompasses both the DevOps tooling layer (environment definitions for training and serving) and specialised ML artefacts: experiment configurations (hyperparameters, random seeds, dataset splits), model training job specifications, serving endpoint definitions, and A/B testing configurations. [[Data Versioning]] tools such as DVC and LakeFS extend configuration management principles to datasets, treating dataset snapshots as versioned, addressable objects linked to the model versions trained on them.

  ## Components and Architecture

  ### Configuration Item (CI) Hierarchy
  Every managed system decomposes into **configuration items** — discrete, independently versioned and auditable units. A CI hierarchy for a cloud service might include:
  - **Source code modules** — application code, library dependencies (pinned via lock files), pipeline definitions
  - **Environment specifications** — OS images, container base images (Dockerfile), package manifests (requirements.txt, go.mod)
  - **Infrastructure definitions** — Terraform modules defining VPC, subnets, load balancers, databases; Kubernetes manifests defining deployments, services, config maps
  - **Configuration files and secrets** — application configuration, environment variables (managed via [[HashiCorp Vault]], AWS Parameter Store, or Sealed Secrets); these are distinct from secrets, which must not be committed to [[Version Control]] in plaintext
  - **Pipeline definitions** — CI/CD YAML files (GitHub Actions workflows, Tekton pipelines, [[Jenkins]] declarative pipelines)
  - **Policy definitions** — [[Open Policy Agent]] Rego rules, Conftest policies, AWS Service Control Policies — these constitute [[Policy as Code]]

  ### Baseline Types
  - **Functional baseline**: the approved functional requirements specification; gates entry to design
  - **Allocated baseline**: the approved system architecture allocating functions to components
  - **Product baseline**: the approved product specifications used to build and test the system
  - **Operational baseline**: the approved configuration of the deployed operational system, maintained through [[Change Management]] thereafter

  ### Change Control Process
  1. **Change Request (CR)**: identifies what should change, why, and what the impact assessment is
  2. **Change Advisory Board (CAB)** review: approves, rejects, or defers; in DevOps practice this becomes a peer-review pull request with automated policy checks
  3. **Implementation**: change applied via IaC tooling ([[Ansible]], [[Terraform]]) with automated [[Testing]]
  4. **Verification**: [[Automated Testing]], compliance scans, drift detection confirming the live state matches the declared desired state
  5. **Baseline update**: the approved post-change state is committed to [[Version Control]] as the new baseline
  6. **[[Audit]] record**: the entire trail — who proposed, who approved, what tests passed, what changed — is preserved in git history and CI/CD logs

  ### Drift Detection and Remediation
  Configuration drift — the silent divergence of actual system state from the declared desired state — is the primary operational failure mode that configuration management prevents. Detection mechanisms include:
  - **Scheduled compliance scans**: tools run the CM tool in dry-run mode and report any difference between actual and desired state
  - **Continuous reconciliation** ([[GitOps]]): operators such as [[Argo CD]] run every 3 minutes by default and apply corrective patches immediately when drift is detected
  - **Immutable infrastructure**: drift is prevented architecturally by never patching running systems; all changes flow through image rebuild and redeployment via [[Immutable Infrastructure]] principles
  - **Chef InSpec / AWS Config Rules / Azure Policy**: continuous compliance frameworks that evaluate live resources against [[Policy as Code|policy baselines]] in real time

  ## Tool Families

  ### Desired-State Configuration Management Tools
  - **[[Ansible]]** (Red Hat, 2012–): agentless, push-based, YAML playbooks; dominant in 2025 for agentless simplicity and broad [[Cloud Computing]] provider coverage; Ansible 12.x (2025) features expanded Collections and enhanced GitOps integration
  - **Puppet** (2005–): agent-based, declarative resource model, Ruby DSL (Puppet DSL); strong compliance use case; Puppet Enterprise 2025.2.0 added improved RBAC and reporting for regulated environments
  - **Chef Infra** (2009–): agent-based, Ruby-based recipes and cookbooks; emphasises [[DevSecOps]] and policy-as-code via Chef InSpec; 2025 updates strengthened multi-cloud compliance reporting
  - **SaltStack / Salt Project** (2011–): event-driven, fast minion-based execution; now maintained as open source after VMware Tanzu acquisition; strong in large-scale, real-time configuration at HPC scale

  ### Infrastructure Provisioning (IaC)
  - **[[Terraform]]** (HashiCorp, 2014–): declarative HCL; multi-cloud resource provisioning; the de facto multi-cloud IaC standard; by April 2026 Terraform commands ~33–62% market share depending on measurement methodology
  - **[[OpenTofu]]** (CNCF, 2023–): community-maintained Terraform fork under MPL licence; API-compatible; approximately 12% adoption among IaC practitioners in 2026, with 27% of teams planning to evaluate or expand its use; ships state encryption (v1.7), early variable evaluation (v1.8), and OCI registry support (v1.10) ahead of the Terraform open binary
  - **[[Pulumi]]** (2018–): infrastructure defined in real programming languages (TypeScript, Python, Go, .NET); appeals to development teams uncomfortable with HCL; growing adoption in 2025–2026 for complex multi-cloud topologies
  - **AWS CloudFormation / CDK**: AWS-native IaC; CDK allows infrastructure definition in TypeScript/Python with synthesis to CloudFormation templates; tight integration with [[Cloud Computing|AWS cloud services]]

  ### GitOps Operators
  - **[[Argo CD]]**: declarative [[GitOps]] continuous delivery for [[Kubernetes]]; syncs cluster state to Git repositories; most widely adopted GitOps tool as of 2025; CNCF's 2023 GitOps microsurvey found 91% of respondents already using GitOps
  - **[[Flux CD]]**: CNCF graduated; pull-based GitOps; strong multi-tenancy model; native Helm and Kustomize support; complements [[Kubernetes]] in multi-cluster [[Platform Engineering]] platforms

  ### Configuration Management Databases (CMDB)
  - ITIL defines a CMDB as the authoritative repository of all CIs and their relationships; modern ITSM platforms (ServiceNow, BMC Helix) provide CMDBs integrated with discovery, [[Change Management]], and incident management workflows
  - In cloud-native environments, the CMDB is increasingly replaced or supplemented by the git repository as the authoritative record, with resource tagging and cloud provider asset inventories as secondary sources

  ## Use Cases and Major Families

  ### Infrastructure Environment Management
  Configuration management's canonical use case: ensuring that development, staging, and production environments are defined from the same IaC sources, preventing environment-specific bugs and eliminating manual environment setup time. [[Containerisation]] via [[Docker]] and [[Kubernetes]] extends this to application packaging: the container image is the configuration artefact, immutable and identical across environments.

  ### Continuous Delivery Pipelines
  Configuration management feeds [[Continuous Integration]] and [[Continuous Delivery]] pipelines: the pipeline definition (the configuration of the delivery system itself) is version-controlled; environment configurations are applied by IaC tooling in each stage; [[Automated Testing]] validates that the configured environment meets expectations before promotion. [[GitOps]] formalises this as the operational paradigm: a merge to the main branch triggers automated reconciliation of the live cluster.

  ### [[DevOps]] and [[Platform Engineering]]
  Configuration management is a foundational capability of [[DevOps]]: it enables the "you build it, you run it" model by making infrastructure changes as safe and reversible as code changes. [[Platform Engineering]] teams build Internal Developer Platforms whose golden-path templates are expressions of configuration management: developers consume pre-approved, pre-configured environment templates rather than configuring infrastructure ad hoc.

  ### [[MLOps]] and Machine Learning Environments
  In [[MLOps]], configuration management governs: training environment definitions (Conda environment files, Docker training images, GPU driver versions); experiment configuration (hyperparameter YAML files tracked alongside code in git); model serving environment definitions (serving container specs, autoscaling policies); and pipeline configuration (Kubeflow pipeline YAML, Airflow DAG definitions). [[Data Versioning]] (DVC, LakeFS) applies the same principles to datasets, ensuring that any historical experiment is reproducible by checking out the same code, configuration, and data version simultaneously.

  ### Regulated and Compliance-Driven Environments
  In financial services, healthcare, and government, configuration management is not optional: it is the mechanism by which organisations demonstrate [[Compliance]] with regulations requiring traceable, auditable change control. NIST SP 800-128 (*Guide for Security-Focused Configuration Management of Information Systems*, updated 2019) provides the US federal reference framework for security-focused CM, aligned with FISMA requirements. PCI DSS requires that all system components have a documented configuration standard and that changes are logged. In the NHS and UK public sector, the NCSC Cyber Essentials framework requires that all software is authorised and kept up to date — a configuration management requirement — and NHS Digital's data security standards mandate change management processes for clinical information systems.

  ### [[Disaster Recovery]] and Business Continuity
  Because all system state is captured in [[Version Control]]-managed configuration definitions, [[Disaster Recovery]] reduces from weeks of manual reconstruction to hours of automated IaC replay: check out the repository, run the provisioning tool, and the environment is rebuilt from source. This is the operational realisation of the "cattle not pets" philosophy: systems are treated as reproducible livestock rather than irreplaceable snowflakes.

  ## Academic Context

  The academic foundations of configuration management span three traditions: systems engineering, software engineering process research, and distributed version control theory.

  The systems engineering tradition traces to the US DoD MIL-HDBK-61 and to Bersoff, Henderson & Siegel (1980), who formalised the four functions of SCM (identification, control, status accounting, auditing) that remain the canonical framework. IEEE 828-2012 is the current normative standard for software configuration management in engineering practice.

  The software engineering process research tradition is represented by Estublier's survey of software configuration management (2000), Tichy's analysis of version control model theory (1985), and the Software Engineering Institute's CMMI model, which includes a dedicated Configuration Management process area at CMMI Maturity Level 2 — the first level that explicitly requires version-controlled, auditable change management.

  The distributed version control theory tradition produced the foundational algorithms underlying modern tools: Tichy's RCS delta algorithm (1982), the three-way merge algorithm underlying Git's merge model, and the cryptographic content-addressing hash tree (Merkle tree) at the core of Git's object model. Torvalds's design notes for Git (2005) articulate the configuration management semantics of the immutable commit DAG.

  The DevOps research tradition is represented by the DORA (DevOps Research and Assessment) annual State of DevOps reports, which empirically correlate configuration management practices (version control for all production artefacts, infrastructure as code, deployment automation) with elite software delivery performance. Kim, Humble, Debois and Willis's *The DevOps Handbook* (2016) gives a practitioner synthesis.

  For [[GitOps]] specifically, Weaveworks published the original GitOps position paper in 2017 (Alexis Richardson); the CNCF GitOps Working Group formalised the OpenGitOps principles in 2021, defining GitOps as: declarative desired state in version control, automated agents continuously reconciling actual to desired state, with approved changes being the only mutation path.

  ## Current Landscape (2026)

  The IaC market reached approximately $1.74 billion in 2024 and is projected to grow to $12.86 billion by 2032 (CAGR ~28%), reflecting the centralisation of configuration management into cloud-native organisations. Over 80% of enterprise organisations report using IaC as of 2025.

  The dominant trends shaping the 2025–2026 landscape are:
  - **[[OpenTofu]] and Terraform fragmentation**: HashiCorp's 2023 re-licensing of Terraform from MPL to BSL triggered the OpenTofu fork under CNCF governance. By 2025, roughly 20% of new IaC projects were starting on OpenTofu rather than Terraform, particularly in public-sector and open-source-first organisations.
  - **AI-assisted configuration generation**: [[Large Language Models|LLM]]-based tools (GitHub Copilot for infrastructure, Pulumi AI, TerraFormer) are automating the generation of [[Terraform]] and [[Ansible]] configurations from natural language descriptions. TerraFormer (2025, arXiv:2601.08734) demonstrated fine-tuning LLMs with policy-guided verifier feedback to produce valid, secure IaC. As of 2026, AI is writing IaC faster than teams can review it — making automated policy gates more critical than ever.
  - **[[Policy as Code]] and [[DevSecOps]] integration**: [[Open Policy Agent]] (OPA) with Rego, Checkov, and Terrascan are embedded into [[Continuous Integration|CI/CD]] pipelines as pre-apply policy gates, ensuring that no configuration change can be applied without passing security and compliance checks. This closes the configuration management and [[Security Scanning]] disciplines.
  - **Immutable infrastructure dominance**: Immutable infrastructure (replace rather than patch) held over 60% market share in 2024, reflecting the near-universal adoption of container-based deployments where [[Containerisation]] makes the image the configuration artefact.
  - **GitOps maturity**: Argo CD and Flux CD are CNCF graduated projects with broad enterprise adoption; [[GitOps]] is now the default operating model for [[Kubernetes]] environments rather than an experimental pattern.

  ## UK Context

  The UK has a strong configuration management ecosystem spanning industrial, academic, and regulatory dimensions.

  **Academic contributions**: UCL's Software Systems group researches adaptive infrastructure and DevOps toolchain evolution. Imperial College London has embedded DevOps and IaC in its software engineering curriculum, with research on automated configuration testing and compliance verification. The University of Edinburgh hosts work on distributed systems consistency and version control semantics, with direct relevance to Git's formal model. Leeds and Sheffield contribute through industrial research partnerships with aerospace (Airbus, Rolls-Royce) and defence (BAE Systems) prime contractors, where MIL-HDBK-61-aligned configuration management of safety-critical embedded systems is a statutory requirement.

  **Industrial adoption**: UK financial services institutions — Barclays, HSBC, Lloyds, HSBC — have invested heavily in DevOps platforms with IaC at the core, driven by the FCA's operational resilience requirements (PS21/3, strengthened in 2025). The NHS Digital Transformation programme mandates Infrastructure as Code and automated configuration management for all new digital health platforms, citing [[Reproducibility]] and [[Audit]] capability requirements. GCHQ / NCSC publishes configuration management guidance for UK government systems, including the Cyber Essentials framework.

  **Northern England industrial context**: Advanced manufacturing in Sheffield (aerospace composites, specialist steel), Leeds (digital health technology), and Manchester (financial technology, advanced materials) generates configuration management challenges for embedded and operational technology (OT) systems — including ICS/SCADA configuration auditing — as well as for the cloud-native software platforms supporting those industries.

  **Standards bodies**: BSI (British Standards Institution) contributes to ISO/IEC 10007 (Quality management guidelines for configuration management) and mirrors IEEE 828; the UK government's adoption of ITIL 4 (updated 2019) provides the service management framework within which CM sits for public-sector IT organisations.

  ## Future Directions (2026–2030)

  - **LLM-native configuration management**: AI assistants will generate, review, and validate configuration definitions with integrated policy checking, dramatically lowering the barrier to IaC adoption for teams without deep platform engineering expertise. Human review will focus on intent and security boundaries rather than syntactic correctness.
  - **Configuration management for AI systems**: As organisations deploy AI agents and [[Autonomous Systems|autonomous systems]], configuration management must extend to model weights, prompt templates, retrieval index configurations, and agent behaviour policies — domains where existing CM tooling (Git, [[Terraform]]) provides only partial coverage. [[MLOps]] platforms (MLflow, Kubeflow) are adding CM-native features for model versioning and deployment configuration. New tooling categories will emerge to manage [[Large Language Models|LLM]] prompt configurations, [[Retrieval Augmented Generation|RAG index]] definitions, and agent tool definitions as first-class configuration artefacts.
  - **Security-first configuration management**: Integration of configuration management with supply chain security frameworks ([[SLSA]], [[SBOM]], [[Sigstore]]) will make cryptographic provenance attestation a standard part of the configuration item lifecycle, countering software [[Supply Chain Security|supply chain attacks]]. The EU Cyber Resilience Act (CRA, passed 2024, applying from 2027) will require SBOM generation and vulnerability management as mandatory CM activities for CE-marked software products in the European market.
  - **Autonomous configuration remediation**: Self-healing infrastructure agents will detect configuration drift and apply remediation automatically without human approval for low-risk changes, reserving human review for high-risk changes. This extends [[GitOps]] reconciliation from infrastructure to application configuration.
  - **Quantum-resistant configuration stores**: As post-quantum cryptography standards (NIST PQC, 2024) are adopted, the hash functions and digital signatures underpinning Git's integrity model will require migration — a configuration management challenge in itself.
  - **Edge and IoT configuration management**: Managing configuration at billions of edge devices and embedded systems requires lightweight, bandwidth-efficient CM protocols distinct from cloud-native GitOps; expect new OTA (over-the-air) update frameworks with CM properties built in.

  ## Interaction with DevSecOps and Security

  Configuration management is the foundational layer on which [[DevSecOps]] — the integration of security into [[DevOps]] workflows — is built. The reason is structural: security posture is itself a configuration property. Whether a service runs with least-privilege permissions, whether TLS is enforced, whether a database is exposed to the public internet, whether encryption at rest is enabled — all of these are configuration decisions that must be defined, version-controlled, and automatically verified.

  **[[Policy as Code]] tooling** makes security a first-class configuration management concern:
  - **[[Open Policy Agent]] (OPA)**: A general-purpose policy engine whose Rego language expresses security policies as code. [[Terraform]] plans are evaluated against OPA policies before application; only plans that pass all policies are allowed to proceed. This prevents misconfigured resources from reaching production.
  - **Checkov**: An open-source static analysis tool for IaC ([[Terraform]], CloudFormation, [[Kubernetes]] YAML, Dockerfile) that checks configurations against 1,000+ built-in security and [[Compliance]] checks before deployment.
  - **Terrascan**: Similar to Checkov; integrates with [[Continuous Integration|CI]] pipelines to block deployment of insecure configurations.
  - **Chef InSpec**: A compliance-as-code framework that tests live systems against security baselines (CIS Benchmarks, STIG, PCI DSS controls), generating [[Audit]] evidence suitable for regulatory reporting.
  - **[[SLSA]] (Supply Chain Levels for Software Artefacts)**: A Google-originated framework (now under OpenSSF) that defines levels of provenance assurance for build artefacts. Configuration management of the build pipeline itself is a prerequisite for SLSA Level 2 and above.
  - **[[Sigstore]] and Cosign**: Cryptographic signing of container images and IaC artefacts; when combined with configuration management, every deployed artefact carries a verifiable chain of custody from source commit to running workload.
  - **[[SBOM]] (Software Bill of Materials)**: Machine-readable inventories of all software components and their versions; SBOM generation is increasingly mandated (US Executive Order 14028; EU Cyber Resilience Act) and is a configuration management artefact, tracking the exact component configuration of each software release.

  The convergence of configuration management and security has produced the concept of **shift-left compliance**: rather than auditing [[Compliance|compliance]] after deployment, compliance checks are embedded into the pull request review workflow. A developer submitting a [[Terraform]] change that would open a security group to 0.0.0.0/0 receives an immediate policy violation notification in the [[Continuous Integration|CI]] pipeline, before any human reviewer needs to catch it. The UK Cyber Security and Resilience Bill (introduced to Parliament November 2025, expected Royal Assent 2026) extends [[Compliance|compliance]] obligations to supply chain security, reinforcing the importance of IaC-tracked configuration management for operators of network and information systems infrastructure.

  ## Configuration Management in the ITIL 4 / ITSM Context

  In organisations running ITIL-aligned IT Service Management (ITSM), configuration management occupies the "Service Configuration Management" practice (ITIL 4, 2019), one of 34 ITIL management practices. The practice's purpose is to ensure that accurate and reliable information about the configuration of services and their supporting CIs is available when and where it is needed. It works in close coordination with:

  - **Change Enablement**: The practice that controls changes to services and infrastructure; configuration management provides the CMDB as the impact assessment reference for change requests.
  - **Incident Management**: Incidents are traced to specific CIs; without an accurate CMDB, identifying the failing CI and its dependencies is severely hampered.
  - **Release Management**: Coordinating configuration artefacts with the software release lifecycle; ensuring that the environment configuration matches the application version being released.
  - **IT Asset Management**: Tracking the physical and virtual assets that map to CIs; financial asset management depends on configuration item identification.

  ServiceNow's CMDB is the dominant enterprise CMDB platform as of 2025, with BMC Helix, Atlassian's Jira Service Management, and iTop as alternatives. Modern CMDB implementations use auto-discovery (cloud provider APIs, network scanners, agent-based discovery) to populate and maintain the CMDB rather than relying on manual entry, dramatically improving accuracy. The CMDB then becomes the ground-truth reference against which IaC-declared desired state can be reconciled — a bridge between classical ITSM configuration management and modern DevOps/GitOps practice.

  ## Relationship to MLOps and AI System Configuration

  The extension of configuration management principles to [[MLOps]] reflects the recognition that machine learning systems have more configuration complexity than conventional software: they have three independently evolving axes — code, data, and model weights — all of which must be versioned and managed together to guarantee reproducibility.

  Key CM concerns in [[MLOps]]:
  - **[[Data Versioning]]**: Dataset snapshots are configuration artefacts. DVC (Data Version Control) integrates with Git to version datasets and model artefacts alongside code, using content-addressing (similar to Git's object model) to store large binaries efficiently in cloud storage while tracking their identity in git.
  - **Experiment configuration management**: Hyperparameter configurations, data preprocessing steps, random seeds, and train/validation/test split definitions are all CIs that must be version-controlled and linked to the model artefact they produced. MLflow, Weights & Biases, and Neptune provide experiment tracking — the ML equivalent of a CM status accounting system.
  - **Model serving configuration**: The configuration of model serving endpoints (memory limits, replica counts, routing weights for A/B tests, canary deployments) is IaC that should be version-controlled and deployed through GitOps pipelines alongside the model artefact itself.
  - **Prompt and agent configuration**: For systems built on [[Large Language Models]], the prompt templates, retrieval index configurations, agent tool definitions, and safety filter configurations are CIs that determine system behaviour as much as the model weights themselves. Prompt version control is an emerging practice (tools: LangChain, PromptLayer, Langfuse) but lacks the maturity of infrastructure IaC.
  - **Feature pipeline configuration**: The transformation logic in [[Feature Store]] definitions must be version-controlled and match between training and serving to prevent training-serving skew — one of the most common causes of silent model degradation in production.

  The DORA research programme finds that organisations with high-performing [[DevOps]] practices — including strong configuration management — deploy ML models to production significantly faster and with lower rollback rates than low performers, confirming that general-purpose CM tooling creates value in ML contexts as well as conventional software.

  ## Key Terminology Glossary

  - **Configuration Item (CI)**: Any discrete element of a system that is separately identified, versioned, and controlled by the CM process — a source file, an environment specification, a hardware component, a document.
  - **Baseline**: An approved, formally reviewed snapshot of a CI or set of CIs at a particular point in the development or operation lifecycle; the reference against which subsequent changes are tracked.
  - **CMDB (Configuration Management Database)**: An authoritative database storing CIs and their relationships, maintained by ITSM platforms in traditional IT and by git repositories in DevOps/cloud-native practice.
  - **Idempotency**: The property that applying a configuration definition any number of times yields the same result as applying it once; essential for safe automation.
  - **Drift**: The divergence of actual system state from the declared desired state, caused by manual changes, partial failure, or external mutations.
  - **Desired State Configuration (DSC)**: A CM paradigm where the tool is told what the system should look like, not how to get there; the tool computes and applies the necessary changes.
  - **GitOps**: A CM operational pattern where a git repository is the single source of truth for desired state, and automated operators continuously reconcile live state to the repository.
  - **Immutable Infrastructure**: An approach where running systems are never modified in place; all changes produce a new versioned image that replaces the old one.
  - **Policy as Code**: The expression of compliance and security rules in machine-readable definitions that are evaluated automatically by CM tooling, preventing non-compliant configurations from being applied.
  - **Configuration Audit**: A formal review verifying that the actual state of a system matches the approved baseline; functional configuration audits verify requirements are met, physical configuration audits verify the build record matches the product baseline.
  - **ECP (Engineering Change Proposal)**: In systems engineering CM, the formal document proposing a change to a baseline CI, requiring approval before implementation.
  - **SLSA**: Supply Chain Levels for Software Artefacts; a framework for asserting and verifying the provenance and integrity of build artefacts throughout the software supply chain.
  - **HCL (HashiCorp Configuration Language)**: The declarative language used by [[Terraform]] and [[OpenTofu]] to define infrastructure configurations; human-readable, JSON-compatible.
  - **Convergence**: The property of a CM tool that repeatedly applies a configuration definition until the actual system state matches the desired state, regardless of the current starting state.

  ## Operational Patterns and Advanced Configurations

  ### GitOps in Practice

  [[GitOps]] represents the most advanced form of configuration management for cloud-native systems. The pattern, formalised by Weaveworks (Richardson, 2017) and standardised by the CNCF OpenGitOps working group (2021), prescribes four principles:

  1. **Declarative desired state**: The entire system — infrastructure, application configuration, and workload deployment — is described declaratively in configuration files stored in a Git repository. Nothing exists in the system that is not expressed in the repository.
  2. **Versioned and immutable**: The desired state is versioned using Git's immutable commit history. Every change to the desired state is a commit; the commit history is the complete audit log of every change to the system configuration.
  3. **Pulled automatically**: Automated agents (Argo CD, Flux CD) continuously pull the desired state from the repository and reconcile the live system to match it. Human operators do not push changes directly to production — they push to the repository, and the agent applies the change.
  4. **Continuously reconciled**: The agent monitors for divergence between the live system state and the desired state in the repository; any divergence is detected and automatically corrected. This property eliminates configuration drift by design.

  The GitOps pattern has specific implications for [[DevSecOps]]: because every production change must flow through a git commit and pass through the CI/CD pipeline's policy gates before the operator will apply it, it is architecturally impossible to make an unauthorised change to a GitOps-managed system without leaving an evidence trail in git history. This property is directly relevant to compliance requirements such as SOC 2 and PCI DSS, which require change control and audit logging for production systems.

  Multi-cluster GitOps — managing configuration across dozens or hundreds of Kubernetes clusters from a single repository — is the canonical use case for large platform engineering teams. Fleet management tools like Argo CD ApplicationSets and Flux's multi-tenancy model enable hierarchical configuration inheritance: a base configuration is defined at the organisational level, cluster-level customisations are layered on top, and workload-level configurations compose with both. This mirrors the classical CM baseline hierarchy (system baseline → subsystem configuration → component configuration) in a GitOps-native form.

  ### Declarative vs. Imperative Configuration Management

  A foundational design choice in any CM tool is whether it operates declaratively or imperatively:

  - **Declarative tools** ([[Terraform]], Puppet, [[Ansible]] in desired-state mode, Kubernetes manifests): The operator specifies what the system should look like, and the tool computes and applies whatever changes are necessary to reach that state from the current state. The operator does not need to know the current state; the tool discovers it and calculates the diff. Declarative tools naturally implement [[Idempotency]]: applying the same definition twice produces the same result because the second application has no diff to apply.

  - **Imperative tools** (Bash scripts, AWS CLI command sequences, [[Ansible]] in procedural mode): The operator specifies the sequence of actions to take. These require the operator to know (or assume) the current state. They are not inherently idempotent: running a sequence of `apt install`, `systemctl enable`, and `mv` commands twice may produce errors if the first run already made those changes.

  The industry has largely converged on declarative tools for infrastructure provisioning, because the desired-state model is far more composable, testable, and maintainable at scale. However, imperative scripts remain common for ephemeral tasks (data migrations, one-off operations) and for cases where the ordering of operations matters in ways that declarative engines cannot easily express.

  ### Testing Configuration Management Definitions

  A mature CM practice applies software testing disciplines to configuration definitions:

  - **Linting**: Static analysis of IaC files for syntax errors and common mistakes. `terraform validate` checks HCL syntax; `ansible-lint` checks Ansible playbooks for best-practice violations; `yamllint` checks Kubernetes manifests.
  - **Unit testing**: Testing individual Terraform modules or Ansible roles in isolation with mock inputs. Terratest (Go) and `pytest` with the `pytest-ansible` plugin enable unit-level IaC testing.
  - **Integration testing**: Provisioning a real (typically ephemeral) environment in a test account and running [[Automated Testing]] against the provisioned resources. Kitchen-Terraform, Molecule (for Ansible roles), and cloud-provider sandbox accounts enable this.
  - **Policy testing**: Running Checkov, Terrascan, or OPA evaluations against IaC definitions as a CI gate, ensuring that no non-compliant configuration can be committed to the main branch.
  - **Contract testing**: In [[Microservices]] environments, testing that the configuration of one service is compatible with the API contracts expected by dependent services.
  - **Drift testing**: Running CM tools in dry-run / check mode on production systems on a schedule, comparing reported drift against a zero-drift baseline. Any detected drift is treated as a CI failure and triggers an alert.

  The DORA research programme (State of DevOps 2023) found that elite-performing DevOps organisations — those in the top quartile on all four DORA metrics — have significantly higher rates of IaC testing, configuration change review, and automated drift remediation than low performers, directly linking CM testing maturity to delivery performance.

  ### Configuration Management for Secrets and Credentials

  Secrets management is a specialised branch of configuration management with heightened security requirements. Credentials (API keys, database passwords, TLS certificates, SSH private keys) are configuration items, but they must not be stored in plaintext in [[Version Control]] — the catastrophic failure mode of accidental credential commit is one of the most common causes of security breaches.

  The canonical patterns for secrets CM:
  - **External secrets stores**: [[HashiCorp Vault]], AWS Secrets Manager, Azure Key Vault, GCP Secret Manager. Secrets are stored and accessed via API at runtime; IaC references the secret's path rather than its value; applications authenticate to the secrets store using workload identity (AWS IAM role, GCP Workload Identity).
  - **Sealed Secrets ([[Kubernetes]])**: A Kubernetes-native pattern (Bitnami Sealed Secrets) that encrypts secrets with a cluster-specific public key, allowing the encrypted secret to be committed to git; only the cluster's controller can decrypt it.
  - **External Secrets Operator (ESO)**: An open-source [[Kubernetes]] operator that reads from external secrets stores (Vault, AWS Secrets Manager, etc.) and synchronises values into Kubernetes Secrets at runtime, with automatic rotation.
  - **SOPS (Secrets OPerationS)**: A CLI tool that encrypts specific values within YAML/JSON files using AWS KMS, GCP KMS, or PGP, allowing secret-containing configuration files to be committed to git in encrypted form; integrates natively with [[GitOps]] workflows using [[Argo CD]] or [[Flux CD]].

  The intersection of secrets management and configuration management is a key concern for [[DevSecOps]]: the secrets CM process must be subject to the same change control, [[Audit|audit]], and rotation policies as infrastructure configuration, but with additional access control and encryption requirements. [[Supply Chain Security]] frameworks ([[SLSA]], [[Sigstore]]) extend this to the entire software supply chain, verifying the provenance of every artefact from source commit to deployed workload.

  ## Configuration Management in Regulated and Safety-Critical Domains

  ### Aerospace and Defence (MIL-HDBK-61B)

  Configuration management in aerospace originates from military procurement and remains the most rigorous implementation of the discipline. The DoD MIL-HDBK-61B (*Configuration Management Guidance*) and the accompanying MIL-STD-973 define a complete CM lifecycle with five activities: CM planning, configuration identification, configuration control, configuration status accounting, and configuration auditing.

  In aerospace programmes (F-35, Eurofighter Typhoon, Airbus A350), every hardware component and software module is a numbered CI tracked through a formal CM plan. Engineering Change Proposals (ECPs) go through a multi-level Change Control Board process before any modification to a baseline is authorised. The as-built configuration of each individual aircraft must be documented and verifiable — ensuring that the physical artefact in the field matches the engineering drawings and software load in the configuration record.

  UK aerospace primes (Rolls-Royce, BAE Systems, Leonardo UK, GKN Aerospace) all operate to AS9100 quality management standards, which include configuration management as a mandatory process. The collaboration between the University of Sheffield Advanced Manufacturing Research Centre (AMRC) and BAE Systems includes research on digital twin integration with configuration management — using the CM record as the ground truth for a digital twin that tracks the as-maintained state of aircraft components across their operational life.

  ### Medical Device Configuration Management (IEC 62304)

  IEC 62304:2006+AMD1:2015 (*Medical Device Software — Software Life Cycle Processes*) is the mandatory standard for medical device software in the UK, EU (under MDR 2017/745), and US (FDA). Section 8 of IEC 62304 specifies software configuration management requirements for all medical device software, regardless of safety class. Requirements include:

  - Identification and control of software configuration items (SCIs)
  - Version control of all SCIs with controlled check-in/check-out procedures
  - Change control procedures that require traceability from change request to the specific SCIs modified
  - Maintaining a build record that allows any released software version to be exactly reproduced
  - Problem resolution procedures that link discovered defects back to the affected SCIs

  The NHS Digital's technology standards require that clinical software supplied to NHS Trusts complies with IEC 62304, making this standard the primary configuration management framework for healthcare technology in England. The MedTech ecosystem in the UK — centred on Cambridge (Cambridge Medical Robotics, Brainomix), London (Mindmaze, Skin Analytics), and the Northern health data clusters (Leeds/Bradford/Manchester's Connected Yorkshire programme) — operates under these standards.

  ### Nuclear and Energy (IEEE 828 in the Nuclear Context)

  In nuclear power, configuration management takes on additional regulatory dimensions: the as-designed configuration of safety systems must be known with certainty at all times, and any change must be assessed for its impact on the nuclear safety case. In the UK, the Office for Nuclear Regulation (ONR) Safety Assessment Principles (SAPs) include explicit requirements for configuration management of safety systems, aligned with IEEE 828 but with nuclear-specific additions around the management of the safety case document as itself a CM-controlled artefact.

  The UK nuclear new build programme (Hinkley Point C, Sizewell B upgrade) requires contractor configuration management plans (CMPs) as contractual deliverables, specifying how every software and hardware CI will be identified, version-controlled, and audited throughout the 60-year operational life of the plant.

  ### Government and Public Sector (NCSC and GDS)

  The UK Government Digital Service (GDS) mandates Infrastructure as Code and configuration management for all government digital platforms through the GDS Technology Code of Practice (TCoP). Principle 14 ("Use cloud first") and Principle 15 ("Make things secure") together require IaC-managed cloud infrastructure with automated [[Security Scanning]] and [[Audit]] trails. The NCSC's Cyber Assessment Framework (CAF) includes configuration management as a key control: organisations managing national infrastructure must demonstrate that all assets have documented configurations and that changes are controlled.

  ## Configuration Management Mathematical Framework

  Configuration management has a formal mathematical basis in several areas.

  ### Version Vectors and Merge Semantics

  Git's object model is founded on a directed acyclic graph (DAG) of commit objects, where each commit is a cryptographic hash of its content and its parents' hashes. This Merkle DAG structure provides:
  - **Content addressing**: Any commit, tree, or blob is uniquely identified by its SHA-256 hash, making content-based identity the basis of the version control system.
  - **Tamper detection**: Any modification to a committed object changes its hash, invalidating all parent commits. The Git history is cryptographically immutable.
  - **Three-way merge**: When two branches diverge from a common ancestor, Git computes the three-way merge by: identifying the merge base (the most recent common ancestor); computing the diff from the base to each branch head; applying both diffs to the base. Conflicts occur only where the two branches made overlapping changes to the same lines.

  The formal theory of three-way merges was studied by Khanna, Kunal, and Pierce (2007), who proved that three-way merge is the optimal strategy for reconciling two independently edited versions of a file against their common ancestor. This result underpins the correctness of Git's merge algorithm.

  ### Idempotency and Convergence Properties

  Desired-state CM tools implement a form of *convergent idempotency*: repeated application of the same desired-state definition converges the system to the same final state. This is formally stronger than simple idempotency (same input → same output) because the input includes the current state of the system. The convergence proof for [[Ansible]] and Terraform relies on the fact that each individual resource type implements a *convergent state machine*: a tuple (current_state, desired_state) → action set → new_state, where if current_state = desired_state then action_set = ∅.

  Terraform's plan operation is the formal verification of this: it computes the change set required to move from current state (as recorded in the state file) to desired state (as declared in the HCL). The change set has the property that if applied to the current state, the resulting state equals the desired state. If the change set is empty (no-op plan), current state already equals desired state.

  ### Configuration Space Complexity

  The configuration space of a system with n independently configurable parameters, each with k possible values, is k^n — exponential in the number of parameters. This combinatorial explosion is the fundamental reason that configuration drift is so difficult to detect exhaustively and why automated CM tools are essential rather than optional at scale. Infrastructure serving a large enterprise may have thousands of independently configured resources; manual auditing of their configurations is computationally and practically infeasible. Automated CM tools reduce the verification problem from O(k^n) enumeration to O(n) policy evaluation — checking each resource's configuration against its policy independently.

  ## Quantified Adoption and Market Data

  - The IaC market was valued at $1.74 billion in 2024 and is projected to reach $12.86 billion by 2032 at a CAGR of approximately 28%.
  - Over 80% of enterprise organisations report using IaC as of 2025.
  - Immutable infrastructure approaches held over 60% market share in 2024, reflecting the near-universal adoption of containerised deployments.
  - [[Ansible]] is the most widely adopted CM tool for configuration management (as distinct from provisioning), with over 20,000 community-contributed roles and collections as of 2025.
  - [[Terraform]] is the most widely adopted provisioning tool, though OpenTofu claims approximately 20% of new project starts in 2025.
  - CNCF surveys (2024) show Argo CD adoption in over 70% of Kubernetes-using organisations.
  - The DORA State of DevOps 2023 reports that elite DevOps performers have a 127x higher deployment frequency than low performers, with strong version control and CM practices being among the strongest predictors of elite status.
  - In UK financial services, the FCA's operational resilience requirements (PS21/3, effective March 2022, strengthened 2025) require all firms to map and test important business services, which in practice requires documented configuration management of the supporting IT infrastructure. Estimated compliance programme spend at major UK banks: £50–100M+ per firm.

  ## Research and Literature

  1. Bersoff, E. H., Henderson, V. D. & Siegel, S. G. (1980). *Software Configuration Management: An Investment in Product Integrity*. Prentice-Hall.
  2. Tichy, W. F. (1985). RCS — a system for version control. *Software: Practice and Experience*, 15(7), 637–654. https://doi.org/10.1002/spe.4380150703
  3. IEEE (2012). *IEEE 828-2012: IEEE Standard for Configuration Management in Systems and Software Engineering*. IEEE. https://standards.ieee.org/standard/828-2012.html
  4. NIST (2019). *Special Publication 800-128: Guide for Security-Focused Configuration Management of Information Systems* (updated). https://csrc.nist.gov/pubs/sp/800/128/upd1/final
  5. ISO (2003). *ISO 10007: Quality Management Guidelines for Configuration Management*. International Standards Organisation.
  6. Estublier, J. (2000). Software configuration management: a roadmap. *Proc. Conf. on the Future of Software Engineering (ICSE 2000)*, 279–289. https://doi.org/10.1145/336512.336568
  7. Kim, G., Humble, J., Debois, P. & Willis, J. (2016). *The DevOps Handbook*. IT Revolution Press.
  8. Richardson, A. (2017). GitOps: Operations by pull request. *Weaveworks Blog*. https://www.weave.works/blog/gitops-operations-by-pull-request
  9. Puppet Labs / DORA / Google. (2023). *State of DevOps Report 2023*. https://dora.dev/research/2023/
  10. Fowler, M. (2006). Continuous Integration. *martinfowler.com*. https://martinfowler.com/articles/continuousIntegration.html
  11. Humble, J. & Farley, D. (2010). *Continuous Delivery*. Addison-Wesley.
  12. Torvalds, L. (2005). Git design notes. Linux Kernel Mailing List.
  13. HashiCorp. (2014–2025). *Terraform documentation*. https://developer.hashicorp.com/terraform/docs
  14. Red Hat / Ansible. (2012–2025). *Ansible documentation*. https://docs.ansible.com/
  15. OpenTofu. (2023–2025). *OpenTofu documentation*. https://opentofu.org/docs/
  16. CNCF GitOps Working Group. (2021). *OpenGitOps Principles*. https://opengitops.dev/
  17. Kief Morris. (2020). *Infrastructure as Code* (2nd ed.). O'Reilly Media.
  18. Beyer, B., Jones, C., Petoff, J. & Murphy, R. (eds.) (2016). *Site Reliability Engineering*. Google / O'Reilly.
  19. Open Policy Agent. (2019–2025). *OPA documentation*. https://www.openpolicyagent.org/docs/
  20. AXELOS. (2019). *ITIL 4 Foundation*. TSO.
  21. NCSC. (2023). *Cyber Essentials scheme technical requirements*. https://www.ncsc.gov.uk/cyberessentials
  22. FCA. (2021). *PS21/3: Building operational resilience*. https://www.fca.org.uk/publication/policy/ps21-3.pdf
  23. Pulumi. (2018–2025). *Infrastructure as Code tools comparison*. https://www.pulumi.com/blog/infrastructure-as-code-tools/
  24. TerraFormer: Automated Infrastructure-as-Code with LLMs. (2025). *arXiv:2601.08734*. https://arxiv.org/html/2601.08734
  25. Sistilli, G. (2025). Ansible, Chef, and Puppet for DevOps automation. *Medium / Level Up Coding*. https://medium.com/@giulio.sistilli/ansible-chef-and-puppet-free-tools-for-devops-automation-7a52b34c5767
  26. NuCamp. (2026). Infrastructure as Code in 2026: Terraform, Ansible, and CloudFormation explained. https://www.nucamp.co/blog/infrastructure-as-code-in-2026-terraform-ansible-and-cloudformation-explained
  27. StackSpectra. (2025). Infrastructure as Code explained: Terraform vs Ansible vs Pulumi. https://stackspectra.com/infrastructure-as-code-explained-terraform-vs-ansible-vs-pulumi-devops-guide/

- ### Provenance
  - sources:: IEEE 828-2012; NIST SP 800-128 (csrc.nist.gov/pubs/sp/800/128/upd1/final); ISO 10007; Kim et al. The DevOps Handbook (2016); DORA State of DevOps 2023; OpenGitOps Principles (opengitops.dev); HashiCorp Terraform docs; Pulumi IaC tools comparison; arXiv:2601.08734; NuCamp IaC 2026
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm
