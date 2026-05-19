- ### Definition
  - Scene Understanding is the high-level semantic interpretation of visual and sensor data to comprehend the structure, context, objects, relationships, and dynamics of an environment. For autonomous systems, scene understanding involves recognising road types, lane configurations, traffic situations, pedestrian intentions, and environmental conditions to enable contextually appropriate decision-making beyond simple object detection.

- ### Semantic Classification
  - owl-class:: spatial-computing:SceneUnderstanding
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Scene Understanding is the high-level semantic interpretation of visual and sensor data to comprehend the structure, context, objects, relationships, and dynamics of an environment. For autonomous systems, scene understanding involves recognising road types, lane configurations, traffic situations, pedestrian intentions, and environmental conditions to enable contextually appropriate decision-making beyond simple object detection.

  - ### **VoxGRAF**
		- [VoxGRAF](https://katjaschwarz.github.io/voxgraf/) - *   VoxGraf is a tool to visualise the evolution of codebases through time using a 3D landscape metaphor where each file is represented as a mountain.
  -   File size determines the height of the mountain, visualising file complexity and potential maintainability issues.
  -   Colour represents different code metrics, enabling developers to identify problem areas such as code smells, technical debt, or recent changes.
  -   VoxGraf allows one to explore a codebase's history and evolution in a dynamic and intuitive way.
  -   It helps identify parts of the system that have changed often, grown rapidly, or possess specific characteristics.
  -   The tool allows developers to analyse different revisions of a codebase and compare the overall structure at different points in time.
  -   VoxGraf aims to assist with tasks such as [[software engineering]], refactoring, and understanding code complexity.
  -   The tool promotes better understanding of software development processes and architecture decisions.
  -   Customisation of colours and metrics is possible, enabling the tool to adapt to different codebases and analysis goals.

		- ### First attempt, test scene in a headless container - just returned the PNG
			- ![Screenshot 2025-07-15 075620.png](assets/Screenshot_2025-07-15_075620_1759151522545_0.png)

		- ### Fetching Keysets from Cashew Mint
			- Use JavaScript to asynchronously fetch the list of available keysets from the Cashew mint's API.
			- This step is crucial for understanding which denominations of ecash your wallet can handle.
			- Example API call: `fetch('https://cashew-mint.example/api/keysets').then(response => response.json())`

		- # LINKED JSON
			- Finally the, to improve on the OWL by simplifying it, this is a version using [Linked-JSON](https://linkedobjects.org/Linked-JSON) (by [Melvin Carvalho](https://github.com/melvincarvalho)). Some details are lost.
				- [Linked-JSON](../assets/output_linked_json_1713698682322_0.json) version of the OWL ontology
					- Mermaid version stripped back to Linked-JSON expressiveness
						- ```mermaid
						  classDiagram
						      class MetaverseEntity {
						          rdfs:label "Metaverse Entity"
						          rdfs:comment "The root type encompassing all entities within the metaverse."
						      }

						      class MetaverseAgent {
						          rdfs:label "Metaverse Agent"
						          rdfs:comment "Represents any agent within the metaverse, including human users and AI entities."
						          participatesIn MetaverseScene
						          hasSkillProfile SkillProfile
						          hasPrivacySetting PrivacySetting
						          hasReputationScore ReputationScore
						          hasWallet DigitalWallet
						          createsVariations SceneObject
						          hasInteractionPreference InteractionPreference
						      }

						      class DigitalWallet {
						          rdfs:label "Digital Wallet"
						          rdfs:comment "Represents the agent's wallet for managing digital assets and currencies."
						      }

						      class AIAgent {
						          rdfs:label "AI Agent"
						          rdfs:comment "Represents AI entities with varying levels of autonomy and capabilities."
						          decayFunction xsd:string
						      }

						      class HumanAgent {
						          rdfs:label "Human Agent"
						          rdfs:comment "Represents human users within the metaverse."
						      }

						      class MetaverseScene {
						          rdfs:label "Metaverse Scene"
						          rdfs:comment "Represents a specific environment or space within the metaverse."
						          governedBy GovernanceStructure
						          hasPolicy MetaversePolicy
						      }

						      class DigitalAsset {
						          rdfs:label "Digital Asset"
						          rdfs:comment "Represents unique digital goods and assets within the metaverse."
						          hasOwner MetaverseAgent
						      }

						      class VirtualEconomy {
						          rdfs:label "Virtual Economy"
						          rdfs:comment "Represents the economic system within the metaverse."
						          regulatedBy EconomicPolicy
						          hasMarketplace Marketplace
						      }

						      class Marketplace {
						          rdfs:label "Marketplace"
						          rdfs:comment "Represents platforms or locations where digital assets are traded."
						      }

						      class GovernanceStructure {
						          rdfs:label "Governance Structure"
						          rdfs:comment "Represents the governance models and structures within the metaverse."
						      }

						      class MetaversePolicy {
						          rdfs:label "Metaverse Policy"
						          rdfs:comment "Represents policies governing behavior and interactions within the metaverse."
						      }

						      class EconomicPolicy {
						          rdfs:label "Economic Policy"
						          rdfs:comment "Represents the rules and regulations governing the virtual economy."
						      }

						      class NostrEvent {
						          rdfs:label "Nostr Event"
						          rdfs:comment "Represents an event published on the Nostr network."
						      }

						      class NostrTag {
						          rdfs:label "Nostr Tag"
						          rdfs:comment "Represents a tag associated with a NostrEvent, providing context and metadata."
						      }

						      class SceneObject {
						          rdfs:label "Scene Object"
						          rdfs:comment "Represents interactive objects within a Metaverse Scene. Agents can create variations of these objects within the USD file format."
						      }

						      class InteractionPreference {
						          rdfs:label "Interaction Preference"
						          rdfs:comment "Represents the personal conduct requirements or preferences for interactions within the metaverse."
						      }

						      MetaverseEntity <|-- MetaverseAgent
						      MetaverseEntity <|-- MetaverseScene
						      MetaverseEntity <|-- DigitalAsset
						      MetaverseEntity <|-- VirtualEconomy
						      MetaverseEntity <|-- Marketplace
						      MetaverseEntity <|-- GovernanceStructure
						      MetaverseEntity <|-- NostrEvent
						      MetaverseEntity <|-- NostrTag
						      MetaverseEntity <|-- SceneObject

						      MetaverseAgent <|-- AIAgent
						      MetaverseAgent <|-- HumanAgent

						      MetaverseAgent "1" *-- "0..*" SkillProfile : hasSkillProfile
						      MetaverseAgent "1" *-- "0..*" PrivacySetting : hasPrivacySetting
						      MetaverseAgent "1" *-- "0..*" ReputationScore : hasReputationScore
						      MetaverseAgent "1" *-- "0..*" DigitalWallet : hasWallet
						      MetaverseAgent "1" *-- "*" SceneObject : createsVariations
						      MetaverseAgent "1" *-- "1" InteractionPreference : hasInteractionPreference

						      MetaverseScene "1" *-- "0..*" GovernanceStructure : governedBy
						      MetaverseScene "1" *-- "0..*" MetaversePolicy : hasPolicy

						      DigitalAsset "1" *-- "1" MetaverseAgent : hasOwner

						      VirtualEconomy "1" *-- "0..*" EconomicPolicy : regulatedBy
						      VirtualEconomy "1" *-- "0..*" Marketplace : hasMarketplace

						  ```
					- [Online FlowChart & Diagrams Editor - Mermaid Live Editor](https://mermaid.live/view#pako:eNqlWFFv2zYQ_iuEXgYUqdMkW9oKe8nQbMtD1mAuOmDwC02dJS4UqZGUUyHzf9-RlC1akWRl84tF-tPxu7uPx6OfE6YySNKECWrMJ05zTcuVJPjxM-QeLN2CNnArLbcNeQ4_uo_ONiYVdA2CrJIDjgTgKukBmSpLkBahXwogWilLbFMBAYm_VLgUlzmhQuAEvs_BkCduCy6JRXi5t77Y292Fr0GqN7lb6DRTj5sg-jtUGgw-G0JlQ6g3O8TqjHDJRJ05F4q6pJLUBufxrYzc3B08WsRrVVRbznhFLZg72ZFfMpDQwQpqlo9ciAetNlwAiQdHqAfNt5Q1S7DW0TgeHiHRrdpSy5VcMqWB9MZH2D8wI2DJJ55zS0UYdQCmwdH_SjX37xvi2X9e_wXMjubpyNhomloUadeclSWXFJ-l71A9wfxGaYIJobkLStbaRBZgQ3pYrTVKMM7OAOWbu2lNYZJfIaZIEl5OZEt14_gJ2IIwRG0Ira2SqmwCR1rRNRcvNZQBo83PtWQu-OSbyVJj9SHdA3786sQ57YqHvMabWPD_ect63czYsmF3zNuyxFTA-IYzjPaWayU9BvVgKspgmqv75ArnJGQ_NeQX_0glg6XVNbN1b5s8KMFZ07kTxqd2wI2T4ckN4FHzXK4l_7uGg8xzpbKg8lbwJ11GVz4_SdC9WjrqyFeubU3FLQtiHXOlhZEWN38zg38BM2gaY6E87YCGvBZYk1zSbtuX42S0Tt5T_Qi2Ek4H0fO4TiP8qEgjO7McRKjF8lQap0mhWFtCnwrQ8KJU4ZTVNINsajsNyHSUboclnaZnJybv3i6xgRBBZmZv6H9UgnYrnS4FbVrnhdphXbkNvF2tXUNBtxwj74hzaUFT1ibgldSPdTbKfA97FXFHQtcCQnxbdXuWnScOs213WNgwzRTd3xSm6XY7dQZ4CPGYue0RAW-xqteCmwIyokIEgykJ9knpx5O0vtD8BClEzC3_Fo2hZcW4KwjhpKWR-2ek0mrLfdeGYbPwzfoou6Rn1NKYbcw06nFGyYbzrG2EZvE9SHALRPn3DkqkpHcALsL5bLAzkG0T5nqIfROG_QOG3hzsDIe939n_-M_bt4N1fxoY9auDwPism4AdnyRTC_fL9SBq9MAeRHeaOAVy8huHvOh-e9jQeXlo21GOA7pWbcLUKrlYJeQNwlfJu8XiDQ6Obgtp__4w10rvNpG-vGHMtdS_baQDV5C5to5vDml3QTlpwEcm2rfpy7vLYJjDPh6gMnTUplHLONdO_9xLu3YyJnTUMcZmLmIbwe_00MbFFnqt2gCV3jmWxs3UXBtxo5T2Oq2VTM6SEnRJeZakiS-dqwQrVYmNR4qPGWJdqdohzl2Alo1kSYrhhbOkrrAkQ_sHxX6yovJPpXC4ocIcQLcZt0ofJoXCtgmHz4n7vwEXzrmxuAI6seG5m6-1wOnC2sqk5-fu5wVGu6jXC6zU54ZnBd7Vi-3H6_Pry-sP9PIKrt9f0R-urjK2vvj4YXP5_cUme__u4pImu91ZAn79-_Z_Ffe1-xeL8sb3)

				- ### Change in Market Fabric
					- Over the years, King has adapted his analytical framework, moving away from traditional fundamental analysis towards understanding the dominant role of central bank actions in shaping market dynamics. His adaptive approach highlights the critical need for investors to focus on liquidity patterns rather than solely economic indicators, as the former appears to dictate market behaviors increasingly[](https://www.bankofengland.co.uk/-/media/boe/files/ccbs/resources/understanding-the-central-bank-balance-sheet.pdf)[](https://www.bis.org/publ/mktc11.pdf)[](https://www.bis.org/publ/bppdf/bispap66b.pdf).

  - # NVIDIA Omniverse
  - Omniverse is a collaborative platform developed by NVIDIA that enables users to create, simulate, and render 3D scenes and assets across multiple software applications. At the core of Omniverse lies the Universal Scene Description (USD) format, an open-source 3D scene description and file format that facilitates the interchange of 3D graphics data between different tools and applications.

  - ### **VoxGRAF**
		- [VoxGRAF](https://katjaschwarz.github.io/voxgraf/) - *   VoxGraf is a tool to visualise the evolution of codebases through time using a 3D landscape metaphor where each file is represented as a mountain.
  -   File size determines the height of the mountain, visualising file complexity and potential maintainability issues.
  -   Colour represents different code metrics, enabling developers to identify problem areas such as code smells, technical debt, or recent changes.
  -   VoxGraf allows one to explore a codebase's history and evolution in a dynamic and intuitive way.
  -   It helps identify parts of the system that have changed often, grown rapidly, or possess specific characteristics.
  -   The tool allows developers to analyse different revisions of a codebase and compare the overall structure at different points in time.
  -   VoxGraf aims to assist with tasks such as [[software engineering]], refactoring, and understanding code complexity.
  -   The tool promotes better understanding of software development processes and architecture decisions.
  -   Customisation of colours and metrics is possible, enabling the tool to adapt to different codebases and analysis goals.

		- ### First attempt, test scene in a headless container - just returned the PNG
			- ![Screenshot 2025-07-15 075620.png](assets/Screenshot_2025-07-15_075620_1759151522545_0.png)

		- ### Fetching Keysets from Cashew Mint
			- Use JavaScript to asynchronously fetch the list of available keysets from the Cashew mint's API.
			- This step is crucial for understanding which denominations of ecash your wallet can handle.
			- Example API call: `fetch('https://cashew-mint.example/api/keysets').then(response => response.json())`

		- # LINKED JSON
			- Finally the, to improve on the OWL by simplifying it, this is a version using [Linked-JSON](https://linkedobjects.org/Linked-JSON) (by [Melvin Carvalho](https://github.com/melvincarvalho)). Some details are lost.
				- [Linked-JSON](../assets/output_linked_json_1713698682322_0.json) version of the OWL ontology
					- Mermaid version stripped back to Linked-JSON expressiveness
						- ```mermaid
						  classDiagram
						      class MetaverseEntity {
						          rdfs:label "Metaverse Entity"
						          rdfs:comment "The root type encompassing all entities within the metaverse."
						      }

						      class MetaverseAgent {
						          rdfs:label "Metaverse Agent"
						          rdfs:comment "Represents any agent within the metaverse, including human users and AI entities."
						          participatesIn MetaverseScene
						          hasSkillProfile SkillProfile
						          hasPrivacySetting PrivacySetting
						          hasReputationScore ReputationScore
						          hasWallet DigitalWallet
						          createsVariations SceneObject
						          hasInteractionPreference InteractionPreference
						      }

						      class DigitalWallet {
						          rdfs:label "Digital Wallet"
						          rdfs:comment "Represents the agent's wallet for managing digital assets and currencies."
						      }

						      class AIAgent {
						          rdfs:label "AI Agent"
						          rdfs:comment "Represents AI entities with varying levels of autonomy and capabilities."
						          decayFunction xsd:string
						      }

						      class HumanAgent {
						          rdfs:label "Human Agent"
						          rdfs:comment "Represents human users within the metaverse."
						      }

						      class MetaverseScene {
						          rdfs:label "Metaverse Scene"
						          rdfs:comment "Represents a specific environment or space within the metaverse."
						          governedBy GovernanceStructure
						          hasPolicy MetaversePolicy
						      }

						      class DigitalAsset {
						          rdfs:label "Digital Asset"
						          rdfs:comment "Represents unique digital goods and assets within the metaverse."
						          hasOwner MetaverseAgent
						      }

						      class VirtualEconomy {
						          rdfs:label "Virtual Economy"
						          rdfs:comment "Represents the economic system within the metaverse."
						          regulatedBy EconomicPolicy
						          hasMarketplace Marketplace
						      }

						      class Marketplace {
						          rdfs:label "Marketplace"
						          rdfs:comment "Represents platforms or locations where digital assets are traded."
						      }

						      class GovernanceStructure {
						          rdfs:label "Governance Structure"
						          rdfs:comment "Represents the governance models and structures within the metaverse."
						      }

						      class MetaversePolicy {
						          rdfs:label "Metaverse Policy"
						          rdfs:comment "Represents policies governing behavior and interactions within the metaverse."
						      }

						      class EconomicPolicy {
						          rdfs:label "Economic Policy"
						          rdfs:comment "Represents the rules and regulations governing the virtual economy."
						      }

						      class NostrEvent {
						          rdfs:label "Nostr Event"
						          rdfs:comment "Represents an event published on the Nostr network."
						      }

						      class NostrTag {
						          rdfs:label "Nostr Tag"
						          rdfs:comment "Represents a tag associated with a NostrEvent, providing context and metadata."
						      }

						      class SceneObject {
						          rdfs:label "Scene Object"
						          rdfs:comment "Represents interactive objects within a Metaverse Scene. Agents can create variations of these objects within the USD file format."
						      }

						      class InteractionPreference {
						          rdfs:label "Interaction Preference"
						          rdfs:comment "Represents the personal conduct requirements or preferences for interactions within the metaverse."
						      }

						      MetaverseEntity <|-- MetaverseAgent
						      MetaverseEntity <|-- MetaverseScene
						      MetaverseEntity <|-- DigitalAsset
						      MetaverseEntity <|-- VirtualEconomy
						      MetaverseEntity <|-- Marketplace
						      MetaverseEntity <|-- GovernanceStructure
						      MetaverseEntity <|-- NostrEvent
						      MetaverseEntity <|-- NostrTag
						      MetaverseEntity <|-- SceneObject

						      MetaverseAgent <|-- AIAgent
						      MetaverseAgent <|-- HumanAgent

						      MetaverseAgent "1" *-- "0..*" SkillProfile : hasSkillProfile
						      MetaverseAgent "1" *-- "0..*" PrivacySetting : hasPrivacySetting
						      MetaverseAgent "1" *-- "0..*" ReputationScore : hasReputationScore
						      MetaverseAgent "1" *-- "0..*" DigitalWallet : hasWallet
						      MetaverseAgent "1" *-- "*" SceneObject : createsVariations
						      MetaverseAgent "1" *-- "1" InteractionPreference : hasInteractionPreference

						      MetaverseScene "1" *-- "0..*" GovernanceStructure : governedBy
						      MetaverseScene "1" *-- "0..*" MetaversePolicy : hasPolicy

						      DigitalAsset "1" *-- "1" MetaverseAgent : hasOwner

						      VirtualEconomy "1" *-- "0..*" EconomicPolicy : regulatedBy
						      VirtualEconomy "1" *-- "0..*" Marketplace : hasMarketplace

						  ```
					- [Online FlowChart & Diagrams Editor - Mermaid Live Editor](https://mermaid.live/view#pako:eNqlWFFv2zYQ_iuEXgYUqdMkW9oKe8nQbMtD1mAuOmDwC02dJS4UqZGUUyHzf9-RlC1akWRl84tF-tPxu7uPx6OfE6YySNKECWrMJ05zTcuVJPjxM-QeLN2CNnArLbcNeQ4_uo_ONiYVdA2CrJIDjgTgKukBmSpLkBahXwogWilLbFMBAYm_VLgUlzmhQuAEvs_BkCduCy6JRXi5t77Y292Fr0GqN7lb6DRTj5sg-jtUGgw-G0JlQ6g3O8TqjHDJRJ05F4q6pJLUBufxrYzc3B08WsRrVVRbznhFLZg72ZFfMpDQwQpqlo9ciAetNlwAiQdHqAfNt5Q1S7DW0TgeHiHRrdpSy5VcMqWB9MZH2D8wI2DJJ55zS0UYdQCmwdH_SjX37xvi2X9e_wXMjubpyNhomloUadeclSWXFJ-l71A9wfxGaYIJobkLStbaRBZgQ3pYrTVKMM7OAOWbu2lNYZJfIaZIEl5OZEt14_gJ2IIwRG0Ira2SqmwCR1rRNRcvNZQBo83PtWQu-OSbyVJj9SHdA3786sQ57YqHvMabWPD_ect63czYsmF3zNuyxFTA-IYzjPaWayU9BvVgKspgmqv75ArnJGQ_NeQX_0glg6XVNbN1b5s8KMFZ07kTxqd2wI2T4ckN4FHzXK4l_7uGg8xzpbKg8lbwJ11GVz4_SdC9WjrqyFeubU3FLQtiHXOlhZEWN38zg38BM2gaY6E87YCGvBZYk1zSbtuX42S0Tt5T_Qi2Ek4H0fO4TiP8qEgjO7McRKjF8lQap0mhWFtCnwrQ8KJU4ZTVNINsajsNyHSUboclnaZnJybv3i6xgRBBZmZv6H9UgnYrnS4FbVrnhdphXbkNvF2tXUNBtxwj74hzaUFT1ibgldSPdTbKfA97FXFHQtcCQnxbdXuWnScOs213WNgwzRTd3xSm6XY7dQZ4CPGYue0RAW-xqteCmwIyokIEgykJ9knpx5O0vtD8BClEzC3_Fo2hZcW4KwjhpKWR-2ek0mrLfdeGYbPwzfoou6Rn1NKYbcw06nFGyYbzrG2EZvE9SHALRPn3DkqkpHcALsL5bLAzkG0T5nqIfROG_QOG3hzsDIe939n_-M_bt4N1fxoY9auDwPism4AdnyRTC_fL9SBq9MAeRHeaOAVy8huHvOh-e9jQeXlo21GOA7pWbcLUKrlYJeQNwlfJu8XiDQ6Obgtp__4w10rvNpG-vGHMtdS_baQDV5C5to5vDml3QTlpwEcm2rfpy7vLYJjDPh6gMnTUplHLONdO_9xLu3YyJnTUMcZmLmIbwe_00MbFFnqt2gCV3jmWxs3UXBtxo5T2Oq2VTM6SEnRJeZakiS-dqwQrVYmNR4qPGWJdqdohzl2Alo1kSYrhhbOkrrAkQ_sHxX6yovJPpXC4ocIcQLcZt0ofJoXCtgmHz4n7vwEXzrmxuAI6seG5m6-1wOnC2sqk5-fu5wVGu6jXC6zU54ZnBd7Vi-3H6_Pry-sP9PIKrt9f0R-urjK2vvj4YXP5_cUme__u4pImu91ZAn79-_Z_Ffe1-xeL8sb3)

				- ### Change in Market Fabric
					- Over the years, King has adapted his analytical framework, moving away from traditional fundamental analysis towards understanding the dominant role of central bank actions in shaping market dynamics. His adaptive approach highlights the critical need for investors to focus on liquidity patterns rather than solely economic indicators, as the former appears to dictate market behaviors increasingly[](https://www.bankofengland.co.uk/-/media/boe/files/ccbs/resources/understanding-the-central-bank-balance-sheet.pdf)[](https://www.bis.org/publ/mktc11.pdf)[](https://www.bis.org/publ/bppdf/bispap66b.pdf).

  - # NVIDIA Omniverse
  - Omniverse is a collaborative platform developed by NVIDIA that enables users to create, simulate, and render 3D scenes and assets across multiple software applications. At the core of Omniverse lies the Universal Scene Description (USD) format, an open-source 3D scene description and file format that facilitates the interchange of 3D graphics data between different tools and applications.

  - # AI in Education
  - 🧑‍🏫 Teacher's Perspective:
	  AI is redefining the role of educators, shifting from content delivery to facilitation of deeper understanding and critical thinking.
	  Teachers are leveraging AI for lesson preparation, reducing administrative burdens and enhancing the quality of classroom interactions.
		- By challenging decision biases and encouraging diverse perspectives, AI acts as a catalyst for developing critical thinking skills.

  - # NVIDIA Omniverse
  - Omniverse is a collaborative platform developed by NVIDIA that enables users to create, simulate, and render 3D scenes and assets across multiple software applications. At the core of Omniverse lies the Universal Scene Description (USD) format, an open-source 3D scene description and file format that facilitates the interchange of 3D graphics data between different tools and applications.

  - ## Content Depth and Breadth
  - Present a holistic understanding of the topic
  - Mimic socratic self-questioning and theory of mind as needed
  - Do not elide or truncate code in code samples

		- ### Scalability and Performance
		- Key features of USD include:
		- Hierarchical scene composition

  - ## Scene Scale

  - ## Scene Scale

  - ### Accessible metaverse for pre-viz
  - Pre-visualization (or "pre-viz") is a process in which a rough
  simulation of a visual effect or scene is created prior to its actual
  production. In the context of LED wall virtual production, pre-viz
  refers to the creation of a 3D representation of a virtual environment,
  including the placement of cameras, actors, and other elements, that is
  then used to plan and test the visual effects and lighting for a
  live-action scene that will eventually be shot in front of an LED wall.
  - The pre-viz process allows filmmakers and visual effects artists to
  experiment with different camera angles, lighting, and visual effects
  before committing to a final version. This helps to save time and
  resources during actual production by reducing the need for multiple
  takes or re-shoots. Additionally, it allows the filmmakers to see how
  the final product will look before committing to it, which can help to
  avoid costly mistakes or changes down the line.
  - The LED wall virtual production process typically involves using a
  combination of 3D animation software, motion capture technology, and
  real-time rendering to create a virtual environment that accurately
  reflects the physical environment in which the scene will be shot. The
  pre-viz process is then used to plan and test the various visual
  effects, lighting, and camera angles that will be used in the final
  production.
  - Our collaborative software stack is potentially ideally suited to some
  of this pre-viz work, especially when combined with the power of machine
  learning, and live linked into Unreal so that changes by stakeholders
  enter the pre-production pipeline in a seamless way.

  - #### visionflow: [[Knowhere]]
  - The ultimate goal is to create a seamless, highly personalized visitor experience that evolves and continues before, during, and after a visit to a digital exhibition. This level of personalization is only made possible through the integration of advanced AI technology, biometrics, and a deep inferred understanding of individual preferences and behaviours.

  - ## USD View
  - USD View is a standalone application provided by Omniverse for viewing and inspecting USD files. It allows users to navigate and explore the contents of USD files, including the scene hierarchy, geometry, materials, and other properties.
		- Key features of USD View include:
		- Scene hierarchy navigation: Explore the structure and organization of USD scenes
		- 3D viewport: Visualize and interact with 3D objects and scenes
		- Property inspection: View and modify the attributes of selected objects and scene elements
		- Variant switching: Quickly switch between different variations of objects and scenes for visualization and testing

  - ## Universal Scene Description (USD)
  - USD is a powerful and extensible framework for describing, composing, and interchanging 3D scenes and assets. It provides a common language for defining the geometry, shading, lighting, and other properties of 3D objects and scenes. USD allows for the efficient representation of large-scale, complex 3D scenes and supports features such as layering, instancing, and variant management.
		- Key features of USD include:
		- Hierarchical scene composition
		- Layered overrides and customization
		- Instancing and referencing
		- **Variant management**
		- Extensible schema system

  - ## Scene Scale

  - ### Accessible metaverse for pre-viz
  - Pre-visualization (or "pre-viz") is a process in which a rough
  simulation of a visual effect or scene is created prior to its actual
  production. In the context of LED wall virtual production, pre-viz
  refers to the creation of a 3D representation of a virtual environment,
  including the placement of cameras, actors, and other elements, that is
  then used to plan and test the visual effects and lighting for a
  live-action scene that will eventually be shot in front of an LED wall.
  - The pre-viz process allows filmmakers and visual effects artists to
  experiment with different camera angles, lighting, and visual effects
  before committing to a final version. This helps to save time and
  resources during actual production by reducing the need for multiple
  takes or re-shoots. Additionally, it allows the filmmakers to see how
  the final product will look before committing to it, which can help to
  avoid costly mistakes or changes down the line.
  - The LED wall virtual production process typically involves using a
  combination of 3D animation software, motion capture technology, and
  real-time rendering to create a virtual environment that accurately
  reflects the physical environment in which the scene will be shot. The
  pre-viz process is then used to plan and test the various visual
  effects, lighting, and camera angles that will be used in the final
  production.
  - Our collaborative software stack is potentially ideally suited to some
  of this pre-viz work, especially when combined with the power of machine
  learning, and live linked into Unreal so that changes by stakeholders
  enter the pre-production pipeline in a seamless way.

  - #### visionflow: [[Knowhere]]
  - The ultimate goal is to create a seamless, highly personalized visitor experience that evolves and continues before, during, and after a visit to a digital exhibition. This level of personalization is only made possible through the integration of advanced AI technology, biometrics, and a deep inferred understanding of individual preferences and behaviours.

  - ## USD View
  - USD View is a standalone application provided by Omniverse for viewing and inspecting USD files. It allows users to navigate and explore the contents of USD files, including the scene hierarchy, geometry, materials, and other properties.
		- Key features of USD View include:
		- Scene hierarchy navigation: Explore the structure and organization of USD scenes
		- 3D viewport: Visualize and interact with 3D objects and scenes
		- Property inspection: View and modify the attributes of selected objects and scene elements
		- Variant switching: Quickly switch between different variations of objects and scenes for visualization and testing

  - ## Universal Scene Description (USD)
  - USD is a powerful and extensible framework for describing, composing, and interchanging 3D scenes and assets. It provides a common language for defining the geometry, shading, lighting, and other properties of 3D objects and scenes. USD allows for the efficient representation of large-scale, complex 3D scenes and supports features such as layering, instancing, and variant management.
		- Key features of USD include:
		- Hierarchical scene composition
		- Layered overrides and customization
		- Instancing and referencing
		- **Variant management**
		- Extensible schema system

  - ## Scene Scale

  ## Core Characteristics

  - **Semantic Segmentation**: Pixel-level scene labelling
  - **Contextual Reasoning**: Understanding scene context and relationships
  - **Activity Recognition**: Interpretation of agent behaviours and intentions
  - **Scene Categorisation**: Classification of environmental types
  - **3D Scene Reconstruction**: Spatial layout understanding

  ## Relationships

  - **Component Of**: Perception System
  - **Related**: Computer Vision, Semantic Segmentation, Panoptic Segmentation
  - **Utilises**: Deep Learning, Graph Neural Networks, Attention Mechanisms

  ## Key Literature

  1. Geiger, A., et al. (2013). "Vision meets robotics: The KITTI dataset." *International Journal of Robotics Research*, 32(11), 1231-1237.

  2. Caesar, H., et al. (2020). "nuScenes: A multimodal dataset for autonomous driving." *CVPR*, 11621-11631.

  ## See Also

  - [[Semantic Segmentation]]
  - [[Perception System]]
  - [[Computer Vision]]

  ## Core Characteristics

  - **Semantic Segmentation**: Pixel-level scene labelling
  - **Contextual Reasoning**: Understanding scene context and relationships
  - **Activity Recognition**: Interpretation of agent behaviours and intentions
  - **Scene Categorisation**: Classification of environmental types
  - **3D Scene Reconstruction**: Spatial layout understanding

  ## Relationships

  - **Component Of**: Perception System
  - **Related**: Computer Vision, Semantic Segmentation, Panoptic Segmentation
  - **Utilises**: Deep Learning, Graph Neural Networks, Attention Mechanisms

  ## Key Literature

  1. Geiger, A., et al. (2013). "Vision meets robotics: The KITTI dataset." *International Journal of Robotics Research*, 32(11), 1231-1237.

  2. Caesar, H., et al. (2020). "nuScenes: A multimodal dataset for autonomous driving." *CVPR*, 11621-11631.

  ## See Also

  - [[Semantic Segmentation]]
  - [[Perception System]]
  - [[Computer Vision]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z