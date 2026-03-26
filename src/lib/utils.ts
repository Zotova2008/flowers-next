export function getBasePath(): string {
	return process.env.NODE_ENV === 'production' ? '/flowers-next' : '';
}

export function getImagePath(path: string): string {
	const basePath = getBasePath();
	// Убираем начальный / если есть
	const cleanPath = path.startsWith('/') ? path.slice(1) : path;
	return `${basePath}/${cleanPath}`;
}
