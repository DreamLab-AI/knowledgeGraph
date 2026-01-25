- ### OntologyBlock
  id:: autonomous-vehicle-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0346
	- preferred-term:: Autonomous Vehicle
	- source-domain:: mv
	- status:: draft
- definition:: An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation).


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :AutonomousVehicle))

;; Annotations
(AnnotationAssertion rdfs:label :AutonomousVehicle "Autonomous Vehicle"@en)
(AnnotationAssertion rdfs:comment :AutonomousVehicle "An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation)."@en)

;; Semantic Relationships
(SubClassOf :AutonomousVehicle
  (ObjectSomeValuesFrom :relatedTo :PathPlanning))
(SubClassOf :AutonomousVehicle
  (ObjectSomeValuesFrom :relatedTo :SensorFusion))
(SubClassOf :AutonomousVehicle
  (ObjectSomeValuesFrom :relatedTo :SelfdrivingCar))
(SubClassOf :AutonomousVehicle
  (ObjectSomeValuesFrom :relatedTo :Adas))
(SubClassOf :AutonomousVehicle
  (ObjectSomeValuesFrom :relatedTo :PerceptionSystem))

;; Data Properties
(AnnotationAssertion dcterms:identifier :AutonomousVehicle "AI-0346"^^xsd:string)
(DataPropertyAssertion :isAITechnology :AutonomousVehicle "true"^^xsd:boolean)
```

## Core Characteristics

- **Sensor Fusion**: Integration of camera, lidar, radar, and GPS data
- **Perception System**: Object detection, tracking, and scene understanding
- **Localisation**: Precise positioning using SLAM and HD maps
- **Path Planning**: Route planning and trajectory optimisation
- **Motion Control**: Steering, acceleration, and braking control
- **Decision Making**: Real-time tactical and strategic driving decisions

## Relationships

- **Superclass**: AI Application Domain
- **Related**: Self-Driving Car, ADAS, Perception System, Path Planning
- **Utilises**: Computer Vision, Deep Learning, Reinforcement Learning, Sensor Fusion
- **Standards**: SAE J3016, ISO 26262, ISO 21448

## Technical Implementation

```python
import numpy as np
from typing import List, Dict, Tuple, Optional
from dataclasses import dataclass
from enum import Enum

class SAELevel(Enum):
    """SAE J3016 automation levels"""
    LEVEL_0 = 0  # No automation
    LEVEL_1 = 1  # Driver assistance
    LEVEL_2 = 2  # Partial automation
    LEVEL_3 = 3  # Conditional automation
    LEVEL_4 = 4  # High automation
    LEVEL_5 = 5  # Full automation

@dataclass
class VehicleState:
    """Current vehicle state"""
    position: Tuple[float, float, float]  # x, y, z
    velocity: Tuple[float, float, float]  # vx, vy, vz
    orientation: Tuple[float, float, float]  # roll, pitch, yaw
    steering_angle: float
    acceleration: float

@dataclass
class PerceivedObject:
    """Detected object in environment"""
    object_id: int
    object_type: str  # car, pedestrian, cyclist, obstacle
    position: Tuple[float, float, float]
    velocity: Tuple[float, float, float]
    dimensions: Tuple[float, float, float]  # length, width, height
    confidence: float
    track_history: List[Tuple[float, float]]

@dataclass
class DrivingCommand:
    """Low-level driving command"""
    steering: float  # -1.0 to 1.0
    throttle: float  # 0.0 to 1.0
    brake: float  # 0.0 to 1.0
    gear: str

class AutonomousVehicle:
    """
    Autonomous vehicle system with integrated perception, planning, and control.

    Reference: Paden, B., et al. (2016). "A survey of motion planning and
    control techniques for self-driving urban vehicles." IEEE Transactions
    on Intelligent Vehicles, 1(1), 33-55.
    """

    def __init__(self, automation_level: SAELevel):
        self.automation_level = automation_level
        self.vehicle_state = VehicleState(
            position=(0.0, 0.0, 0.0),
            velocity=(0.0, 0.0, 0.0),
            orientation=(0.0, 0.0, 0.0),
            steering_angle=0.0,
            acceleration=0.0
        )
        self.perceived_objects: List[PerceivedObject] = []

    def perceive_environment(
        self,
        sensor_data: Dict
    ) -> List[PerceivedObject]:
        """
        Perception pipeline: sensor fusion → object detection → tracking

        Args:
            sensor_data: Raw sensor inputs (camera, lidar, radar)

        Returns:
            List of perceived objects with tracking
        """
        # Sensor fusion
        fused_representation = self._fuse_sensors(sensor_data)

        # Object detection
        detected_objects = self._detect_objects(fused_representation)

        # Object tracking
        tracked_objects = self._track_objects(detected_objects)

        # Update perceived objects
        self.perceived_objects = tracked_objects

        return tracked_objects

    def localise(
        self,
        sensor_data: Dict,
        hd_map: Optional[Dict] = None
    ) -> VehicleState:
        """
        Precise localisation using SLAM and HD maps

        Args:
            sensor_data: GPS, IMU, wheel odometry
            hd_map: High-definition map for map matching

        Returns:
            Updated vehicle state with precise position
        """
        # GPS/GNSS position (coarse)
        gps_position = sensor_data.get('gps', {}).get('position', (0, 0, 0))

        # IMU orientation
        imu_orientation = sensor_data.get('imu', {}).get('orientation', (0, 0, 0))

        # Visual SLAM or lidar SLAM for precise localisation
        slam_correction = self._run_slam(sensor_data)

        # HD map matching if available
        if hd_map:
            map_matched_position = self._match_to_hd_map(
                gps_position,
                slam_correction,
                hd_map
            )
        else:
            map_matched_position = (
                gps_position[0] + slam_correction[0],
                gps_position[1] + slam_correction[1],
                gps_position[2] + slam_correction[2]
            )

        # Update vehicle state
        self.vehicle_state.position = map_matched_position
        self.vehicle_state.orientation = imu_orientation

        return self.vehicle_state

    def plan_path(
        self,
        destination: Tuple[float, float],
        hd_map: Dict
    ) -> List[Tuple[float, float]]:
        """
        Global path planning from current position to destination

        Args:
            destination: Goal position (x, y)
            hd_map: Road network and map information

        Returns:
            Sequence of waypoints forming planned route
        """
        # A* or Dijkstra for global route planning
        global_route = self._global_route_planning(
            self.vehicle_state.position[:2],
            destination,
            hd_map
        )

        # Local path planning considering dynamic obstacles
        local_path = self._local_path_planning(
            global_route,
            self.perceived_objects
        )

        return local_path

    def plan_trajectory(
        self,
        path: List[Tuple[float, float]],
        time_horizon: float = 5.0
    ) -> List[VehicleState]:
        """
        Trajectory planning with dynamics constraints

        Args:
            path: Planned geometric path
            time_horizon: Planning horizon in seconds

        Returns:
            Dynamically feasible trajectory
        """
        # Convert path to time-parametrised trajectory
        trajectory = self._path_to_trajectory(path, time_horizon)

        # Optimise trajectory considering:
        # - Vehicle dynamics
        # - Comfort (jerk minimisation)
        # - Safety (collision avoidance)
        # - Efficiency (fuel/energy)
        optimised_trajectory = self._optimise_trajectory(trajectory)

        return optimised_trajectory

    def make_driving_decision(
        self,
        perceived_objects: List[PerceivedObject],
        planned_trajectory: List[VehicleState]
    ) -> str:
        """
        High-level driving decision making

        Args:
            perceived_objects: Detected objects in environment
            planned_trajectory: Planned vehicle trajectory

        Returns:
            Driving decision (follow_lane, change_lane_left, change_lane_right,
                            stop, yield, park, etc.)
        """
        # Check for safety-critical situations
        if self._detect_collision_risk(perceived_objects, planned_trajectory):
            return "emergency_brake"

        # Traffic rule compliance
        traffic_signal_state = self._interpret_traffic_signals(perceived_objects)
        if traffic_signal_state == "red":
            return "stop_at_line"

        # Pedestrian and cyclist priority
        if self._pedestrian_crossing_detected(perceived_objects):
            return "yield_to_pedestrian"

        # Lane change decision
        if self._should_change_lane(perceived_objects, planned_trajectory):
            lane_direction = self._select_lane_change_direction(perceived_objects)
            return f"change_lane_{lane_direction}"

        # Default: follow planned trajectory
        return "follow_trajectory"

    def generate_control_command(
        self,
        target_state: VehicleState,
        decision: str
    ) -> DrivingCommand:
        """
        Low-level control command generation

        Args:
            target_state: Desired vehicle state
            decision: High-level driving decision

        Returns:
            Low-level steering, throttle, brake commands
        """
        # Model Predictive Control or PID control
        steering = self._compute_steering_control(target_state)
        throttle, brake = self._compute_longitudinal_control(target_state, decision)

        # Apply decision-specific modifications
        if decision == "emergency_brake":
            throttle = 0.0
            brake = 1.0
        elif decision == "stop_at_line":
            distance_to_stop = self._distance_to_stop_line()
            if distance_to_stop < 1.0:
                throttle = 0.0
                brake = 0.8

        command = DrivingCommand(
            steering=steering,
            throttle=throttle,
            brake=brake,
            gear="drive"
        )

        return command

    # Sensor fusion and perception methods
    def _fuse_sensors(self, sensor_data: Dict) -> np.ndarray:
        """Fuse camera, lidar, radar data"""
        # Kalman filter or particle filter fusion
        return np.random.randn(100, 100)

    def _detect_objects(self, fused_data: np.ndarray) -> List[PerceivedObject]:
        """Object detection using deep learning"""
        # YOLOv8, Faster R-CNN, or PointPillars for lidar
        return []

    def _track_objects(
        self,
        detected_objects: List[PerceivedObject]
    ) -> List[PerceivedObject]:
        """Multi-object tracking"""
        # Kalman filter, Hungarian algorithm, SORT/DeepSORT
        return detected_objects

    # Localisation methods
    def _run_slam(self, sensor_data: Dict) -> Tuple[float, float, float]:
        """Visual or lidar SLAM"""
        # ORB-SLAM3, LOAM, LIO-SAM
        return (0.0, 0.0, 0.0)

    def _match_to_hd_map(
        self,
        gps_pos: Tuple,
        slam_correction: Tuple,
        hd_map: Dict
    ) -> Tuple[float, float, float]:
        """Match position to HD map"""
        return gps_pos

    # Planning methods
    def _global_route_planning(
        self,
        start: Tuple[float, float],
        goal: Tuple[float, float],
        road_network: Dict
    ) -> List[Tuple[float, float]]:
        """A* path planning on road network"""
        return [start, goal]

    def _local_path_planning(
        self,
        global_route: List[Tuple[float, float]],
        obstacles: List[PerceivedObject]
    ) -> List[Tuple[float, float]]:
        """Dynamic obstacle avoidance"""
        # RRT*, hybrid A*, lattice planner
        return global_route

    def _path_to_trajectory(
        self,
        path: List[Tuple[float, float]],
        time_horizon: float
    ) -> List[VehicleState]:
        """Convert path to time-parametrised trajectory"""
        return []

    def _optimise_trajectory(
        self,
        trajectory: List[VehicleState]
    ) -> List[VehicleState]:
        """Trajectory optimisation"""
        # Sequential quadratic programming, CHOMP, TEB
        return trajectory

    # Decision making methods
    def _detect_collision_risk(
        self,
        objects: List[PerceivedObject],
        trajectory: List[VehicleState]
    ) -> bool:
        """Collision risk assessment"""
        return False

    def _interpret_traffic_signals(
        self,
        objects: List[PerceivedObject]
    ) -> str:
        """Traffic light and sign recognition"""
        return "green"

    def _pedestrian_crossing_detected(
        self,
        objects: List[PerceivedObject]
    ) -> bool:
        """Pedestrian crossing detection"""
        return False

    def _should_change_lane(
        self,
        objects: List[PerceivedObject],
        trajectory: List[VehicleState]
    ) -> bool:
        """Lane change decision logic"""
        return False

    def _select_lane_change_direction(
        self,
        objects: List[PerceivedObject]
    ) -> str:
        """Select left or right lane change"""
        return "left"

    # Control methods
    def _compute_steering_control(self, target: VehicleState) -> float:
        """Stanley or pure pursuit steering control"""
        return 0.0

    def _compute_longitudinal_control(
        self,
        target: VehicleState,
        decision: str
    ) -> Tuple[float, float]:
        """PID or MPC longitudinal control"""
        return (0.5, 0.0)  # throttle, brake

    def _distance_to_stop_line(self) -> float:
        """Distance to nearest stop line"""
        return 10.0


# Example usage
if __name__ == "__main__":
    av = AutonomousVehicle(automation_level=SAELevel.LEVEL_4)

    # Simulated sensor data
    sensor_data = {
        'camera': {'image': np.random.randn(1080, 1920, 3)},
        'lidar': {'points': np.random.randn(100000, 4)},
        'radar': {'detections': []},
        'gps': {'position': (37.7749, -122.4194, 50.0)},
        'imu': {'orientation': (0.0, 0.0, 1.57)}
    }

    # Perception
    objects = av.perceive_environment(sensor_data)
    print(f"Detected {len(objects)} objects")

    # Localisation
    state = av.localise(sensor_data)
    print(f"Vehicle position: {state.position}")

    # Planning
    destination = (37.7849, -122.4094)
    hd_map = {'roads': [], 'lanes': []}
    path = av.plan_path(destination, hd_map)
    trajectory = av.plan_trajectory(path)

    # Decision making
    decision = av.make_driving_decision(objects, trajectory)
    print(f"Driving decision: {decision}")

    # Control
    command = av.generate_control_command(trajectory[0], decision)
    print(f"Control: steering={command.steering:.2f}, throttle={command.throttle:.2f}")
```

## Applications

1. **Passenger Transportation**: Robotaxis, autonomous shuttles
2. **Freight and Logistics**: Autonomous trucks, delivery vehicles
3. **Public Transit**: Autonomous buses, metro systems
4. **Agricultural Automation**: Autonomous tractors, harvesters
5. **Mining and Construction**: Autonomous heavy machinery
6. **Last-Mile Delivery**: Autonomous delivery robots
7. **Parking Automation**: Valet parking systems
8. **Military and Defence**: Unmanned ground vehicles

## Key Literature

1. Paden, B., et al. (2016). "A survey of motion planning and control techniques for self-driving urban vehicles." *IEEE Transactions on Intelligent Vehicles*, 1(1), 33-55.

2. Badue, C., et al. (2021). "Self-driving cars: A survey." *Expert Systems with Applications*, 165, 113816.

3. SAE International (2021). "Taxonomy and Definitions for Terms Related to Driving Automation Systems for On-Road Motor Vehicles." SAE J3016.

4. Grigorescu, S., et al. (2020). "A survey of deep learning techniques for autonomous driving." *Journal of Field Robotics*, 37(3), 362-386.

## See Also

- [[Self-Driving Car]]
- [[ADAS]]
- [[Perception System]]
- [[Sensor Fusion]]
- [[Path Planning]]

## Metadata

- **Domain**: Autonomous Vehicles, Robotics
- **Maturity**: Commercial deployment (SAE Level 2-4)
- **Standards**: SAE J3016, ISO 26262, ISO 21448
	- maturity:: draft
	- owl:class:: mv:AutonomousVehicle
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: autonomous-vehicle-relationships
- ## About Autonomous Vehicle
	- An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation).

	- ### Visualising
		- http://owlgred.lumii.lv/online_visualization/4qge#
		- [[Some legacy Linked-JSON]]
          rdfs:comment "A general actor capable of autonomous or semi-autonomous behavior, including humans and AIs."

		- ### Navigating the AI Landscape

	- #### The NEXT Phase
		- **Fully Autonomous [[Agents]] and AI as lifelong companions**
			- AI operating without human supervision in various sectors. Value globally is arbitraged by these agents in near real-time. A renaissance of the idea of smart efficient markets?
			- Global access to hyperlocal models which match context and personal choices, through personal devices which need not be cloud connected.
			- AI understanding human emotions for psychological, contextual, and business support.
			- No idea... I have no idea...
		- **Resilience and collaborative management : Soon to Later**
			- Personalized AI systems optimizing individual health. Things like [DermAssist
		- Google Health](https://health.google/consumers/dermassist/) are just the start.
			- [Towards Conversational Diagnostic AI](https://arxiv.org/abs/2401.05654) is scoring higher than clinicians already.
			- Bill Gates [views](https://www.gatesnotes.com/The-Year-Ahead-2024?) AI as a transformative tool in healthcare, particularly for enhancing access to education and mental health services.
		- **Lifetime Support Structures: Now to Later**
		  background-color:: yellow
		- Advantage for employees who intersect with AI tooling, increasing engagement and productivity... but for the benefit of whom [[Social contract and jobs]]
		  background-color:: pink
		- Most time benefit from things "close to the metal" such as Dev Ops, coding, macros, light financial work, etc. Thing someone "looked up" then did.
		  background-color:: green
		  background-color:: green
		- AI's expanded role in telemedicine and remote patient monitoring.
		  background-color:: green

## Core Characteristics

- **Sensor Fusion**: Integration of camera, lidar, radar, and GPS data
- **Perception System**: Object detection, tracking, and scene understanding
- **Localisation**: Precise positioning using SLAM and HD maps
- **Path Planning**: Route planning and trajectory optimisation
- **Motion Control**: Steering, acceleration, and braking control
- **Decision Making**: Real-time tactical and strategic driving decisions

## Relationships

- **Superclass**: AI Application Domain
- **Related**: Self-Driving Car, ADAS, Perception System, Path Planning
- **Utilises**: Computer Vision, Deep Learning, Reinforcement Learning, Sensor Fusion
- **Standards**: SAE J3016, ISO 26262, ISO 21448

## Technical Implementation

```python
import numpy as np
from typing import List, Dict, Tuple, Optional
from dataclasses import dataclass
from enum import Enum

class SAELevel(Enum):
    """SAE J3016 automation levels"""
    LEVEL_0 = 0  # No automation
    LEVEL_1 = 1  # Driver assistance
    LEVEL_2 = 2  # Partial automation
    LEVEL_3 = 3  # Conditional automation
    LEVEL_4 = 4  # High automation
    LEVEL_5 = 5  # Full automation

@dataclass
class VehicleState:
    """Current vehicle state"""
    position: Tuple[float, float, float]  # x, y, z
    velocity: Tuple[float, float, float]  # vx, vy, vz
    orientation: Tuple[float, float, float]  # roll, pitch, yaw
    steering_angle: float
    acceleration: float

@dataclass
class PerceivedObject:
    """Detected object in environment"""
    object_id: int
    object_type: str  # car, pedestrian, cyclist, obstacle
    position: Tuple[float, float, float]
    velocity: Tuple[float, float, float]
    dimensions: Tuple[float, float, float]  # length, width, height
    confidence: float
    track_history: List[Tuple[float, float]]

@dataclass
class DrivingCommand:
    """Low-level driving command"""
    steering: float  # -1.0 to 1.0
    throttle: float  # 0.0 to 1.0
    brake: float  # 0.0 to 1.0
    gear: str

class AutonomousVehicle:
    """
    Autonomous vehicle system with integrated perception, planning, and control.

    Reference: Paden, B., et al. (2016). "A survey of motion planning and
    control techniques for self-driving urban vehicles." IEEE Transactions
    on Intelligent Vehicles, 1(1), 33-55.
    """

    def __init__(self, automation_level: SAELevel):
        self.automation_level = automation_level
        self.vehicle_state = VehicleState(
            position=(0.0, 0.0, 0.0),
            velocity=(0.0, 0.0, 0.0),
            orientation=(0.0, 0.0, 0.0),
            steering_angle=0.0,
            acceleration=0.0
        )
        self.perceived_objects: List[PerceivedObject] = []

    def perceive_environment(
        self,
        sensor_data: Dict
    ) -> List[PerceivedObject]:
        """
        Perception pipeline: sensor fusion → object detection → tracking

        Args:
            sensor_data: Raw sensor inputs (camera, lidar, radar)

        Returns:
            List of perceived objects with tracking
        """
        # Sensor fusion
        fused_representation = self._fuse_sensors(sensor_data)

        # Object detection
        detected_objects = self._detect_objects(fused_representation)

        # Object tracking
        tracked_objects = self._track_objects(detected_objects)

        # Update perceived objects
        self.perceived_objects = tracked_objects

        return tracked_objects

    def localise(
        self,
        sensor_data: Dict,
        hd_map: Optional[Dict] = None
    ) -> VehicleState:
        """
        Precise localisation using SLAM and HD maps

        Args:
            sensor_data: GPS, IMU, wheel odometry
            hd_map: High-definition map for map matching

        Returns:
            Updated vehicle state with precise position
        """
        # GPS/GNSS position (coarse)
        gps_position = sensor_data.get('gps', {}).get('position', (0, 0, 0))

        # IMU orientation
        imu_orientation = sensor_data.get('imu', {}).get('orientation', (0, 0, 0))

        # Visual SLAM or lidar SLAM for precise localisation
        slam_correction = self._run_slam(sensor_data)

        # HD map matching if available
        if hd_map:
            map_matched_position = self._match_to_hd_map(
                gps_position,
                slam_correction,
                hd_map
            )
        else:
            map_matched_position = (
                gps_position[0] + slam_correction[0],
                gps_position[1] + slam_correction[1],
                gps_position[2] + slam_correction[2]
            )

        # Update vehicle state
        self.vehicle_state.position = map_matched_position
        self.vehicle_state.orientation = imu_orientation

        return self.vehicle_state

    def plan_path(
        self,
        destination: Tuple[float, float],
        hd_map: Dict
    ) -> List[Tuple[float, float]]:
        """
        Global path planning from current position to destination

        Args:
            destination: Goal position (x, y)
            hd_map: Road network and map information

        Returns:
            Sequence of waypoints forming planned route
        """
        # A* or Dijkstra for global route planning
        global_route = self._global_route_planning(
            self.vehicle_state.position[:2],
            destination,
            hd_map
        )

        # Local path planning considering dynamic obstacles
        local_path = self._local_path_planning(
            global_route,
            self.perceived_objects
        )

        return local_path

    def plan_trajectory(
        self,
        path: List[Tuple[float, float]],
        time_horizon: float = 5.0
    ) -> List[VehicleState]:
        """
        Trajectory planning with dynamics constraints

        Args:
            path: Planned geometric path
            time_horizon: Planning horizon in seconds

        Returns:
            Dynamically feasible trajectory
        """
        # Convert path to time-parametrised trajectory
        trajectory = self._path_to_trajectory(path, time_horizon)

        # Optimise trajectory considering:
        # - Vehicle dynamics
        # - Comfort (jerk minimisation)
        # - Safety (collision avoidance)
        # - Efficiency (fuel/energy)
        optimised_trajectory = self._optimise_trajectory(trajectory)

        return optimised_trajectory

    def make_driving_decision(
        self,
        perceived_objects: List[PerceivedObject],
        planned_trajectory: List[VehicleState]
    ) -> str:
        """
        High-level driving decision making

        Args:
            perceived_objects: Detected objects in environment
            planned_trajectory: Planned vehicle trajectory

        Returns:
            Driving decision (follow_lane, change_lane_left, change_lane_right,
                            stop, yield, park, etc.)
        """
        # Check for safety-critical situations
        if self._detect_collision_risk(perceived_objects, planned_trajectory):
            return "emergency_brake"

        # Traffic rule compliance
        traffic_signal_state = self._interpret_traffic_signals(perceived_objects)
        if traffic_signal_state == "red":
            return "stop_at_line"

        # Pedestrian and cyclist priority
        if self._pedestrian_crossing_detected(perceived_objects):
            return "yield_to_pedestrian"

        # Lane change decision
        if self._should_change_lane(perceived_objects, planned_trajectory):
            lane_direction = self._select_lane_change_direction(perceived_objects)
            return f"change_lane_{lane_direction}"

        # Default: follow planned trajectory
        return "follow_trajectory"

    def generate_control_command(
        self,
        target_state: VehicleState,
        decision: str
    ) -> DrivingCommand:
        """
        Low-level control command generation

        Args:
            target_state: Desired vehicle state
            decision: High-level driving decision

        Returns:
            Low-level steering, throttle, brake commands
        """
        # Model Predictive Control or PID control
        steering = self._compute_steering_control(target_state)
        throttle, brake = self._compute_longitudinal_control(target_state, decision)

        # Apply decision-specific modifications
        if decision == "emergency_brake":
            throttle = 0.0
            brake = 1.0
        elif decision == "stop_at_line":
            distance_to_stop = self._distance_to_stop_line()
            if distance_to_stop < 1.0:
                throttle = 0.0
                brake = 0.8

        command = DrivingCommand(
            steering=steering,
            throttle=throttle,
            brake=brake,
            gear="drive"
        )

        return command

    # Sensor fusion and perception methods
    def _fuse_sensors(self, sensor_data: Dict) -> np.ndarray:
        """Fuse camera, lidar, radar data"""
        # Kalman filter or particle filter fusion
        return np.random.randn(100, 100)

    def _detect_objects(self, fused_data: np.ndarray) -> List[PerceivedObject]:
        """Object detection using deep learning"""
        # YOLOv8, Faster R-CNN, or PointPillars for lidar
        return []

    def _track_objects(
        self,
        detected_objects: List[PerceivedObject]
    ) -> List[PerceivedObject]:
        """Multi-object tracking"""
        # Kalman filter, Hungarian algorithm, SORT/DeepSORT
        return detected_objects

    # Localisation methods
    def _run_slam(self, sensor_data: Dict) -> Tuple[float, float, float]:
        """Visual or lidar SLAM"""
        # ORB-SLAM3, LOAM, LIO-SAM
        return (0.0, 0.0, 0.0)

    def _match_to_hd_map(
        self,
        gps_pos: Tuple,
        slam_correction: Tuple,
        hd_map: Dict
    ) -> Tuple[float, float, float]:
        """Match position to HD map"""
        return gps_pos

    # Planning methods
    def _global_route_planning(
        self,
        start: Tuple[float, float],
        goal: Tuple[float, float],
        road_network: Dict
    ) -> List[Tuple[float, float]]:
        """A* path planning on road network"""
        return [start, goal]

    def _local_path_planning(
        self,
        global_route: List[Tuple[float, float]],
        obstacles: List[PerceivedObject]
    ) -> List[Tuple[float, float]]:
        """Dynamic obstacle avoidance"""
        # RRT*, hybrid A*, lattice planner
        return global_route

    def _path_to_trajectory(
        self,
        path: List[Tuple[float, float]],
        time_horizon: float
    ) -> List[VehicleState]:
        """Convert path to time-parametrised trajectory"""
        return []

    def _optimise_trajectory(
        self,
        trajectory: List[VehicleState]
    ) -> List[VehicleState]:
        """Trajectory optimisation"""
        # Sequential quadratic programming, CHOMP, TEB
        return trajectory

    # Decision making methods
    def _detect_collision_risk(
        self,
        objects: List[PerceivedObject],
        trajectory: List[VehicleState]
    ) -> bool:
        """Collision risk assessment"""
        return False

    def _interpret_traffic_signals(
        self,
        objects: List[PerceivedObject]
    ) -> str:
        """Traffic light and sign recognition"""
        return "green"

    def _pedestrian_crossing_detected(
        self,
        objects: List[PerceivedObject]
    ) -> bool:
        """Pedestrian crossing detection"""
        return False

    def _should_change_lane(
        self,
        objects: List[PerceivedObject],
        trajectory: List[VehicleState]
    ) -> bool:
        """Lane change decision logic"""
        return False

    def _select_lane_change_direction(
        self,
        objects: List[PerceivedObject]
    ) -> str:
        """Select left or right lane change"""
        return "left"

    # Control methods
    def _compute_steering_control(self, target: VehicleState) -> float:
        """Stanley or pure pursuit steering control"""
        return 0.0

    def _compute_longitudinal_control(
        self,
        target: VehicleState,
        decision: str
    ) -> Tuple[float, float]:
        """PID or MPC longitudinal control"""
        return (0.5, 0.0)  # throttle, brake

    def _distance_to_stop_line(self) -> float:
        """Distance to nearest stop line"""
        return 10.0


# Example usage
if __name__ == "__main__":
    av = AutonomousVehicle(automation_level=SAELevel.LEVEL_4)

    # Simulated sensor data
    sensor_data = {
        'camera': {'image': np.random.randn(1080, 1920, 3)},
        'lidar': {'points': np.random.randn(100000, 4)},
        'radar': {'detections': []},
        'gps': {'position': (37.7749, -122.4194, 50.0)},
        'imu': {'orientation': (0.0, 0.0, 1.57)}
    }

    # Perception
    objects = av.perceive_environment(sensor_data)
    print(f"Detected {len(objects)} objects")

    # Localisation
    state = av.localise(sensor_data)
    print(f"Vehicle position: {state.position}")

    # Planning
    destination = (37.7849, -122.4094)
    hd_map = {'roads': [], 'lanes': []}
    path = av.plan_path(destination, hd_map)
    trajectory = av.plan_trajectory(path)

    # Decision making
    decision = av.make_driving_decision(objects, trajectory)
    print(f"Driving decision: {decision}")

    # Control
    command = av.generate_control_command(trajectory[0], decision)
    print(f"Control: steering={command.steering:.2f}, throttle={command.throttle:.2f}")
```

## Applications

1. **Passenger Transportation**: Robotaxis, autonomous shuttles
2. **Freight and Logistics**: Autonomous trucks, delivery vehicles
3. **Public Transit**: Autonomous buses, metro systems
4. **Agricultural Automation**: Autonomous tractors, harvesters
5. **Mining and Construction**: Autonomous heavy machinery
6. **Last-Mile Delivery**: Autonomous delivery robots
7. **Parking Automation**: Valet parking systems
8. **Military and Defence**: Unmanned ground vehicles

## Key Literature

1. Paden, B., et al. (2016). "A survey of motion planning and control techniques for self-driving urban vehicles." *IEEE Transactions on Intelligent Vehicles*, 1(1), 33-55.

2. Badue, C., et al. (2021). "Self-driving cars: A survey." *Expert Systems with Applications*, 165, 113816.

3. SAE International (2021). "Taxonomy and Definitions for Terms Related to Driving Automation Systems for On-Road Motor Vehicles." SAE J3016.

4. Grigorescu, S., et al. (2020). "A survey of deep learning techniques for autonomous driving." *Journal of Field Robotics*, 37(3), 362-386.

## See Also

- [[Self-Driving Car]]
- [[ADAS]]
- [[Perception System]]
- [[Sensor Fusion]]
- [[Path Planning]]

## Metadata

- **Domain**: Autonomous Vehicles, Robotics
- **Maturity**: Commercial deployment (SAE Level 2-4)
- **Standards**: SAE J3016, ISO 26262, ISO 21448
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Autonomous Vehicle
		  
		  **Term ID**: AI-0346
		  **Category**: Domain Applications → Autonomous Systems
		  **Status**: Stable
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation).
		  
		  ## Core Characteristics
		  
		  - **Sensor Fusion**: Integration of camera, lidar, radar, and GPS data
		  - **Perception System**: Object detection, tracking, and scene understanding
		  - **Localisation**: Precise positioning using SLAM and HD maps
		  - **Path Planning**: Route planning and trajectory optimisation
		  - **Motion Control**: Steering, acceleration, and braking control
		  - **Decision Making**: Real-time tactical and strategic driving decisions
		  
		  ## Relationships
		  
		  - **Superclass**: AI Application Domain
		  - **Related**: Self-Driving Car, ADAS, Perception System, Path Planning
		  - **Utilises**: Computer Vision, Deep Learning, Reinforcement Learning, Sensor Fusion
		  - **Standards**: SAE J3016, ISO 26262, ISO 21448
		  
		  ## Technical Implementation
		  
		  ```python
		  import numpy as np
		  from typing import List, Dict, Tuple, Optional
		  from dataclasses import dataclass
		  from enum import Enum
		  
		  class SAELevel(Enum):
		      """SAE J3016 automation levels"""
		      LEVEL_0 = 0  # No automation
		      LEVEL_1 = 1  # Driver assistance
		      LEVEL_2 = 2  # Partial automation
		      LEVEL_3 = 3  # Conditional automation
		      LEVEL_4 = 4  # High automation
		      LEVEL_5 = 5  # Full automation
		  
		  @dataclass
		  class VehicleState:
		      """Current vehicle state"""
		      position: Tuple[float, float, float]  # x, y, z
		      velocity: Tuple[float, float, float]  # vx, vy, vz
		      orientation: Tuple[float, float, float]  # roll, pitch, yaw
		      steering_angle: float
		      acceleration: float
		  
		  @dataclass
		  class PerceivedObject:
		      """Detected object in environment"""
		      object_id: int
		      object_type: str  # car, pedestrian, cyclist, obstacle
		      position: Tuple[float, float, float]
		      velocity: Tuple[float, float, float]
		      dimensions: Tuple[float, float, float]  # length, width, height
		      confidence: float
		      track_history: List[Tuple[float, float]]
		  
		  @dataclass
		  class DrivingCommand:
		      """Low-level driving command"""
		      steering: float  # -1.0 to 1.0
		      throttle: float  # 0.0 to 1.0
		      brake: float  # 0.0 to 1.0
		      gear: str
		  
		  class AutonomousVehicle:
		      """
		      Autonomous vehicle system with integrated perception, planning, and control.
		  
		      Reference: Paden, B., et al. (2016). "A survey of motion planning and
		      control techniques for self-driving urban vehicles." IEEE Transactions
		      on Intelligent Vehicles, 1(1), 33-55.
		      """
		  
		      def __init__(self, automation_level: SAELevel):
		          self.automation_level = automation_level
		          self.vehicle_state = VehicleState(
		              position=(0.0, 0.0, 0.0),
		              velocity=(0.0, 0.0, 0.0),
		              orientation=(0.0, 0.0, 0.0),
		              steering_angle=0.0,
		              acceleration=0.0
		          )
		          self.perceived_objects: List[PerceivedObject] = []
		  
		      def perceive_environment(
		          self,
		          sensor_data: Dict
		      ) -> List[PerceivedObject]:
		          """
		          Perception pipeline: sensor fusion → object detection → tracking
		  
		          Args:
		              sensor_data: Raw sensor inputs (camera, lidar, radar)
		  
		          Returns:
		              List of perceived objects with tracking
		          """
		          # Sensor fusion
		          fused_representation = self._fuse_sensors(sensor_data)
		  
		          # Object detection
		          detected_objects = self._detect_objects(fused_representation)
		  
		          # Object tracking
		          tracked_objects = self._track_objects(detected_objects)
		  
		          # Update perceived objects
		          self.perceived_objects = tracked_objects
		  
		          return tracked_objects
		  
		      def localise(
		          self,
		          sensor_data: Dict,
		          hd_map: Optional[Dict] = None
		      ) -> VehicleState:
		          """
		          Precise localisation using SLAM and HD maps
		  
		          Args:
		              sensor_data: GPS, IMU, wheel odometry
		              hd_map: High-definition map for map matching
		  
		          Returns:
		              Updated vehicle state with precise position
		          """
		          # GPS/GNSS position (coarse)
		          gps_position = sensor_data.get('gps', {}).get('position', (0, 0, 0))
		  
		          # IMU orientation
		          imu_orientation = sensor_data.get('imu', {}).get('orientation', (0, 0, 0))
		  
		          # Visual SLAM or lidar SLAM for precise localisation
		          slam_correction = self._run_slam(sensor_data)
		  
		          # HD map matching if available
		          if hd_map:
		              map_matched_position = self._match_to_hd_map(
		                  gps_position,
		                  slam_correction,
		                  hd_map
		              )
		          else:
		              map_matched_position = (
		                  gps_position[0] + slam_correction[0],
		                  gps_position[1] + slam_correction[1],
		                  gps_position[2] + slam_correction[2]
		              )
		  
		          # Update vehicle state
		          self.vehicle_state.position = map_matched_position
		          self.vehicle_state.orientation = imu_orientation
		  
		          return self.vehicle_state
		  
		      def plan_path(
		          self,
		          destination: Tuple[float, float],
		          hd_map: Dict
		      ) -> List[Tuple[float, float]]:
		          """
		          Global path planning from current position to destination
		  
		          Args:
		              destination: Goal position (x, y)
		              hd_map: Road network and map information
		  
		          Returns:
		              Sequence of waypoints forming planned route
		          """
		          # A* or Dijkstra for global route planning
		          global_route = self._global_route_planning(
		              self.vehicle_state.position[:2],
		              destination,
		              hd_map
		          )
		  
		          # Local path planning considering dynamic obstacles
		          local_path = self._local_path_planning(
		              global_route,
		              self.perceived_objects
		          )
		  
		          return local_path
		  
		      def plan_trajectory(
		          self,
		          path: List[Tuple[float, float]],
		          time_horizon: float = 5.0
		      ) -> List[VehicleState]:
		          """
		          Trajectory planning with dynamics constraints
		  
		          Args:
		              path: Planned geometric path
		              time_horizon: Planning horizon in seconds
		  
		          Returns:
		              Dynamically feasible trajectory
		          """
		          # Convert path to time-parametrised trajectory
		          trajectory = self._path_to_trajectory(path, time_horizon)
		  
		          # Optimise trajectory considering:
		          # - Vehicle dynamics
		          # - Comfort (jerk minimisation)
		          # - Safety (collision avoidance)
		          # - Efficiency (fuel/energy)
		          optimised_trajectory = self._optimise_trajectory(trajectory)
		  
		          return optimised_trajectory
		  
		      def make_driving_decision(
		          self,
		          perceived_objects: List[PerceivedObject],
		          planned_trajectory: List[VehicleState]
		      ) -> str:
		          """
		          High-level driving decision making
		  
		          Args:
		              perceived_objects: Detected objects in environment
		              planned_trajectory: Planned vehicle trajectory
		  
		          Returns:
		              Driving decision (follow_lane, change_lane_left, change_lane_right,
		                              stop, yield, park, etc.)
		          """
		          # Check for safety-critical situations
		          if self._detect_collision_risk(perceived_objects, planned_trajectory):
		              return "emergency_brake"
		  
		          # Traffic rule compliance
		          traffic_signal_state = self._interpret_traffic_signals(perceived_objects)
		          if traffic_signal_state == "red":
		              return "stop_at_line"
		  
		          # Pedestrian and cyclist priority
		          if self._pedestrian_crossing_detected(perceived_objects):
		              return "yield_to_pedestrian"
		  
		          # Lane change decision
		          if self._should_change_lane(perceived_objects, planned_trajectory):
		              lane_direction = self._select_lane_change_direction(perceived_objects)
		              return f"change_lane_{lane_direction}"
		  
		          # Default: follow planned trajectory
		          return "follow_trajectory"
		  
		      def generate_control_command(
		          self,
		          target_state: VehicleState,
		          decision: str
		      ) -> DrivingCommand:
		          """
		          Low-level control command generation
		  
		          Args:
		              target_state: Desired vehicle state
		              decision: High-level driving decision
		  
		          Returns:
		              Low-level steering, throttle, brake commands
		          """
		          # Model Predictive Control or PID control
		          steering = self._compute_steering_control(target_state)
		          throttle, brake = self._compute_longitudinal_control(target_state, decision)
		  
		          # Apply decision-specific modifications
		          if decision == "emergency_brake":
		              throttle = 0.0
		              brake = 1.0
		          elif decision == "stop_at_line":
		              distance_to_stop = self._distance_to_stop_line()
		              if distance_to_stop < 1.0:
		                  throttle = 0.0
		                  brake = 0.8
		  
		          command = DrivingCommand(
		              steering=steering,
		              throttle=throttle,
		              brake=brake,
		              gear="drive"
		          )
		  
		          return command
		  
		      # Sensor fusion and perception methods
		      def _fuse_sensors(self, sensor_data: Dict) -> np.ndarray:
		          """Fuse camera, lidar, radar data"""
		          # Kalman filter or particle filter fusion
		          return np.random.randn(100, 100)
		  
		      def _detect_objects(self, fused_data: np.ndarray) -> List[PerceivedObject]:
		          """Object detection using deep learning"""
		          # YOLOv8, Faster R-CNN, or PointPillars for lidar
		          return []
		  
		      def _track_objects(
		          self,
		          detected_objects: List[PerceivedObject]
		      ) -> List[PerceivedObject]:
		          """Multi-object tracking"""
		          # Kalman filter, Hungarian algorithm, SORT/DeepSORT
		          return detected_objects
		  
		      # Localisation methods
		      def _run_slam(self, sensor_data: Dict) -> Tuple[float, float, float]:
		          """Visual or lidar SLAM"""
		          # ORB-SLAM3, LOAM, LIO-SAM
		          return (0.0, 0.0, 0.0)
		  
		      def _match_to_hd_map(
		          self,
		          gps_pos: Tuple,
		          slam_correction: Tuple,
		          hd_map: Dict
		      ) -> Tuple[float, float, float]:
		          """Match position to HD map"""
		          return gps_pos
		  
		      # Planning methods
		      def _global_route_planning(
		          self,
		          start: Tuple[float, float],
		          goal: Tuple[float, float],
		          road_network: Dict
		      ) -> List[Tuple[float, float]]:
		          """A* path planning on road network"""
		          return [start, goal]
		  
		      def _local_path_planning(
		          self,
		          global_route: List[Tuple[float, float]],
		          obstacles: List[PerceivedObject]
		      ) -> List[Tuple[float, float]]:
		          """Dynamic obstacle avoidance"""
		          # RRT*, hybrid A*, lattice planner
		          return global_route
		  
		      def _path_to_trajectory(
		          self,
		          path: List[Tuple[float, float]],
		          time_horizon: float
		      ) -> List[VehicleState]:
		          """Convert path to time-parametrised trajectory"""
		          return []
		  
		      def _optimise_trajectory(
		          self,
		          trajectory: List[VehicleState]
		      ) -> List[VehicleState]:
		          """Trajectory optimisation"""
		          # Sequential quadratic programming, CHOMP, TEB
		          return trajectory
		  
		      # Decision making methods
		      def _detect_collision_risk(
		          self,
		          objects: List[PerceivedObject],
		          trajectory: List[VehicleState]
		      ) -> bool:
		          """Collision risk assessment"""
		          return False
		  
		      def _interpret_traffic_signals(
		          self,
		          objects: List[PerceivedObject]
		      ) -> str:
		          """Traffic light and sign recognition"""
		          return "green"
		  
		      def _pedestrian_crossing_detected(
		          self,
		          objects: List[PerceivedObject]
		      ) -> bool:
		          """Pedestrian crossing detection"""
		          return False
		  
		      def _should_change_lane(
		          self,
		          objects: List[PerceivedObject],
		          trajectory: List[VehicleState]
		      ) -> bool:
		          """Lane change decision logic"""
		          return False
		  
		      def _select_lane_change_direction(
		          self,
		          objects: List[PerceivedObject]
		      ) -> str:
		          """Select left or right lane change"""
		          return "left"
		  
		      # Control methods
		      def _compute_steering_control(self, target: VehicleState) -> float:
		          """Stanley or pure pursuit steering control"""
		          return 0.0
		  
		      def _compute_longitudinal_control(
		          self,
		          target: VehicleState,
		          decision: str
		      ) -> Tuple[float, float]:
		          """PID or MPC longitudinal control"""
		          return (0.5, 0.0)  # throttle, brake
		  
		      def _distance_to_stop_line(self) -> float:
		          """Distance to nearest stop line"""
		          return 10.0
		  
		  
		  # Example usage
		  if __name__ == "__main__":
		      av = AutonomousVehicle(automation_level=SAELevel.LEVEL_4)
		  
		      # Simulated sensor data
		      sensor_data = {
		          'camera': {'image': np.random.randn(1080, 1920, 3)},
		          'lidar': {'points': np.random.randn(100000, 4)},
		          'radar': {'detections': []},
		          'gps': {'position': (37.7749, -122.4194, 50.0)},
		          'imu': {'orientation': (0.0, 0.0, 1.57)}
		      }
		  
		      # Perception
		      objects = av.perceive_environment(sensor_data)
		      print(f"Detected {len(objects)} objects")
		  
		      # Localisation
		      state = av.localise(sensor_data)
		      print(f"Vehicle position: {state.position}")
		  
		      # Planning
		      destination = (37.7849, -122.4094)
		      hd_map = {'roads': [], 'lanes': []}
		      path = av.plan_path(destination, hd_map)
		      trajectory = av.plan_trajectory(path)
		  
		      # Decision making
		      decision = av.make_driving_decision(objects, trajectory)
		      print(f"Driving decision: {decision}")
		  
		      # Control
		      command = av.generate_control_command(trajectory[0], decision)
		      print(f"Control: steering={command.steering:.2f}, throttle={command.throttle:.2f}")
		  ```
		  
		  ## Applications
		  
		  1. **Passenger Transportation**: Robotaxis, autonomous shuttles
		  2. **Freight and Logistics**: Autonomous trucks, delivery vehicles
		  3. **Public Transit**: Autonomous buses, metro systems
		  4. **Agricultural Automation**: Autonomous tractors, harvesters
		  5. **Mining and Construction**: Autonomous heavy machinery
		  6. **Last-Mile Delivery**: Autonomous delivery robots
		  7. **Parking Automation**: Valet parking systems
		  8. **Military and Defence**: Unmanned ground vehicles
		  
		  ## Key Literature
		  
		  1. Paden, B., et al. (2016). "A survey of motion planning and control techniques for self-driving urban vehicles." *IEEE Transactions on Intelligent Vehicles*, 1(1), 33-55.
		  
		  2. Badue, C., et al. (2021). "Self-driving cars: A survey." *Expert Systems with Applications*, 165, 113816.
		  
		  3. SAE International (2021). "Taxonomy and Definitions for Terms Related to Driving Automation Systems for On-Road Motor Vehicles." SAE J3016.
		  
		  4. Grigorescu, S., et al. (2020). "A survey of deep learning techniques for autonomous driving." *Journal of Field Robotics*, 37(3), 362-386.

## 2024-2025: Waymo's Robotaxi Dominance and Tesla's Commercial Entry
id:: autonomous-vehicle-recent-developments

The period from 2024 through 2025 witnessed dramatic acceleration in autonomous vehicle deployment, with **Waymo** achieving dominant market position through fully driverless robotaxi services, whilst **Tesla** entered commercial robotaxi operations, marking the transition from experimental technology to mainstream transportation service.

### Waymo's Market Leadership

Waymo completed more than **5 million autonomous trips** in total, with **4 million paid rides in 2024 alone**, representing a **sevenfold increase** from November 2023's 700,000 trips. By June 2025, **Waymo One** operated **over 250,000 paid rides per week** across **Phoenix, Los Angeles, San Francisco, and Austin**, covering more than **500 square miles** of public roads in fully driverless operation.

In June 2024, Waymo dropped its digital velvet rope and opened its robotaxi service to all San Franciscans, removing the waitlist barrier. Expansion plans included commercial service launches in **Austin, Texas, and Atlanta** (rides available through the Uber app), with testing in **Miami** and planned public rides in **2026**.

### Tesla's Robotaxi Launch

On **22nd June 2025**, Tesla launched their commercial **Robotaxi** service to a small group of invited users in **Austin, Texas**, with rides priced at a flat rate of **$4.20** within a geofenced area. In **September 2025**, Tesla received regulatory approval to begin testing Robotaxi in **Nevada**.

At the **October 10, 2024, Robotaxi event**, Elon Musk unveiled the **$30,000 Tesla Cybercab** and the larger autonomous **Robovan**. On **21st October 2025**, Tesla released **FSD version 14.1.3** to the public, featuring adjusted speed profiles, removal of max speed limits, and new arrival options.

### Technical Approaches and SAE Levels

Waymo achieved **Level 4 autonomy** and successfully operated fully driverless robotaxis in multiple cities, demonstrating safety-first approach with comprehensive sensor fusion including lidar, radar, and cameras. Critics, including rival companies like Waymo and Cruise, argued that Tesla's **vision-only approach** cannot exceed **Level 2** capability. Tesla's Autopilot and **Full Self-Driving (Supervised)** remained categorised as Level 2 systems requiring continuous human supervision.

### Deployment Scale and Trajectory

The robotaxi market demonstrated clear bifurcation: Waymo's conservative, sensor-rich approach achieved unrestricted urban deployment across multiple cities, whilst Tesla's camera-based approach pursued rapid scaling through its existing vehicle fleet. By late 2024, autonomous vehicle technology transitioned from research prototype to revenue-generating transportation service, with Waymo processing millions of commercial trips quarterly.

		  ## See Also

		  - [[Self-Driving Car]]
		  - [[ADAS]]
		  - [[Perception System]]
		  - [[Sensor Fusion]]
		  - [[Path Planning]]

		  ## Metadata

		  - **Domain**: Autonomous Vehicles, Robotics
		  - **Maturity**: Commercial deployment (SAE Level 2-4)
		  - **Standards**: SAE J3016, ISO 26262, ISO 21448

		  ```

- public-access:: true
	- definition:: An Autonomous Vehicle is a self-driving vehicle capable of navigating and operating without human intervention, employing artificial intelligence for perception, localisation, path planning, motion control, and decision-making. Autonomous vehicles integrate sensor fusion, computer vision, deep learning, and control algorithms to achieve SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation).



## Academic Context

- Autonomous vehicles (AVs) are defined as vehicles capable of navigating and operating without human intervention, utilising artificial intelligence (AI) for perception, localisation, path planning, motion control, and decision-making.
  - The academic foundation of AVs lies in robotics, computer vision, sensor fusion, machine learning, and control theory.
  - Key developments include the integration of end-to-end AI models that combine perception, prediction, and planning into unified neural networks, improving adaptability to complex real-world driving scenarios.
  - Research has increasingly focused on synthetic data generation via generative AI to train AV systems on diverse and rare driving conditions, enhancing safety and robustness.

## Current Landscape (2025)

- Industry adoption of AVs remains progressive but cautious, with SAE automation levels ranging from Level 1 (driver assistance) to Level 5 (full automation) still under active development and testing.
  - Notable organisations include Waymo, Tesla, Aurora, and various automotive manufacturers advancing AV technologies.
  - Connected vehicle technology has become widespread, with approximately 75% of new vehicles equipped with connectivity features enabling vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication.
  - Technical capabilities now include advanced sensor fusion, deep learning for perception, and AI-driven decision-making; however, limitations persist in handling complex urban environments and unpredictable scenarios.
  - Regulatory frameworks are evolving, with agencies such as the US National Highway Traffic Safety Administration (NHTSA) prioritising safety, innovation, and commercial deployment, including augmented reality testing methods for AV performance.
  - Standards and frameworks continue to develop globally, emphasising safety, interoperability, and cybersecurity.

## Research & Literature

- Key academic papers and sources:
  - Bojarski, M., et al. (2016). End to End Learning for Self-Driving Cars. *arXiv preprint arXiv:1604.07316*. [https://arxiv.org/abs/1604.07316]
  - Chen, L., et al. (2023). Synthetic Data Generation for Autonomous Driving: A Survey. *IEEE Transactions on Intelligent Transportation Systems*, 24(5), 4567-4585. DOI: 10.1109/TITS.2022.3156789
  - Shalev-Shwartz, S., Shammah, S., & Shashua, A. (2016). Safe, Multi-Agent, Reinforcement Learning for Autonomous Driving. *arXiv preprint arXiv:1610.03295*. [https://arxiv.org/abs/1610.03295]
- Ongoing research directions include improving interpretability of end-to-end AI models, enhancing simulation environments with generative AI, and developing robust safety validation techniques.

## UK Context

- The UK has been a significant contributor to AV research and deployment, with government initiatives supporting testing and innovation.
  - North England hosts several innovation hubs, including Manchester’s Connected Autonomous Vehicle (CAV) Centre, Leeds’ Smart Mobility Lab, Newcastle’s Urban Observatory, and Sheffield’s Advanced Manufacturing Research Centre, all actively engaged in AV-related projects.
  - Regional case studies include trials of autonomous shuttles and delivery vehicles in Manchester and Newcastle, focusing on urban mobility and last-mile logistics.
  - UK regulations emphasise safety and public engagement, with frameworks aligning with international standards while addressing local infrastructure and societal needs.

## Future Directions

- Emerging trends:
  - Integration of generative AI for enhanced training and scenario simulation.
  - Expansion of autonomous vehicle deployment in controlled urban zones and motorway corridors.
  - Increased focus on cybersecurity and data privacy as connectivity grows.
- Anticipated challenges:
  - Navigating complex urban environments with unpredictable human behaviour.
  - Harmonising regulatory frameworks across jurisdictions.
  - Public acceptance and ethical considerations.
- Research priorities:
  - Developing transparent and verifiable AI models.
  - Enhancing multi-modal sensor fusion.
  - Addressing non-traditional vehicle designs and user needs, including accessibility.

## References

1. Bojarski, M., et al. (2016). End to End Learning for Self-Driving Cars. *arXiv preprint arXiv:1604.07316*. Available at: https://arxiv.org/abs/1604.07316  
2. Chen, L., et al. (2023). Synthetic Data Generation for Autonomous Driving: A Survey. *IEEE Transactions on Intelligent Transportation Systems*, 24(5), 4567-4585. DOI: 10.1109/TITS.2022.3156789  
3. Shalev-Shwartz, S., Shammah, S., & Shashua, A. (2016). Safe, Multi-Agent, Reinforcement Learning for Autonomous Driving. *arXiv preprint arXiv:1610.03295*. Available at: https://arxiv.org/abs/1610.03295  
4. World Economic Forum (2025). Autonomous Vehicles: Timeline and Roadmap Ahead. Available at: https://reports.weforum.org/docs/WEF_Autonomous_Vehicles_2025.pdf  
5. Crowell & Moring LLP (2025). Summer 2025 Autonomous Vehicle Developments. Available at: https://www.crowell.com/en/insights/client-alerts/summer-2025-autonomous-vehicle-developments  

*Autonomous vehicles may not yet have mastered the art of tea-making, but their journey from science fiction to everyday reality is well underway.*


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
