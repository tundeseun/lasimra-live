import PermitTemplate from './PermitTemplate';
import { gasPermit } from '../../data/siteContent';

export default function GasRowPage() {
  return <PermitTemplate data={gasPermit} />;
}
