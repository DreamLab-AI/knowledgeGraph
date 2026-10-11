A processed data state is the condition of data that have been transformed after acquisition, as distinct from the raw instrument record.[^1][^2]

NASA defines Level 0 as reconstructed, unprocessed instrument and payload data at full resolution, and describes Level 1B data as Level 1A data that have been processed to instrument units.[^1] Level 2 then holds derived geophysical variables at the same resolution and location as the Level 1 source data.[^1] Each step from Level 0 upward therefore adds processing, and a product can be called processed at any of them.

SWEET declares Processed as a subclass of its DataState class and gives no prose definition.[^2] That placement makes the term a general label rather than a particular stage, and it is silent about which operations count.[^2]

No retained source establishes a rule that maps this state onto the NASA levels, nor a finer taxonomy of states beneath it. A reader who needs to know what was done to a product has to consult its level, its provenance and its processing history rather than the label alone.

[^1]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels
[^2]: ESIP Federation (SWEET), “stateDataProcessing.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl

