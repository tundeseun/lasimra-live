import { Link } from 'react-router-dom';

type Props = {
  icon: string;
  title: string;
  description: string;
  href: string;
  index?: number;
};

export default function ServiceCard({ icon, title, description, href, index = 0 }: Props) {
  return (
    <article className={`service-card animate-card animate-delay-${(index % 4) + 1}`}>
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={href} className="text-link">Learn More</Link>
    </article>
  );
}
