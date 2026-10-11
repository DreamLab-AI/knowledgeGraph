In the SWEET ontology, the class named “Normalized” is a data state: a subclass of DataState whose members have undergone a process that the ontology calls “Normalization”.[^1]

Normalized is declared as a subclass of DataState, which is itself a subclass of SystemState labelled data state, and it carries a restriction that links it through the hadProcess property to that process class.[^1] The “Normalization” class is declared equivalent to “Normalize”, which is a subclass of DataReductionService, so the ontology files classify the process as a kind of data reduction.[^2]

Both files are Turtle class declarations and give structure only. The retained sources do not define the normalising transform, state which quantity is scaled, or connect this data state to normalised-difference indices such as the vegetation, burn or water indices, which use the word in a different sense. Both witnesses come from one origin, the SWEET ontology as mirrored by ESIP, so the page rests on a single ontology's own labelling and not on independent usage evidence.

[^1]: ESIP SWEET ontology (GitHub mirror), “stateDataProcessing.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: ESIP SWEET ontology (GitHub mirror), “reprDataServiceReduction.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceReduction.ttl

