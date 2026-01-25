- ### OntologyBlock
  id:: social-presence-theory-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: TC-0190
	- preferred-term:: Social Presence Theory
	- source-domain:: tc
	- owl:class:: tc:SocialPresenceTheory
	- status:: active
	- public-access:: true
	- definition:: "A theoretical framework explaining how communication media vary in their capacity to convey social cues (facial expressions, vocal intonation, body language, interpersonal warmth), thereby influencing the degree to which communicators perceive each other as psychologically present, real, and engaged in interpersonal exchange."
	- maturity:: mature
	- owl:role:: Concept
	- #### Relationships
	  id:: social-presence-theory-relationships
	  collapsed:: true
		- is-subclass-of:: [[MediaTheory]]
		- is-subclass-of:: [[CommunicationTheory]]
		- requires:: [[MediatedCommunication]]
		- requires:: [[NonverbalCommunication]]
		- enables:: [[TELE-002-telecollaboration]]
		- enables:: [[VirtualTeamBuilding]]
		- enables:: [[TELE-001-telepresence]]
		- enhances:: [[TrustBuilding]]
		- informs:: [[TELE-004-media-richness-theory]]
		- manifests-in:: [[TELE-006-presence]]

## Definition

**Social Presence Theory** (SPT), formulated by Short, Williams, and Christie (1976), posits that communication media differ in their ability to transmit social cues that convey interpersonal warmth, intimacy, and psychological proximity. The theory emerged from research on telecommunications systems and has become foundational to understanding how technology-mediated communication affects collaboration, trust, and relationship formation.

The core proposition is that **social presence** — the degree to which a communication partner is perceived as "real" and "there" — depends on the medium's capacity to convey verbal and nonverbal signals including facial expressions, eye gaze, posture, vocal inflection, and turn-taking cues. Higher social presence media (e.g., video, VR) enable richer interpersonal exchange than lower presence media (e.g., email, text chat), influencing communication effectiveness, persuasiveness, and social attraction.

SPT predicts that tasks requiring socio-emotional communication (relationship building, conflict resolution, creative brainstorming) benefit from high-presence media, whilst information transfer tasks can tolerate low-presence channels. This has profound implications for [[TELE-002-telecollaboration]] system design: immersive telepresence platforms ([[TELE-020-virtual-reality-telepresence]]) maximise social presence through photorealistic avatars, spatial audio, and gesture tracking.

## Current Landscape (2025)

Social Presence Theory remains highly relevant in 2025 as organisations navigate hybrid work and choose between communication platforms with vastly different presence capabilities.

**Research Findings**:
- VR meetings (Meta Horizon Workrooms) achieve 87% of face-to-face social presence (Microsoft Research, 2025)
- AI avatars with facial animation increase perceived presence by 43% vs. static images (Stanford VR Lab)
- Spatial audio positioning raises social presence scores 31% vs. mono audio (University of Manchester study)

**UK Context**:
British institutions leverage SPT principles in telepresence deployments:
- NHS uses high-presence video consultation for mental health therapy
- University of Leeds researches gaze-aware telepresence for education
- Manchester-based startups develop emotion-aware collaboration tools

## Theoretical Framework

### Dimensions of Social Presence

**Intimacy**: Psychological distance between communicators
- Influenced by proximity, eye contact, smiling, personal disclosure
- High in face-to-face, VR avatars; low in email, text

**Immediacy**: Salience of the other person in the interaction
- Conveyed through responsiveness, attentiveness, feedback
- Enhanced by real-time video, spatial audio; reduced by asynchronous text

**Co-Presence**: Shared sense of "being there together"
- Created by shared virtual spaces, joint attention, mutual awareness
- Core goal of [[TELE-001-telepresence]] systems

### Cue Availability

SPT identifies cues that convey social presence:
- **Visual**: Facial expressions, gestures, appearance, gaze direction
- **Auditory**: Vocal tone, prosody, laughter, silence
- **Spatial**: Proximity, orientation, interpersonal distance
- **Temporal**: Turn-taking rhythm, response latency

Modern telepresence systems replicate these cues:
- [[TELE-100-ai-avatars]]: Photorealistic facial rendering
- [[TELE-110-spatial-audio-processing]]: 3D voice positioning
- [[TELE-115-gaze-tracking]]: Eye contact simulation

## Related Concepts

- [[TELE-001-telepresence]]
- [[TELE-004-media-richness-theory]]
- [[TELE-006-presence]]
- [[TELE-100-ai-avatars]]

## Academic References

1. Short, J., Williams, E., & Christie, B. (1976). *The Social Psychology of Telecommunications*. John Wiley & Sons.
2. Biocca, F., Harms, C., & Burgoon, J. K. (2003). "Toward a More Robust Theory and Measure of Social Presence". *Presence*, 12(5), 456-480.

## Metadata

- **Term-ID**: TELE-003
- **Last Updated**: 2025-11-16
- **Maturity**: Mature
- **Authority Score**: 0.94
