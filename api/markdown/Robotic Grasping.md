public:: true

# Robotic Grasping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:robotic-grasping",
  "@type": "Page",
  "vc:slug": "robotic-grasping",
  "title": "Robotic Grasping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:robotic-grasping",
  "@type": "Class",
  "label": "Robotic Grasping",
  "definition": "Robotic Grasping is the subfield of robotics concerned with planning and executing stable, task-appropriate physical contact between a robotic end-effector and a target object. It integrates perception, grasp quality estimation, motion planning, and control to enable reliable object acquisition across varied geometries, materials, and environmental conditions.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:manipulation", "label": "Manipulation"}
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:end-effector", "label": "End-Effector"},
      {"@id": "urn:ngm:class:grasp-planning", "label": "Grasp Planning"},
      {"@id": "urn:ngm:class:robot-perception", "label": "Robot Perception"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:tactile-sensing", "label": "Tactile Sensing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dexterous-manipulation", "label": "Dexterous Manipulation"}
    ]
  },
  "quality": 0.85
}
```

- ### Definition
  - [[Robotic Grasping]] is the capability of a robot to reliably acquire objects using its [[End-Effector]], requiring [[Grasp Planning]] from perceptual data including [[Point Cloud]] representations and [[Tactile Sensing]] feedback to achieve stable, purposeful contact with varied target objects.

- ### Relationships
  - [[Robotic Grasping]] is a subclass of [[Manipulation]] and depends on [[End-Effector]] design for physical contact mechanics, [[Grasp Planning]] algorithms for configuration selection, and [[Robot Perception]] for object localisation and shape estimation. [[Point Cloud]] data from depth sensors provides the 3-D geometry needed for grasp synthesis. [[Tactile Sensing]] provides force distribution feedback during contact. [[Dexterous Manipulation]] extends robotic grasping to in-hand re-orientation tasks requiring multi-fingered control.

- ### Content
  - Robotic grasping research began in the 1970s with analytical grasp mechanics studies by Salisbury and Craig, who formalised the conditions for force-closure (a grasp that can resist arbitrary external wrenches). Early industrial robots used fixed fixtures to avoid the grasping problem entirely — parts were pre-positioned to known locations. The 1980s and 1990s saw development of parallel jaw grippers with force sensing and initial work on form-closure and friction cone analysis. The introduction of RGB-D cameras (Kinect, 2010) and convolutional neural networks catalysed a shift from analytical to data-driven grasping, with GQ-CNN (Grasp Quality-CNN, Mahler et al., 2017) establishing a benchmark approach for planar grasp prediction from depth images.
  - Modern robotic grasping systems follow a perception-planning-control pipeline. The perception module acquires a 3-D point cloud from depth cameras or stereo vision, segments the target object from clutter, and estimates its pose. The grasp planning module evaluates candidate grasp configurations — defined by contact points, approach vector, and gripper aperture — against quality metrics including grasp wrench space volume, antipodal score, or learned neural quality estimates. Motion planning finds a collision-free arm trajectory to the pre-grasp configuration. The controller executes the approach and closes the gripper with monitored force to confirm contact. Post-grasp verification uses force-torque sensors or tactile arrays to detect slip and trigger re-grasp if needed.
  - Reliable grasping of novel objects in unstructured environments is economically transformative. Bin-picking — extracting randomly oriented parts from bins — is the canonical industrial application, with companies including Mujin, Covariant, and Righthand Robotics deploying learning-based grasping systems in fulfilment warehouses. Agricultural harvesting robots must grasp fragile, variably shaped produce without bruising. Surgical robotics requires micron-level precision grasping under endoscopic vision. Household service robots face the most demanding scenario: grasping arbitrary consumer objects from cluttered countertops — the "open world" problem that remains a significant research frontier.
  - The 2024–2025 period has seen foundation models profoundly reshape robotic grasping. RT-2 (Google DeepMind, 2023) demonstrated that vision-language-action models pre-trained on internet-scale data could generalise grasping and manipulation to novel instructions and objects zero-shot. Diffusion-based action policies (Diffusion Policy, Chi et al., 2023) achieve state-of-the-art dexterity on multi-step manipulation tasks. Physical intelligence companies (Physical Intelligence / π, 2024) are building generalised robotic foundation models trained on diverse manipulation demonstrations. Dexterous hand hardware — including 16-DOF multi-fingered hands with embedded tactile sensor arrays — is becoming commercially available, enabling in-hand manipulation research that was previously confined to academic labs with bespoke hardware.
