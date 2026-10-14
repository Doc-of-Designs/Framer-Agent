export type StatItem = {
  value: string;
  label: string;
};

export type CaseStudySection =
  | { kind: "paragraphs"; eyebrow?: string; heading?: string; paragraphs: string[] }
  | { kind: "stats"; items: StatItem[] }
  | {
      kind: "bullets";
      eyebrow?: string;
      heading?: string;
      intro?: string;
      groups: { heading?: string; items: string[] }[];
    }
  | {
      kind: "flow";
      eyebrow?: string;
      heading: string;
      intro: string;
      items: { title: string; body: string }[];
    }
  | {
      kind: "iterations";
      heading?: string;
      items: { title: string; body: string; result: string }[];
    }
  | { kind: "beforeAfter"; heading?: string; beforeLabel: string; afterLabel: string }
  | { kind: "features"; eyebrow?: string; heading: string; intro: string; items: string[] }
  | { kind: "quote"; text: string }
  | { kind: "list"; heading: string; items: string[] };

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  cover: { gradient: string };
  tags: string[];
  meta: { role: string; duration: string; tools: string; team: string };
  sections: CaseStudySection[];
};
