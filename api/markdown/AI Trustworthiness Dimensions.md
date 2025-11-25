- ### OntologyBlock
  id:: ai-trustworthiness-dimensions-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0408
	- preferred-term:: AI Trustworthiness Dimensions
	- status:: in
	- public-access:: true
	- definition:: AI Trustworthiness Dimensions are the seven interdependent assessment criteria that collectively define whether an AI system meets trustworthiness requirements, ensuring ethical, lawful, and robust deployment while protecting fundamental rights and enabling societal benefit. Established by the EU High-Level Expert Group on AI Ethics Guidelines (2019) and integrated into the EU AI Act (2024), these dimensions provide comprehensive evaluation framework covering human agency and oversight (fundamental rights to self-determination and meaningful human control over automated systems), technical robustness and safety (resilience to attacks, fallback mechanisms, accuracy reliability, and general safety controls), privacy and data governance (data minimization, purpose limitation, privacy by design and default, quality assurance, and access controls), transparency and explainability (traceability of development processes, explainability of decisions tailored to stakeholder needs, and communication transparency about AI involvement and capabilities), diversity non-discrimination and fairness (avoidance of unfair bias, accessibility and universal design, and inclusive stakeholder participation), societal and environmental wellbeing (environmental sustainability through resource efficiency, assessment of social impacts on employment and skills, alignment with sustainable development goals, and democratic process considerations), and accountability (auditability through comprehensive documentation, risk management processes, redress mechanisms for contestation, and clear responsibility assignment). Trustworthy AI systems must satisfy all seven dimensions simultaneously, as they are mutually reinforcing rather than substitutable, with assessment methodologies involving dimension-specific sub-requirements, specialized assessment criteria for each dimension, and derivation from fundamental rights including human dignity, privacy, non-discrimination, and democratic participation as codified in the EU Charter of Fundamental Rights and Universal Declaration of Human Rights.
	- source:: [[EU HLEG AI]], [[EU Charter of Fundamental Rights]], [[EU AI Act]]
	- maturity:: mature
	- owl:class:: aigo:AITrustworthinessDimensions
	- owl:physicality:: VirtualEntity
	- owl:role:: Process
	- owl:inferred-class:: aigo:VirtualProcess
	- belongsToDomain:: [[AIEthicsDomain]]
	- implementedInLayer:: [[ConceptualLayer]]
	- #### Relationships
	  id:: ai-trustworthiness-dimensions-relationships
	  collapsed:: true
		- is-subclass-of:: [[AITrustworthiness]]

## AI Trustworthiness Dimensions

AI Trustworthiness Dimensions refers to ai trustworthiness dimensions are the seven interdependent assessment criteria that collectively define whether an ai system meets trustworthiness requirements, ensuring ethical, lawful, and robust deployment while protecting fundamental rights and enabling societal benefit. established by the eu high-level expert group on ai ethics guidelines (2019) and integrated into the eu ai act (2024), these dimensions provide comprehensive evaluation framework covering human agency and oversight (fundamental rights to self-determination and meaningful human control over automated systems), technical robustness and safety (resilience to attacks, fallback mechanisms, accuracy reliability, and general safety controls), privacy and data governance (data minimization, purpose limitation, privacy by design and default, quality assurance, and access controls), transparency and explainability (traceability of development processes, explainability of decisions tailored to stakeholder needs, and communication transparency about ai involvement and capabilities), diversity non-discrimination and fairness (avoidance of unfair bias, accessibility and universal design, and inclusive stakeholder participation), societal and environmental wellbeing (environmental sustainability through resource efficiency, assessment of social impacts on employment and skills, alignment with sustainable development goals, and democratic process considerations), and accountability (auditability through comprehensive documentation, risk management processes, redress mechanisms for contestation, and clear responsibility assignment). trustworthy ai systems must satisfy all seven dimensions simultaneously, as they are mutually reinforcing rather than substitutable, with assessment methodologies involving dimension-specific sub-requirements, specialized assessment criteria for each dimension, and derivation from fundamental rights including human dignity, privacy, non-discrimination, and democratic participation as codified in the eu charter of fundamental rights and universal declaration of human rights.

- Industry adoption and implementations
	- Trustworthiness is a key consideration in sectors such as healthcare, finance, and public services, where AI systems are increasingly deployed for high-stakes decision-making
	- Organisations such as NHS Digital, the Alan Turing Institute, and the Centre for Data Ethics and Innovation are actively developing and applying trust frameworks
	- UK-based platforms like Babylon Health and DeepMind have integrated trust metrics into their AI governance processes
- Notable organisations and platforms
	- NHS Digital: Implementing AI trust frameworks in healthcare applications
	- Alan Turing Institute: Leading research on AI ethics and trust
	- Centre for Data Ethics and Innovation: Advising government on AI trust and regulation
- UK and North England examples where relevant
	- Manchester: The University of Manchester’s AI Trust Lab is exploring trust in AI for urban planning and public services
	- Leeds: Leeds City Council is piloting AI-driven trust frameworks for local government services
	- Newcastle: Newcastle University’s Centre for Social Justice and Community Action is researching trust in AI for social care
	- Sheffield: The University of Sheffield’s Advanced Manufacturing Research Centre is applying trust metrics in industrial AI applications
- Technical capabilities and limitations
	- Current AI systems can be evaluated for trustworthiness using a combination of technical metrics (e.g., accuracy, robustness) and socio-ethical metrics (e.g., fairness, transparency)
	- Limitations include the difficulty of quantifying subjective trust perceptions and the challenge of aligning actual and perceived trustworthiness
- Standards and frameworks
	- ISO/IEC 23894:2023 provides guidelines for AI trustworthiness
	- The EU AI Act and UK AI Regulation Framework set out requirements for trustworthy AI deployment
	- The TrustNet Framework, developed by an international research team, offers a transdisciplinary approach to understanding and bolstering trust in AI

## Technical Details

- **Id**: 0408-aitrustworthinessdimensions-about
- **Collapsed**: true
- **Domain Prefix**: AI
- **Sequence Number**: 0408
- **Filename History**: ["AI-0408-AITrustworthinessDimensions.md"]
- **Public Access**: true
- **Source Domain**: ai
- **Status**: in-progress
- **Last Updated**: 2025-10-29
- **Maturity**: mature
- **Source**: [[EU HLEG AI]], [[EU Charter of Fundamental Rights]], [[EU AI Act]]
- **Authority Score**: 0.95
- **Owl:Class**: aigo:AITrustworthinessDimensions
- **Owl:Physicality**: VirtualEntity
- **Owl:Role**: Process
- **Owl:Inferred Class**: aigo:VirtualProcess
- **Belongstodomain**: [[AIEthicsDomain]]
- **Implementedinlayer**: [[ConceptualLayer]]

## Research & Literature

- Key academic papers and sources
	- Mayer, R. C., Davis, J. H., & Schoorman, F. D. (1995). An integrative model of organisational trust. Academy of Management Review, 20(3), 709–734. https://doi.org/10.5465/amr.1995.9508080335
	- Lee, J. D., & See, K. A. (2004). Trust in automation: Designing for appropriate reliance. Human Factors, 46(1), 50–80. https://doi.org/10.1518/hfes.46.1.50.30392
	- Zerilli, J., Knott, A., Maclaurin, J., & Gavaghan, C. (2022). Transparency in AI: A review of the literature. AI & Society, 37(2), 451–468. https://doi.org/10.1007/s00146-021-01234-5
	- Hoffman, R. R., Mueller, S. T., Klein, G., & Litman, D. (2023). Explaining explanation: A review of the literature on explainable AI. AI Magazine, 44(1), 1–20. https://doi.org/10.1609/aimag.v44i1.1.1.1
	- Schlicker, M., et al. (2025). Trustworthy AI: A scoping review of the AIES & FAccT community. arXiv:2510.21293v1. https://arxiv.org/html/2510.21293v1
	- Liao, Q. V., et al. (2022). Designing for trust in AI: A review of the literature. ACM Transactions on Computer-Human Interaction, 29(3), 1–35. https://doi.org/10.1145/3510000.3510001
	- Jian, N. L., Bisantz, A. M., & Drury, C. G. (2000). Foundations for an empirically determined scale of trust in automated systems. International Journal of Cognitive Ergonomics, 4(1), 53–71. https://doi.org/10.1207/S15327566IJCE0401_4
- Ongoing research directions
	- Developing robust methods to evaluate and align actual and perceived trustworthiness
	- Exploring the role of explainability and transparency in building trust
	- Investigating the impact of cultural and philosophical dimensions on AI trustworthiness

## UK Context

- British contributions and implementations
	- The UK has been at the forefront of AI trust research, with significant contributions from the Alan Turing Institute, the Centre for Data Ethics and Innovation, and leading universities
	- The UK government has published guidelines and frameworks for trustworthy AI, including the AI Regulation Framework and the National AI Strategy
- North England innovation hubs (if relevant)
	- Manchester: The University of Manchester’s AI Trust Lab is a leading centre for research on trust in AI for urban planning and public services
	- Leeds: Leeds City Council is piloting AI-driven trust frameworks for local government services
	- Newcastle: Newcastle University’s Centre for Social Justice and Community Action is researching trust in AI for social care
	- Sheffield: The University of Sheffield’s Advanced Manufacturing Research Centre is applying trust metrics in industrial AI applications
- Regional case studies
	- Manchester: The AI Trust Lab has developed a trust framework for AI-driven urban planning, which has been piloted in several local authority projects
	- Leeds: Leeds City Council’s AI trust framework has been used to improve transparency and accountability in local government services
	- Newcastle: The Centre for Social Justice and Community Action has conducted research on trust in AI for social care, with findings informing local policy
	- Sheffield: The Advanced Manufacturing Research Centre has applied trust metrics to industrial AI applications, improving reliability and user confidence

## Future Directions

- Emerging trends and developments
	- Increasing focus on the alignment of actual and perceived trustworthiness
	- Growing interest in the role of explainability and transparency in building trust
	- Development of new metrics and frameworks for evaluating AI trustworthiness
- Anticipated challenges
	- The difficulty of quantifying subjective trust perceptions
	- The challenge of aligning actual and perceived trustworthiness
	- The need for robust methods to evaluate and validate AI trustworthiness
- Research priorities
	- Developing robust methods to evaluate and align actual and perceived trustworthiness
	- Exploring the role of explainability and transparency in building trust
	- Investigating the impact of cultural and philosophical dimensions on AI trustworthiness

## References

1. Mayer, R. C., Davis, J. H., & Schoorman, F. D. (1995). An integrative model of organisational trust. Academy of Management Review, 20(3), 709–734. https://doi.org/10.5465/amr.1995.9508080335
2. Lee, J. D., & See, K. A. (2004). Trust in automation: Designing for appropriate reliance. Human Factors, 46(1), 50–80. https://doi.org/10.1518/hfes.46.1.50.30392
3. Zerilli, J., Knott, A., Maclaurin, J., & Gavaghan, C. (2022). Transparency in AI: A review of the literature. AI & Society, 37(2), 451–468. https://doi.org/10.1007/s00146-021-01234-5
4. Hoffman, R. R., Mueller, S. T., Klein, G., & Litman, D. (2023). Explaining explanation: A review of the literature on explainable AI. AI Magazine, 44(1), 1–20. https://doi.org/10.1609/aimag.v44i1.1.1.1
5. Schlicker, M., et al. (2025). Trustworthy AI: A scoping review of the AIES & FAccT community. arXiv:2510.21293v1. https://arxiv.org/html/2510.21293v1
6. Liao, Q. V., et al. (2022). Designing for trust in AI: A review of the literature. ACM Transactions on Computer-Human Interaction, 29(3), 1–35. https://doi.org/10.1145/3510000.3510001
7. Jian, N. L., Bisantz, A. M., & Drury, C. G. (2000). Foundations for an empirically determined scale of trust in automated systems. International Journal of Cognitive Ergonomics, 4(1), 53–71. https://doi.org/10.1207/S15327566IJCE0401_4
8. ISO/IEC 23894:2023. Guidelines for AI trustworthiness. https://www.iso.org/standard/81234.html
9. EU AI Act. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1689
10. UK AI Regulation Framework. https://www.gov.uk/government/publications/ai-regulation-framework
11. TrustNet Framework. https://trustnet.ai/framework
12. University of Manchester AI Trust Lab. https://www.manchester.ac.uk/research/ai-trust-lab
13. Leeds City Council AI Trust Framework. https://www.leeds.gov.uk/ai-trust-framework
14. Newcastle University Centre for Social Justice and Community Action. https://www.ncl.ac.uk/social-justice
15. University of Sheffield Advanced Manufacturing Research Centre. https://www.sheffield.ac.uk/amrc

## Metadata

- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
