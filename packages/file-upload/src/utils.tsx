import formatFileSize from 'filesize';
import type { FileRejection, FileWithPath } from 'react-dropzone';

export type FileStatus = 'none' | 'uploading' | 'success';
export type FileWithStatus = FileWithPath & {
	status?: FileStatus;
};

export const getFilesTotal = (files: { size: number }[]) => {
	const label = files.length > 1 ? 'files' : 'file';
	const size = files.reduce((a, { size }) => a + size, 0);
	return `${files.length} ${label} selected (${formatFileSize(size)})`;
};

export const fileTypeMapping = {
	'application/msword': 'word',
	'application/pdf': 'pdf',
	'application/rtf': 'rtf',
	'application/vnd.ms-excel': 'xlsx',
	'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xls',
	'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
		'doc',
	'application/zip': 'zip',
	'audio/*': 'Any audio file',
	'audio/mpeg': 'mpeg audio',
	'audio/wav': 'wav',
	'image/*': 'Any image',
	'image/gif': 'gif',
	'image/heic': 'heic',
	'image/jpeg': 'jpeg',
	'image/jpg': 'jpg',
	'image/png': 'png',
	'image/svg+xml': 'svg',
	'image/tiff': 'tiff',
	'image/webp': 'webp',
	'text/*': 'text',
	'text/csv': 'csv',
	'text/plain': 'txt',
	'text/rtf': 'rtf',
	'video/*': 'Anv video file',
	'video/mp4': 'mp4',
	'video/mpeg': 'mpeg video',
};

// Accepted MIME types
export type FileFormats = keyof typeof fileTypeMapping;

export const getAcceptedFilesSummary = (accept: FileFormats[] | undefined) => {
	if (!accept?.length) return;
	const symbols = accept.map((MIME) => fileTypeMapping[MIME]);
	return symbols.join(', ');
};

export const getFileRejectionErrorMessage = (
	{ file, errors }: FileRejection,
	formattedMaxFileSize: string,
	acceptedFilesSummary: string | undefined
) => {
	const { code, message } = errors[0];
	if (code === 'file-too-large') {
		return `${file.name} size exceeds ${formattedMaxFileSize}`;
	}

	if (code === 'file-invalid-type') {
		if (!acceptedFilesSummary)
			return `${file.name} must be an acceptable format`;
		return `${file.name} must be one of the following types: ${acceptedFilesSummary}`;
	}

	return `${file.name}: ${message}`;
};

export const getErrorSummary = (
	rejections: FileRejection[] | undefined,
	formattedMaxFileSize: string,
	maxFiles: number | undefined
) => {
	if (!rejections?.length) return;

	const firstError = rejections[0].errors[0];

	if (firstError.code === 'too-many-files') {
		return `You can not select more than ${maxFiles} files`;
	}

	if (rejections.length === 1) {
		if (firstError.code === 'file-too-large') {
			return `Each file must be smaller than ${formattedMaxFileSize}`;
		}

		if (firstError.code === 'file-invalid-type') {
			return `Some files are not of the correct format`;
		}
	}

	return 'There’s an issue with one or more of your files';
};
