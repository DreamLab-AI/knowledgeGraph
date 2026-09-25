Speed limitation is a collaborative robotics safety function that restricts the maximum velocity of robot joints or the tool centre point to a defined safe threshold, as specified by ISO/TS 15066 and ISO 10218. It is a key mechanism for enabling safe human-robot collaboration in shared workspaces by ensuring robot motion cannot exceed speeds that would cause unacceptable injury risk upon contact. Speed limitation operates continuously or is activated when a human is detected within a monitored zone.

### Semantic Classification

### Content

### Primary Definition

**Speed Limitation** (RB-0093) restricts the maximum operational speed of a robot's joints or tool centre point to a predefined safe value. The velocity threshold is derived from biomechanical injury data and the minimum protective distance between robot and human at the moment of detection, as specified in ISO 10218-2:2025 (which absorbed the biomechanical limit tables formerly in ISO/TS 15066:2016 Annex A).

Speed limitation is one of the four collaborative application modes consolidated in ISO 10218-2:2025, alongside safety-rated monitored stop, hand guiding, and speed-and-separation monitoring. It is frequently combined with power-and-force limiting to provide defence-in-depth: even if contact occurs at the limited speed, the resulting force is bounded within acceptable injury thresholds.

### Provenance

