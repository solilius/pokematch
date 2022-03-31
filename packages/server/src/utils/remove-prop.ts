export const removeProp = (obj: object, key: string) => JSON.parse(JSON.stringify(obj, (k, v) => (k === key) ? undefined : v))
