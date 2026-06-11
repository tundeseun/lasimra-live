import PermitTemplate from './PermitTemplate';
import { towerPermit } from '../../data/siteContent';

export default function TowerMastPage() {
  return <PermitTemplate data={towerPermit} />;
}
