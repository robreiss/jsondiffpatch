import DiffContext from '../contexts/diff.js';
import PatchContext from '../contexts/patch.js';
import ReverseContext from '../contexts/reverse.js';
import type { Filter } from '../types.js';
export declare const collectChildrenDiffFilter: Filter<DiffContext>;
export declare const objectsDiffFilter: Filter<DiffContext>;
export declare const patchFilter: Filter<PatchContext>;
export declare const collectChildrenPatchFilter: Filter<PatchContext>;
export declare const reverseFilter: Filter<ReverseContext>;
export declare const collectChildrenReverseFilter: Filter<ReverseContext>;