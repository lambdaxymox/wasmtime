(function() {var implementors = {};
implementors["clif_json"] = [{"text":"impl Serialize for SerInstData","synthetic":false,"types":[]},{"text":"impl Serialize for SerInst","synthetic":false,"types":[]},{"text":"impl Serialize for SerBlock","synthetic":false,"types":[]},{"text":"impl Serialize for SerDataFlowGraph","synthetic":false,"types":[]},{"text":"impl Serialize for SerSignature","synthetic":false,"types":[]},{"text":"impl Serialize for SerFunction","synthetic":false,"types":[]},{"text":"impl Serialize for SerObj","synthetic":false,"types":[]}];
implementors["cranelift_codegen"] = [{"text":"impl Serialize for StackMap","synthetic":false,"types":[]},{"text":"impl Serialize for Reloc","synthetic":false,"types":[]},{"text":"impl Serialize for AtomicRmwOp","synthetic":false,"types":[]},{"text":"impl Serialize for StackSlot","synthetic":false,"types":[]},{"text":"impl Serialize for JumpTable","synthetic":false,"types":[]},{"text":"impl Serialize for Signature","synthetic":false,"types":[]},{"text":"impl Serialize for AbiParam","synthetic":false,"types":[]},{"text":"impl Serialize for ArgumentExtension","synthetic":false,"types":[]},{"text":"impl Serialize for ArgumentPurpose","synthetic":false,"types":[]},{"text":"impl Serialize for V128Imm","synthetic":false,"types":[]},{"text":"impl Serialize for LibCall","synthetic":false,"types":[]},{"text":"impl Serialize for SourceLoc","synthetic":false,"types":[]},{"text":"impl Serialize for StackSlotKind","synthetic":false,"types":[]},{"text":"impl Serialize for StackSlotData","synthetic":false,"types":[]},{"text":"impl Serialize for StackLayoutInfo","synthetic":false,"types":[]},{"text":"impl Serialize for StackSlots","synthetic":false,"types":[]},{"text":"impl Serialize for TrapCode","synthetic":false,"types":[]},{"text":"impl Serialize for Type","synthetic":false,"types":[]},{"text":"impl Serialize for ValueLoc","synthetic":false,"types":[]},{"text":"impl Serialize for ArgumentLoc","synthetic":false,"types":[]},{"text":"impl Serialize for ValueLabel","synthetic":false,"types":[]},{"text":"impl Serialize for UnwindInfo","synthetic":false,"types":[]},{"text":"impl Serialize for UnwindInfo","synthetic":false,"types":[]},{"text":"impl Serialize for UnwindInfo","synthetic":false,"types":[]},{"text":"impl&lt;Reg&gt; Serialize for UnwindCode&lt;Reg&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Reg: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Reg&gt; Serialize for UnwindInfo&lt;Reg&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Reg: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for CallConv","synthetic":false,"types":[]},{"text":"impl Serialize for ValueLocRange","synthetic":false,"types":[]}];
implementors["cranelift_entity"] = [{"text":"impl&lt;K, V&gt; Serialize for SecondaryMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Clone + PartialEq + Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; Serialize for PrimaryMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: EntityRef,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Serialize,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["cranelift_wasm"] = [{"text":"impl Serialize for WasmType","synthetic":false,"types":[]},{"text":"impl Serialize for WasmFuncType","synthetic":false,"types":[]},{"text":"impl Serialize for FuncIndex","synthetic":false,"types":[]},{"text":"impl Serialize for TableIndex","synthetic":false,"types":[]},{"text":"impl Serialize for GlobalIndex","synthetic":false,"types":[]},{"text":"impl Serialize for MemoryIndex","synthetic":false,"types":[]},{"text":"impl Serialize for SignatureIndex","synthetic":false,"types":[]},{"text":"impl Serialize for DataIndex","synthetic":false,"types":[]},{"text":"impl Serialize for ElemIndex","synthetic":false,"types":[]},{"text":"impl Serialize for TypeIndex","synthetic":false,"types":[]},{"text":"impl Serialize for ModuleIndex","synthetic":false,"types":[]},{"text":"impl Serialize for InstanceIndex","synthetic":false,"types":[]},{"text":"impl Serialize for EventIndex","synthetic":false,"types":[]},{"text":"impl Serialize for EntityIndex","synthetic":false,"types":[]},{"text":"impl Serialize for EntityType","synthetic":false,"types":[]},{"text":"impl Serialize for Global","synthetic":false,"types":[]},{"text":"impl Serialize for GlobalInit","synthetic":false,"types":[]},{"text":"impl Serialize for Table","synthetic":false,"types":[]},{"text":"impl Serialize for TableElementType","synthetic":false,"types":[]},{"text":"impl Serialize for Memory","synthetic":false,"types":[]},{"text":"impl Serialize for Event","synthetic":false,"types":[]}];
implementors["peepmatic_automata"] = [{"text":"impl Serialize for State","synthetic":false,"types":[]},{"text":"impl&lt;TAlphabet, TState, TOutput&gt; Serialize for Automaton&lt;TAlphabet, TState, TOutput&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TAlphabet: Serialize + Clone + Eq + Hash + Ord,<br>&nbsp;&nbsp;&nbsp;&nbsp;TState: Serialize + Clone + Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;TOutput: Serialize + Output,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["peepmatic_runtime"] = [{"text":"impl Serialize for ConditionCode","synthetic":false,"types":[]},{"text":"impl Serialize for IntegerId","synthetic":false,"types":[]},{"text":"impl Serialize for IntegerInterner","synthetic":false,"types":[]},{"text":"impl Serialize for Else","synthetic":false,"types":[]},{"text":"impl Serialize for MatchOp","synthetic":false,"types":[]},{"text":"impl Serialize for LhsId","synthetic":false,"types":[]},{"text":"impl Serialize for RhsId","synthetic":false,"types":[]},{"text":"impl&lt;TOperator&gt; Serialize for Action&lt;TOperator&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TOperator: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;TOperator&gt; Serialize for PeepholeOptimizations&lt;TOperator&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TOperator: 'static + Copy + Debug + Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;TOperator: Serialize,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Serialize for BitWidth","synthetic":false,"types":[]},{"text":"impl Serialize for Kind","synthetic":false,"types":[]},{"text":"impl Serialize for Type","synthetic":false,"types":[]},{"text":"impl Serialize for UnquoteOperator","synthetic":false,"types":[]}];
implementors["peepmatic_test_operator"] = [{"text":"impl Serialize for TestOperator","synthetic":false,"types":[]}];
implementors["wasmtime_environ"] = [{"text":"impl Serialize for InstructionAddressMap","synthetic":false,"types":[]},{"text":"impl Serialize for FunctionAddressMap","synthetic":false,"types":[]},{"text":"impl Serialize for CompiledFunction","synthetic":false,"types":[]},{"text":"impl Serialize for Relocation","synthetic":false,"types":[]},{"text":"impl Serialize for RelocationTarget","synthetic":false,"types":[]},{"text":"impl Serialize for TrapInformation","synthetic":false,"types":[]},{"text":"impl Serialize for StackMapInformation","synthetic":false,"types":[]},{"text":"impl Serialize for TableElements","synthetic":false,"types":[]},{"text":"impl Serialize for MemoryStyle","synthetic":false,"types":[]},{"text":"impl Serialize for MemoryPlan","synthetic":false,"types":[]},{"text":"impl Serialize for TableStyle","synthetic":false,"types":[]},{"text":"impl Serialize for TablePlan","synthetic":false,"types":[]},{"text":"impl Serialize for ModuleType","synthetic":false,"types":[]},{"text":"impl Serialize for Module","synthetic":false,"types":[]},{"text":"impl Serialize for Instance","synthetic":false,"types":[]},{"text":"impl Serialize for DataInitializerLocation","synthetic":false,"types":[]}];
implementors["wasmtime_jit"] = [{"text":"impl Serialize for CompilationArtifacts","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()