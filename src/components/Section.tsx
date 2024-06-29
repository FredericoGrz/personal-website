import React from "react";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`min-h-screen ${className}`}>
      {children}
    </section>
  );
}
