iri:: http://narrativegoldmine.com/spatial-computing#ParameterModulationSystem
uri:: urn:visionclaw:concept:spatial-computing:parameter-modulation-system
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:parameter-modulation-system
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Parameter Modulation System
content-hash:: sha256-12-9295ddf79b86
legacy-term-id:: MV-9990
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - A signal processing architecture that uses modulator signals to dynamically control carrier signal parameters like pitch, amplitude, and timbre over time, enabling expressive sound synthesis and complex audio effects through techniques such as FM, AM, and envelope modulation.

- ### Semantic Classification
  - owl-class:: spatial-computing:ParameterModulationSystem
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Audio System]]
  - enables:: [[Dynamic Sound Design]]

- ### Content

  - #### Modulation Types
		- Frequency Modulation (FM): Modulator affects carrier frequency
		- Amplitude Modulation (AM): Modulator affects carrier volume
		- Wavetable Modulation: Morphing between wave shapes
		- Filter Modulation: Dynamic cutoff and resonance control
		- Ring Modulation: Multiplicative signal combination
  - #### Modulation Sources
		- ADSR Envelopes: Attack, Decay, Sustain, Release shaping
		- LFOs (Low Frequency Oscillators): Cyclic parameter variation
		- Velocity and Aftertouch: Performance-based control
		- Step Sequencers: Rhythmic parameter patterns
		- Neural networks for automatic parameter estimation

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
