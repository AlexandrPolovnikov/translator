export function writeToLocalStorage(key: string, data: any) {
	try {
		localStorage.setItem(key, JSON.stringify(data));
		window.dispatchEvent(new StorageEvent("storage", { key }));
		return "success";
	} catch (err) {
		return "error";
	}
}

export function readFromLocalStorage(key: string) {
	try {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	} catch (err) {
		return "error";
	}
}

export function deleteFromLocalStorage(key: string) {
	try {
		localStorage.removeItem(key);
		return "success";
	} catch (err) {
		return "error";
	}
}
