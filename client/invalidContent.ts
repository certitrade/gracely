import { Error } from "../Error"
import { Response } from "../Response"

export function invalidContent(type: string, description: string, details?: any): Error & { content: { type: string, description: string, details?: any }, response: Response } {
	return Response.add({ status: 400, type: "invalid content", content: { type, description } })
}
export namespace invalidContent {
	export function is(value: any): value is { status: 400, type: "invalid content", content: { type: string, description: string, details?: any } } {
		return Error.is(value) && value.status == 400 && value.type == "invalid content"
	}
}
