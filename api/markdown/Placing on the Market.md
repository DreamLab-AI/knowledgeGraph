public:: true

# Placing on the Market
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3889ff022a7274798faff90ae0aa0aa15e5dfccd35d0d396774658f3630d2da6",
  "@type": "Page",
  "vc:slug": "placing-on-the-market",
  "title": "Placing on the Market",
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
      "vc:value": "MV-3005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Placing on the Market"
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
  "@id": "urn:ngm:class:placing-on-the-market",
  "@type": "Class",
  "label": "Placing on the Market",
  "definition": "The first making available of an AI system on the Union market.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:placing-on-the-market:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3889ff022a7274798faff90ae0aa0aa15e5dfccd35d0d396774658f3630d2da6"
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
  - The first making available of an AI system on the Union market.

- ### Semantic Classification
  - owl-class:: spatial-computing:PlacingontheMarket
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - The first making available of an AI system on the Union market.

  ## Source

  **Primary**: EU AI Act Article 3(12)
  **Reference**: Consistent with EU Product Safety legislation terminology

  ## Regulatory Context

  "Placing on the market" is a critical trigger point determining when provider obligations commence. It represents the moment an AI system enters commercial circulation in the EU, regardless of whether sold or provided free of charge.

  #### Key Characteristics
  ### "First" Making Available
		  - **Timing**: Initial entry into EU market
		  - **Subsequent sales**: Not considered "placing" (that's "making available")
		  - **Updates**: Substantial modifications may constitute new placing

		  ### "Making Available"
		  Supply for:
		  - Distribution, OR
		  - Use on Union market

		  In the course of **commercial activity**, whether:
		  - For payment, OR
		  - Free of charge

		  ### "Union Market"
		  - **Geographic scope**: Any EU Member State
		  - **EEA**: Extended to Norway, Iceland, Liechtenstein
		  - **Single market principle**: Placing in one Member State = placing in entire EU

		  ## Who "Places on the Market"?

		  ### EU Providers
		  Manufacturers, developers, or legal entities placing AI system under their own:
		  - Name, OR
		  - Trademark, OR
		  - Brand

		  ### Non-EU Providers
		  Through:
		  - **Authorised representative** (Article 22): EU-based designated agent
		  - **Importer** (Article 23): EU entity importing from third countries

		  ### Not "Placing"
		  - **Distributors**: Make available after initial placing (Article 24)
		  - **Deployers**: Use systems already on market (Article 26)
		  - **Own use**: Putting into service for provider's internal use

		  ## Obligations Triggered by Placing

		  Upon placing high-risk AI systems on market, providers must ensure:

		  ### Pre-Placement (Articles 8-15)
		  1. **Risk management system** established (Article 9)
		  2. **Data governance** implemented (Article 10)
		  3. **Technical documentation** prepared (Article 11, Annex IV)
		  4. **Logging capability** designed (Article 19)
		  5. **Transparency information** created (Article 13)
		  6. **Human oversight** measures incorporated (Article 14)
		  7. **Accuracy, robustness, cybersecurity** achieved (Article 15)

		  ### Conformity Assessment (Article 43)
		  8. **Conformity assessment** completed (Annex VI or VII)
		  9. **EU Declaration of Conformity** drawn up (Article 47)
		  10. **CE marking** affixed (Article 48)

		  ### Post-Placement (Articles 16-21)
		  11. **Quality management system** maintained (Article 17)
		  12. **Post-market monitoring** system operational (Article 72)
		  13. **Serious incident** reporting process established (Article 73)
		  14. **Corrective action** capability ready (Article 21)

		  ## Temporal Scope

		  "Placing" occurs at the moment of:
		  - Transfer of ownership or possession
		  - Making available for download
		  - Providing access to system functionality
		  - Contractual agreement for supply

		  **Not** at the time of:
		  - Development or testing
		  - Internal validation
		  - Beta testing (if clearly marked and limited)

		  ## Geographic Considerations

		  ### EU-Based Provider
		  Directly places on EU market.

		  ### Third-Country Provider
		  Options:
		  1. Appoint **authorised representative** in EU (Article 22)
		  2. Work through **importer** (Article 23)

		  **If neither**: Product cannot be legally placed on EU market.

		  ## Distinction from "Putting into Service"

		  | Placing on Market | Putting into Service |
		  |------------------|---------------------|
		  | First making available for **distribution** | Supply for **first use** |
		  | Commercial activity | May be provider's own use |
		  | Market entry | Deployment/operation |
		  | Provider obligation trigger | Deployer obligation trigger |

		  **Example**: AI recruitment tool
		  - **Placed on market**: Vendor offers for sale to HR departments
		  - **Put into service**: HR department deploys for actual hiring decisions

		  ## Substantial Modification

		  Changes to AI system may constitute new "placing" if:
		  - Intended purpose changes
		  - Significant design alterations
		  - Performance characteristics change
		  - Risk profile increases

		  **Consequence**: Re-conformity assessment required (Article 43(4))

		  ## Free and Open-Source AI

		  "Placing on market" includes:
		  - Making available for download
		  - Providing access to code repository

		  **Exemptions**: FOSS GPAI models exempt from some obligations (Article 53(5)), but not from "placing" definition itself.

		  ## Enforcement Implications

		  ### Market Surveillance (Article 74)
		  Authorities monitor compliance at point of placing:
		  - Conformity assessment verification
		  - CE marking presence
		  - Documentation availability

		  ### Penalties
		  Placing non-compliant high-risk AI:
		  - Fines up to **€15 million or 3% of global turnover** (Article 99)
		  - Market withdrawal orders
		  - Corrective measures

		  ## Documentation Requirements

		  Providers must retain evidence of when placing occurred:
		  - **Contract dates**
		  - **Invoices/purchase orders**
		  - **Delivery records**
		  - **Website publication dates**

		  **Retention period**: 10 years from placing (Article 18)

  ## Source

  **Primary**: EU AI Act Article 3(12)
  **Reference**: Consistent with EU Product Safety legislation terminology

  ## Regulatory Context

  "Placing on the market" is a critical trigger point determining when provider obligations commence. It represents the moment an AI system enters commercial circulation in the EU, regardless of whether sold or provided free of charge.

  #### Related Concepts
  - **Making Available on the Market** (AI-0125): Broader distribution concept
		  - **Putting into Service** (AI-0126): Deployment trigger
		  - **Provider** (AI-0127): Primary duty-bearer at placing
		  - **Importer** (AI-0129): Third-country placing channel

		  ## Practical Guidance

		  ### For Providers
		  - Complete all obligations **before** first sale/distribution
		  - Document precise placing date
		  - Establish post-market monitoring from day one

		  ### For Importers
		  - Verify third-country provider compliance before placing
		  - Ensure EU Declaration of Conformity available
		  - Check CE marking authenticity

		  ### For Distributors
		  - Do not place; only make available
		  - Verify system was properly placed by provider/importer
		  - Report suspected non-compliance

		  ## See Also

		  - EU AI Act Articles 3(12), 16-21 (Provider Obligations)
		  - Market Surveillance Regulation (EU) 2019/1020
		  - Blue Guide on Product Rules 2022/C 247/01 (EU product safety guidance)

		  ```

  - public-access:: true
  - definition:: The first making available of an AI system on the Union market.




  ## Academic Context

  - The concept of "placing on the market" in AI regulation originates from the EU Artificial Intelligence Act (AI Act), defining it as the **first making available** of an AI system or a general-purpose AI model on the Union market.
  - This definition establishes the point at which regulatory obligations commence for providers, importers, and distributors.
  - The academic foundation lies in product liability and market surveillance law, adapted to AI’s unique characteristics such as continuous learning and systemic risks.
  - Key developments include clarifications on downstream modifications of general-purpose AI models and their impact on provider obligations, reflecting evolving technical and legal understandings.

  ## Current Landscape (2025)

  - Industry adoption of AI systems compliant with the AI Act is accelerating, with providers increasingly aware of their responsibilities at the point of placing AI systems on the market.
  - Notable organisations include major European AI developers and integrators, alongside global providers adapting to EU rules.
  - In the UK, firms in Manchester, Leeds, Newcastle, and Sheffield are actively engaging with AI compliance frameworks, particularly in sectors like finance, healthcare, and manufacturing.
  - Technical capabilities now allow for detailed tracking of AI model training compute, aiding compliance assessments regarding significant modifications.
  - Standards and frameworks are maturing, with the EU AI Act’s definitions guiding market surveillance and enforcement, while UK regulators align post-Brexit with similar principles to maintain market access and innovation.

  ## Research & Literature

  - Key academic sources include:
  - Veale, M., & Borgesius, F. Z. (2021). *Demystifying the Draft EU Artificial Intelligence Act*. Computer Law & Security Review, 41, 105567. https://doi.org/10.1016/j.clsr.2021.105567
  - Wachter, S., Mittelstadt, B., & Floridi, L. (2017). *Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation*. International Data Privacy Law, 7(2), 76–99. https://doi.org/10.1093/idpl/ipx005
  - Ongoing research focuses on:
  - The impact of "placing on the market" on AI lifecycle governance.
  - Legal interpretations of provider responsibility for downstream AI model modifications.
  - The balance between innovation incentives and regulatory safeguards.

  ## UK Context

  - Post-Brexit, the UK has adopted a regulatory approach broadly aligned with the EU AI Act, ensuring that AI systems placed on the UK market meet similar safety and transparency standards.
  - British contributions include research from the Alan Turing Institute and AI ethics initiatives in Northern England.
  - Innovation hubs in Manchester, Leeds, Newcastle, and Sheffield are fostering AI development with regulatory compliance embedded from the outset.
  - Regional case studies highlight collaborations between universities and industry to develop AI systems compliant with both UK and EU market requirements, reflecting the pragmatic need to navigate dual regulatory landscapes.

  ## Future Directions

  - Emerging trends include:
  - Enhanced traceability of AI system provenance and training data to support compliance at the point of placing on the market.
  - Greater scrutiny of general-purpose AI models, especially regarding modifications that significantly alter capabilities or risks.
  - Anticipated challenges:
  - Harmonising regulatory approaches between the UK and EU to avoid market fragmentation.
  - Addressing the complexities of AI systems that evolve post-market placement without breaching compliance.
  - Research priorities:
  - Developing robust metrics for assessing "significant change" in AI models.
  - Exploring the interplay between provider obligations and deployer responsibilities throughout the AI system lifecycle.

  ## References

  1. European Parliament and Council. (2021). *Regulation (EU) 2021/0106 on Artificial Intelligence (Artificial Intelligence Act)*. Official Journal of the European Union.  
  2. Veale, M., & Borgesius, F. Z. (2021). Demystifying the Draft EU Artificial Intelligence Act. *Computer Law & Security Review*, 41, 105567. https://doi.org/10.1016/j.clsr.2021.105567  
  3. Wachter, S., Mittelstadt, B., & Floridi, L. (2017). Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation. *International Data Privacy Law*, 7(2), 76–99. https://doi.org/10.1093/idpl/ipx005  
  4. Mayer Brown. (2025). EU AI Act News: Rules on General-Purpose AI Start Applying.  
  5. BDO UK. (2025). Obligations and Exemptions for General-Purpose AI Models under the EU AI Act.  
  6. UK Government and Alan Turing Institute. (2025). AI Regulation and Innovation in Northern England: A Collaborative Approach.  

  *No AI system was harmed in the making of this definition, but some might argue the regulatory paperwork is a form of digital origami.*


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
