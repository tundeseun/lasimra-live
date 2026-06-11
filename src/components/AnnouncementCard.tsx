type Props = {
  day: string;
  month: string;
  title: string;
  description: string;
  action: string;
  index?: number;
};

export default function AnnouncementCard({ day, month, title, description, action, index = 0 }: Props) {
  return (
    <article className={`announcement-card animate-card animate-delay-${(index % 4) + 1}`}>
      <div className="announcement-date">
        <strong>{day}</strong>
        <span>{month}</span>
      </div>
      <div className="announcement-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="text-link">{action}</span>
      </div>
    </article>
  );
}
