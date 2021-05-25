import { Result } from "../Result"

export interface InvalidPathArgument {
	status: 400
	type: "invalid path argument"
	pattern: string
	argument: { name: string; type: string; description: string }
	error?: string
}

export namespace InvalidPathArgument {
	export function is(value: any): value is InvalidPathArgument {
		return (
			typeof value == "object" &&
			value.status == 400 &&
			value.type == "invalid path argument" &&
			typeof value.pattern == "string" &&
			typeof value.argument == "object" &&
			typeof value.argument.name == "string" &&
			typeof value.argument.type == "string" &&
			typeof value.argument.description == "string" &&
			(value.error == undefined || typeof value.error == "string") &&
			Result.is(value)
		)
	}
	export function create(
		pattern: string,
		name: string,
		type: string,
		description: string,
		error?: string
	): InvalidPathArgument {
		return { status: 400, type: "invalid path argument", pattern, argument: { name, type, description }, error }
	}
}
