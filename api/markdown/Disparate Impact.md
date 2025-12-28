- ### OntologyBlock
  id:: disparate-impact-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0381
	- source-domain:: ai
	- preferred-term:: Disparate Impact
	- status:: approved
	- public-access:: true
	- definition:: Disparate Impact is a legal doctrine and form of indirect discrimination that occurs when facially neutral policies, practices, or algorithmic systems disproportionately affect protected groups, regardless of intent to discriminate. Originating from US employment law (EEOC Uniform Guidelines 1978) and extended to UK and EU anti-discrimination frameworks, disparate impact is measured by comparing selection rates, approval rates, or outcome rates between protected and unprotected groups. The "80 percent rule" (four-fifths rule) establishes that disparate impact exists when the selection rate for a protected group is less than 80 percent of the rate for the highest-performing group, calculated as a disparate impact ratio. Unlike disparate treatment (intentional direct discrimination), disparate impact focuses on discriminatory outcomes rather than discriminatory intent. Legal defenses include business necessity (US) - demonstrating the practice is job-related and consistent with business necessity, and proportionate means (UK/EU) - showing the practice is a proportionate means of achieving a legitimate aim. In AI systems, disparate impact analysis requires statistical testing of algorithmic decisions across demographic groups, documentation of less discriminatory alternatives if available, and compliance with sector-specific regulations in employment, lending, insurance, and housing domains.
	- source:: [[US EEOC Uniform Guidelines]], [[UK Equality Act 2010]], [[EU Anti-Discrimination Directives]]
	- maturity:: mature
	- owl:class:: ai:DisparateImpact
	- owl:physicality:: VirtualEntity
	- owl:role:: Process
	- owl:inferred-class:: ai:VirtualProcess
	- belongsToDomain:: [[AIEthicsDomain]], [[DisruptiveTechDomain]]
	- implementedInLayer:: [[ConceptualLayer]]
	- #### Relationships
	  id:: disparate-impact-relationships
	  collapsed:: true
		- is-subclass-of:: [[AIFairness]]

## Disparate Impact

Disparate Impact refers to disparate impact is a legal doctrine and form of indirect discrimination that occurs when facially neutral policies, practices, or algorithmic systems disproportionately affect protected groups, regardless of intent to discriminate. originating from us employment law (eeoc uniform guidelines 1978) and extended to uk and eu anti-discrimination frameworks, disparate impact is measured by comparing selection rates, approval rates, or outcome rates between protected and unprotected groups. the "80 percent rule" (four-fifths rule) establishes that disparate impact exists when the selection rate for a protected group is less than 80 percent of the rate for the highest-performing group, calculated as a disparate impact ratio. unlike disparate treatment (intentional direct discrimination), disparate impact focuses on discriminatory outcomes rather than discriminatory intent. legal defences include business necessity (us) - demonstrating the practice is job-related and consistent with business necessity, and proportionate means (uk/eu) - showing the practice is a proportionate means of achieving a legitimate aim. in ai systems, disparate impact analysis requires statistical testing of algorithmic decisions across demographic groups, documentation of less discriminatory alternatives if available, and compliance with sector-specific regulations in employment, lending, insurance, and housing domains.

- Disparate impact represents a judicial doctrine permitting challenges to employment and educational practices that appear neutral on their face but produce discriminatory outcomes[1][5]
  - Developed within United States jurisprudence, primarily under Title VII of the Civil Rights Act 1964
  - Distinguishes itself fundamentally from disparate treatment, which involves intentional discrimination[1]
  - The doctrine operates on the principle that neutral policies may nonetheless violate civil rights protections if they disproportionately harm protected groups (race, religion, national origin, age, sex, pregnancy, disability, genetics, veteran status)[1]
  - Operates as an indirect discrimination framework, capturing systemic rather than deliberately discriminatory harm

## Technical Details

- **Id**: 0381-disparate-impact-about
- **Collapsed**: true
- **Domain Prefix**: AI
- **Sequence Number**: 0381
- **Filename History**: ["AI-0381-disparate-impact.md"]
- **Public Access**: true
- **Source Domain**: ai
- **Status**: in-progress
- **Last Updated**: 2025-10-29
- **Maturity**: mature
- **Source**: [[US EEOC Uniform Guidelines]], [[UK Equality Act 2010]], [[EU Anti-Discrimination Directives]]
- **Authority Score**: 0.95
- **Owl:Class**: ai:DisparateImpact
- **Owl:Physicality**: VirtualEntity
- **Owl:Role**: Process
- **Owl:Inferred Class**: ai:VirtualProcess
- **Belongstodomain**: [[AIEthicsDomain]]
- **Implementedinlayer**: [[ConceptualLayer]]

## Current Landscape (2025)

- Regulatory environment and enforcement
  - The Equal Employment Opportunity Commission (EEOC) historically prohibited discrimination against protected classes in employment decisions[1]
  - As of September 2025, the EEOC announced closure of all pending charges based solely on disparate impact allegations, following Executive Order 14281 ("Restoring Equality of Opportunity and Meritocracy")[2]
  - This represents a significant policy shift away from disparate impact analysis in federal civil rights enforcement
  - Employers remain responsible for reducing bias in hiring processes, though the legal framework for enforcement has contracted substantially[1]
- Common selection criteria producing disparate impact
  - Background cheques, credit cheques, work experience requirements, pre-employment aptitude tests, and minimum educational qualifications[1]
  - These remain legally permissible when job-related and consistent with business necessity, though their disparate effects are well-documented[1]
  - The tension between meritocratic selection and equitable outcomes remains unresolved in practice
- Technical and analytical considerations
  - Risk-adjusted regression models can identify unjustified disparities not explained by legitimate predictive factors[4]
  - However, such analyses do not automatically prescribe implementable policy alternatives[4]
  - The inclusion of protected characteristics in predictive models risks masking disparate treatment through statistical discrimination[4]

## Research & Literature

- Foundational and contemporary sources
  - Criteria Corp (2024). "What is Disparate Impact?" Glossary entry examining definitional clarity and regulatory context[1]
  - Centre for Equal Opportunity (2025, October 29). "The End of Disparate Impact?" Commentary on Executive Order 14281 and EEOC policy reversal[2]
  - Fordham Institute (date unspecified). "Let's talk about discipline and disparate impact (again)" – examines whether racial disparities necessarily indicate discrimination or may reflect socioeconomic factors[3]
  - Sage Journals (2024). "Reconciling Legal and Empirical Conceptions of Disparate Impact" – technical treatment of risk-adjusted disparities and statistical methodology[4]
  - Britannica (date unspecified). "Disparate Impact: Definition, Theory, Applications, & Facts" – comprehensive overview of judicial development and application beyond Title VII[5]
  - Stanford Law (2025, July 28). "Reassessing Disparate Impact" – contemporary legal analysis[6]
  - U.S. Congress (date unspecified). "What Is Disparate-Impact Discrimination?" – legislative perspective[7]
  - SHRM (date unspecified). "Understanding Disparate Impact vs. Disparate Treatment in Hiring"[8]
- Ongoing scholarly debate
  - Fundamental disagreement persists regarding whether racial disparities themselves constitute evidence of discrimination or whether alternative explanations (socioeconomic factors, differential behaviour patterns) may account for observed outcomes[3]
  - The relationship between statistical disparities and unlawful discrimination remains contested in academic literature

## UK Context

- British legal framework
  - The United Kingdom employs indirect discrimination doctrine under the Equality Act 2010, which functions analogously to disparate impact but operates within a distinct statutory framework
  - UK employment law prohibits practices that, though not discriminatory in form, place persons sharing a protected characteristic at a particular disadvantage[not in search results – general knowledge]
  - The Equality and Human Rights Commission enforces these provisions, though with considerably less enforcement activity than the EEOC historically undertook
- North England considerations
  - No specific disparate impact case law or implementation examples from Manchester, Leeds, Newcastle, or Sheffield appear in current academic literature
  - Regional employment tribunals apply indirect discrimination principles, but disparate impact as a specifically American doctrine has limited direct application in English law
  - The policy shift in US federal enforcement (as of September 2025) does not directly affect UK employment law, though it may influence international best practice discussions

## Future Directions

- Anticipated developments
  - The contraction of disparate impact enforcement in the United States may prompt reconsideration of indirect discrimination approaches globally
  - Employers may face reduced legal incentive to audit selection criteria for disparate effects, potentially increasing systemic inequities
  - Academic research will likely intensify around alternative frameworks for identifying and addressing unintentional discrimination
  - The debate over whether statistical disparities warrant intervention independent of evidence of intentional discrimination will likely sharpen
- Research priorities
  - Empirical investigation of whether disparate impact enforcement actually improved employment outcomes for protected groups
  - Development of alternative analytical frameworks that distinguish between discrimination and legitimate explanatory factors
  - Comparative analysis of indirect discrimination enforcement across jurisdictions (UK, EU, Canada, Australia)

## References

[1] Criteria Corp. "What is Disparate Impact?" Criteria Corp Glossary. Available at: https://www.criteriacorp.com/resources/glossary/disparate-impact
[2] Centre for Equal Opportunity. "The End of Disparate Impact?" 29 October 2025. Available at: https://ceousa.org/2025/10/29/the-end-of-disparate-impact/
[3] Fordham Institute. "Let's talk about discipline and disparate impact (again)." Commentary. Available at: https://fordhaminstitute.org/national/commentary/lets-talk-about-discipline-and-disparate-impact-again
[4] Sage Journals. "Reconciling Legal and Empirical Conceptions of Disparate Impact." *Journal Title* (2024). DOI: 10.1177/2755323X241243168
[5] Britannica. "Disparate Impact: Definition, Theory, Applications, & Facts." Available at: https://www.britannica.com/topic/disparate-impact
[6] Stanford Law. "Reassessing Disparate Impact." Legal Aggregate, 28 July 2025. Available at: https://law.stanford.edu/2025/07/28/reassessing-disparate-impact/
[7] U.S. Congress. "What Is Disparate-Impact Discrimination?" CRS Product IF13057. Available at: https://www.congress.gov/crs-product/IF13057
[8] SHRM. "Understanding Disparate Impact vs. Disparate Treatment in Hiring." Available at: https://www.shrm.org/topics-tools/tools/hr-answers/disparate-impact-disparate-treatment

## Metadata

- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
