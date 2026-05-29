- ### Definition
  A Tracked Robot is a ground mobile robot that uses continuous loop tracks rather than wheels for locomotion, providing superior traction on uneven, soft, or obstacle-dense terrain such as rubble, mud, stairs, and gravel.

- ### Relationships
  Tracked Robots contrast with Wheeled Robots, which offer higher speed and energy efficiency on flat surfaces, and Legged Robots, which achieve greater mobility over extreme obstacles at the cost of mechanical complexity. They are specialised variants of Mobile Robots and are closely associated with Rescue Robots and Inspection Robots, the most common deployment domains. Tracked Robots use Motion Planning and SLAM to navigate complex environments, rely on Perception Systems for situational awareness, and require Path Planning to traverse cluttered terrain. Lidar is a typical hasPart sensor suite component. They are part of the broader Robotics domain.

- ### Content

  The track system in a tracked robot consists of a series of interlocked links forming a belt that is driven by a sprocket at one end and guided by idler wheels or rollers distributed along the vehicle's undercarriage. The large ground contact area, typically five to ten times that of equivalent wheeled systems, reduces ground pressure and prevents sinking on soft substrates. Grousers or cleats moulded into the track surface bite into loose material, providing the grip necessary for climbing steep inclines and crossing debris fields.

  Tracked robots are particularly prevalent in search-and-rescue operations following earthquakes, building collapses, or industrial accidents, where rubble fields and narrow passages require robust all-terrain mobility. Military reconnaissance robots such as iRobot's PackBot and the Talon system use tracked locomotion to traverse hostile terrain while keeping personnel safe. In the nuclear industry, tracked robots perform inspection and decontamination tasks in radioactive environments with high step heights and wet, slippery floors that would challenge wheeled alternatives.

  The primary engineering challenges include higher power consumption compared to wheeled systems—track friction losses can account for 20–40% of drive energy—and complexity of turning, which is accomplished by differential speed between the two tracks (skid steering) rather than dedicated steering geometry. Skid steering creates lateral scrubbing forces that increase wear and reduce turning precision on hard surfaces. Hybrid designs address this by adding passive or active flipper tracks at the front and rear to improve staircase climbing and self-righting capability.

  Navigation planning for tracked robots must account for the robot's inability to execute in-place rotation on loose or sloped terrain without risk of track disengagement, requiring planners to model track–surface interaction dynamics not typically needed for wheeled platforms.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z