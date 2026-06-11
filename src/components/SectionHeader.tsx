type Props = {
  label: string;
  title: string;
  text: string;
};

export default function SectionHeader({ label, title, text }: Props) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
