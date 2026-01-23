- ### OntologyBlock
  id:: photogrammetry-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: 20073
	- source-domain:: mv
	- status:: draft
- public-access:: true
	- preferred-term:: Photogrammetry
	- definition:: A computational technique for reconstructing 3D geometry from overlapping photographic images through mathematical analysis of correspondences, camera poses, and geometric transformations to extract spatial information from 2D image data.
	- maturity:: mature
	- source:: [[Siemens + ACM]]
	- owl:class:: mv:Photogrammetry
	- owl:physicality:: VirtualEntity
	- owl:role:: Process
	- owl:inferred-class:: mv:VirtualProcess
	- owl:functional-syntax:: true
	- belongsToDomain:: [[CreativeMediaDomain]], [[RealityCaptureDomain]]
	- implementedInLayer:: [[Application Layer]]
	- #### Relationships
	  id:: photogrammetry-relationships
		- is-dependency-of:: [[Tourism Metaverse]], [[Cultural Heritage XR Experience]]
		- has-part:: [[Feature Detection]], [[Camera Calibration]], [[Image Matching]], [[Triangulation]], [[Point Cloud Generation]], [[Mesh Reconstruction]]
		- is-part-of:: [[3D Reconstruction Pipeline]], [[Reality Capture Workflow]]
		- requires:: [[Camera]], [[Multiple Images]], [[Overlapping Coverage]], [[Image Processing Software]], [[Computational Resources]]
		- depends-on:: [[Computer Vision Algorithms]], [[Structure from Motion]], [[Multi-View Geometry]], [[Camera Models]]
		- enables:: [[3D Model Creation]], [[Digital Twin Construction]], [[Terrain Mapping]], [[Asset Digitization]], [[Spatial Measurement]]
	- #### OWL Axioms
	  id:: photogrammetry-owl-axioms
	  collapsed:: true
		- ```clojure
		  Declaration(Class(mv:Photogrammetry))

		  # Classification along two primary dimensions
		  SubClassOf(mv:Photogrammetry mv:VirtualEntity)
		  SubClassOf(mv:Photogrammetry mv:Process)

		  # Domain-specific constraints
		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:belongsToDomain mv:CreativeMediaDomain)
		  )

		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:belongsToDomain mv:RealityCaptureDomain)
		  )

		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:implementedInLayer mv:ApplicationLayer)
		  )

		  # Process input requirements
		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:requires mv:Camera)
		  )

		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:requires mv:MultipleImages)
		  )

		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:requires mv:OverlappingCoverage)
		  )

		  # Core sub-processes
		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:hasPart mv:FeatureDetection)
		  )

		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:hasPart mv:CameraCalibration)
		  )

		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:hasPart mv:ImageMatching)
		  )

		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:hasPart mv:Triangulation)
		  )

		  # Process outputs
		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:enables mv:3DModelCreation)
		  )

		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:enables mv:DigitalTwinConstruction)
		  )

		  # Dependency constraints
		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:dependsOn mv:ComputerVisionAlgorithms)
		  )

		  SubClassOf(mv:Photogrammetry
		    ObjectSomeValuesFrom(mv:dependsOn mv:StructureFromMotion)
		  )

  # Property characteristics
  AsymmetricObjectProperty(dt:isdependencyof)

  # Property characteristics
  TransitiveObjectProperty(dt:ispartof)

  # Property characteristics
  AsymmetricObjectProperty(dt:requires)

  # Property characteristics
  AsymmetricObjectProperty(dt:dependson)

  # Property characteristics
  AsymmetricObjectProperty(dt:enables)
```
- ## About Photogrammetry
  id:: photogrammetry-about
	- Photogrammetry is a computational process that extracts three-dimensional information from two-dimensional photographic images. By analyzing overlapping photographs taken from multiple viewpoints, photogrammetry algorithms identify common features, calculate camera positions and orientations, and use triangulation to reconstruct 3D geometry. This technique has evolved from manual measurement processes to highly automated computer vision workflows powered by Structure from Motion (SfM) and Multi-View Stereo (MVS) algorithms.
	- In metaverse applications, photogrammetry serves as a critical reality capture technology enabling the digitization of real-world objects, environments, and scenes into 3D assets. The process transforms physical reality into virtual representations, supporting use cases ranging from cultural heritage preservation to virtual production, architectural documentation to digital twin creation. Modern photogrammetry pipelines can process hundreds or thousands of images to generate highly detailed textured 3D models suitable for real-time rendering in metaverse platforms.
	- ### Key Characteristics
	  id:: photogrammetry-characteristics
		- **Image-Based Reconstruction**: Derives 3D geometry solely from photographic images without active depth sensing
		- **Multi-View Processing**: Requires overlapping images from multiple viewpoints (typically 60-80% overlap)
		- **Automated Workflow**: Modern implementations use computer vision algorithms to automate feature matching and reconstruction
		- **Scalable Capture**: Applicable from small objects (centimeter scale) to landscapes (kilometer scale)
		- **Photorealistic Texturing**: Generates high-quality texture maps directly from source photographs
		- **Accuracy Dependent**: Quality depends on image resolution, overlap, lighting conditions, and camera calibration
		- **Computationally Intensive**: Processing large image sets requires significant computational resources
		- **Non-Invasive**: Captures objects without physical contact or specialized equipment beyond cameras
	- ### Technical Components
	  id:: photogrammetry-components
		- [[Feature Detection]] - Algorithms that identify distinctive points, edges, and patterns in images for matching
		- [[Camera Calibration]] - Process of determining intrinsic camera parameters (focal length, distortion) and extrinsic parameters (position, orientation)
		- [[Image Matching]] - Correspondence identification across multiple images to find common features
		- [[Triangulation]] - Geometric calculation of 3D point positions from 2D image correspondences
		- [[Point Cloud Generation]] - Creation of dense 3D point sets representing object surfaces
		- [[Mesh Reconstruction]] - Conversion of point clouds into continuous surface meshes
		- [[Structure from Motion (SfM)]] - Algorithm for simultaneously recovering camera poses and 3D structure
		- [[Multi-View Stereo (MVS)]] - Dense reconstruction technique using calibrated images
		- [[Texture Mapping]] - Projection of image colors onto 3D geometry to create realistic appearance
		- [[Bundle Adjustment]] - Optimization process refining camera parameters and 3D points simultaneously
	- ### Functional Capabilities
	  id:: photogrammetry-capabilities
		- **3D Model Creation**: Generates textured 3D models from photographs for use in metaverse environments
		- **Digital Twin Construction**: Creates accurate digital replicas of physical objects and spaces
		- **Terrain Mapping**: Reconstructs large-scale geographic surfaces for virtual environments
		- **Asset Digitization**: Converts physical objects into virtual assets for metaverse applications
		- **Spatial Measurement**: Enables accurate dimensional measurement from photographic data
		- **Cultural Heritage Preservation**: Documents historical artifacts and sites in 3D digital form
		- **Virtual Production**: Provides photorealistic 3D environments for film and game production
		- **Architectural Documentation**: Records existing buildings and structures for renovation or archival purposes
	- ### Use Cases
	  id:: photogrammetry-use-cases
		- **Virtual Museum Exhibits**: Digitizing historical artifacts and artwork for interactive virtual gallery experiences
		- **Architectural Visualization**: Capturing existing buildings to create accurate virtual replicas for renovation planning or real estate visualization
		- **Game Asset Creation**: Scanning real-world objects and environments to generate photorealistic game assets
		- **Film Virtual Production**: Creating detailed 3D environments for virtual set extensions and background replacement
		- **Archaeological Documentation**: Recording excavation sites and artifacts with spatial precision for research and preservation
		- **Industrial Inspection**: Generating 3D models of equipment and facilities for remote inspection and digital twin applications
		- **Urban Planning**: Reconstructing city blocks and neighborhoods to support metaverse urban environments
		- **Natural Environment Capture**: Scanning landscapes, forests, and geological features for virtual nature experiences
		- **Product Visualization**: Digitizing consumer products for e-commerce 3D viewers and AR applications
		- **Cultural Site Preservation**: Documenting endangered heritage sites before deterioration or destruction
	- ### Standards & References
	  id:: photogrammetry-standards
		- [[Siemens Industrial Metaverse]] - Enterprise applications of photogrammetry in digital twin contexts
		- [[ISO/IEC 17820]] - International standard for metaverse framework including digital asset creation
		- [[ACM Metaverse Glossary]] - Academic definitions of reality capture and 3D reconstruction techniques
		- [[ASPRS Photogrammetry Standards]] - American Society for Photogrammetry and Remote Sensing technical standards
		- [[OpenDroneMap]] - Open-source photogrammetry toolkit for aerial reconstruction
		- [[COLMAP]] - Academic reference implementation for Structure from Motion and Multi-View Stereo
		- [[Reality Capture Software Standards]] - Industry practices for photogrammetric software workflows
		- [[ISO 19115]] - Geographic information metadata standards applicable to photogrammetric products
		- [[USGS Digital Elevation Model Standards]] - Standards for terrain reconstruction using photogrammetry
		- [[Cultural Heritage Imaging]] - Best practices for photogrammetric documentation of heritage objects
	- ### Related Concepts
	  id:: photogrammetry-related
		- [[3D Scanning]] - Alternative approach using active depth sensors (LiDAR, structured light)
		- [[LiDAR]] - Active laser-based 3D capture technology complementary to photogrammetry
		- [[Structure from Motion]] - Core algorithm enabling automated photogrammetric reconstruction
		- [[Point Cloud]] - Intermediate 3D representation produced during photogrammetry pipeline
		- [[3D Mesh]] - Final surface representation generated from photogrammetric point clouds
		- [[Texture Mapping]] - Process of applying photographic color to 3D geometry
		- [[Camera Calibration]] - Essential prerequisite for accurate photogrammetric reconstruction
		- [[Reality Capture]] - Broader category encompassing photogrammetry and other 3D digitization methods
		- [[Digital Twin]] - Virtual replica often created using photogrammetry techniques
		- [[VirtualProcess]] - Inferred ontology class for computational workflows and transformations
## Academic Context

- Photogrammetry is the science and technology of extracting accurate spatial and geometric information from photographic images, enabling the reconstruction of three-dimensional (3D) models from two-dimensional (2D) image data.
  - It relies on mathematical analysis of correspondences between overlapping images, camera positions (poses), and geometric transformations.
  - The academic foundations lie in photogrammetric principles developed over centuries, integrating computer vision, geometry, and remote sensing.
  - Key developments include metric photogrammetry for engineering and mapping, and advancements in automated image processing algorithms.

## Current Landscape (2025)

- Photogrammetry is widely adopted across industries for detailed 3D modelling, topographic mapping, and spatial analysis.
  - Notable implementations include:
    - Aerial photogrammetry using drones for rapid coverage of large areas, especially in agriculture, construction, and disaster response.
    - Integration with 3D scanning technologies in film, gaming, and cultural heritage for photorealistic asset creation.
  - UK and North England examples:
    - Universities and tech hubs in Manchester and Leeds contribute to photogrammetric research and applications in urban planning and heritage conservation.
    - Sheffield’s engineering sector utilises photogrammetry for structural monitoring and manufacturing quality control.
    - Newcastle employs photogrammetry in environmental monitoring and forestry management.
- Technical capabilities:
  - Exceptional detail capture with realistic texture mapping.
  - Cost-effective compared to LiDAR, requiring only cameras and processing software.
  - Limitations include


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
