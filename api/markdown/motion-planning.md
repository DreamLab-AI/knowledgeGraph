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
		- First pass often has flickering (depending a lot on the input), so I made a workflow to smooth even harsh flickering with AD. This allows for utilizing the transformative and often more detailed vid2vid from RAVE and still get smooth results in [[Node-Based Diffusion Pipeline Interface]]
			- Updated LCM version: https://discord.com/channels/1076117621407223829/1192162917395730635/1192212692354748427
			  using the "video/controlgif/animatediff" contolnet from here: https://huggingface.co/crishhh/animatediff_controlnet/blob/main/controlnet_checkpoint.ckpt
		- {{video https://rave-video.github.io/static/teaser/car-turn_final.mp4}}

  - # Introduction and Problem Definition
  - [[Technology Programme Delivery Planning]]

  - #### Gaze
		- Gaze is broadly agreed to be highly important for mediating flow. Mutual gaze is a rich emotional channel. The research must consider gaze. All of the researchers listed around the Venn have at some point engaged with this topic.

  - # Misc links being integrated.
  - [[MotionDirector]], with a dual-path LoRAs architecture to decouple the learning of appearance and motion. Further, we design a novel appearance-debiased temporal loss to mitigate the influence of appearance on the temporal training objective. Experimental results show the proposed method can generate videos of diverse appearances for the customized motions. Our method also supports various downstream applications, such as the mixing of different videos with their appearance and motion respectively, and animating a single image with customized motions.
  - [RAVE: Randomized Noise Shuffling for Fast and Consistent Video Editing with Diffusion Models (rave-video.github.io)](https://rave-video.github.io/)
  - https://discord.com/channels/1076117621407223829/1192162917395730635/1192162917395730635
  - Here's one way to use the brand new RAVE node from here: https://github.com/spacepxl/ComfyUI-RAVE
		- First pass often has flickering (depending a lot on the input), so I made a workflow to smooth even harsh flickering with AD. This allows for utilizing the transformative and often more detailed vid2vid from RAVE and still get smooth results in [[Node-Based Diffusion Pipeline Interface]]
			- Updated LCM version: https://discord.com/channels/1076117621407223829/1192162917395730635/1192212692354748427
			  using the "video/controlgif/animatediff" contolnet from here: https://huggingface.co/crishhh/animatediff_controlnet/blob/main/controlnet_checkpoint.ckpt
		- {{video https://rave-video.github.io/static/teaser/car-turn_final.mp4}}

  - # Introduction and Problem Definition
  - [[Technology Programme Delivery Planning]]

  - #### Gaze
		- Gaze is broadly agreed to be highly important for mediating flow. Mutual gaze is a rich emotional channel. The research must consider gaze. All of the researchers listed around the Venn have at some point engaged with this topic.

  - # Introduction and Problem Definition
  - [[Technology Programme Delivery Planning]]

  - # The bad
  - **Price**: $3,500 is very expensive, especially for a Gen 1 product.
  - **App Store Restrictions**: Not available outside the US without an American Apple ID.
  - **Limited USB-C Port**: Only for charging, cannot connect to other devices.
  - **Motion Blur**: Using on a train or in motion causes blurriness and nausea.
  - **Field of View**: Feels like looking through binoculars, can feel tunnel-visioned.

  - ## Social Media and Marketing
		- Use [[Social Media Platform Infrastructure]] planning tools to schedule posts and analyse engagement
		- **Twinmotion** ([guide](https://www.vectorworks.net/en-US/newsroom/your-guide-to-rendering-with-twinmotion))
			- Markerless AR viewer on iOS/Android; place your model at 1 : 1 scale on site without coding.
		- **Desktop VR via Enscape or Twinmotion**
			- Import via Datasmith into Unreal Engine or FBX/OBJ into Unity for bespoke interactive apps. AI can assist by auto-generating environment assets or textures.

  - ## Tools roundup [[Knowledge Artefact Update Cycle]]
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