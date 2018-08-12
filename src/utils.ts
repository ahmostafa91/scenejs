import { SCENE_ROLES, ObjectInterface } from "./consts";

export function isRole(args: any[]) {
	const length = args.length;
	let role: any = SCENE_ROLES;

	if (length === 0) {
		return false;
	}
	for (let i = 0; i < length; ++i) {
		if (!(args[i] in role)) {
			return false;
		}
		role = role[args[i]];

		if (role[args[i]] === true) {
			return false;
		}
		if (!role) {
			return false;
		}
	}
	return true;
}
export function isUndefined(value: any): value is undefined {
	return (typeof value === "undefined");
}
export function isObject(value: any): value is ObjectInterface<any> {
	return value && (typeof value === "object");
}
export function isArray(value: any): value is any[] {
	return Array.isArray(value);
}
export function isString(value: any): value is string {
	return typeof value === "string";
}
export function has(object: object, name: string) {
	return Object.prototype.hasOwnProperty.call(object, name);
}
export function splitUnit(text: string) {
	const v = `${text}`;
	const value = v.match(/([0-9]|\.|-|e-|e\+)+/g)[0];
	const unit = v.replace(value, "") || "";

	return {unit, value: parseFloat(value) || 0};
}
export function camelize(str: string) {
	return str.replace(/[\s-_]([a-z])/g, (all, letter) => letter.toUpperCase());
}
export function decamelize(str: string) {
	return str.replace(/([a-z])([A-Z])/g, (all, letter, letter2) => `${letter}-${letter2.toLowerCase()}`);
}
export function defineGetter(target: any, name: string, parent?: string) {
	target[camelize(`get ${name}`)] = function() {
		return (parent ? this[parent] : this)[name];
	};
}
export function defineSetter(target: any, name: string, parent?: string) {
	target[camelize(`set ${name}`)] = function(value: any) {
		parent ? (this[parent][name] = value) : (this[name] = value);
		return this;
	};
}
export function defineGetterSetter(target: any, name: string, parent?: string) {
	defineGetter(target, name, parent);
	defineSetter(target, name, parent);
}
