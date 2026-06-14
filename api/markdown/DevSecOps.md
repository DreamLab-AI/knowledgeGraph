public:: true

# DevSecOps
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dev-sec-ops",
  "@type": "Page",
  "vc:slug": "dev-sec-ops",
  "title": "DevSecOps",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:dev-sec-ops",
  "@type": "Class",
  "label": "DevSecOps",
  "definition": "DevSecOps is a software engineering practice that integrates security controls, testing, and policy enforcement directly into the continuous integration and delivery pipeline, making security a shared responsibility across development, operations, and security teams. It applies the principle of shift-left security, automating vulnerability scanning, dependency auditing, and policy-as-code checks at every stage from code commit through production deployment.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:agile-software-development", "label": "Agile Software Development"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:ci-cd-automation", "label": "CI-CD Automation"},
      {"@id": "urn:ngm:class:vulnerability-scanner", "label": "Vulnerability Scanner"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:security-testing", "label": "Security Testing"},
      {"@id": "urn:ngm:class:penetration-testing", "label": "Penetration Testing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:vulnerability-management", "label": "Vulnerability Management"},
      {"@id": "urn:ngm:class:continuous-integration", "label": "Continuous Integration"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  DevSecOps extends [[Agile Software Development]] and [[CI/CD Automation]] by embedding automated security gates — static analysis (SAST), dynamic analysis (DAST), and software composition analysis (SCA) — into every pipeline stage, ensuring [[Vulnerability Management]] is continuous rather than periodic.

- ### Relationships
  It requires [[Vulnerability Scanner]] tooling and [[Security Testing]] frameworks, integrates with [[Continuous Integration]] systems, and uses [[Penetration Testing]] protocols to validate runtime security posture.

- ### Content
  - DevSecOps emerged from the recognition that traditional "security at the end" models were incompatible with the release velocity demanded by DevOps. The term was popularised around 2012 and gained industry-wide traction after high-profile breaches (Equifax 2017, SolarWinds 2020) demonstrated that late-stage security reviews created unacceptable risk windows. The Gartner DevSecOps adoption curve placed it in mainstream enterprise practice by 2022.

  - The core mechanism is automated policy enforcement at each pipeline gate: pre-commit hooks run secret detection and linting; CI runners execute SAST tools (Semgrep, Checkmarx, Snyk) against every pull request; container image builds are scanned for OS and library CVEs before registry push; and infrastructure-as-code templates are validated against compliance policies (OPA, Checkov). Security findings are surfaced as pipeline failures, blocking merges until remediated.

  - DevSecOps matters because it collapses the mean time to remediation (MTTR) for vulnerabilities from weeks to hours by catching them at the source. It also satisfies regulatory requirements in regulated sectors — PCI-DSS, HIPAA, FedRAMP — which mandate continuous control validation. For AI systems specifically, it extends to model supply chain integrity: scanning training data pipelines, validating model artefacts with cryptographic checksums, and auditing inference dependencies.

  - By 2024-2025, the practice has evolved to encompass AI-assisted DevSecOps where large language models triage and auto-remediate vulnerability findings, reducing alert fatigue. Platform engineering teams now codify security guardrails into internal developer portals (Backstage, Port), making secure defaults effortless. Supply chain security standards such as SLSA Level 3 and SBOM mandates from the US Executive Order 14028 have become standard DevSecOps outputs.
