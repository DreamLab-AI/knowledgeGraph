- ### Definition
  "Based on" is a provenance and derivation relation used in robotics standards and quality management frameworks to indicate that a system, design, or specification is derived from or conforms to an authoritative reference standard. Within the robotics domain it records the normative lineage of robot software architectures, safety certifications, and performance benchmarks relative to their governing standards such as ISO 9001 or IEC 61508.

- ### Relationships
  - relatedTo:: [[Robotics]], [[Functional Safety]], [[Quality Standard]], [[Iso Standards]]
  - uses:: [[Standards Conformance]], [[Compliance Standards]]
  - supports:: [[Robot Safety]], [[Robotics Systems]]
  - requires:: [[Standardization Bodies]], [[Standards Documentation]]
  - bridgesTo:: [[Robotics Platform]]

- ### Content
  In robotics engineering and certification contexts, the "based on" relation serves as a formal traceability link between a concrete artefact—a robot control system, a safety validation report, a performance test suite—and the standard or specification from which its requirements are derived. This traceability is required by functional safety standards (IEC 61508, ISO 10218 for industrial robots, ISO/TS 15066 for collaborative robots) which mandate that every safety requirement be traceable to its normative source.

  Quality management systems in robotics manufacturing, typically certified against ISO 9001, use "based on" relations extensively in their document hierarchies: procedures reference the clauses that mandate them, work instructions reference the procedures that instantiate them, and calibration records reference the measurement standards that define acceptance criteria. This hierarchical derivation chain enables auditors to verify that the quality management system comprehensively addresses all applicable standard requirements.

  The semantic significance of "based on" distinguishes it from weaker relations such as "references" or "mentions." A system that is based on a standard has adopted that standard's requirements as binding constraints on its design or operation, whereas a document that merely references a standard may do so informatively. This distinction matters for conformity assessment: regulatory bodies evaluating robot deployments under the EU Machinery Directive or the proposed AI Act require evidence that safety-critical systems are based on—not merely aware of—applicable harmonised standards.

  In ontological modelling, "based on" functions as a derivation or instantiation relation bridging abstract standards to concrete implementations, enabling reasoning about compliance coverage and gap analysis across complex robotics systems composed of components certified against different standards.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z