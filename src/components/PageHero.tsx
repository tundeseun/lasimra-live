type Props = {
  label: string;
  title: string;
  text: string;
};

export default function PageHero({ label, title, text }: Props) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <span className="section-label">{label}</span>
        <h1 className="page-title">{title}</h1>
        <p className="page-intro">{text}</p>
      </div>
    </section>
  );
}
