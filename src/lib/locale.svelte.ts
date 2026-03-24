export type Locale = 'en' | 'zh' | 'de';

let _current = $state<Locale>('en');

export const locale = {
	get current() { return _current; },
	init(value: Locale) { _current = value; },
	set(value: Locale) { _current = value; },
	toggle() { _current = _current === 'en' ? 'zh' : 'en'; }
};
