- ### Definition
  - AI Ethics Board is a multidisciplinary oversight committee comprising technical experts, ethicists, legal professionals, domain specialists, and stakeholder representatives, responsible for conducting ethical reviews of AI systems, providing guidance on ethical dilemmas, and exercising veto authority over AI deployments that violate ethical principles or organizational values. This governance body evaluates proposed AI systems against ethical frameworks, assesses potential harms and benefits, reviews fairness and bias implications, examines privacy and data protection compliance, and ensures alignment with responsible AI principles. The board operates through structured ethical review processes including proposal submission and screening, expert deliberation and assessment, stakeholder consultation and impact evaluation, ethical decision-making with documented rationale, and ongoing monitoring of deployed systems. Authority and scope typically include power to approve, conditionally approve with modifications, defer for additional information, or reject AI projects, mandate ethical impact assessments and fairness audits, require mitigation measures for identified risks, and escalate significant ethical concerns to executive leadership. Effective boards maintain independence from AI development teams to avoid conflicts of interest, possess diverse expertise spanning technical, ethical, legal, and social dimensions, engage affected communities in deliberations, and report to senior governance structures. Implementation follows models from research ethics committees and institutional review boards, adapted for AI-specific challenges as recommended by the EU High-Level Expert Group on AI and IEEE P7000 series standards.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIEthicsBoard
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - requires:: [[Human Oversight]], [[Governance Structure]], [[Stakeholder]]
  - enables:: [[Responsible AI]], [[Compliance Framework]], [[Accountability]]
  - hasPart:: [[Risk Assessment]], [[Audit Trail]], [[AI Ethics Checklist]]
  - relatedTo:: [[AI Governance Framework]], [[Ai Governance Principle]], [[Responsible AI Principles]], [[Governance Board]], [[Stakeholder Engagement in AI]]
  - supports:: [[Transparency]], [[Fairness Constraints]]
  - implements:: [[Ethical AI]], [[AI Policy]]

- ### Content
  AI Ethics Boards emerged as a governance mechanism in response to growing recognition that consequential AI deployments — in hiring, lending, criminal justice, healthcare, and public services — require structured human oversight beyond technical quality assurance. The structural precedent is the Institutional Review Board (IRB) model from biomedical research ethics, adapted for AI's distinct challenges: rapid iteration cycles, opacity of model internals, emergent behaviours, and cross-domain deployment.

  Effective boards operate through a defined review lifecycle. Proposal intake involves AI project teams submitting structured descriptions of the system's purpose, data sources, affected populations, and planned mitigations. Expert deliberation engages board members from relevant disciplines — a clinical ethicist for a medical AI, a criminologist for a predictive policing system, a civil rights attorney for a credit-scoring model. Stakeholder consultation may include community members from affected groups, whose lived experience of algorithmic harms provides evidence not captured in technical audits. The board issues a decision — approval, conditional approval, deferral, or rejection — with documented rationale, creating an accountability trail.

  Board authority varies significantly between organisations. Advisory boards provide guidance but lack binding power; approval boards exercise veto rights over deployments; monitoring boards conduct post-deployment audits with authority to mandate changes or decommissioning. The EU AI Act (2024) mandates conformity assessments for high-risk AI systems that parallel the functions of an ethics board, elevating this from voluntary best practice to regulatory requirement for EU-market AI.

  Common structural weaknesses include insufficient independence (board members are internal employees subject to business pressure), lack of technical capacity among non-technical members, inadequate ongoing monitoring relative to initial review emphasis, and absence of external accountability for board decisions. Models such as Microsoft's Aether committee, Google's (now disbanded) external AI ethics council, and Mastercard's AI Ethics Principles demonstrate the range of implementation approaches. The IEEE P7000 series and ISO/IEC 42001:2023 provide standardised process guidance for AI ethics governance programmes that AI Ethics Boards can reference and implement.

- ### Provenance
  - sources:: [[EU HLEG AI]], [[IEEE P7000]], [[ISO/IEC 42001:2023]]
  - migration-date:: 2026-04-26T00:00:00Z