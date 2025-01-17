export interface Occupation {
  key: string;
  label: string;
  description: string;
  creditrating: number[];
  skillpoints: string;
  suggestedcontacts: string;
  skills: (string | (string | number)[])[];
  restriction: string;
  source: string;
  notes: string;
  groups: string[];
}

export interface Skill {
  key: string;
  label: string;
  base: number | string | null;
  description: string;
  pushexamples: string | null;
  pushconsequences: string | null;
  source: string;
  restriction: string;
  notes: string | null;
  groups: string[];
}

export interface Weapon {
  key: string;
  label: string;
  skill: string | string[];
  damage: string;
  range: string;
  uses: number;
  bullets: number | null;
  cost20s: number;
  costmodern: number;
  malfunction: number | null;
  era: string[];
}
