type StatCardProps = {
  label: string;
  value: string;
  description: string;
};

export function StatCard({ label, value, description }: StatCardProps) {
  return (
    <article className="surface-panel p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{label}</p>
      <p className="mt-4 text-3xl font-semibold text-text sm:text-4xl">{value}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}
