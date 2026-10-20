import { initSidebar } from './modules/layouts';
import { loadTooltip, modeWatcher } from './modules/components';

// the landing page has no top bar or back-to-top button, so skip initTopbar() and basic()
initSidebar();
modeWatcher();
loadTooltip();
