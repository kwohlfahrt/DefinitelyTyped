import { Extent } from './extent';
import { Size } from './size';

export type Type = (p0: number | undefined, p1: number, p2: Size, p3?: boolean) => number;
export function createMinMaxResolution(
    maxResolution: number,
    minResolution: number,
    opt_smooth?: boolean,
    opt_maxExtent?: Extent,
): Type;
export function createSnapToPower(
    power: number,
    maxResolution: number,
    opt_minResolution?: number,
    opt_smooth?: boolean,
    opt_maxExtent?: Extent,
): Type;
export function createSnapToResolutions(resolutions: number[], opt_smooth?: boolean, opt_maxExtent?: Extent): Type;
