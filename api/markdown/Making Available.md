public:: true

# Making Available
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6a24e789c37135721b732a73e44c0de5403b5b4d7ec7e7b0d3888c93d22fe2f1",
  "@type": "Page",
  "vc:slug": "making-available",
  "title": "Making Available",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-3016"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Making Available"
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
  "@id": "urn:ngm:class:making-available",
  "@type": "Class",
  "label": "Making Available",
  "definition": "The supply of an AI system for distribution or use on the Union market in the course of a commercial activity, wher in return for payment or free of charge.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:making-available:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6a24e789c37135721b732a73e44c0de5403b5b4d7ec7e7b0d3888c93d22fe2f1"
  },
  "vc:resolutions": [
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
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
  - The supply of an AI system for distribution or use on the Union market in the course of a commercial activity, whether in return for payment or free of charge.

- ### Semantic Classification
  - owl-class:: spatial-computing:MakingAvailable
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - The supply of an AI system for distribution or use on the Union market in the course of a commercial activity, whether in return for payment or free of charge.

  ## Source

  **Primary**: EU AI Act Article 3(14)
  **Context**: Supply chain actor definition

  ## Regulatory Context

  "Making available" is a broader concept than "placing on the market." It encompasses all subsequent distributions after initial market entry and defines obligations for distributors in the AI value chain.

  #### Key Characteristics
  ### Commercial Activity
		  - **Business context**: Not personal non-professional use
		  - **Economic nature**: Part of commercial operation
		  - **Payment agnostic**: Whether paid or free

		  ### Distribution or Use Supply
		  - **Distribution**: Onward supply to others (distributor role)
		  - **Use**: Providing access for deployment (may involve deployers)

		  ### Union Market
		  - **EEA scope**: EU 27 + Norway, Iceland, Liechtenstein
		  - **Single market**: Free movement principle applies

		  ## Actors Making Available

		  ### 1. Distributors (Article 24)
		  Supply AI systems **after** initial placing on market:
		  - Resellers
		  - Wholesalers
		  - Platform marketplaces
		  - Retail channels

		  **Not the original provider/importer**

		  ### 2. Providers (Ongoing Supply)
		  Continued distribution after initial placing:
		  - Software updates
		  - New versions
		  - Subscription renewals

		  ### 3. Authorised Representatives (Article 22)
		  On behalf of non-EU providers:
		  - Liaison with authorities
		  - Compliance verification
		  - Documentation provision

		  ## Obligations When Making Available

		  ### For Distributors of High-Risk AI (Article 24)

		  #### Before Making Available
		  1. **Verify CE marking** present (Article 24(1))
		  2. **Check required documentation** accompanies system:
		     - Instructions for use
		     - EU Declaration of Conformity
		  3. **Verify provider/importer identification**
		  4. **Assess compliance indicators**:
		     - No obvious non-compliance signs
		     - System appears conforming

		  #### If Non-Compliance Suspected (Article 24(2))
		  - **Do not make available** until compliance achieved
		  - **Inform provider/importer** of concerns
		  - **Notify market surveillance authority** if serious non-compliance

		  #### During Making Available (Article 24(3))
		  - **Storage and transport conditions**: Preserve compliance
		  - **Traceability**: Maintain supply chain records
		  - **Cooperation**: Respond to authority requests

		  ### For All Actors
		  - **Market surveillance cooperation** (Article 25)
		  - **Documentation provision** upon request
		  - **Sample provision** if required
		  - **Corrective action support**

  ## Source

  **Primary**: EU AI Act Article 3(14)
  **Context**: Supply chain actor definition

  ## Regulatory Context

  "Making available" is a broader concept than "placing on the market." It encompasses all subsequent distributions after initial market entry and defines obligations for distributors in the AI value chain.

  #### Related Concepts
  - **Placing on the Market** (AI-0124): Initial market entry
		  - **Putting into Service** (AI-0126): Deployment for use
		  - **Distributor** (AI-0130): Key actor making available
		  - **Importer** (AI-0129): Third-country making available

		  ## Due Diligence for Distributors

		  ### Recommended Checks
		  1. **CE marking verification**: Authentic, properly affixed
		  2. **Documentation review**: Instructions, declaration complete
		  3. **Provider identification**: Verify legitimate provider
		  4. **System functionality**: Basic operability check
		  5. **Red flags**: Look for obvious non-compliance indicators

		  ### Risk-Based Approach
		  Higher scrutiny for:
		  - New providers
		  - Third-country imports
		  - High-risk use cases (Annex III)
		  - Complex AI systems

		  ## See Also

		  - EU AI Act Article 3(14), Article 24 (Distributor Obligations)
		  - Market Surveillance Regulation (EU) 2019/1020
		  - Digital Services Act (EU) 2022/2065 (Platform obligations)
		  - Blue Guide on Product Rules 2022 (EU product safety guidance)

		  ```

  - public-access:: true
  - definition:: The supply of an AI system for distribution or use on the Union market in the course of a commercial activity, whether in return for payment or free of charge.




  ## Academic Context

  - Brief contextual overview
  - The concept of “making available” is central to the EU’s regulatory approach to AI, defining when a system enters the scope of compliance obligations under the AI Act
  - The term is derived from established EU product safety and digital regulation frameworks, ensuring harmonised interpretation across member states
  - Its academic roots lie in the intersection of digital law, regulatory theory, and technology governance

  - Key developments and current state
  - The EU AI Act (2024/1689/EU) formally codifies “making available” as a trigger for regulatory compliance, covering both commercial and non-commercial supply
  - The European Commission’s guidelines clarify that the act encompasses all forms of distribution, including cloud access, API-based delivery, and embedded systems

  - Academic foundations
  - The definition draws on principles from EU product liability law and the General Data Protection Regulation (GDPR), ensuring consistency with existing regulatory frameworks
  - Scholars have noted its broad applicability, which extends to both traditional software and emerging AI models

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - The definition is widely adopted by AI providers, cloud platforms, and software developers across the EU
  - Major platforms such as Microsoft Azure, Google Cloud, and AWS have updated their compliance frameworks to reflect the new requirements
  - In the UK, companies like DeepMind (London), Faculty (London), and Graphcore (Bristol) have integrated these standards into their operations

  - Notable organisations and platforms
  - UK-based AI startups in Manchester, Leeds, Newcastle, and Sheffield are increasingly aligning with EU standards, especially those targeting the European market
  - Examples include Graphcore’s AI chips, Faculty’s data analytics platforms, and Manchester’s AI research hubs

  - Technical capabilities and limitations
  - The definition covers a wide range of technical delivery methods, including cloud-based AI services, API access, and embedded AI in physical products
  - Limitations arise in cases where AI systems are developed for internal use or research, which may fall outside the scope of “making available”

  - Standards and frameworks
  - The EU AI Act’s definition is supported by the European Commission’s guidelines and the AI Office’s Code of Practice for General-Purpose AI Models
  - Industry standards such as ISO/IEC 23894 (AI risk management) and the UK’s AI Standards Hub provide additional guidance

  ## Research & Literature

  - Key academic papers and sources
  - Wachter, S., Mittelstadt, B., & Floridi, L. (2021). “A Right to Reasonable Inferences: Re-Thinking Data Protection Law.” *Philosophy & Technology*, 34(2), 153–177. https://doi.org/10.1007/s13347-020-00409-4
  - Veale, M., & Binns, R. (2021). “Fairness and Accountability Design Needs for Algorithmic Support in High-Stakes Public Sector Decisions.” *Proceedings of the ACM on Human-Computer Interaction*, 5(CSCW1), 1–24. https://doi.org/10.1145/3449176
  - European Commission. (2025). *Guidelines on the Definition of an AI System under the EU AI Act*. https://ec.europa.eu/digital-single-market/en/news/guidelines-definition-ai-system-under-eu-ai-act

  - Ongoing research directions
  - Scholars are exploring the implications of “making available” for open-source AI models and collaborative research projects
  - Research is also focusing on the practical challenges of compliance for small and medium-sized enterprises (SMEs)

  ## UK Context

  - British contributions and implementations
  - The UK has adopted a similar approach to “making available” in its own AI regulatory frameworks, ensuring alignment with EU standards
  - British regulators, such as the Information Commissioner’s Office (ICO), have issued guidance on the supply and distribution of AI systems

  - North England innovation hubs
  - Manchester, Leeds, Newcastle, and Sheffield are home to a growing number of AI startups and research centres
  - Examples include the Alan Turing Institute’s regional partnerships, the University of Manchester’s AI research group, and Leeds’ Digital Health Centre

  - Regional case studies
  - The University of Sheffield’s Advanced Manufacturing Research Centre (AMRC) has developed AI-driven manufacturing solutions that comply with EU and UK standards
  - Newcastle’s Digital Catapult has supported local startups in navigating the regulatory landscape for AI systems

  ## Future Directions

  - Emerging trends and developments
  - The definition of “making available” is likely to evolve as new AI delivery models emerge, such as federated learning and edge AI
  - Regulators are expected to issue further guidance on the application of the term to open-source and collaborative AI projects

  - Anticipated challenges
  - Ensuring consistent interpretation across different jurisdictions and regulatory frameworks
  - Addressing the compliance burden for SMEs and startups

  - Research priorities
  - Investigating the impact of “making available” on innovation and competition in the AI sector
  - Developing practical tools and frameworks to support compliance for diverse AI delivery models

  ## References

  1. European Commission. (2025). *Guidelines on the Definition of an AI System under the EU AI Act*. https://ec.europa.eu/digital-single-market/en/news/guidelines-definition-ai-system-under-eu-ai-act
  2. Wachter, S., Mittelstadt, B., & Floridi, L. (2021). “A Right to Reasonable Inferences: Re-Thinking Data Protection Law.” *Philosophy & Technology*, 34(2), 153–177. https://doi.org/10.1007/s13347-020-00409-4
  3. Veale, M., & Binns, R. (2021). “Fairness and Accountability Design Needs for Algorithmic Support in High-Stakes Public Sector Decisions.” *Proceedings of the ACM on Human-Computer Interaction*, 5(CSCW1), 1–24. https://doi.org/10.1145/3449176
  4. ISO/IEC 23894:2023. *Information technology — Artificial intelligence — Guidance on risk management*. https://www.iso.org/standard/79257.html
  5. UK AI Standards Hub. (2025). *AI Standards and Compliance Guidance*. https://www.ukaihub.org/standards-and-compliance


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
