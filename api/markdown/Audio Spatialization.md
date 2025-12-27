- ### OntologyBlock
  id:: audio-spatialization-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-9784
	- source-domain:: mv
	- preferred-term:: Audio Spatialization
	- status:: active
	- definition:: Audio Spatialization is the technique of positioning sounds in three-dimensional space using Head-Related Transfer Functions (HRTFs), binaural processing, and ambisonics to create realistic 3D audio experiences that respond to listener position and head movement in virtual reality and immersive applications.
	- owl:class:: mv:AudioSpatialization
	- belongsToDomain:: [[metaverse]]
	- is-subclass-of:: [[Spatial Audio Technology]]
	- enables:: [[3D Sound Perception]], [[Immersive Audio]], [[Sound Localization]]
	- requires:: [[HRTF Filters]], [[Binaural Rendering]], [[Head Tracking]]
	- #### Relationships
	  id:: audio-spatialization-relationships
	  collapsed:: true

### Technical Details
Key components include:
- **HRTF (Head-Related Transfer Functions)**: Filters encoding how sound reaches ears based on head/ear geometry and source direction
- **Binaural Audio**: Two-channel synthesis enabling 3D sound perception through headphones
- **Interaural Differences**: ILD (level) and ITD (time) cues used by brain for localization
- **Ambisonics**: 3D audio rendering treating HRTFs as virtual loudspeakers around the head

### HRTF Capture
Most accurate method involves placing microphones in ears, playing sounds from all directions in anechoic chamber, and computing transfer functions from recorded differences.

### Standards
AES69-2022 (SOFA 2.1) provides standardized file format for exchanging spatial acoustic data.

### Applications
VR/AR immersion, gaming, music production, and communication technologies benefit from precise spatial audio corresponding to real-world sound localization.
