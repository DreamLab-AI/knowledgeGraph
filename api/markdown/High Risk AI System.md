public:: true

# High Risk AI System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:96bb0de4e8cccc607abb77e96fe5f36cf1ff91b9c8a5e150aef66fb8a42271bb",
  "@type": "Page",
  "vc:slug": "high-risk-ai-system",
  "title": "High Risk AI System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:conformity-assessment-ai-0103",
      "vc:label": "Conformity Assessment (AI-0103)"
    },
    {
      "@id": "urn:visionflow:linked:human-oversight-ai-0041",
      "vc:label": "Human Oversight (AI-0041)"
    },
    {
      "@id": "urn:visionflow:linked:user-experience",
      "vc:label": "user experience"
    },
    {
      "@id": "urn:visionflow:owl:class:introduction-to-me",
      "vc:label": "Introduction to me"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0081"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "High Risk AI System"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:high-risk-ai-system",
  "@type": "Class",
  "label": "High Risk AI System",
  "definition": "An AI system classified as presenting significant risk to health, safety, fundamental rights, or other critical interests based on its intended purpose, deployment context, and potential for substantial adverse impact, subject to stringent regulatory requirements under the EU AI Act and similar f...",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:conformity-assessment",
        "label": "Conformity Assessment (AI-0103)"
      },
      {
        "@id": "urn:ngm:class:human-oversight",
        "label": "Human Oversight (AI-0041)"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:high-risk-ai-system:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:96bb0de4e8cccc607abb77e96fe5f36cf1ff91b9c8a5e150aef66fb8a42271bb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Conformity Assessment (AI-0103)]]",
      "resolved": "urn:visionflow:linked:conformity-assessment-ai-0103",
      "kind": "StubLink"
    },
    {
      "raw": "[[Human Oversight (AI-0041)]]",
      "resolved": "urn:visionflow:linked:human-oversight-ai-0041",
      "kind": "StubLink"
    },
    {
      "raw": "[[user experience]]",
      "resolved": "urn:visionflow:linked:user-experience",
      "kind": "StubLink"
    },
    {
      "raw": "[[Introduction to me]]",
      "resolved": "urn:visionflow:owl:class:introduction-to-me",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An AI system classified as presenting significant risk to health, safety, fundamental rights, or other critical interests based on its intended purpose, deployment context, and potential for substantial adverse impact, subject to stringent regulatory requirements under the EU AI Act and similar frameworks.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:HighRiskAISystem
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - requires:: [[Conformity Assessment (AI-0103)]], [[Human Oversight (AI-0041)]]

- ### Content
  - An AI system classified as presenting significant risk to health, safety, fundamental rights, or other critical interests based on its intended purpose, deployment context, and potential for substantial adverse impact, subject to stringent regulatory requirements under the EU AI Act and similar frameworks.
  - ### Original Content
		- ```
  # High-Risk AI System

		  **Term ID**: AI-0081
		  **Category**: Foundational Concept
		  **Status**: Active
		  **Last Updated**: 2025-10-27

		  ## Definition

		  An AI system classified as presenting significant risk to health, safety, fundamental rights, or other critical interests based on its intended purpose, deployment context, and potential for substantial adverse impact, subject to stringent regulatory requirements under the EU AI Act and similar frameworks.

		  ## Formal Specification

		  ```yaml
		  term: High-Risk AI System
		  definition: "AI system presenting significant risk requiring stringent regulatory requirements"
		  domain: AI Regulation
		  type: Regulatory Classification
		  criteria: [application_area, potential_impact, affected_rights]
		  obligations: [risk_management, data_governance, documentation, human_oversight, conformity_assessment]
		  ```

  #### References
  1. **EU AI Act** (Regulation 2024/1689), June 2024
		     - Article 6: Classification rules for high-risk AI systems
		     - Annex III: List of high-risk AI systems
		     - Source: European Parliament and Council

		  2. **NIST AI RMF 1.0** - Risk-based approach to AI governance

		  ## High-Risk Categories (EU AI Act Annex III)

		  ### 1. Biometrics
		  - Remote biometric identification systems
		  - Biometric categorisation systems
		  - Emotion recognition systems

		  ### 2. Critical Infrastructure
		  - Safety components of critical infrastructure (transport, energy, water)

		  ### 3. Education and Vocational Training
		  - Determining access or admission
		  - Assessment of students
		  - Detecting prohibited behaviour during tests

		  ### 4. Employment
		  - Recruitment and selection
		  - Promotion and termination decisions
		  - Task allocation
		  - Performance and behavior monitoring

		  ### 5. Essential Services
		  - Credit scoring and creditworthiness assessment
		  - Dispatching emergency services
		  - Risk assessment for health/life insurance pricing

		  ### 6. Law Enforcement
		  - Risk assessment for offending/re-offending
		  - Polygraph and similar tools
		  - Evaluation of reliability of evidence
		  - Profiling, crime analytics

		  ### 7. Migration and Border Control
		  - Polygraphs and similar tools
		  - Risk assessment (security, irregular immigration, health)
		  - Verification of travel documents authenticity

		  ### 8. Administration of Justice
		  - Assisting judicial authorities in legal research, case interpretation

		  ## Obligations for High-Risk AI

		  ### 1. Risk Management System (Article 9)
		  - Continuous iterative process
		  - Risk identification, estimation, evaluation
		  - Risk mitigation measures

		  ### 2. Data Governance (Article 10)
		  - Training data quality criteria
		  - Examination of biases
		  - Data governance and management practices

		  ### 3. Technical Documentation (Article 11)
		  - Demonstrate compliance with requirements
		  - Enable assessment by authorities

		  ### 4. Record-Keeping (Article 12)
		  - Automatic logging of events
		  - Traceability throughout lifecycle

		  ### 5. Transparency (Article 13)
		  - Information for deployers
		  - Instructions for use
		  - Capabilities and limitations

		  ### 6. Human Oversight (Article 14)
		  - Meaningful human control
		  - Override capability
		  - Ability to interrupt system

		  ### 7. Accuracy, Robustness, Cybersecurity (Article 15)
		  - Appropriate accuracy levels
		  - Resilience to errors
		  - Protection against manipulation

		  ### 8. Conformity Assessment (Article 43)
		  - Internal control or third-party assessment
		  - CE marking

		  ## Risk vs. High-Risk

		  **AI Risk**: Any potential adverse effect from AI
		  **High-Risk AI System**: Specific regulatory classification based on application domain and impact

		  ## Relationships

		  - **Type Of**: AI System
		  - **Subject To**: EU AI Act Requirements, Risk Management (AI-0077)
		  - **Requires**: Conformity Assessment (AI-0103), Human Oversight (AI-0041)
		  - **Related To**: AI Risk (AI-0076)

		  ## Best Practices

		  1. **Self-assess if high-risk**: Check against Annex III
		  2. **Implement all requirements**: Don't cherry-pick
		  3. **Document thoroughly**: Essential for conformity assessment
		  4. **Continuous compliance**: Not one-time effort
		  5. **Engage with notified bodies** early (if applicable)

		  ## Penalties for Non-Compliance

		  **EU AI Act**:
		  - Up to €35M or 7% of worldwide annual turnover (prohibited AI)
		  - Up to €15M or 3% of turnover (high-risk non-compliance)
		  - Up to €7.5M or 1.5% of turnover (other violations)

		  ## Related Terms

		  - AI Risk (AI-0076)
		  - Risk Management (AI-0077)
		  - EU AI Act
		  - Conformity Assessment (AI-0103)
		  - Human Oversight (AI-0041)

		  ## Version History

		  - **1.0** (2025-10-27): Initial definition based on EU AI Act (Regulation 2024/1689)

		  ```

  - ### [StableProjectorz](https://stableprojectorz.com/) - * Stable Projectorz offers immersive, high-quality projector experiences for various settings including homes, businesses, and events.
  - They specialise in portable projectors, offering convenient and versatile viewing solutions.
  - The website features a curated selection of projectors based on performance, features, and customer feedback.
  - Customers can find projectors suitable for home cinema, gaming, outdoor movie nights, and professional presentations.
  - The site aims to help customers organise and understand the technical specifications of different projector models.
  - They provide detailed product descriptions, reviews, and comparisons to aid in the [[user experience]] and selection process.
  - Stable Projectorz emphasises customer satisfaction and offers support to ensure a positive purchasing experience.
  - The website features a blog with guides and articles on choosing the right projector, troubleshooting common issues, and optimising image colour and quality.
  - They appear to offer projectors with various connectivity options, including HDMI, USB, and wireless capabilities.
		- {{video https://www.youtube.com/watch?v=IXQg0ITHjtw}}

		- ##### Second Life
			- Notable because it’s the original and has a decently mature marketplace.Some $80M was [paid tocreators](https://www.zdnet.com/article/high-fidelity-invests-in-second-life-to-expand-virtual-world/)in Second Life in 2021 in a wider economic ecosystem of around $650M.It’s possible to write a whole book on Second life, and indeed manyhave. It’s longevity means that there’s more study of business uses ofsuch systems than in any other platform.

  - ##### Technical Overview
		- The following display technologies have been identified as suitable for
		  implementation:
		- Lenticular lens arrays: By placing an array of magnifying lenses over the screen, these displays direct light from alternating columns of pixels toward the left and right eyes to create a stereoscopic 3D image without glasses. There are several suppliers of this technology, mainly for the events market. It seems that churn of these companies is relatively high, with few demonstrating longevity.
		- Parallax barriers: These displays have a layer of opaque and transparent slits over the LCD matrix that directs different pixel columns to each eye, creating a stereoscopic 3D image without glasses. Alioscopy is known to use this approach, along with eye tracking technology. They have been in business for decades and are a good case study, but engaging with a research partner in China is likely the best medium terms approach.
		- These display consists of a large lenticular lens sheet or array of smaller tiled lenticular lenses mounted in front of a high-resolution LED. The lenticular lenses are cylindrical and arranged vertically, with each lens covering multiple pixel columns of the display.
		- Behind the lens array, the display content is formatted into vertical interleaved channels, with each channel containing a slightly different perspective view of the 3D stereoscopic image. The different perspective views are calculated in real-time based on the tracked head positions of multiple viewers in front of the display.
		- As light from the display pixels passes through the cylindrical lenses, it is refracted into multiple viewing zones in front of the screen. Each viewing zone contains a specific view channel, so each eye of each viewer sees the perspective that matches their position. This creates a glasses-free 3D effect with motion parallax as viewers move their heads.
		- The viewer head tracking system uses camera and computer vision techniques to determine the 3D positions of each viewer’s eyes in the space in front of the display. The changing viewer positions are fed to the display rendering system to compute the proper perspective views and adjust the lenticular flaps as needed.
		- This lenticular 3D display with dynamic view steering provides illusion of depth for multiple viewers simultaneously, creating an immersive large-screen 3D experience without the need for special glasses. The real-time tracking and rendering system updates the content smoothly as the viewers move around, maintaining the stereo 3D perspectives tailored individually to each viewer’s changing position.

		- #### Illustrators
			- Can use Stable Diffusion to generate high-quality illustrations for books, magazines, and other media, offering a faster and more efficient way to produce visually compelling artwork.

  - ## Preamble
		- [[Introduction to me]] explains my research at a very high level

  - ### [StableProjectorz](https://stableprojectorz.com/) - * Stable Projectorz offers immersive, high-quality projector experiences for various settings including homes, businesses, and events.
  - They specialise in portable projectors, offering convenient and versatile viewing solutions.
  - The website features a curated selection of projectors based on performance, features, and customer feedback.
  - Customers can find projectors suitable for home cinema, gaming, outdoor movie nights, and professional presentations.
  - The site aims to help customers organise and understand the technical specifications of different projector models.
  - They provide detailed product descriptions, reviews, and comparisons to aid in the [[user experience]] and selection process.
  - Stable Projectorz emphasises customer satisfaction and offers support to ensure a positive purchasing experience.
  - The website features a blog with guides and articles on choosing the right projector, troubleshooting common issues, and optimising image colour and quality.
  - They appear to offer projectors with various connectivity options, including HDMI, USB, and wireless capabilities.
		- {{video https://www.youtube.com/watch?v=IXQg0ITHjtw}}

		- ##### Second Life
			- Notable because it’s the original and has a decently mature marketplace.Some $80M was [paid tocreators](https://www.zdnet.com/article/high-fidelity-invests-in-second-life-to-expand-virtual-world/)in Second Life in 2021 in a wider economic ecosystem of around $650M.It’s possible to write a whole book on Second life, and indeed manyhave. It’s longevity means that there’s more study of business uses ofsuch systems than in any other platform.

  - ##### Technical Overview
		- The following display technologies have been identified as suitable for
		  implementation:
		- Lenticular lens arrays: By placing an array of magnifying lenses over the screen, these displays direct light from alternating columns of pixels toward the left and right eyes to create a stereoscopic 3D image without glasses. There are several suppliers of this technology, mainly for the events market. It seems that churn of these companies is relatively high, with few demonstrating longevity.
		- Parallax barriers: These displays have a layer of opaque and transparent slits over the LCD matrix that directs different pixel columns to each eye, creating a stereoscopic 3D image without glasses. Alioscopy is known to use this approach, along with eye tracking technology. They have been in business for decades and are a good case study, but engaging with a research partner in China is likely the best medium terms approach.
		- These display consists of a large lenticular lens sheet or array of smaller tiled lenticular lenses mounted in front of a high-resolution LED. The lenticular lenses are cylindrical and arranged vertically, with each lens covering multiple pixel columns of the display.
		- Behind the lens array, the display content is formatted into vertical interleaved channels, with each channel containing a slightly different perspective view of the 3D stereoscopic image. The different perspective views are calculated in real-time based on the tracked head positions of multiple viewers in front of the display.
		- As light from the display pixels passes through the cylindrical lenses, it is refracted into multiple viewing zones in front of the screen. Each viewing zone contains a specific view channel, so each eye of each viewer sees the perspective that matches their position. This creates a glasses-free 3D effect with motion parallax as viewers move their heads.
		- The viewer head tracking system uses camera and computer vision techniques to determine the 3D positions of each viewer’s eyes in the space in front of the display. The changing viewer positions are fed to the display rendering system to compute the proper perspective views and adjust the lenticular flaps as needed.
		- This lenticular 3D display with dynamic view steering provides illusion of depth for multiple viewers simultaneously, creating an immersive large-screen 3D experience without the need for special glasses. The real-time tracking and rendering system updates the content smoothly as the viewers move around, maintaining the stereo 3D perspectives tailored individually to each viewer’s changing position.

		- #### Illustrators
			- Can use Stable Diffusion to generate high-quality illustrations for books, magazines, and other media, offering a faster and more efficient way to produce visually compelling artwork.

  - ## Preamble
		- [[Introduction to me]] explains my research at a very high level

  - ## Preamble
		- [[Introduction to me]] explains my research at a very high level

  - ## Preamble
		- [[Introduction to me]] explains my research at a very high level

  - ## **Navigating the AI Arms Race - A Return to History's High Stakes:**
  - **Echoes of the Cold War:** The conversation takes a historical turn, drawing parallels between the transformative potential of AI and the Cold War's technological and ideological battles. They suggest that we are entering a new era of great power competition with AI at its core.
  - **The CCP's AI Ambitions - A Clear and Present Danger:** Concerns about the Chinese Communist Party's AI agenda are central to the discussion. The guests argue that the CCP recognises the technology's potential to reshape the global order, potentially granting a decisive advantage to whichever nation harnesses it first. They discuss concrete threats, including:

  ## Academic Context

  - Brief contextual overview
  - The classification of AI systems as "high risk" is a cornerstone of the EU Artificial Intelligence Act, reflecting a risk-based regulatory approach that prioritises the protection of health, safety, and fundamental rights
  - The concept is rooted in earlier EU regulatory frameworks, such as the General Data Protection Regulation (GDPR), and builds on academic work in risk assessment, ethics, and governance of emerging technologies
  - The EU AI Act’s approach has influenced similar frameworks globally, including the UK’s own AI regulatory initiatives

  - Key developments and current state
  - The EU AI Act, formally adopted in 2024, establishes a four-tier risk classification: unacceptable, high, limited, and minimal risk
  - High-risk AI systems are those that, by their intended purpose or deployment context, could cause significant harm to individuals or society if they fail or are misused
  - The Act’s definitions and requirements are now widely referenced in academic and policy discussions, with ongoing research into the practical implications of risk classification

  - Academic foundations
  - The risk-based approach draws on foundational work in risk management, such as the ISO 31000 standard, and ethical frameworks for AI, including the EU’s Ethics Guidelines for Trustworthy AI
  - Scholars have debated the granularity of risk classification, the role of context, and the balance between innovation and regulation

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - Organisations across sectors—including healthcare, finance, transport, and public services—are adapting their AI systems to comply with high-risk requirements
  - Notable platforms and tools, such as Dataiku Govern, are helping organisations operationalise compliance, from risk management to post-market monitoring
  - In the UK, companies like Babylon Health (London) and Faculty (Cambridge) are actively engaging with high-risk AI compliance, with growing interest in North England

  - UK and North England examples where relevant
  - In Manchester, the Greater Manchester AI Alliance is supporting local businesses in understanding and implementing high-risk AI requirements
  - Leeds-based organisations, such as the Leeds Institute for Data Analytics, are collaborating with industry on AI governance and risk assessment
  - Newcastle’s Digital Catapult North East and Cumbria is fostering innovation in AI while ensuring compliance with regulatory standards
  - Sheffield’s Advanced Manufacturing Research Centre (AMRC) is exploring the use of high-risk AI in industrial automation and safety-critical systems

  - Technical capabilities and limitations
  - High-risk AI systems often involve complex machine learning models, real-time decision-making, and integration with safety-critical infrastructure
  - Limitations include the challenge of ensuring robustness, explainability, and human oversight, particularly in dynamic or unpredictable environments
  - Ongoing research is focused on improving the reliability and transparency of high-risk AI systems

  - Standards and frameworks
  - The EU AI Act sets out specific requirements for high-risk AI systems, including risk management, data governance, transparency, and human oversight
  - Complementary standards, such as ISO/IEC 42001 (AI management systems), are being adopted to support compliance
  - The UK’s AI Standards Hub is developing guidance and best practices for high-risk AI, with a focus on practical implementation

  ## Research & Literature

  - Key academic papers and sources
  - Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. Nature Machine Intelligence, 1(9), 389–399. https://doi.org/10.1038/s42256-019-0088-2
  - Floridi, L., Cowls, J., Beltrametti, M., et al. (2018). AI4People—An Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations. Minds and Machines, 28(4), 689–707. https://doi.org/10.1007/s11023-018-9482-5
  - Wachter, S., Mittelstadt, B., & Floridi, L. (2017). Transparent, explainable, and accountable AI for robotics. Science Robotics, 2(6), eaan6080. https://doi.org/10.1126/scirobotics.aan6080
  - European Commission. (2024). Artificial Intelligence Act. https://artificialintelligenceact.eu/
  - UK Government. (2024). AI Regulation: Pro-innovation approach. https://www.gov.uk/government/publications/ai-regulation-pro-innovation-approach

  - Ongoing research directions
  - Improving the accuracy and fairness of risk classification
  - Developing methods for real-time monitoring and incident reporting
  - Exploring the role of human oversight in high-risk AI systems
  - Investigating the impact of regulatory requirements on innovation and competitiveness

  ## UK Context

  - British contributions and implementations
  - The UK has established the AI Standards Hub to support the development and adoption of AI standards, including those for high-risk systems
  - The Centre for Data Ethics and Innovation (CDEI) is providing guidance on AI governance and risk assessment
  - The UK’s approach to AI regulation is informed by both EU frameworks and domestic priorities, with a focus on balancing innovation and public trust

  - North England innovation hubs (if relevant)
  - Manchester’s AI and data science community is actively engaged in high-risk AI research and implementation
  - Leeds is home to several research centres and industry partnerships focused on AI governance and risk management
  - Newcastle’s Digital Catapult North East and Cumbria is supporting the development of high-risk AI applications in sectors such as healthcare and manufacturing
  - Sheffield’s AMRC is exploring the use of high-risk AI in advanced manufacturing and safety-critical systems

  - Regional case studies
  - Manchester: The Greater Manchester AI Alliance is working with local businesses to implement high-risk AI compliance, with a focus on healthcare and public services
  - Leeds: The Leeds Institute for Data Analytics is collaborating with industry on AI governance and risk assessment, particularly in the financial sector
  - Newcastle: Digital Catapult North East and Cumbria is supporting the development of high-risk AI applications in healthcare and manufacturing
  - Sheffield: The AMRC is exploring the use of high-risk AI in industrial automation and safety-critical systems, with a focus on real-time monitoring and incident reporting

  ## Future Directions

  - Emerging trends and developments
  - Increasing use of high-risk AI in safety-critical sectors, such as healthcare, transport, and energy
  - Growing interest in explainable AI and human oversight to ensure transparency and accountability
  - Development of new standards and frameworks to support compliance and innovation

  - Anticipated challenges
  - Ensuring robustness and reliability of high-risk AI systems in dynamic or unpredictable environments
  - Balancing regulatory requirements with the need for innovation and competitiveness
  - Addressing the ethical and societal implications of high-risk AI

  - Research priorities
  - Improving the accuracy and fairness of risk classification
  - Developing methods for real-time monitoring and incident reporting
  - Exploring the role of human oversight in high-risk AI systems
  - Investigating the impact of regulatory requirements on innovation and competitiveness

  ## References

  1. Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. Nature Machine Intelligence, 1(9), 389–399. https://doi.org/10.1038/s42256-019-0088-2
  2. Floridi, L., Cowls, J., Beltrametti, M., et al. (2018). AI4People—An Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations. Minds and Machines, 28(4), 689–707. https://doi.org/10.1007/s11023-018-9482-5
  3. Wachter, S., Mittelstadt, B., & Floridi, L. (2017). Transparent, explainable, and accountable AI for robotics. Science Robotics, 2(6), eaan6080. https://doi.org/10.1126/scirobotics.aan6080
  4. European Commission. (2024). Artificial Intelligence Act. https://artificialintelligenceact.eu/
  5. UK Government. (2024). AI Regulation: Pro-innovation approach. https://www.gov.uk/government/publications/ai-regulation-pro-innovation-approach
  6. ISO/IEC 42001:2023. Information technology — Artificial intelligence — Management system for AI. https://www.iso.org/standard/81234.html
  7. Centre for Data Ethics and Innovation. (2024). AI Governance and Risk Assessment. https://www.gov.uk/government/organisations/centre-for-data-ethics-and-innovation
  8. Digital Catapult North East and Cumbria. (2024). AI Innovation in the North. https://www.digit.catapult.org.uk/north-east-and-cumbria/
  9. Advanced Manufacturing Research Centre (AMRC). (2024). AI in Advanced Manufacturing. https://www.amrc.co.uk/
  10. Greater Manchester AI Alliance. (2024). AI Compliance and Innovation. https://www.gm-ai.org.uk/
  11. Leeds Institute for Data Analytics. (2024). AI Governance and Risk Assessment. https://www.lida.ac.uk/
  12. Faculty. (2024). AI Governance and Compliance. https://www.faculty.ai/
  13. Babylon Health. (2024). AI in Healthcare. https://www.babylonhealth.com/


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
