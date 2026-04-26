iri:: http://narrativegoldmine.com/distributed-collaboration#Presence
uri:: urn:visionclaw:concept:distributed-collaboration:presence-tc-0006
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:distributed-collaboration:presence-tc-0006
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: distributed-collaboration
preferred-term:: Presence
content-hash:: sha256-12-7b53c39f32d5
legacy-term-id:: TC-0006
status:: active
maturity:: mature
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - "The subjective psychological phenomenon of perceiving oneself as located within a mediated environment rather than one's actual physical location, characterised by a sense of 'being there' that emerges from immersive sensory stimulation and reduced awareness of the mediating technology, foundational to effective telepresence experiences."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:Presence
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[PsychologicalPhenomenon]]
  - requires:: [[SuspensionOfDisbelief]]
  - enables:: [[TELE-001-telepresence]]

- ### Content

  ## Definition

  **Presence** is the psychological state where individuals perceive themselves as existing within a mediated (virtual or remote) environment rather than their actual physical surroundings, experiencing a compelling sense of "being there" despite intellectual awareness of the technological mediation. This phenomenon, central to [[TELE-001-telepresence]] effectiveness, emerges when immersive sensory stimulation (visual, auditory, haptic) captures attentional resources sufficiently that users respond to mediated stimuli as if they were real, exhibiting authentic emotional reactions, spatial navigation behaviours, and social interactions.

  Presence manifests across three dimensions: **spatial presence** (feeling physically located in the mediated space), **social presence** (perceiving other agents as psychologically present [[TELE-003-social-presence-theory]]), and **self-presence** (experiencing embodiment in a virtual representation). High presence correlates with immersion (objective system characteristics: resolution, field of view, latency) but ultimately depends on subjective user engagement and willingness to "suspend disbelief" in the mediation.

  ## Dimensions of Presence

  ### Spatial Presence
  - Feeling physically located in virtual/remote environment
  - Responding to virtual objects as if physically present (e.g., ducking under low beams)
  - Forgetting physical body location
  - Enabled by: Wide field of view, stereoscopic depth, head tracking, spatial audio

  ### Social Presence ([[TELE-003-social-presence-theory]])
  - Perceiving other humans/agents as psychologically "there"
  - Responding emotionally to virtual humans as if real people
  - Engaging in natural social behaviours (eye contact, turn-taking)
  - Enabled by: Photorealistic avatars [[TELE-100-ai-avatars]], nonverbal cues, responsive AI

  ### Self-Presence
  - Feeling embodied in virtual avatar
  - Accepting virtual body as own
  - Body ownership illusion (rubber hand illusion in VR)
  - Enabled by: First-person perspective, hand tracking, full-body avatars

  ## Factors Influencing Presence

  ### Immersion (Objective System Characteristics)
  - **Visual**: Resolution, field of view, stereoscopy, frame rate
  - **Auditory**: Spatial audio, head-related transfer functions, dynamic occlusion
  - **Haptic**: Force feedback, tactile vibration, thermal stimulation
  - **Latency**: Motion-to-photon delay <20ms critical for VR presence

  ### Involvement (Subjective User Engagement)
  - **Attention**: Focus on virtual environment, ignoring physical surroundings
  - **Emotional Engagement**: Caring about virtual events/characters
  - **Suspension of Disbelief**: Accepting mediation, not questioning virtuality
  - **Narrative Transportation**: Absorbed in story/experience

  ### Individual Differences
  - **Imaginative Tendency**: Ability to become absorbed in imaginative experiences
  - **Prior Experience**: VR familiarity reduces novelty, may increase presence through habituation
  - **Gaming Experience**: Gamers report higher presence (trained suspension of disbelief)
  - **Motion Sensitivity**: Cybersickness reduces presence

  ## Measuring Presence

  ### Subjective Questionnaires
  - **Witmer & Singer Presence Questionnaire (PQ)**: 32 items, 7-point Likert scale
  - **Igroup Presence Questionnaire (IPQ)**: 14 items, spatial/involvement/realness subscales
  - **Slater-Usoh-Steed (SUS) Questionnaire**: 6 items, simple presence assessment

  ### Behavioural Measures
  - **Postural Sway**: Body sway correlates with presence (responding to virtual height/motion)
  - **Startle Response**: Flinching at virtual threats (snakes, falling objects)
  - **Navigation Efficiency**: Natural spatial navigation indicates high spatial presence

  ### Physiological Measures
  - **Heart Rate**: Increases during presence-inducing virtual events (rollercoasters, heights)
  - **Skin Conductance**: Galvanic skin response to virtual stressors
  - **EEG**: Brain activity patterns distinguish high vs. low presence states

  ## Presence Breaks

  **Events that disrupt presence**:
  - Visual glitches (texture pop-in, clipping, lag)
  - Controller tracking loss
  - Unexpected real-world stimuli (phone ringing, someone touching VR user)
  - Cognitive dissonance (avatar hands misaligned with real hands)
  - Cybersickness onset (nausea, disorientation)

  **Recovery from Breaks**:
  - Presence rapidly restores after brief disruptions (<5 seconds)
  - Cumulative disruptions decrease overall presence
  - Immersive narratives help maintain presence despite glitches

  #### Related Concepts
  - [[TELE-001-telepresence]]
  - [[TELE-003-social-presence-theory]]
  - [[TELE-020-virtual-reality-telepresence]]
  - [[TELE-100-ai-avatars]]
  - [[Immersion]]
  - [[Embodiment]]

  #### References
  1. Slater, M., & Wilbur, S. (1997). "A Framework for Immersive Virtual Environments (FIVE): Speculations on the Role of Presence in Virtual Environments". *Presence: Teleoperators and Virtual Environments*, 6(6), 603-616.
  2. Witmer, B. G., & Singer, M. J. (1998). "Measuring Presence in Virtual Environments: A Presence Questionnaire". *Presence*, 7(3), 225-240.
  3. Lombard, M., & Ditton, T. (1997). "At the Heart of It All: The Concept of Presence". *Journal of Computer-Mediated Communication*, 3(2).

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
