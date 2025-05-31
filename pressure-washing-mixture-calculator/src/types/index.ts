// filepath: pressure-washing-mixture-calculator/src/types/index.ts
export interface CalculationResult {
  recommendedMix: string;
  bleachVolume: string;
  waterVolume: string;
  surfactantAmount: string;
}

export type SurfaceType = "Concrete" | "Wood" | "Roof";
export type CleaningMethod = "Pressure Washing" | "Soft Washing";
export type DutyLevel = "Light-Duty" | "Medium-Duty" | "Heavy-Duty";