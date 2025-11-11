export type Feature = {
  id: string;
  title: string;
  status: FeatureStatus;
  date: string; // ISO like "2025-10-10" (shown with Intl)
  version?: string; // e.g. "v0.7.3"
  summary: string;
  details?: string[]; // bullet points
  tags?: string[]; // e.g. ["frontend", "infra"]
  links?: { label: string; href: string }[];
};

export type FeatureStatus = "shipped" | "in-progress" | "planned";
