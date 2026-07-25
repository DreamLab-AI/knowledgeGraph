public:: true

# Pull Request

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:pull-request", "@type":"Page", "title":"Pull Request", "vc:slug":"pull-request", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:pull-request",
  "@type":"Class",
  "label":"Pull Request",
  "definition":"A pull request is a proposal to merge a set of changes from one branch into another, packaged so that collaborators can review, discuss, and verify the work before it is integrated. It bundles a diff, a description, and a thread of review comments, and typically triggers automated checks that must pass before merge. Pull requests are the central unit of collaboration in distributed version control workflows, making change proposals visible, reviewable, and auditable.",
  "domain":"distributed-collaboration",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:code-review","label":"Code Review"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:commit","label":"Commit"},
      {"@id":"urn:ngm:class:peer-review","label":"Peer Review"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:version-control","label":"Version Control"},
      {"@id":"urn:ngm:class:git","label":"Git"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:continuous-integration","label":"Continuous Integration"},
      {"@id":"urn:ngm:class:code-review","label":"Code Review"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:collaboration","label":"Collaboration"},
      {"@id":"urn:ngm:class:quality-assurance","label":"Quality Assurance"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:workflow-automation","label":"Workflow Automation"},
      {"@id":"urn:ngm:class:audit","label":"Audit"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:software-development","label":"Software Development"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:git","label":"Git"},
      {"@id":"urn:ngm:class:continuous-integration","label":"Continuous Integration"},
      {"@id":"urn:ngm:class:peer-review","label":"Peer Review"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A pull request is a reviewable proposal to merge changes from one branch into another.
  - It is a structured form of [[Code Review]] and a core artefact of [[Software Development]].
  - It requires [[Version Control]] and is most commonly enacted through [[Git]] hosting platforms.
  - It packages [[Commit]] history with [[Peer Review]] discussion and automated checks.
- ### Overview
  - A pull request makes a change proposal explicit, gathering the diff, a rationale, and a conversation in one place.
  - Reviewers inspect the changes, comment inline, request modifications, and approve when satisfied.
  - Continuous integration runs tests and policy checks against the proposed change, gating merge on passing results.
  - The merged or closed pull request leaves a durable, auditable record of why and how the codebase evolved.
- ### Key aspects
  - Diff and changeset: the concrete set of additions and deletions proposed for merge.
  - Review thread: inline and general comments capturing discussion and requested changes.
  - Status checks: automated builds, tests, and policy gates that must pass before merge.
  - Approvals and rules: required reviewer sign-off and branch protection policies.
  - Merge strategies: options such as merge commit, squash, or rebase that integrate the change.
- ### Applications
  - Coordinating contributions in open source and internal engineering teams.
  - Enforcing quality gates through mandatory review and passing CI before integration.
  - Providing an audit trail linking code changes to discussion and approvals.
  - Triggering automated workflows for testing, security scanning, and deployment.
- ### Relationships
  - hasPart:: [[Commit]]
  - hasPart:: [[Peer Review]]
  - requires:: [[Version Control]]
  - requires:: [[Git]]
  - uses:: [[Continuous Integration]]
  - uses:: [[Code Review]]
  - enables:: [[Collaboration]]
  - enables:: [[Quality Assurance]]
  - supports:: [[Workflow Automation]]
  - supports:: [[Audit]]
  - partOf:: [[Software Development]]
  - relatedTo:: [[Git]]
  - relatedTo:: [[Continuous Integration]]
  - relatedTo:: [[Peer Review]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
