A software bill of materials is a formal, machine-readable inventory of the components, libraries and dependencies that make up a software artefact, together with their versions, suppliers and relationships. It provides transparency into what a piece of software actually contains, enabling vulnerability tracking, licence auditing and provenance verification across the supply chain. Standard formats such as SPDX and CycloneDX let an SBOM be generated, exchanged and consumed automatically by tooling.

### Overview

- Modern software composes many third-party and open-source parts, making it hard to know what is actually shipped.
- An SBOM lists every component, its version, supplier and dependency relationship in a standard format.
- When a new vulnerability is disclosed, defenders query SBOMs to find which products are exposed, rather than rescanning everything.

### Key aspects

- Component inventory with versions, suppliers and hashes.
- Dependency relationships expressing how parts compose.
- Standard formats such as SPDX and CycloneDX for interchange.
- Automated generation during the build pipeline.

### Applications

- Rapid impact analysis when a [[Vulnerability]] is disclosed.
- Licence auditing of [[Open Source]] dependencies.
- Embedding SBOM generation in [[DevSecOps]] and [[Continuous Integration]].
- Demonstrating [[Transparency]] to customers and regulators.

### Provenance

