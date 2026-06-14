public:: true

# Assistive Robotics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:assistive-robotics",
  "@type": "Page",
  "vc:slug": "assistive-robotics",
  "title": "Assistive Robotics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:assistive-robotics",
  "@type": "Class",
  "label": "Assistive Robotics",
  "definition": "Assistive Robotics is a branch of robotics concerned with designing, building, and deploying robotic systems that augment, restore, or substitute impaired human physical and cognitive functions for people with disabilities, age-related decline, or rehabilitation needs. Systems span powered exoskeletons for gait restoration, robotic prostheses with sensorimotor feedback, autonomous mobility aids, and socially interactive companion robots that provide cognitive and emotional support. Operating in close physical proximity to humans, these devices must satisfy stringent requirements for safety, transparency, and user control while integrating sensing, AI-driven intent inference, and adaptive interfaces that respond to changing physiological states.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robotic-system", "label": "Robotic System"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:exoskeleton-robot", "label": "Exoskeleton Robot"},
      {"@id": "urn:ngm:class:robotic-prosthesis", "label": "Robotic Prosthesis"},
      {"@id": "urn:ngm:class:social-robotics", "label": "Social Robotics"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:rehabilitation-engineering", "label": "Rehabilitation Engineering"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"},
      {"@id": "urn:ngm:class:independent-living", "label": "Independent Living"},
      {"@id": "urn:ngm:class:motor-rehabilitation", "label": "Motor Rehabilitation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:real-time-control", "label": "Real-Time Control"},
      {"@id": "urn:ngm:class:battery-management", "label": "Battery Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:lower-limb-exoskeleton", "label": "Lower Limb Exoskeleton"},
      {"@id": "urn:ngm:class:brain-computer-interface", "label": "Brain-Computer Interface"},
      {"@id": "urn:ngm:class:electromyography", "label": "Electromyography"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:elderly-care", "label": "Elderly Care"},
      {"@id": "urn:ngm:class:disability-inclusion", "label": "Disability Inclusion"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-13482", "label": "ISO 13482"},
      {"@id": "urn:ngm:class:medical-device-regulation", "label": "Medical Device Regulation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:industrial-robotics", "label": "Industrial Robotics"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-companions", "label": "AI Companions"},
      {"@id": "urn:ngm:class:affective-computing", "label": "Affective Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:neuroprosthetics", "label": "Neuroprosthetics"},
      {"@id": "urn:ngm:class:compliant-actuation", "label": "Compliant Actuation"},
      {"@id": "urn:ngm:class:wearable-robotics", "label": "Wearable Robotics"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:rehabilitation-robotics", "label": "Rehabilitation Robotics"}
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Assistive Robotics]] is a branch of [[Robotic System]] design focused on devices that augment, restore, or substitute impaired human physical and cognitive functions. It encompasses [[Exoskeleton Robot]] platforms for gait restoration, [[Robotic Prosthesis]] with sensorimotor feedback loops, autonomous mobility aids, and socially interactive systems classified under [[Social Robotics]]. A defining characteristic is the requirement that devices operate in sustained physical or social proximity to humans, demanding safety standards, transparency of control, and adaptive behaviour informed by [[Human Robot Interaction]] research. The field is closely related to [[Rehabilitation Engineering]] and increasingly overlaps with [[AI Companions]] and [[Affective Computing]] for cognitive and emotional support applications.

- ### Overview
  - Assistive Robotics addresses the global demand for technologies that extend the independent living capabilities of people with physical disabilities, neurological conditions, or age-related functional decline.
  - Unlike [[Industrial Robotics]], which operates in structured factory environments separated from humans, assistive systems are co-located with and often physically attached to their users, placing extraordinary demands on mechanical compliance, control safety, and ergonomic design.
  - The field draws on multiple engineering disciplines — mechanical, electrical, and biomedical — and increasingly on [[Machine Learning]] for intent inference and adaptive assistance.
  - Societal drivers include ageing demographics in high-income countries, increased survival rates from traumatic spinal cord injuries and strokes, and policy frameworks mandating accessible design.
  - Regulatory bodies in the UK (MHRA), EU (MDR 2017/745), and US (FDA) classify many assistive robotic devices as medical equipment, requiring clinical validation and post-market surveillance.

- ### Key Components and Mechanisms
  - **Actuation and Mechanics**
    - [[Actuator]] systems must provide sufficient force for human-body interaction while remaining backdrivable and impact-tolerant.
    - [[Compliant Actuation]] using series elastic actuators or hydraulic drives provides passive compliance that improves safety during unexpected contact events.
    - [[Wearable Robotics]] platforms must minimise mass and maintain a centre of gravity aligned with the wearer to avoid destabilising torques.
  - **Sensing and Intent Detection**
    - [[Electromyography]] (EMG) signals from residual musculature are widely used to infer intended limb motion in upper-limb prostheses and exoskeletons.
    - [[Brain-Computer Interface]] technologies allow direct neural control for individuals with complete motor paralysis, bypassing the peripheral nervous system.
    - [[Sensor Fusion]] combines inertial measurement units, force-torque sensors, encoders, and physiological signals to build a real-time model of user state and intent.
    - Camera and depth-sensor based environment perception enables autonomous navigation in powered wheelchairs and service robots.
  - **Control Architecture**
    - [[Real-Time Control]] loops typically run at 500 Hz to 2 kHz to maintain stability during human motion.
    - [[Machine Learning]] classifiers — including recurrent neural networks and support vector machines — are trained on user-specific EMG patterns to improve intent recognition accuracy.
    - Adaptive controllers modulate assistance levels based on user fatigue, terrain, and therapeutic progress, preserving residual muscle function rather than fully replacing it.
  - **Power and Connectivity**
    - [[Battery Management]] systems must deliver high peak currents during stair-climbing or stumble recovery while meeting ambulatory duration targets of 4–8 hours.
    - Wireless telemetry transmits device telemetry and health data for clinician monitoring, raising data privacy obligations under GDPR and HIPAA.
    - [[Embedded Systems]] integrate sensing, computation, and actuation in compact, waterproof housings suitable for daily community use.
  - **Interaction and Social Capabilities**
    - [[Social Robotics]] methods equip companion robots with expressive faces, voice synthesis, and gesture recognition to engage users with dementia, autism, or social anxiety.
    - [[Natural Language Processing]] enables voice-commanded operation for users with limited dexterity, freeing them from manual interface interaction.
    - [[Affective Computing]] techniques monitor user emotional state via facial expression, vocal tone, and physiological signals to modulate robot behaviour appropriately.

- ### Applications and Use Cases
  - **Gait Rehabilitation and Mobility**
    - [[Lower Limb Exoskeleton]] systems such as Ekso, ReWalk, and Indego are prescribed for individuals with spinal cord injury or stroke to restore overground walking, providing both therapeutic benefit and daily mobility.
    - Robotic gait trainers (Lokomat, Walkbot) provide body-weight-supported treadmill training in clinical settings, enabling high-repetition gait cycles that promote neuroplasticity.
  - **Upper-Limb Prosthetics and Orthotics**
    - Myoelectric [[Robotic Prosthesis]] hands (bebionic, i-limb) decode EMG signals to produce multi-grip hand configurations, enabling activities of daily living for transradial amputees.
    - [[Neuroprosthetics]] such as the DEKA LUKE arm incorporate implanted nerve electrodes for somatosensory feedback, restoring a sense of touch to the prosthetic hand.
  - **Elderly Care and Cognitive Assistance**
    - [[Elderly Care]] robots handle medication reminders, fall detection, and video-calling support, enabling older adults to live independently for longer.
    - Companion robots (Paro, STEVIE, Stevie II) deliver social and emotional support for users with dementia, with controlled studies demonstrating reductions in anxiety and agitation.
    - Transfer-assist robots such as ROBEAR support care staff in patient lifting, reducing musculoskeletal injuries in care settings.
  - **Cognitive and Communication Assistance**
    - Robots equipped with [[Natural Language Processing]] and augmentative communication software assist non-verbal individuals with cerebral palsy or ALS to communicate.
    - [[AI Companions]] integrated with large language models are being explored as always-available cognitive support tools for users with traumatic brain injury or ADHD.
  - **Neurological Rehabilitation**
    - Hand and wrist exoskeletons (Gloreha, SaeboGlove) provide task-oriented exercise for post-stroke patients to recover fine motor control.
    - [[Brain-Computer Interface]] systems combined with functional electrical stimulation restore voluntary hand movement in tetraplegic users through closed-loop neuromuscular stimulation.
  - **Workplace Accessibility**
    - Lightweight upper-limb support exoskeletons (EksoVest, Shoulder Support) reduce worker fatigue in overhead assembly tasks and assist employees with shoulder impairments to remain in employment.
    - Powered mobile platforms with robotic arms provide reach-and-grasp assistance to workers with limited arm strength.

- ### Relationships
  - hasPart:: [[Exoskeleton Robot]]
  - hasPart:: [[Robotic Prosthesis]]
  - hasPart:: [[Social Robotics]]
  - partOf:: [[Rehabilitation Engineering]]
  - requires:: [[Actuator]]
  - requires:: [[Embedded Systems]]
  - requires:: [[Human Robot Interaction]]
  - requires:: [[Sensor Fusion]]
  - enables:: [[Accessibility]]
  - enables:: [[Independent Living]]
  - enables:: [[Motor Rehabilitation]]
  - dependsOn:: [[Machine Learning]]
  - dependsOn:: [[Real-Time Control]]
  - dependsOn:: [[Battery Management]]
  - uses:: [[Lower Limb Exoskeleton]]
  - uses:: [[Brain-Computer Interface]]
  - uses:: [[Electromyography]]
  - uses:: [[Natural Language Processing]]
  - supports:: [[Elderly Care]]
  - supports:: [[Disability Inclusion]]
  - standardizedBy:: [[ISO 13482]]
  - standardizedBy:: [[Medical Device Regulation]]
  - contrastsWith:: [[Industrial Robotics]]
  - bridgesTo:: [[AI Companions]]
  - bridgesTo:: [[Affective Computing]]
  - relatedTo:: [[Neuroprosthetics]]
  - relatedTo:: [[Compliant Actuation]]
  - relatedTo:: [[Wearable Robotics]]

- ### Standards and Governance
  - **ISO 13482:2014** — Safety requirements for personal care robots, covering physical assistant robots, mobile servant robots, and person carrier robots. The primary international standard for assistive robotic safety.
  - **EU Medical Device Regulation (MDR) 2017/745** — Classifies many wearable and implanted assistive robots as Class IIa or Class III medical devices, requiring CE marking and clinical evaluation.
  - **FDA 21 CFR Part 820** — Quality system regulation applied to assistive robotic prosthetics and orthotics sold as medical devices in the United States.
  - **IEC 62133** — Battery safety standards applied to the energy storage systems powering mobile assistive platforms.
  - **IEEE P2863** — Emerging standard on organisational governance of artificial intelligence in healthcare and assistive technology, relevant to AI-driven intent inference systems.
  - **UN Convention on the Rights of Persons with Disabilities (CRPD)** — Article 20 (personal mobility) and Article 26 (habilitation and rehabilitation) provide the human-rights framework that increasingly shapes national funding and device-approval policies.
  - **Ethical dimensions** include equitable access (device cost versus health-system reimbursement), data sovereignty over intimate health telemetry, informed consent for semi-autonomous bodily control, and algorithmic fairness in intent-detection models trained predominantly on non-disabled populations.

- ### Provenance
  - sources:: ISO 13482:2014; EU MDR 2017/745; IEEE Robotics and Automation Letters; Journal of NeuroEngineering and Rehabilitation; WHO World Report on Disability 2011 (updated 2023 digital supplement)
  - updated:: 2026-06-13
