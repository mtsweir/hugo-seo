// required before bootstrap
import 'lazysizes';
// native lazyload images in browsers that support lazy loading
import 'lazysizes/plugins/native-loading/ls.native-loading';	

import { 
	Alert,
	Button,
	Carousel,
	Collapse,
	Dropdown,
	Modal,
	Offcanvas,
	Popover,
	ScrollSpy,
	Tab,
	Toast,
	Tooltip 
} from 'bootstrap';

// lazysizes native lazy loading config
lazySizes.cfg.nativeLoading = {
	// automatically include the loading lazy property
	setLoadingAttribute: true,
	// if the browser supports lazy loading, lazysizes will not listen to user scrolling
	disableListeners: {
		scroll: true
	},
};
