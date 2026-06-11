import PermitTemplate from './PermitTemplate';
import { fiberPermit } from '../../data/siteContent';

export default function FiberRowPage() {
  return <PermitTemplate data={fiberPermit} />;
}
