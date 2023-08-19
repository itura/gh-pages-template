
export function Path(path: string): string {
  return process.env.NEXT_PUBLIC_LIFECYCLE === "prod"
    ? `/${process.env.NEXT_PUBLIC_APP_NAME}/${path}`
    : `/${path}`
}