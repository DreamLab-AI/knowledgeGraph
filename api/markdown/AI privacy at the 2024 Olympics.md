public:: true

# AI privacy at the 2024 Olympics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:85bf315228efb901f35d0148cc0d48bab0eae44d1e7e22c3e966540a248c8149",
  "@type": "Page",
  "vc:slug": "ai-privacy-at-the-2024-olympics",
  "title": "AI privacy at the 2024 Olympics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gdpr-general-data-protection-regulation",
      "vc:label": "GDPR (General Data Protection Regulation)"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptography",
      "vc:label": "Cryptography"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AI privacy at the 2024 Olympics"
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
  "@id": "urn:ngm:class:ai-privacy-at-the-2024-olympics",
  "@type": "Class",
  "label": "AI privacy at the 2024 Olympics",
  "definition": "A case study examining the deployment of AI-based surveillance systems at the Paris 2024 Olympic Games, involving real-time video analytics, geolocation tracking, behavioural pattern analysis, and predictive event detection contracted to vendors including Viet, Orange Business, Chaps Vision, and Windex. The deployment required French legislative modifications expanding surveillance powers and raised significant GDPR compliance questions regarding continuous monitoring, data retention, algorithmic bias, and the post-event normalisation of pervasive AI surveillance infrastructure.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:object-detection-and-tracking", "label": "Object Detection and Tracking"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bias", "label": "Bias"},
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:privacy-by-design", "label": "Privacy By Design"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-privacy-at-the-2024-olympics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:85bf315228efb901f35d0148cc0d48bab0eae44d1e7e22c3e966540a248c8149"
  },
  "vc:resolutions": [
    {
      "raw": "[[GDPR (General Data Protection Regulation)]]",
      "resolved": "urn:visionflow:linked:gdpr-general-data-protection-regulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:owl:class:cryptography",
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
  - A case study examining AI-based surveillance at the Paris 2024 Olympic Games: real-time video analytics, geolocation tracking, behavioural pattern analysis, and predictive event detection deployed by Viet, Orange Business, Chaps Vision, and Windex. French legislative modifications expanded surveillance powers, raising significant GDPR compliance questions regarding continuous monitoring, data retention, algorithmic bias, and the post-event normalisation of pervasive AI surveillance infrastructure.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIPrivacyAtThe2024Olympics
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Computer Vision]], [[Object Detection and Tracking]]
  - relatedTo:: [[Bias]], [[Fairness]], [[Privacy By Design]], [[Cryptography]]
  - contrastsWith:: [[Responsible AI]], [[AI Ethics]]

- ### Content
  - # Implementation at the Olympics
			- Viet is one of the primary companies contracted by the French government for the implementation of AI surveillance at the 2024 Olympics. They specialise in advanced AI algorithms that process vast amounts of data from multiple sources. Viet's technology is integral to the seamless integration of various surveillance systems, enabling real-time monitoring and analysis. Their expertise lies in developing systems that can handle high-volume data streams and extract meaningful insights, which are crucial for maintaining security during the Olympics.
			- Orange Business Services, a subsidiary of the telecommunications giant Orange, plays a critical role in the surveillance infrastructure. They provide the backbone for data communication and storage, ensuring that all collected data is securely transmitted and stored. Orange Business is responsible for setting up and maintaining the network infrastructure that supports the high data throughput required for real-time AI analysis. Their services include secure cloud storage, data encryption, and ensuring compliance with data protection regulations.
			- Chaps Vision brands itself as a leader in geolocation solutions and automated video surveillance. Their technology is designed to enhance situational awareness through precise geolocation tracking and advanced video analytics. Chaps Vision employs sophisticated AI algorithms to transform ordinary surveillance footage into actionable intelligence. They focus on creating value from data by integrating various data points, such as location, movement patterns, and behavioural analysis, to provide comprehensive monitoring solutions.
			- Windex, with its City Vision software, is at the forefront of urban video analysis. Their platform is designed to transform existing CCTV systems into intelligent monitoring tools. City Vision uses AI to analyse video feeds in real-time, identifying unusual activities, potential threats, and other security-related events. Windex prides itself on its ability to enhance traditional surveillance methods, making them more efficient and effective through the application of AI. Their technology is particularly useful for large-scale events like the Olympics, where rapid identification and response to potential security threats are paramount.
			- To accommodate the extensive use of AI surveillance technologies, France has enacted several legal modifications. These changes are aimed at broadening the scope of data collection and analysis, allowing for more comprehensive security measures during the Olympics. Key legal adjustments include:
				- **Expansion of Surveillance Powers:** Legislation has been passed to allow for increased electronic surveillance, including wiretapping, data mining, and the use of AI for real-time data analysis.
				- **Data Retention Policies:** New laws permit the extended retention of collected data, which is essential for the training and improvement of AI systems.
				- **Transparency and Accountability:** Despite the legal changes, there are significant concerns regarding the transparency of data usage and the accountability of both the government and private entities involved. The extent to which these measures comply with the European Union's General Data Protection Regulation (GDPR) is a major point of contention.
				- The deployment of advanced AI systems for surveillance at the 2024 Olympics has raised several privacy concerns:
				- **Continuous Monitoring:** These AI systems enable continuous, round-the-clock monitoring of individuals, capturing detailed data on their movements and behaviours. This level of surveillance is unprecedented and poses significant risks to personal privacy.
				- **Behavioural Analysis:** AI can track and analyse patterns in individuals' movements and behaviours, potentially revealing sensitive information about their personal lives. This capability raises ethical questions about the extent of surveillance that is acceptable in a democratic society.
				- The data collected during the Olympics is utilised to train AI systems, leading to potential advancements in technology. However, this practice raises several concerns:
				- **Control and Usage:** There are significant worries about who controls the collected data and how it is used. The lack of clear guidelines and oversight means that data could be misused or exploited for purposes beyond security.
				- **Commercial Interests:** The involvement of private companies in data collection raises concerns about the commercialisation of personal information. These companies may use the data to develop and market new technologies, potentially infringing on individuals' privacy.
				- Transparency is a critical issue in the deployment of AI surveillance technologies:
				- **Lack of Public Awareness:** There is a general lack of transparency regarding how data is collected, analysed, and used by both the government and private companies. This opacity makes it difficult for the public to understand the full implications of the surveillance systems.
				- **GDPR Concerns:** Civil liberties organisations in France have expressed concerns that the extensive data collection practices may violate the GDPR. The regulation is designed to protect individuals' privacy and personal data, and the new surveillance measures may conflict with these protections.
			- **Event Detection:** Identifies potential security threats and unusual activities, allowing for rapid response by security personnel.
			- AI systems at the Olympics will also employ predictive surveillance techniques:
				- **Event Prediction:** Based on collected data, AI can predict potential security threats or incidents. However, these predictions can be problematic due to inherent biases and inaccuracies in the data.
				- **Bias and Discrimination:** Predictive analytics can lead to discriminatory practices, particularly against individuals based on race, gender, or socio-economic status. The accuracy of these systems is often lower for individuals with darker skin tones, raising concerns about fairness and justice.
			- The reliability and accuracy of AI surveillance systems are critical issues:
				- **Lack of Public Data:** There is limited publicly available information on the accuracy and reliability of these systems. This lack of transparency makes it difficult to assess their effectiveness.
				- **Historical Bias:** Historical data indicates that facial recognition systems and other AI technologies are less accurate for individuals with darker skin tones. This bias can lead to misidentification and wrongful surveillance of certain demographic groups.
				- The French government has significantly expanded its surveillance capabilities through collaboration with private tech companies:
				- **Classified Provisional Decree:** A confidential decree has been issued, allowing for more extensive electronic surveillance. This includes data gathering, wiretapping, and the monitoring of communications such as text messages and emails.
				- The surveillance measures implemented for the Olympics are likely to have lasting effects:
		- **Extended Surveillance Period:** The legal changes and surveillance measures extend beyond the Olympics, potentially normalising pervasive monitoring practices.
		- **Implications for Privacy:** The normalisation of these surveillance practices could lead to ongoing privacy infringements and the erosion of civil liberties. There is a concern that once such extensive surveillance is established, it will be difficult to revert to pre-Olympics levels of privacy protection.

  - ## Companies Involved
		- ### Viet
		- ### Orange Business
		- ### Chaps Vision
		- ### Windex
		- ### Legal Adjustments
		- ## Privacy and Data Protection Concerns
			- ### Pervasive Surveillance
			- ### Data Utilisation
			- ### Transparency Issues
		- ## Predictive Surveillance
		- ## Reliability and Bias
			- ### Accuracy Concerns
		- ## Government and Private Sector Collaboration
			- ### Increased Surveillance
			- ### Post-Olympics Surveillance

- ### Provenance
  - sources:: [[GDPR (General Data Protection Regulation)]]
  - migration-date:: 2026-04-26T00:00:00Z
