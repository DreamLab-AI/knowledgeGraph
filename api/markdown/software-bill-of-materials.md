- ### Definition
  - A software bill of materials is a machine-readable inventory of a build's components and dependencies, a pillar of [[Supply Chain Security]].
  - It records [[Provenance]] and version data so that each [[Vulnerability]] can be traced to affected software.
  - It is generated within [[Continuous Integration]] and consumed by [[Vulnerability Management]] tooling.

- ### Overview
  - Modern software composes many third-party and open-source parts, making it hard to know what is actually shipped.
  - An SBOM lists every component, its version, supplier and dependency relationship in a standard format.
  - When a new vulnerability is disclosed, defenders query SBOMs to find which products are exposed, rather than rescanning everything.

- ### Key aspects
  - Component inventory with versions, suppliers and hashes.
  - Dependency relationships expressing how parts compose.
  - Standard formats such as SPDX and CycloneDX for interchange.
  - Automated generation during the build pipeline.

- ### Applications
  - Rapid impact analysis when a [[Vulnerability]] is disclosed.
  - Licence auditing of [[Open Source]] dependencies.
  - Embedding SBOM generation in [[DevSecOps]] and [[Continuous Integration]].
  - Demonstrating [[Transparency]] to customers and regulators.

- ### Relationships
  - subClassOf:: [[Supply Chain Security]]
  - hasPart:: [[Provenance]]
  - hasPart:: [[Vulnerability]]
  - partOf:: [[Supply Chain Security]]
  - uses:: [[Provenance]]
  - uses:: [[Continuous Integration]]
  - supports:: [[Vulnerability Management]]
  - supports:: [[DevSecOps]]
  - supports:: [[Transparency]]
  - enables:: [[Vulnerability Management]]
  - enables:: [[Transparency]]
  - requires:: [[Continuous Integration]]
  - relatedTo:: [[Open Source]]
  - relatedTo:: [[Vulnerability]]
  - relatedTo:: [[DevSecOps]]
  - bridgesTo:: [[Supply Chain Security]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation