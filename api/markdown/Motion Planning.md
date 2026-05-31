public:: true
alias:: MotionPlanning

# Motion Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dc30338bcab7e7ef40acbb67f09564a48e84dd13b6d31385b2d4d4ef42163c16",
  "@type": "Page",
  "vc:slug": "motion-planning",
  "title": "Motion Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:motion-director",
      "vc:label": "MotionDirector"
    },
    {
      "@id": "urn:visionflow:linked:trajectory-optimisation",
      "vc:label": "Trajectory Optimisation"
    },
    {
      "@id": "urn:visionflow:owl:class:comfy-ui",
      "vc:label": "ComfyUI"
    },
    {
      "@id": "urn:visionflow:owl:class:control-theory",
      "vc:label": "Control Theory"
    },
    {
      "@id": "urn:visionflow:owl:class:delivery-planning",
      "vc:label": "Delivery Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:microsoft-copilot",
      "vc:label": "Microsoft Copilot"
    },
    {
      "@id": "urn:visionflow:owl:class:music-and-audio",
      "vc:label": "Music and Audio"
    },
    {
      "@id": "urn:visionflow:owl:class:path-planning",
      "vc:label": "Path Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:social-media",
      "vc:label": "social media"
    },
    {
      "@id": "urn:visionflow:owl:class:update-cycle",
      "vc:label": "Update Cycle"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0352"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Motion Planning"
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
  "@id": "urn:ngm:class:motion-planning",
  "@type": "Class",
  "label": "Motion Planning",
  "definition": "Motion Planning extends path planning by incorporating robot dynamics, control constraints, and time-parametrisation to generate dynamically feasible trajectories that account for velocity, acceleration, jerk, and actuator limitations.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Navigation and Planning"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"},
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:motion-planning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dc30338bcab7e7ef40acbb67f09564a48e84dd13b6d31385b2d4d4ef42163c16"
  },
  "vc:resolutions": [
    {
      "raw": "[[MotionDirector]]",
      "resolved": "urn:visionflow:linked:motion-director",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trajectory Optimisation]]",
      "resolved": "urn:visionflow:linked:trajectory-optimisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[ComfyUI]]",
      "resolved": "urn:visionflow:owl:class:comfy-ui",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control Theory]]",
      "resolved": "urn:visionflow:owl:class:control-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Delivery Planning]]",
      "resolved": "urn:visionflow:owl:class:delivery-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Microsoft Copilot]]",
      "resolved": "urn:visionflow:owl:class:microsoft-copilot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Music and Audio]]",
      "resolved": "urn:visionflow:owl:class:music-and-audio",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Path Planning]]",
      "resolved": "urn:visionflow:owl:class:path-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[social media]]",
      "resolved": "urn:visionflow:owl:class:social-media",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Update Cycle]]",
      "resolved": "urn:visionflow:owl:class:update-cycle",
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
  - Motion Planning extends path planning by incorporating robot dynamics, control constraints, and time-parametrisation to generate dynamically feasible trajectories that account for velocity, acceleration, jerk, and actuator limitations. Motion planning produces executable control sequences that guide robots and autonomous vehicles from initial to goal states whilst satisfying kinodynamic constraints and optimising performance metrics.

- ### Semantic Classification
  - owl-class:: robotics:MotionPlanning
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - partOf:: [[Autonomous Navigation]]
  - requires:: [[Path Planning]]
  - requires:: [[Control Theory]]
  - enables:: [[Autonomous Vehicle]]
  - enables:: [[Autonomous Robot]]

- ### Content
  - Motion Planning extends path planning by incorporating robot dynamics, control constraints, and time-parametrisation to generate dynamically feasible trajectories that account for velocity, acceleration, jerk, and actuator limitations. Motion planning produces executable control sequences that guide robots and autonomous vehicles from initial to goal states whilst satisfying kinodynamic constraints and optimising performance metrics.

  - # Misc links being integrated.
  - [[MotionDirector]], with a dual-path LoRAs architecture to decouple the learning of appearance and motion. Further, we design a novel appearance-debiased temporal loss to mitigate the influence of appearance on the temporal training objective. Experimental results show the proposed method can generate videos of diverse appearances for the customized motions. Our method also supports various downstream applications, such as the mixing of different videos with their appearance and motion respectively, and animating a single image with customized motions.
  - [RAVE: Randomized Noise Shuffling for Fast and Consistent Video Editing with Diffusion Models (rave-video.github.io)](https://rave-video.github.io/)
  - https://discord.com/channels/1076117621407223829/1192162917395730635/1192162917395730635
  - Here's one way to use the brand new RAVE node from here: https://github.com/spacepxl/ComfyUI-RAVE
		- First pass often has flickering (depending a lot on the input), so I made a workflow to smooth even harsh flickering with AD. This allows for utilizing the transformative and often more detailed vid2vid from RAVE and still get smooth results in [[ComfyUI]]
			- Updated LCM version: https://discord.com/channels/1076117621407223829/1192162917395730635/1192212692354748427
			  using the "video/controlgif/animatediff" contolnet from here: https://huggingface.co/crishhh/animatediff_controlnet/blob/main/controlnet_checkpoint.ckpt
		- {{video https://rave-video.github.io/static/teaser/car-turn_final.mp4}}

  - # Introduction and Problem Definition
  - [[Delivery Planning]]

  - #### Gaze
		- Gaze is broadly agreed to be highly important for mediating flow. Mutual gaze is a rich emotional channel. The research must consider gaze. All of the researchers listed around the Venn have at some point engaged with this topic.

  - # Misc links being integrated.
  - [[MotionDirector]], with a dual-path LoRAs architecture to decouple the learning of appearance and motion. Further, we design a novel appearance-debiased temporal loss to mitigate the influence of appearance on the temporal training objective. Experimental results show the proposed method can generate videos of diverse appearances for the customized motions. Our method also supports various downstream applications, such as the mixing of different videos with their appearance and motion respectively, and animating a single image with customized motions.
  - [RAVE: Randomized Noise Shuffling for Fast and Consistent Video Editing with Diffusion Models (rave-video.github.io)](https://rave-video.github.io/)
  - https://discord.com/channels/1076117621407223829/1192162917395730635/1192162917395730635
  - Here's one way to use the brand new RAVE node from here: https://github.com/spacepxl/ComfyUI-RAVE
		- First pass often has flickering (depending a lot on the input), so I made a workflow to smooth even harsh flickering with AD. This allows for utilizing the transformative and often more detailed vid2vid from RAVE and still get smooth results in [[ComfyUI]]
			- Updated LCM version: https://discord.com/channels/1076117621407223829/1192162917395730635/1192212692354748427
			  using the "video/controlgif/animatediff" contolnet from here: https://huggingface.co/crishhh/animatediff_controlnet/blob/main/controlnet_checkpoint.ckpt
		- {{video https://rave-video.github.io/static/teaser/car-turn_final.mp4}}

  - # Introduction and Problem Definition
  - [[Delivery Planning]]

  - #### Gaze
		- Gaze is broadly agreed to be highly important for mediating flow. Mutual gaze is a rich emotional channel. The research must consider gaze. All of the researchers listed around the Venn have at some point engaged with this topic.

  - # Introduction and Problem Definition
  - [[Delivery Planning]]

  - # The bad
  - **Price**: $3,500 is very expensive, especially for a Gen 1 product.
  - **App Store Restrictions**: Not available outside the US without an American Apple ID.
  - **Limited USB-C Port**: Only for charging, cannot connect to other devices.
  - **Motion Blur**: Using on a train or in motion causes blurriness and nausea.
  - **Field of View**: Feels like looking through binoculars, can feel tunnel-visioned.

  - ## Social Media and Marketing
		- Use [[social media]] planning tools to schedule posts and analyse engagement
		- **Twinmotion** ([guide](https://www.vectorworks.net/en-US/newsroom/your-guide-to-rendering-with-twinmotion))
			- Markerless AR viewer on iOS/Android; place your model at 1 : 1 scale on site without coding.
		- **Desktop VR via Enscape or Twinmotion**
			- Import via Datasmith into Unreal Engine or FBX/OBJ into Unity for bespoke interactive apps. AI can assist by auto-generating environment assets or textures.

  - ## Tools roundup [[Update Cycle]]
  - [Motion Array So Easy (youtube.com)](https://www.youtube.com/watch?v=Hd0KYxotzv8)
  - [Suno AI](https://www.suno.ai/) is now integrated into Microsoft [[Microsoft Copilot]] [[Music and Audio]]

  - ##### Technical Challenges
  - There are technical challenges in achieving dense personalized displays, especially for a large number of viewers. As of now, creating a personalized display for up to 5 people is feasible, but scaling up requires a substantial budget and careful planning. Fortunately both of these seem available and it seems timely to look at this option.

  - ##### Technical Challenges
  - There are technical challenges in achieving dense personalized displays, especially for a large number of viewers. As of now, creating a personalized display for up to 5 people is feasible, but scaling up requires a substantial budget and careful planning. Fortunately both of these seem available and it seems timely to look at this option.

  ## Core Characteristics

  - **Kinodynamic Constraints**: Incorporation of velocity and acceleration limits
  - **Trajectory Generation**: Time-parametrised state sequences
  - **Control Integration**: Direct connection to low-level controllers
  - **Smoothness**: Jerk minimisation for comfort and efficiency
  - **Obstacle Avoidance**: Dynamic obstacle consideration

  ## Relationships

  - **Related To**: Path Planning, Trajectory Optimisation, Control Theory
  - **Component Of**: Autonomous Vehicle, Manipulation Planning
  - **Methods**: RRT*, CHOMP, TEB, MPC

  ## Key Literature

  1. Karaman, S., & Frazzoli, E. (2011). "Sampling-based algorithms for optimal motion planning." *International Journal of Robotics Research*, 30(7), 846-894.

  2. Ratliff, N., et al. (2009). "CHOMP: Gradient optimization techniques for efficient motion planning." *ICRA*, 489-494.

  ## See Also

  - [[Path Planning]]
  - [[Trajectory Optimisation]]
  - [[Control Theory]]

  ## Core Characteristics

  - **Kinodynamic Constraints**: Incorporation of velocity and acceleration limits
  - **Trajectory Generation**: Time-parametrised state sequences
  - **Control Integration**: Direct connection to low-level controllers
  - **Smoothness**: Jerk minimisation for comfort and efficiency
  - **Obstacle Avoidance**: Dynamic obstacle consideration

  ## Relationships

  - **Related To**: Path Planning, Trajectory Optimisation, Control Theory
  - **Component Of**: Autonomous Vehicle, Manipulation Planning
  - **Methods**: RRT*, CHOMP, TEB, MPC

  ## Key Literature

  1. Karaman, S., & Frazzoli, E. (2011). "Sampling-based algorithms for optimal motion planning." *International Journal of Robotics Research*, 30(7), 846-894.

  2. Ratliff, N., et al. (2009). "CHOMP: Gradient optimization techniques for efficient motion planning." *ICRA*, 489-494.

  ## See Also

  - [[Path Planning]]
  - [[Trajectory Optimisation]]
  - [[Control Theory]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
