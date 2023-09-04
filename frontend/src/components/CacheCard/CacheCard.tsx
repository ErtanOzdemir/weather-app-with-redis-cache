import "./cacheCard.scss";

interface CacheCartProps {
  children: React.ReactNode;
}

export default function CacheCard({ children }: CacheCartProps) {
  return <div className='detail-container'>{children}</div>;
}
