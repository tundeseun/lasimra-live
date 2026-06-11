import { Link } from 'react-router-dom';

type Props = {
  icon: string;
  title: string;
  description: string;
  href: string;
  index?: number;
};

export default function QuickLinkCard({ icon, title, description, href, index = 0 }: Props) {
  const isExternal = href.startsWith('http');
  const className = `quick-card animate-card animate-delay-${(index % 4) + 1}`;

  return isExternal ? (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <div className="quick-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="text-link">Open</span>
    </a>
  ) : (
    <Link className={className} to={href}>
      <div className="quick-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="text-link">Open</span>
    </Link>
  );
}
